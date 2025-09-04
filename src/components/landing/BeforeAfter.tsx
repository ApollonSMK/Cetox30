import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Juliana S.",
    before: "https://picsum.photos/400/500?random=1",
    after: "https://picsum.photos/400/500?random=2",
    beforeHint: "woman overweight",
    afterHint: "woman fit",
    result: "Perdeu 12kg em 30 dias!",
  },
  {
    name: "Marcos P.",
    before: "https://picsum.photos/400/500?random=3",
    after: "https://picsum.photos/400/500?random=4",
    beforeHint: "man overweight",
    afterHint: "man fit",
    result: "Menos 15kg e mais energia!",
  },
  {
    name: "Carla M.",
    before: "https://picsum.photos/400/500?random=5",
    after: "https://picsum.photos/400/500?random=6",
    beforeHint: "woman looking sad",
    afterHint: "woman smiling",
    result: "Recuperei minha autoestima!",
  },
];

export function BeforeAfter() {
  return (
    <section id="resultados" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Resultados Reais de Clientes Satisfeitos</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Veja a transformação que o Cetox30 proporcionou na vida de pessoas como você.</p>
        </div>
        <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex flex-col lg:flex-row items-center justify-center p-6 gap-6 md:gap-8">
                      <div className="text-center space-y-2">
                        <Image src={t.before} alt={`Antes - ${t.name}`} width={300} height={400} data-ai-hint={t.beforeHint} className="rounded-lg shadow-md aspect-[3/4] object-cover" />
                        <h3 className="font-bold text-lg bg-gray-200 text-gray-800 rounded-full px-4 py-1 inline-block">ANTES</h3>
                      </div>
                      <div className="text-center space-y-2">
                        <Image src={t.after} alt={`Depois - ${t.name}`} width={300} height={400} data-ai-hint={t.afterHint} className="rounded-lg shadow-md aspect-[3/4] object-cover" />
                        <h3 className="font-bold text-lg bg-primary text-primary-foreground rounded-full px-4 py-1 inline-block">DEPOIS</h3>
                      </div>
                      <div className="lg:ml-6 text-center lg:text-left space-y-2 lg:max-w-[200px]">
                        <p className="text-3xl font-extrabold text-primary">{t.result}</p>
                        <p className="text-xl font-semibold mt-2">{t.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
