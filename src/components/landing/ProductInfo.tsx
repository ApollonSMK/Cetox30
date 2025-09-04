import { Zap, Target, BrainCircuit, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const conquests = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Queima de Gordura Automática",
      description: "Ative a queima de gordura 24 horas por dia, comendo o que gosta e sem exercício físico.",
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "O Verdadeiro Culpado do Peso",
      description: "Descubra o que realmente impede a sua perda de peso e como usar a gordura a seu favor.",
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-white" />,
      title: "Cetose: O Segredo Rápido",
      description: "Estimule um processo natural do corpo para uma queima de gordura mais eficiente.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: "Receitas Aceleradoras",
      description: "Aprenda receitas simples que aceleram o seu metabolismo e potenciam a cetose.",
    },
];

export function ProductInfo() {
  return (
    <section id="conquistas" className="w-full py-6 md:py-8 lg:py-10 bg-secondary/30">
      <div className="px-4 md:px-6 space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">O QUE VAI <span className="text-primary">DESCOBRIR</span> NO <span className="text-primary">PLANO</span></h2>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch justify-center gap-6 sm:grid-cols-2 md:gap-8 lg:max-w-none lg:grid-cols-4 mt-12">
            {conquests.map((item, index) => (
              <Card key={index} className="flex flex-col text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full bg-white">
                <CardHeader className="items-center gap-4 p-6">
                  <div className="bg-primary rounded-full p-3">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="font-bold text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-base text-muted-foreground">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
