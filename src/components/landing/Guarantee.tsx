import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-5xl mx-auto">
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold font-headline">O seu Risco é <span className="text-primary">ZERO!</span></h3>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            Temos tanta confiança nos resultados que o plano CETOX30 pode
                            proporcionar que lhe oferecemos uma garantia incondicional de 15
                            dias.
                        </p>
                        <p>
                            Se, por qualquer motivo, não ficar completamente satisfeito,
                            basta enviar-nos um e-mail e devolveremos 100% do seu investimento.
                            Sem perguntas, sem complicações.
                        </p>
                    </div>
                    <Button asChild size="lg">
                        <a href="/checkout">
                            QUERO MUDAR AGORA
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl"></div>
                        <div className="relative bg-white rounded-full p-8 shadow-lg border border-gray-100">
                             <ShieldCheck className="h-24 w-24 text-primary-solid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
