import { XCircle, CheckCircle, Zap, TrendingUp, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Creator } from "@/components/landing/Creator";

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

const benefits = [
    {
        icon: <Zap className="h-10 w-10 text-primary" />,
        title: "Resultados em 7 Dias",
        description: "Começará a ver os primeiros resultados logo na primeira semana. O nosso método é tão eficaz que 94% dos utilizadores relatam mudanças significativas nos primeiros 7 dias.",
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        title: "Sistema Passo a Passo",
        description: "Não há espaço para dúvidas. A cada dia saberá exatamente o que fazer, quando fazer e como fazer para alcançar os seus objetivos.",
    },
    {
        icon: <HeartHandshake className="h-10 w-10 text-primary" />,
        title: "Transformação Completa",
        description: "Não se trata apenas de um aspeto da sua vida. O CETOX30 trabalha de forma holística para transformar TODAS as áreas importantes da sua vida.",
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
          <div className="mx-auto grid max-w-4xl items-stretch gap-6 sm:grid-cols-2 md:gap-8 mt-12">
            {frustrations.map((item, index) => (
              <Card key={index} className="flex flex-col text-center bg-white shadow-md h-full">
                <CardHeader className="flex flex-col items-center gap-4 p-6 flex-1">
                  {item.icon}
                  <div className="space-y-1">
                    <CardTitle className="font-bold text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <p className="text-lg md:text-xl text-foreground">Se respondeu <span className="font-bold text-primary">SIM</span> a qualquer uma destas perguntas...</p>
            <p className="text-2xl md:text-3xl font-bold font-headline mt-2">Então o CETOX30 foi feito especialmente para SI!</p>
          </div>
        </div>
      </section>

      <Creator />

       <section id="apresentacao" className="w-full py-12 md:py-24 lg:py-32 bg-background">
         <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Apresentamos o <span className="text-primary">CETOX30</span></h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
              O único método cientificamente comprovado que garante resultados transformadores em apenas 30 dias, ou recebe 100% do seu dinheiro de volta!
            </p>
             <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-3 mt-12">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        {benefit.icon}
                        <div className="text-center">
                            <h3 className="text-xl font-bold">{benefit.title}</h3>
                            <p className="text-muted-foreground mt-2">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
       </section>
      <section id="conquistas" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">O Que Vai Descobrir no Plano <span className="text-primary">Cetox30</span></h2>
               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dentro do programa, terá acesso a um guia passo a passo ao longo de 30 dias, com orientações e um plano de dieta para perder até 10 quilos num único mês e conquistar o corpo que sempre desejou.
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
