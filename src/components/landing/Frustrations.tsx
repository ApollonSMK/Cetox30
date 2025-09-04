import { XCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

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

export function Frustrations() {
  return (
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
                  </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <p className="text-lg md:text-xl text-foreground">Se respondeu <span className="font-bold text-primary">SIM</span> a qualquer uma destas perguntas...</p>
            <p className="text-2xl md:text-3xl font-bold font-headline mt-2">Então o CETOX30 foi feito especialmente para SI!</p>
          </div>
        </div>
      </section>
  );
}
