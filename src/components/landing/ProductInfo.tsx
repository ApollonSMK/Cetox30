import { Flame, Rocket, Donut, Leaf } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Metabolismo Acelerado",
    description: "Aumente sua queima de calorias diária, transformando seu corpo em uma máquina de queimar gordura.",
  },
  {
    icon: <Flame className="h-8 w-8 text-primary" />,
    title: "Queima de Gordura",
    description: "Combate a gordura teimosa na barriga, braços e pernas, revelando um corpo mais definido e saudável.",
  },
  {
    icon: <Donut className="h-8 w-8 text-primary" />,
    title: "Inibidor de Apetite",
    description: "Sinta-se mais saciado com porções menores, controlando a fome e a vontade de comer doces.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "Ingredientes Naturais",
    description: "Uma fórmula segura e eficaz, com uma composição 100% natural e sem efeitos colaterais indesejados.",
  },
];

export function ProductInfo() {
  return (
    <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Descubra o Poder do <span className="text-primary">Cetox30</span></h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cetox30 não é apenas mais um produto de emagrecimento. É a chave para uma transformação completa, saudável e duradoura.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-8 lg:max-w-none lg:grid-cols-4 mt-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center gap-4 p-6">
                {benefit.icon}
                <div className="space-y-1">
                  <CardTitle className="font-bold text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
