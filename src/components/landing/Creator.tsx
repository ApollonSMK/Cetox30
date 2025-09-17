"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import * as fpixel from '@/lib/fpixel';

export function Creator() {

  const handleCtaClick = () => {
    fpixel.event('Lead', { content_name: 'Creator CTA' });
  };

  return (
    <section id="creator" className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-foreground">
              Se respondeu <span className="font-bold text-primary">SIM</span> a qualquer uma destas perguntas...
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-headline uppercase">
              Então o <span className="text-primary">CETOX30</span> foi feito especialmente para SI!
            </h2>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-xl bg-background w-full p-8 md:p-12 text-center">
              <div className="flex flex-col items-center justify-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tighter !leading-tight font-headline">
                      Olá, quero mostrar-lhe como consegui <span className="text-primary">perder mais de 20 quilos em apenas 2 meses</span>...
                    </h3>
                    <p className="text-muted-foreground md:text-lg">
                      ...e, mais importante, como <span className="font-bold text-foreground">qualquer pessoa também pode perder 10 quilos ou mais.</span>
                    </p>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Se faz parte dos 99% que já tentaram de tudo sem sucesso, estou aqui para mudar isso.
                      Após anos de pesquisa para me livrar de situações humilhantes causadas pelo excesso de peso, descobri um segredo. Um plano alimentar simples de 30 dias que o vai ajudar a conquistar o corpo que deseja, sem passar fome.
                    </p>
                  </div>
              </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="h-14 px-8 font-bold text-xl animate-breathing-pulse w-full sm:w-auto" onClick={handleCtaClick}>
            <a href="/checkout">
              QUERO MUDAR AGORA
              <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
