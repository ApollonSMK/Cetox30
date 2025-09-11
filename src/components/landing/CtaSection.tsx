import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export function CtaSection() {
  return (
    <section id="comprar" className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <p className="text-primary font-bold">A SUA TRANSFORMAÇÃO COMEÇA AQUI</p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              AQUI ESTÁ <span className="text-primary">TUDO</span> O QUE VAI RECEBER...
            </h2>
        </div>

        <div className="space-y-16">
            {/* Plano Principal */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-headline font-bold text-primary">PLANO DE EMAGRECIMENTO CETOX30</h3>
                    <p className="text-muted-foreground text-lg">Cronograma completo de alimentação com receitas deliciosas para perder peso e dicas para um estilo de vida saudável e saboroso com poucos hidratos de carbono.</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Valor:</span>
                      <Badge variant="secondary" className="text-base line-through">67,98€</Badge>
                    </div>
                </div>
                <div className="flex justify-center">
                  <Image src="/images/tudo/1.png" alt="Capa do E-book CETOX30 e visualização em telemóvel e computador" width={500} height={500} className="rounded-lg" />
                </div>
            </div>

            {/* Bônus */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                <div className="flex justify-center">
                    <Image src="/images/tudo/2.png" alt="Visualização dos e-books bónus em tablets" width={500} height={300} className="rounded-lg" />
                </div>
                 <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-headline font-bold text-primary">2 BÓNUS EXCLUSIVOS DE ACESSO IMEDIATO</h3>
                    <p className="text-muted-foreground text-lg">Garanta hoje o seu plano e receba gratuitamente os e-books <span className="font-semibold text-foreground">SOBREMESAS CETOX30</span> e <span className="font-semibold text-foreground">SEGREDOS PARA UMA DIETA DE SUCESSO</span>. Uma ajuda extra para resultados ainda melhores!</p>
                     <div className="flex items-center gap-2">
                        <span className="font-semibold">Valor:</span>
                        <Badge variant="secondary" className="text-base line-through">39,99€</Badge>
                     </div>
                    <Badge variant="destructive" className="text-base font-semibold p-3 animate-pulse">
                        <Clock className="h-5 w-5 mr-2" />
                        Estes bônus estão disponíveis apenas até o cronômetro zerar!
                    </Badge>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
