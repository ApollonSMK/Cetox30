'use server';

import { z } from 'zod';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const checkoutSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});

export async function createCheckoutSession(
  values: z.infer<typeof checkoutSchema>
) {
  const validatedFields = checkoutSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Dados inválidos.',
    };
  }

  const { email } = validatedFields.data;
  const priceId = process.env.STRIPE_PRICE_ID;
  
  if (!priceId) {
    throw new Error('O ID do preço do Stripe não está configurado nas variáveis de ambiente.');
  }

  const origin = headers().get('origin');
  const successUrl = `${origin}/?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/checkout`;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'multibanco'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return { url: session.url };
  } catch (error) {
    console.error('Erro ao criar sessão de checkout no Stripe:', error);
    throw new Error('Não foi possível criar a sessão de pagamento.');
  }
}
