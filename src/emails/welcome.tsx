import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Tailwind,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface WelcomeEmailProps {
    customerName: string;
    downloadUrl: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  
  export const WelcomeEmail = ({ customerName, downloadUrl }: WelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>Sua jornada de transformação começa agora!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: '#E63946',
                background: '#F1FAEE',
              },
            },
          },
        }}
      >
        <Body className="bg-background font-sans">
          <Container className="mx-auto my-10 max-w-lg rounded-lg border border-solid border-gray-300 bg-white p-10 shadow-lg">
            <Section className="text-center">
              <Img
                src={`${baseUrl}/static/logo.png`}
                width="80"
                height="80"
                alt="Plano Cetox30 Logo"
                className="mx-auto"
              />
              <Heading className="mt-6 text-2xl font-bold text-gray-800">
                Bem-vindo(a) ao <span className="text-primary">Plano Cetox30</span>!
              </Heading>
            </Section>
            <Section className="mt-8">
              <Text className="text-base leading-relaxed text-gray-600">
                Olá, {customerName || 'Cliente'},
              </Text>
              <Text className="text-base leading-relaxed text-gray-600">
                Estamos muito felizes por ter você conosco! Sua compra foi confirmada com sucesso e agora você tem acesso completo ao método que já transformou a vida de milhares de pessoas.
              </Text>
              <Text className="text-base font-semibold leading-relaxed text-gray-700">
                Sua jornada para uma vida mais saudável e o corpo que você sempre sonhou começa agora mesmo!
              </Text>
            </Section>
            <Section className="my-8 text-center">
              <Button
                href={downloadUrl}
                className="rounded-md bg-primary px-6 py-3 text-base font-bold text-white shadow-md"
              >
                Aceder ao meu Plano
              </Button>
            </Section>
            <Section>
              <Text className="text-sm text-gray-500">
                Se tiver alguma dúvida ou precisar de ajuda, basta responder a este e-mail. Estamos aqui para apoiar você em cada passo do caminho.
              </Text>
              <Text className="mt-4 text-sm text-gray-500">
                Com os melhores cumprimentos,<br />
                Equipa Plano Cetox30
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
  
  export default WelcomeEmail;
  