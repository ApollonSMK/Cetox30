import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Transformação 1",
    before: "https://picsum.photos/400/500?random=1",
    after: "https://picsum.photos/400/500?random=2",
    beforeHint: "woman overweight",
    afterHint: "woman fit",
    result: "Resultados visíveis em 7 dias",
  },
  {
    name: "Transformação 2",
    before: "https://picsum.photos/400/500?random=3",
    after: "https://picsum.photos/400/500?random=4",
    beforeHint: "man overweight",
    afterHint: "man fit",
    result: "Sistema Passo a Passo",
  },
  {
    name: "Transformação 3",
    before: "https://picsum.photos/400/500?random=5",
    after: "https://picsum.photos/400/500?random=6",
    beforeHint: "sad person",
    afterHint: "happy person",
    result: "Transformação Completa",
  },
];

export function BeforeAfter() {
  return (
    <section id="resultados" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Transformação Antes e Depois com o Plano Cetox30</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Começará a ver os primeiros resultados logo na primeira semana. 94% dos utilizadores relatam mudanças significativas.</p>
        </div>
        <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                      <div className="flex justify-around w-full">
                        <div className="text-center space-y-2">
                          <Image src={t.before} alt={`Antes - ${t.name}`} width={200} height={250} data-ai-hint={t.beforeHint} className="rounded-lg shadow-md aspect-[4/5] object-cover" />
                          <h3 className="font-bold text-md bg-gray-200 text-gray-800 rounded-full px-3 py-1 inline-block">ANTES</h3>
                        </div>
                        <div className="text-center space-y-2">
                          <Image src={t.after} alt={`Depois - ${t.name}`} width={200} height={250} data-ai-hint={t.afterHint} className="rounded-lg shadow-md aspect-[4/5] object-cover" />
                          <h3 className="font-bold text-md bg-primary text-primary-foreground rounded-full px-3 py-1 inline-block">DEPOIS</h3>
                        </div>
                      </div>
                      <div className="mt-4 text-center space-y-2">
                        <p className="text-2xl font-bold text-primary">{t.result}</p>
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
