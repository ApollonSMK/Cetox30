import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function Creator() {
  return (
    <section id="creator" className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <p className="text-lg md:text-xl text-foreground">
            Se respondeu <span className="font-bold text-primary">SIM</span> a qualquer uma destas perguntas...
          </p>
          <p className="text-2xl md:text-3xl font-bold font-headline">
            Então o CETOX30 foi feito especialmente para SI!
          </p>
        </div>

        <div className="mt-12">
          <Card className="overflow-hidden shadow-xl bg-background">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                <div className="space-y-4 text-left">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter !leading-tight font-headline">
                    Olá, quero mostrar-lhe como consegui <span className="text-primary">perder mais de 20 quilos em apenas 2 meses</span>...
                  </h3>
                  <p className="text-muted-foreground md:text-lg">
                    ...e, mais importante, como <span className="font-bold text-foreground">qualquer pessoa também pode perder 10 quilos ou mais.</span>
                  </p>
                  <p className="text-muted-foreground">
                    Se faz parte dos 99% que já tentaram de tudo sem sucesso, estou aqui para mudar isso.
                  </p>
                  <p className="text-muted-foreground">
                    Após anos de pesquisa para me livrar de situações humilhantes causadas pelo excesso de peso, descobri um segredo. Um plano alimentar simples de 30 dias que o vai ajudar a conquistar o corpo que deseja, sem passar fome.
                  </p>
                </div>
              </div>
              <div className="relative md:w-2/5 flex items-center justify-center p-6 md:p-0">
                 <Image
                    src="https://placehold.co/600x800"
                    alt="Criador do Plano Cetox30"
                    width={600}
                    height={800}
                    data-ai-hint="man smiling portrait"
                    className="w-full h-auto md:h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="h-14 px-8 font-bold text-xl animate-breathing-pulse">
            <a href="#comprar">
              QUERO TRANSFORMAR O MEU CORPO
              <ArrowRight className="ml-2"/>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}