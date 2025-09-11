import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie",
    location: "Portugal",
    image: "/images/sophie_portugal.webp",
    imageHint: "woman before after",
    text: "Após vários anos, tudo mudou quando conheci a dieta Cetox30. Perdi peso sem ir ao ginásio, mudei a minha rotina diária e conquistei o corpo que sonhava ter há anos.",
    rating: 5,
  },
  {
    name: "José",
    location: "Suíça",
    image: "/images/jose_suica.webp",
    imageHint: "man before after",
    text: "Há alguns meses tive um princípio de enfarte devido ao meu excesso de peso. O médico recomendou-me perder 35 quilos, o mais rápido possível. Encontrei a dieta Cetox30 e hoje estou 28 quilos mais leve.",
    rating: 5,
  },
  {
    name: "Stephanie",
    location: "Luxemburgo",
    image: "/images/stephanie_luxemburgo.webp",
    imageHint: "woman progress fit",
    text: "Sempre lutei contra a balança e não tive sucesso em nenhuma dieta. Com a dieta Cetox30, hoje estou dentro do meu peso e cheia de saúde. Foi a melhor decisão que tomei!",
    rating: 5,
  },
];


export function Reviews() {
  return (
    <section id="reviews" className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 flex flex-col items-center">
            <Badge variant="secondary" className="mb-4 text-base py-2 px-4 rounded-full bg-primary/10 text-primary border-primary/20">
                <Users className="h-5 w-5 mr-2" />
                850+ Clientes Felizes
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl font-headline uppercase">Histórias Reais de Sucesso</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Com o plano <span className="font-bold text-primary">CETOX30</span>
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <Card key={i} className="flex flex-col bg-card shadow-lg rounded-xl overflow-hidden">
              <div className="relative">
                <Image
                  src={review.image}
                  alt={`Depoimento de ${review.name}`}
                  width={400}
                  height={300}
                  data-ai-hint={review.imageHint}
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-0 left-0 bg-black/50 text-white p-4 rounded-tr-xl">
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-sm">{review.location}</p>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="h-14 px-8 font-bold text-xl w-full sm:w-auto">
                <a href="/checkout">
                  QUERO PARTICIPAR
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
