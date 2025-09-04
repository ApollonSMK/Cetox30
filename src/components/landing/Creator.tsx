import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function Creator() {
  return (
    <section id="creator" className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
            <p className="text-lg md:text-xl text-foreground">Se respondeu <span className="font-bold text-primary">SIM</span> a qualquer uma destas perguntas...</p>
            <p className="text-2xl md:text-3xl font-bold font-headline">Então o CETOX30 foi feito especialmente para SI!</p>
        </div>

        <div className="grid gap-8 md:grid-cols-5 md:gap-12 items-stretch">
          
          {/* Card da História */}
          <Card className="md:col-span-3 flex flex-col justify-between shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold tracking-tighter !leading-tight font-headline">Olá, quero mostrar-lhe como consegui <span className="text-primary">perder mais de 20 quilos em apenas 2 meses</span>...</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground md:text-lg">
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
          </Card>

          {/* Card da Imagem */}
          <Card className="md:col-span-2 overflow-hidden shadow-xl">
            <Image
                src="https://picsum.photos/600/800"
                alt="Criador do Plano Cetox30"
                width={600}
                height={800}
                data-ai-hint="man smiling portrait"
                className="w-full h-full object-cover"
            />
          </Card>
        </div>
        
        <div className="text-center">
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
