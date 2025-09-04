import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function BeforeAfter() {
  const transformations = [
    {
      image: "https://picsum.photos/400/500?random=2",
      hint: "woman fit",
    },
    {
      image: "https://picsum.photos/400/500?random=4",
      hint: "man fit",
    },
    {
      image: "https://picsum.photos/400/500?random=6",
      hint: "happy person",
    },
  ];

  return (
    <section id="resultados" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Resultados Incríveis</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {transformations.map((t, i) => (
              <Card key={i} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                    <Image 
                      src={t.image} 
                      alt={`Transformação com o plano Cetox30 - Imagem ${i + 1}`} 
                      width={400} 
                      height={500} 
                      data-ai-hint={t.hint} 
                      className="aspect-[4/5] object-cover w-full" 
                    />
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
