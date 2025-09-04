import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-primary font-semibold">
                🔥 OFERTA LIMITADA: Apenas 15 vagas restantes!
              </div>
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                30 Dias para perder peso em casa sem deixar de comer o que mais gosta!
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl">
                Descubra o sistema revolucionário que já ajudou mais de 1000 pessoas a alcançarem resultados extraordinários.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-4xl font-bold text-primary">33,99€</span>
                <span className="text-2xl text-muted-foreground line-through">67,98€</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mx-auto lg:mx-0">
              <Button asChild size="lg" className="font-bold text-lg animate-breathing-pulse shadow-lg">
                <a href="#comprar">Quero Emagrecer Agora</a>
              </Button>
            </div>
          </div>
          <Image
            src="https://picsum.photos/600/600"
            data-ai-hint="woman smiling happy"
            alt="Mulher feliz com os resultados do plano Cetox30"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
