import { CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const conquests = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Queima de Gordura Automática",
      description: "Como ativar a queima de gordura automática 24 horas por dia, enquanto come o que mais gosta, sem sofrimento e sem praticar exercício físico.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "O Verdadeiro Culpado do Excesso de Peso",
      description: "O verdadeiro culpado que impede a sua perda de peso, e como os alimentos ricos em gordura podem ajudar a emagrecer mais rápido.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Cetose: O Segredo para Emagrecer Rápido",
      description: "O Cetox30 estimula a cetose, um processo natural do corpo, promovendo uma queima de gordura mais eficiente e acelerando a perda de peso.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Receitas para Acelerar o Metabolismo",
      description: "Receitas simples e rápidas que aceleram o metabolismo e potenciam o aumento da cetose.",
    },
];

export function ProductInfo() {
  return (
    <section id="conquistas" className="w-full py-6 md:py-8 lg:py-10 bg-secondary/30">
      <div className="container px-4 md:px-6 space-y-12">
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">O que vai conquistar...</h2>
          </div>
          <div className="mx-auto grid max-w-5xl items-stretch justify-center gap-6 sm:grid-cols-2 md:gap-8 lg:max-w-none lg:grid-cols-4 mt-12">
            {conquests.map((item, index) => (
              <Card key={index} className="flex flex-col text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
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
      </div>
    </section>
  );
}
