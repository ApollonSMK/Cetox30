import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30 text-center">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Desafio
          </h2>
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline max-w-4xl mx-auto">
            <span className="text-primary">30 Dias</span> para perder peso em casa{" "}
            <span className="text-primary">sem deixar de comer</span> o que mais gosta!
          </h1>
        </div>

        <div className="w-full max-w-4xl">
          <Image
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkaWV0YXxlbnwwfHx8fDE3NTY5ODgwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            data-ai-hint="woman smiling happy"
            alt="Mulher feliz com os resultados do plano Cetox30"
            width={800}
            height={450}
            className="mx-auto overflow-hidden rounded-xl object-cover shadow-2xl"
          />
        </div>

        <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto">
          <p className="text-muted-foreground md:text-xl">
            Descubra o sistema revolucionário que já ajudou mais de 1000 pessoas a alcançarem resultados extraordinários.
          </p>
          <Badge variant="destructive" className="text-base font-semibold animate-pulse p-3 w-full whitespace-normal text-center">
            🔥 OFERTA LIMITADA: Apenas 15 vagas restantes! Garanta já a sua!
          </Badge>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-2xl text-muted-foreground line-through">67,98€</span>
            <span className="text-4xl sm:text-5xl font-bold text-primary">33,99€</span>
          </div>

          <Button asChild size="lg" className="font-bold text-xl h-14 animate-breathing-pulse shadow-xl w-full sm:w-auto">
            <a href="/checkout">Quero Emagrecer</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
