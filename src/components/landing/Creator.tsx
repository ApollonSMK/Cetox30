import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Creator() {
  return (
    <section id="creator" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
              src="https://picsum.photos/600/600"
              alt="Criador do Plano Cetox30"
              width={600}
              height={600}
              data-ai-hint="man smiling portrait"
              className="rounded-xl shadow-2xl mx-auto aspect-square overflow-hidden object-cover max-w-xs md:max-w-full"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-3">
              <p className="text-lg md:text-xl text-foreground">Se respondeu <span className="font-bold text-primary">SIM</span> a qualquer uma destas perguntas...</p>
              <p className="text-2xl md:text-3xl font-bold font-headline">Então o CETOX30 foi feito especialmente para SI!</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Olá, quero mostrar-lhe como consegui <span className="text-primary">perder mais de 20 quilos em apenas 2 meses</span> e, mais importante, como qualquer pessoa também pode perder 10 quilos ou mais.</h2>
            <div className="space-y-4 text-muted-foreground md:text-lg">
                <p>
                    Se faz parte dos 99% que já tentaram de tudo sem sucesso, estou aqui para mudar isso.
                </p>
                <p>
                    Após anos de pesquisa para me livrar de situações humilhantes causadas pelo excesso de peso, descobri um segredo. Um plano alimentar simples de 30 dias que o vai ajudar a conquistar o corpo que deseja, sem passar fome.
                </p>
            </div>
          </div>
          <Button asChild size="lg" className="self-start">
            <a href="#comprar">QUERO TRANSFORMAR O MEU CORPO</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
