import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function CtaSection() {
  return (
    <section id="comprar" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              A SUA TRANSFORMAÇÃO COMEÇA AQUI
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
              Aqui está tudo o que vai receber ao garantir o seu acesso hoje com <span className="text-primary font-bold">70% de desconto</span>.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">PLANO DE EMAGRECIMENTO CETOX30</h3>
                    <p className="text-muted-foreground">Cronograma completo de alimentação com receitas deliciosas para perder peso e dicas para um estilo de vida saudável e saboroso com poucos hidratos de carbono.</p>
                    <Badge variant="secondary" className="text-base">Valor: 67,98€</Badge>
                </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-bold">2 BÓNUS EXCLUSIVOS</h3>
                    <p className="text-muted-foreground">Garanta hoje o seu plano e receba gratuitamente os e-books <span className="font-semibold">SOBREMESAS CETOX30</span> e <span className="font-semibold">SEGREDOS PARA UMA DIETA DE SUCESSO</span>. Uma ajuda extra para resultados ainda melhores!</p>
                    <Badge variant="secondary" className="text-base">Valor: 39,99€</Badge>
                </div>

                <div className="border-t pt-6 space-y-4">
                     <p className="text-lg text-muted-foreground">De <span className="line-through">107,97€</span> por apenas:</p>
                     <p className="text-5xl lg:text-6xl font-extrabold text-primary">33,99€ <span className="text-lg font-medium text-muted-foreground">(+IVA)</span></p>
                      <Button asChild size="lg" className="w-full font-bold text-xl animate-breathing-pulse shadow-xl h-14">
                        <a href="#">Inscrever-me Agora</a>
                    </Button>
                    <p className="text-sm text-muted-foreground">⚠️ Oferta por tempo limitado!</p>
                </div>
            </div>
             <div className="flex flex-col items-center justify-center gap-4">
                <Image src="https://picsum.photos/500/500?random=10" alt="Capa do E-book CETOX30" width={500} height={500} data-ai-hint="ebook cover" className="rounded-lg shadow-2xl" />
                <Image src="https://picsum.photos/500/300?random=11" alt="Bónus do plano" width={500} height={300} data-ai-hint="ebooks bonus" className="rounded-lg shadow-2xl" />
            </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center bg-background p-8 rounded-lg border shadow-lg">
            <h3 className="text-2xl font-bold mb-4">O seu Risco é ZERO!</h3>
            <p className="text-muted-foreground mb-4">
                Temos tanta confiança nos resultados que o plano CETOX30 pode proporcionar que lhe oferecemos uma garantia incondicional de 15 dias. Se, por qualquer motivo, não ficar completamente satisfeito, basta enviar-nos um e-mail e devolveremos 100% do seu investimento. Sem perguntas, sem complicações.
            </p>
             <Button asChild size="lg">
                <a href="#">QUERO TRANSFORMAR O MEU CORPO</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
