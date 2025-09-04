import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Creator() {
  return (
    <section id="creator" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <Image
            src="https://picsum.photos/600/600"
            alt="Criador do Plano Cetox30"
            width={600}
            height={600}
            data-ai-hint="man smiling portrait"
            className="rounded-xl shadow-2xl mx-auto aspect-square overflow-hidden object-cover"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Olá, quero mostrar-lhe como consegui <span className="text-primary">perder mais de 20 quilos em apenas 2 meses</span></h2>
              <p className="text-muted-foreground md:text-lg">
                E, mais importante, como qualquer pessoa também pode perder 10 quilos ou mais. Se faz parte dos 99% que já tentaram de tudo sem sucesso, estou aqui para mudar isso.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Após anos de pesquisa para me livrar de situações humilhantes causadas pelo excesso de peso, descobri um segredo. Um plano alimentar simples de 30 dias que o vai ajudar a conquistar o corpo que deseja, sem passar fome.
              </p>
            </div>
            <Button asChild size="lg" className="self-start">
              <a href="#comprar">QUERO TRANSFORMAR O MEU CORPO</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
