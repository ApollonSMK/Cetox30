import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function BeforeAfter() {
  const testimonials = [
    {
      before: "https://picsum.photos/400/500?random=1",
      after: "https://picsum.photos/400/500?random=2",
      beforeHint: "woman overweight",
      afterHint: "woman fit",
      description: "Transformação antes e depois com o plano Cetox30 - Imagem 1",
    },
    {
      before: "https://picsum.photos/400/500?random=3",
      after: "https://picsum.photos/400/500?random=4",
      beforeHint: "man overweight",
      afterHint: "man fit",
      description: "Transformação antes e depois com o plano Cetox30 - Imagem 2",
    },
    {
      before: "https://picsum.photos/400/500?random=5",
      after: "https://picsum.photos/400/500?random=6",
      beforeHint: "sad person",
      afterHint: "happy person",
      description: "Transformação antes e depois com o plano Cetox30 - Imagem 3",
    },
  ];

  return (
    <section id="resultados" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Transformação antes e depois com o plano Cetox30</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="flex flex-col items-center p-6 gap-4">
                  <div className="flex justify-around w-full">
                    <div className="text-center space-y-2">
                      <Image src={t.before} alt="Antes" width={200} height={250} data-ai-hint={t.beforeHint} className="rounded-lg shadow-md aspect-[4/5] object-cover" />
                      <h3 className="font-bold text-md bg-gray-200 text-gray-800 rounded-full px-3 py-1 inline-block">ANTES</h3>
                    </div>
                    <div className="text-center space-y-2">
                      <Image src={t.after} alt="Depois" width={200} height={250} data-ai-hint={t.afterHint} className="rounded-lg shadow-md aspect-[4/5] object-cover" />
                      <h3 className="font-bold text-md bg-primary text-primary-foreground rounded-full px-3 py-1 inline-block">DEPOIS</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-muted-foreground">{t.description}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
