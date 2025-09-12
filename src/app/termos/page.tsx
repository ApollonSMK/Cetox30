import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermosPage() {
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
                Termos de Utilização – <span className="text-primary">PlanoCetox30</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-muted-foreground leading-relaxed px-6 md:px-10 pb-10">
              <p className="text-center">
                Bem-vindo(a) ao PlanoCetox30. Antes de utilizar o nosso produto, por favor, leia atentamente os seguintes Termos de Utilização ("Termos"). Ao adquirir e aceder ao conteúdo do PlanoCetox30, o utilizador ("Utilizador" ou "Cliente") declara ter lido, compreendido e aceite vincular-se a estes Termos.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">1. Objeto</h3>
                <p>
                  1.1. Os presentes Termos regulam o acesso e a utilização do info-produto PlanoCetox30 ("Produto"), um programa informativo digital que disponibiliza conteúdos sobre o estilo de vida cetogénico.
                </p>
                <p>
                  1.2. O Produto tem um cariz meramente informativo e educacional. As informações contidas no mesmo não constituem, e não devem ser interpretadas como, aconselhamento médico, nutricional ou terapêutico. Qualquer decisão relacionada com a sua saúde deve ser tomada em consulta com um profissional de saúde qualificado.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">2. Propriedade Intelectual</h3>
                <p>
                  2.1. Todo o conteúdo disponibilizado no âmbito do Produto, incluindo, mas não se limitando a, textos, vídeos, áudios, imagens e guias em PDF, é propriedade exclusiva do PlanoCetox30, protegido pela legislação portuguesa e internacional sobre direitos de autor.
                </p>
                <p>
                  2.2. Ao adquirir o Produto, é concedida ao Utilizador uma licença de utilização pessoal, intransmissível e não exclusiva, unicamente para seu uso privado.
                </p>
                <p>
                  2.3. É expressamente proibida a cópia, reprodução, distribuição, revenda ou qualquer outra forma de exploração comercial do conteúdo do Produto sem a autorização prévia e por escrito do PlanoCetox30.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">3. Acesso, Utilização e Reembolso</h3>
                <p>
                  3.1. O acesso ao Produto será disponibilizado imediatamente após a confirmação do pagamento.
                </p>
                
                <Card className="bg-background border-destructive/50 p-6 shadow-inner">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-lg text-destructive flex items-center gap-2">
                           Acesso Imediato e Perda do Direito de Reembolso
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 text-destructive/90">
                        <p>
                            3.2. Por se tratar de um produto de conteúdo digital de consumo imediato, ao efetuar a compra, o Cliente consente expressamente no início da sua execução. Consequentemente, ao efetuar o download ou ao aceder ao material do Produto pela primeira vez, o Cliente reconhece e aceita que <span className="font-bold">perde totalmente o seu direito de livre resolução</span> e, como tal, o direito ao reembolso, nos termos da legislação em vigor.
                        </p>
                    </CardContent>
                </Card>

                <p>
                  3.3. O Utilizador é responsável por manter a confidencialidade das suas credenciais de acesso e compromete-se a não utilizar o Produto para fins ilícitos.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">4. Limitação de Responsabilidade</h3>
                <p>
                  4.1. O PlanoCetox30 não se responsabiliza por quaisquer resultados específicos, ou falta deles, decorrentes da aplicação das informações contidas no Produto. Os resultados individuais podem variar.
                </p>
                <p>
                  4.2. O PlanoCetox30 não será responsável por quaisquer danos diretos ou indiretos que resultem do uso ou da incapacidade de usar o Produto, salvo em caso de dolo ou culpa grave.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">5. Alteração dos Termos</h3>
                <p>
                  5.1. O PlanoCetox30 reserva-se o direito de alterar os presentes Termos a qualquer momento. A continuação da utilização do Produto após a publicação de alterações constitui a aceitação dos novos Termos.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">6. Lei Aplicável e Foro</h3>
                <p>
                  6.1. Os presentes Termos são regidos pela lei portuguesa.
                </p>
                <p>
                  6.2. Para a resolução de quaisquer litígios, será competente o foro da Comarca de Lisboa, com expressa renúncia a qualquer outro.
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
