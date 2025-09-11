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
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image src="/images/tudo/1.png" alt="Capa do E-book CETOX30 e visualização em telemóvel e computador" width={500} height={500} className="rounded-lg" />
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">PLANO DE EMAGRECIMENTO CETOX30</h3>
                    <p className="text-muted-foreground">Cronograma completo de alimentação com receitas deliciosas para perder peso e dicas para um estilo de vida saudável e saboroso com poucos hidratos de carbono.</p>
                    <p className="text-muted-foreground font-semibold">Valor: <span className="line-through">67,98€</span></p>
                </div>
            </div>

            {/* Bônus */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                 <div className="space-y-4">
                    <h3 className="text-2xl font-bold">2 BÓNUS EXCLUSIVOS DE ACESSO IMEDIATO</h3>
                    <p className="text-muted-foreground">Garanta hoje o seu plano e receba gratuitamente os e-books <span className="font-semibold">SOBREMESAS CETOX30</span> e <span className="font-semibold">SEGREDOS PARA UMA DIETA DE SUCESSO</span>. Uma ajuda extra para resultados ainda melhores!</p>
                     <p className="text-muted-foreground font-semibold">Valor: <span className="line-through">39,99€</span></p>
                    <Badge variant="destructive" className="text-base font-semibold p-3 animate-pulse">
                        <Clock className="h-5 w-5 mr-2" />
                        Estes bônus estão disponíveis apenas até o cronômetro zerar!
                    </Badge>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image src="/images/tudo/2.png" alt="Visualização dos e-books bónus em tablets" width={500} height={300} className="rounded-lg" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
