import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import { Book, UtensilsCrossed, KeyRound } from 'lucide-react';
import * as React from 'react';

interface WelcomeEmailProps {
  customerName: string;
  downloadUrls: {
    plano: string;
    sobremesas: string;
    segredos: string;
  };
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://planocetox.com';

export const WelcomeEmail = ({ customerName, downloadUrls }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>A sua transformação começa agora!</Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: '#E63946',
              secondary: '#457B9D',
              accent: '#2a9d8f',
              background: '#f8f9fa',
              foreground: '#1D3557',
              'card-bg': '#ffffff',
            },
            fontFamily: {
              sans: ['Poppins', 'sans-serif'],
            },
          },
        },
      }}
    >
      <Body className="bg-background font-sans">
        <Container className="mx-auto my-10 max-w-xl rounded-lg bg-card-bg p-8 shadow-sm">
          <Section className="text-center">
            <Heading as="h1" className="mt-2 text-2xl font-bold text-foreground">
              🎉 A sua transformação começa agora!
            </Heading>
          </Section>
          
          <Section className="mt-8">
            <Text className="text-base leading-relaxed text-gray-700">
              Olá {customerName || 'guerreiro(a) da saúde'},
            </Text>
            <Text className="text-base leading-relaxed text-gray-700">
              É com grande entusiasmo que lhe damos as boas-vindas ao <strong>CETOX30</strong>!
            </Text>
            <Text className="text-base leading-relaxed text-gray-700">
              Estamos muito felizes por tê-lo(a) connosco nesta jornada para mais saúde, energia e bem-estar.
              O seu acesso ao conteúdo está logo abaixo:
            </Text>
          </Section>

          {/* Main Content */}
          <Section className="my-6 rounded-lg border border-solid border-gray-200 bg-white p-6 text-center">
            <Book className="mx-auto h-8 w-8 text-accent" />
            <Text className="mt-2 text-sm font-semibold uppercase tracking-wider text-accent">Conteúdo Principal</Text>
            <Heading as="h2" className="my-1 text-xl font-bold text-foreground">
              Plano CETOX30
            </Heading>
            <Button
              href={downloadUrls.plano}
              className="mt-4 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-white shadow-md"
            >
              Descarregar o Plano
            </Button>
          </Section>

          {/* Bonus 1 */}
          <Section className="my-6 rounded-lg border border-solid border-gray-200 bg-white p-6 text-center">
            <KeyRound className="mx-auto h-8 w-8 text-secondary" />
            <Text className="mt-2 text-sm font-semibold uppercase tracking-wider text-secondary">Bónus #1</Text>
            <Heading as="h2" className="my-1 text-xl font-bold text-foreground">
              Segredos para uma Dieta de Sucesso
            </Heading>
            <Button
              href={downloadUrls.segredos}
              className="mt-4 rounded-md bg-secondary px-6 py-3.5 text-base font-bold text-white shadow-md"
            >
              Ver Segredos
            </Button>
          </Section>
          
          {/* Bonus 2 */}
          <Section className="my-6 rounded-lg border border-solid border-gray-200 bg-white p-6 text-center">
            <UtensilsCrossed className="mx-auto h-8 w-8 text-primary" />
            <Text className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">Bónus #2</Text>
            <Heading as="h2" className="my-1 text-xl font-bold text-foreground">
              Sobremesas Cetogénicas
            </Heading>
            <Button
              href={downloadUrls.sobremesas}
              className="mt-4 rounded-md bg-primary px-6 py-3.5 text-base font-bold text-white shadow-md"
            >
              Ver Receitas
            </Button>
          </Section>
          
          <Hr className="my-6 border-t border-gray-200" />

          <Section>
            <Text className="text-base text-gray-700">
              Este é um e-mail automático e não pode ser respondido. Se tiver alguma dúvida ou necessitar de apoio, por favor, entre em contacto connosco através do nosso site.
            </Text>
            <Text className="mt-4 text-base text-gray-700">
              Com saúde e equilíbrio,<br />
              <strong>Equipa CETOX30</strong>
            </Text>
          </Section>
          
          <Hr className="my-8 border-t border-gray-200" />
          
          <Section className="text-center">
             <Text className="text-xs text-gray-500">
                Este e-mail foi enviado automaticamente após a sua compra do CETOX30.
                Se não efectuou esta compra, por favor ignore esta mensagem ou contacte-nos.
            </Text>
            <Text className="text-xs text-gray-500">
              © {new Date().getFullYear()} CETOX30. Todos os direitos reservados.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default WelcomeEmail;
