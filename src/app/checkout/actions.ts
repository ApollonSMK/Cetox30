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
  
  const origin = headers().get('origin');
  if (!origin) {
    return { error: 'Não foi possível determinar a origem da aplicação.' };
  }


  const { name, email } = validatedFields.data;
  const priceId = process.env.STRIPE_PRICE_ID;
  
  if (!priceId) {
    console.error('Stripe Price ID not configured.');
    return { error: 'A configuração de pagamento está incompleta.' };
  }

  const successUrl = `${origin}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/checkout`;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_creation: 'if_required',
      customer_email: email,
      metadata: {
        customer_name: name,
      },
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
