import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Bárbara",
    location: "Portugal",
    avatar: "https://picsum.photos/100/100?random=7",
    avatarHint: "woman portrait",
    text: "Após vários anos, tudo mudou quando conheci a dieta Cetox30. Perdi peso sem ir ao ginásio, mudei a minha rotina diária e conquistei o corpo que sonhava ter há anos.",
  },
  {
    name: "José",
    location: "Suíça",
    avatar: "https://picsum.photos/100/100?random=8",
    avatarHint: "man portrait",
    text: "Há alguns meses tive um princípio de enfarte devido ao meu excesso de peso. O médico recomendou-me perder 35 quilos, o mais rápido possível. Encontrei a dieta Cetox30 e hoje estou 28 quilos mais leve.",
  },
  {
    name: "Stephanie",
    location: "Luxemburgo",
    avatar: "https://picsum.photos/100/100?random=9",
    avatarHint: "smiling woman",
    text: "Sempre lutei contra a balança e não tive sucesso em nenhuma dieta. Com a dieta Cetox30, hoje estou dentro do meu peso e cheia de saúde. Foi a melhor decisão que tomei!",
  },
];


export function Reviews() {
  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">850+ Clientes Felizes</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">Histórias Reais de Sucesso com o plano CETOX30</p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          {reviews.map((review, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={review.avatar} data-ai-hint={review.avatarHint} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <a href="#comprar">QUERO JUNTAR-ME A ELES</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
