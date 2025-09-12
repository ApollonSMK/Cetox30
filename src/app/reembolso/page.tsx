import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, AlertTriangle, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReembolsoPage() {
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
                Política de Reembolso – <span className="text-primary">PlanoCetox30</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-muted-foreground leading-relaxed px-6 md:px-10 pb-10">
              <p className="text-center">
                Esta política define as condições de reembolso para o info-produto PlanoCetox30, em conformidade com a legislação portuguesa que regula os contratos celebrados à distância.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">1. A Regra Essencial para Produtos Digitais</h3>
                <p>
                  A lei europeia e portuguesa estabelece uma exceção específica ao "direito de arrependimento" de 14 dias para produtos digitais de acesso imediato, como é o caso do PlanoCetox30.
                </p>
                <p>Ao adquirir este produto, é uma condição fundamental da transação que o Cliente compreenda e aceite o seguinte de forma explícita:</p>
                
                <Card className="bg-destructive/10 border-destructive/50 p-6 shadow-inner mt-6">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-lg text-destructive flex items-center gap-2">
                           <AlertTriangle className="h-5 w-5" />
                           Atenção: Acesso Imediato e Perda do Direito de Reembolso
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4 text-destructive/90">
                        <p className="font-semibold">
                            CONSENTIMENTO PARA ACESSO IMEDIATO: Você solicita e concorda que o acesso ao conteúdo seja disponibilizado imediatamente após a confirmação do pagamento.
                        </p>
                        <p className="font-semibold">
                            RECONHECIMENTO DA PERDA DO DIREITO AO REEMBOLSO: Você reconhece de forma clara e inequívoca que, no momento em que inicia o download do ficheiro PDF ou acede ao material digital pela primeira vez, perde automaticamente o seu direito ao reembolso.
                        </p>
                        <CardDescription className="text-destructive/70 pt-4 border-t border-destructive/20">
                            Devido à natureza digital do produto e à impossibilidade de o reaver uma vez descarregado, não serão efetuados quaisquer reembolsos após o início do seu consumo.
                        </CardDescription>
                    </CardContent>
                </Card>

              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">2. Falha Técnica (Falta de Conformidade)</h3>
                <p>
                  Caso o Produto apresente uma falha técnica que o impeça de aceder ao conteúdo (por exemplo, um link que não funciona ou um ficheiro corrompido), e a responsabilidade for do PlanoCetox30, por favor, contacte-nos imediatamente através do email abaixo.
                </p>
                 <a href="mailto:suporte@planocetox.com" className="font-semibold text-primary hover:underline flex items-center gap-2 mt-2 w-fit">
                    <Mail className="h-4 w-4" />
                    suporte@planocetox.com
                </a>
                <p>Comprometemo-nos a resolver a situação e a garantir o seu acesso ao produto que adquiriu.</p>
              </div>

            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
