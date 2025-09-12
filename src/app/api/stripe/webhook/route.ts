import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeEmail from '@/emails/welcome';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20',
});

const resend = new Resend(process.env.RESEND_API_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`❌ Error message: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    if (session.payment_status === 'paid') {
      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name || '';

      if (!customerEmail) {
        console.error('Email do cliente não encontrado na sessão de checkout.');
        return NextResponse.json({ error: 'Email do cliente não encontrado.' }, { status: 400 });
      }

      try {
        await resend.emails.send({
          from: 'Plano Cetox30 <nao-responda@planocetox.com>',
          to: customerEmail,
          subject: 'Bem-vindo(a) ao Plano Cetox30!',
          react: WelcomeEmail({
            customerName: customerName,
            downloadUrl: process.env.DOWNLOAD_URL as string,
          }),
        });

        console.log(`E-mail de boas-vindas enviado para ${customerEmail}`);
      } catch (error) {
        console.error('Erro ao enviar e-mail de boas-vindas:', error);
        return NextResponse.json({ error: 'Erro ao enviar e-mail.' }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
