import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amanda L.",
    avatar: "https://picsum.photos/100/100?random=7",
    avatarHint: "woman portrait",
    rating: 5,
    text: "Estou chocada com os resultados! O Cetox30 realmente funciona. Perdi peso e me sinto muito mais disposta. Recomendo demais!",
  },
  {
    name: "Ricardo F.",
    avatar: "https://picsum.photos/100/100?random=8",
    avatarHint: "man portrait",
    rating: 5,
    text: "Finalmente um produto que cumpre o que promete. Minha fome diminuiu muito e já vejo diferença nas roupas. Valeu cada centavo.",
  },
  {
    name: "Fernanda C.",
    avatar: "https://picsum.photos/100/100?random=9",
    avatarHint: "smiling woman",
    rating: 4,
    text: "Gostei bastante, o produto ajudou a controlar minha ansiedade por doces. O resultado está vindo aos poucos, mas estou otimista!",
  },
];

function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < value ? "fill-accent text-accent" : "fill-muted stroke-muted-foreground"}`} />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">O que Nossos Clientes Dizem</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">A satisfação de quem já usou é a nossa maior propaganda.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          {reviews.map((review, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} data-ai-hint={review.avatarHint} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">Cliente Verificado</p>
                    </div>
                  </div>
                  <Rating value={review.rating} />
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
