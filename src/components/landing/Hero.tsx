import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Transforme Seu Corpo em Apenas 30 Dias com <span className="text-primary">Cetox30</span>
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl">
                A fórmula revolucionária que acelera seu metabolismo, queima gordura e inibe o apetite. Alcance o corpo dos seus sonhos de forma rápida e segura.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mx-auto lg:mx-0">
              <Button asChild size="lg" className="font-bold text-lg animate-breathing-pulse shadow-lg">
                <a href="#comprar">EU QUERO TRANSFORMAR MEU CORPO</a>
              </Button>
            </div>
          </div>
          <Image
            src="https://picsum.photos/600/600"
            data-ai-hint="product bottle"
            alt="Frasco do produto Cetox30"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
