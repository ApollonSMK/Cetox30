import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
      <Header />
      <main className="flex-1 py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg relative animate-fade-in-up">
            <Button 
                variant="ghost"
                size="sm"
                className="absolute top-4 left-4" 
                asChild
            >
                <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Voltar
                </Link>
            </Button>
            <CardHeader className="text-center pt-16">
              <Badge variant="secondary" className="mx-auto w-fit">
                Última atualização: 12 de setembro de 2025
              </Badge>
              <CardTitle className="text-3xl md:text-4xl font-headline font-extrabold mt-4">
                Política de Privacidade – <span className="text-primary">PlanoCetox30</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-muted-foreground leading-relaxed px-6 md:px-10 pb-10">
              <p className="text-center">
                A sua privacidade é da máxima importância para nós. Esta Política de Privacidade descreve como o PlanoCetox30 ("nós", "nosso") recolhe, utiliza e protege os seus dados pessoais no âmbito da aquisição e utilização do nosso info-produto.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">1. Responsável pelo Tratamento dos Dados</h3>
                 <Card className="bg-background border-primary/20 p-6 shadow-inner">
                    <CardHeader className="p-0 mb-2">
                        <CardTitle className="text-lg text-primary flex items-center gap-2">
                           Entidade Responsável: PlanoCetox30
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <p>Para qualquer questão relacionada com o tratamento dos seus dados pessoais, por favor, utilize o email abaixo:</p>
                        <a href="mailto:suporte@planocetox.com" className="font-semibold text-primary hover:underline flex items-center gap-2 mt-2">
                            <Mail className="h-4 w-4" />
                            suporte@planocetox.com
                        </a>
                    </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">2. Dados Pessoais Recolhidos e Finalidade</h3>
                <p>Recolhemos os seguintes dados pessoais com as seguintes finalidades:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Dados de Identificação e Contacto (Nome, Email):</strong> Para processar a sua encomenda, fornecer acesso ao Produto e enviar comunicações essenciais sobre o serviço (ex: confirmação de compra).</li>
                    <li><strong>Dados de Faturação (NIF, Morada):</strong> Recolhidos diretamente pela nossa plataforma de pagamentos para o cumprimento de obrigações legais e fiscais.</li>
                    <li><strong>Dados de Pagamento:</strong> As informações de pagamento são recolhidas e processadas diretamente pela nossa plataforma parceira, Hotmart. O PlanoCetox30 não armazena nem tem acesso direto a estes dados (ex: número completo do seu cartão de crédito).</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">3. Base de Licitude para o Tratamento</h3>
                <p>
                  O tratamento dos seus dados baseia-se na execução de um contrato (a compra do Produto), no cumprimento de obrigações jurídicas (faturação) e no nosso interesse legítimo para melhorar os nossos serviços.
                </p>
              </div>

               <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">4. Partilha de Dados</h3>
                <p>
                  Não partilhamos os seus dados pessoais, exceto com prestadores de serviços essenciais, como a plataforma Hotmart, que processa o pagamento e aloja o conteúdo, e com as autoridades, quando exigido por lei.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">5. Período de Conservação dos Dados</h3>
                <p>
                  Conservamos os seus dados apenas durante o período necessário para cumprir as finalidades para as quais foram recolhidos, incluindo o cumprimento de obrigações legais (ex: dados de faturação são mantidos por 10 anos).
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">6. Os Seus Direitos</h3>
                <p>
                  Enquanto titular dos dados, tem o direito de Acesso, Retificação, Apagamento, Limitação do Tratamento, Portabilidade e Oposição. Para exercer os seus direitos, por favor, contacte-nos através do email <a href="mailto:suporte@planocetox.com" className="font-semibold text-primary hover:underline">suporte@planocetox.com</a>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">7. Segurança dos Dados</h3>
                <p>
                  Implementamos medidas técnicas e organizativas adequadas, em conjunto com os nossos parceiros tecnológicos, para proteger os seus dados pessoais.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">8. Reclamações</h3>
                <p>
                    Tem o direito de apresentar uma reclamação junto da autoridade de controlo competente, a Comissão Nacional de Proteção de Dados (CNPD), se considerar que o tratamento dos seus dados viola o RGPD.
                </p>
              </div>

            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
