import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function Creator() {
  return (
    <section id="creator" className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="container">
        <div className="space-y-4 text-center">
            <p className="text-lg md:text-xl text-foreground">Se respondeu <span className="font-bold text-primary">SIM</span> a qualquer uma destas perguntas...</p>
            <p className="text-2xl md:text-3xl font-bold font-headline">Então o CETOX30 foi feito especialmente para SI!</p>
        </div>

        <div className="mt-12">
          <Card className="flex flex-col md:flex-row overflow-hidden shadow-xl">
            <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl md:text-3xl font-bold tracking-tighter !leading-tight font-headline">
                  Olá, quero mostrar-lhe como consegui <span className="text-primary">perder mais de 20 quilos em apenas 2 meses</span>...
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 space-y-4 text-muted-foreground md:text-lg">
                  <p>
                      ...e, mais importante, como <span className="font-bold text-foreground">qualquer pessoa também pode perder 10 quilos ou mais.</span>
                  </p>
                  <p>
                      Se faz parte dos 99% que já tentaram de tudo sem sucesso, estou aqui para mudar isso.
                  </p>
                  <p>
                      Após anos de pesquisa para me livrar de situações humilhantes causadas pelo excesso de peso, descobri um segredo. Um plano alimentar simples de 30 dias que o vai ajudar a conquistar o corpo que deseja, sem passar fome.
                  </p>
              </CardContent>
            </div>
            <div className="md:w-2/5">
               <Image
                  src="https://picsum.photos/600/800"
                  alt="Criador do Plano Cetox30"
                  width={600}
                  height={800}
                  data-ai-hint="man smiling portrait"
                  className="w-full h-full object-cover min-h-[300px] md:min-h-0"
              />
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