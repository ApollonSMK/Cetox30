'use server';

import { z } from 'zod';
import Stripe from 'stripe';

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
    console.error('Stripe Price ID not configured.');
    return { error: 'A configuração de pagamento está incompleta.' };
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (!appUrl) {
    console.error('NEXT_PUBLIC_APP_URL not configured.');
    return { error: 'A configuração da aplicação está incompleta.' };
  }

  const successUrl = `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${appUrl}`;

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

    if (!session.url) {
      return { error: 'Não foi possível criar a sessão de pagamento.' };
    }

    return { url: session.url };
  } catch (error) {
    console.error('Erro ao criar sessão de checkout no Stripe:', error);
    return { error: 'Não foi possível conectar ao nosso sistema de pagamento.' };
  }
}
