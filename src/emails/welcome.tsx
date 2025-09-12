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
  import * as React from 'react';
  
  interface WelcomeEmailProps {
    customerName: string;
    downloadUrls: {
      plano: string;
      sobremesas: string;
      segredos: string;
    };
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  
  export const WelcomeEmail = ({ customerName, downloadUrls }: WelcomeEmailProps) => (
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
                foreground: '#1D3557',
              },
               fontFamily: {
                sans: ['Poppins', 'sans-serif'],
              },
            },
          },
        }}
      >
        <Body className="bg-background font-sans">
          <Container className="mx-auto my-10 max-w-2xl rounded-lg border border-solid border-gray-200 bg-white p-8 shadow-lg">
            <Section className="text-center">
              {/* O logo pode ser uma URL pública de um bucket */}
              {/* <Img
                src={`${baseUrl}/static/logo.png`}
                width="80"
                height="80"
                alt="Plano Cetox30 Logo"
                className="mx-auto"
              /> */}
              <Heading className="mt-6 text-3xl font-bold text-foreground">
                Bem-vindo(a) ao <span className="text-primary">Plano Cetox30</span>!
              </Heading>
            </Section>
            <Section className="mt-8">
              <Text className="text-base leading-relaxed text-gray-700">
                Olá{customerName ? `, ${customerName}` : ''},
              </Text>
              <Text className="text-base leading-relaxed text-gray-700">
                Estamos muito felizes por ter você conosco! Sua compra foi confirmada com sucesso e agora você tem acesso completo ao método que já transformou a vida de milhares de pessoas.
              </Text>
              <Text className="mt-4 text-base font-semibold leading-relaxed text-foreground">
                Sua jornada para uma vida mais saudável e o corpo que você sempre sonhou começa agora mesmo!
              </Text>
            </Section>

            <Section className="my-8 space-y-4 text-center">
                <Heading as="h2" className="text-xl font-semibold text-foreground">Seus Acessos:</Heading>
                <Button
                    href={downloadUrls.plano}
                    className="w-full rounded-md bg-primary px-6 py-3.5 text-base font-bold text-white shadow-md"
                >
                    Baixar Plano Principal Cetox30
                </Button>
                <Button
                    href={downloadUrls.sobremesas}
                    className="w-full rounded-md bg-secondary text-secondary-foreground px-6 py-3.5 text-base font-bold shadow-sm"
                     style={{ backgroundColor: '#A8DADC' , color: '#1D3557'}}
                >
                    Bônus: Sobremesas Cetox30
                </Button>
                <Button
                    href={downloadUrls.segredos}
                    className="w-full rounded-md bg-secondary text-secondary-foreground px-6 py-3.5 text-base font-bold shadow-sm"
                    style={{ backgroundColor: '#A8DADC', color: '#1D3557' }}
                >
                    Bônus: Segredos para o Sucesso
                </Button>
            </Section>

            <Hr className="my-6 border-t border-gray-200" />

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
  
  const button = {
    padding: '14px 24px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    display: 'block',
    width: '100%',
    marginBottom: '10px',
  };

  const mainButton = {
      ...button,
      backgroundColor: '#E63946',
      color: '#ffffff',
  }

  const bonusButton = {
      ...button,
      backgroundColor: '#A8DADC',
      color: '#1D3557',
  }