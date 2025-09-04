import { XCircle, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const frustrations = [
  {
    icon: <XCircle className="h-8 w-8 text-destructive" />,
    title: "Tentar métodos que não funcionam",
    description: "Já tentou dezenas de soluções, gastou tempo e dinheiro, mas os resultados nunca apareceram...",
  },
  {
    icon: <XCircle className="h-8 w-8 text-destructive" />,
    title: "Sentir que está a perder tempo",
    description: "Cada dia que passa é uma oportunidade perdida de ter a vida que sempre sonhou...",
  },
  {
    icon: <XCircle className="h-8 w-8 text-destructive" />,
    title: "Ver outros a conseguir e você não",
    description: "É frustrante ver outras pessoas a alcançar os seus objetivos enquanto você continua no mesmo sítio...",
  },
  {
    icon: <XCircle className="h-8 w-8 text-destructive" />,
    title: "Não saber por onde começar",
    description: "Existe tanta informação contraditória que já não sabe em quem confiar...",
  },
];

const solutions = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Queima de Gordura Automática",
      description: "Ative a queima de gordura 24h por dia, comendo o que gosta e sem exercício físico.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "O Verdadeiro Culpado do Peso",
      description: "Descubra o que realmente impede a sua perda de peso e como usar a gordura a seu favor.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Cetose: O Segredo Rápido",
      description: "Estimule um processo natural do corpo para uma queima de gordura mais eficiente.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Receitas Aceleradoras",
      description: "Aprenda receitas simples que aceleram o seu metabolismo e potenciam a cetose.",
    },
  ];

export function ProductInfo() {
  return (
    <>
      <section id="frustracoes" className="w-full py-12 md:py-24 lg:py-32 bg-[#f9fafb]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Está Farto(a) de...</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl items-start gap-6 sm:grid-cols-2 md:gap-8 mt-12">
            {frustrations.map((item, index) => (
              <Card key={index} className="flex flex-col text-center bg-white shadow-md">
                <CardHeader className="items-center gap-4 p-6">
                  {item.icon}
                  <div className="space-y-1">
                    <CardTitle className="font-bold text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="conquistas" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">O que vai conquistar com o <span className="text-primary">Cetox30</span></h2>
               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                O único método cientificamente comprovado que garante resultados transformadores em apenas 30 dias.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-8 lg:max-w-none lg:grid-cols-4 mt-12">
            {solutions.map((benefit, index) => (
              <Card key={index} className="flex flex-col text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
    </>
  );
}
