"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { answerQuestion, type FAQWithAIOutput } from "@/ai/flows/faq-with-ai";

const staticFaqs = [
  {
    question: "O que é uma dieta cetogénica?",
    answer: "A dieta cetogénica é um plano alimentar baixo em hidratos de carbono e rico em gorduras. O objetivo é levar o corpo a um estado de cetose, onde ele queima gordura como principal fonte de energia, em vez de hidratos de carbono."
  },
  {
    question: "A dieta cetogénica é segura?",
    answer: "Sim, para a maioria das pessoas, a dieta cetogénica é segura e pode trazer diversos benefícios para a saúde. No entanto, é sempre recomendado consultar um profissional de saúde antes de iniciar qualquer nova dieta, especialmente se tiver condições médicas pré-existentes."
  },
  {
    question: "Em quanto tempo consigo perder o peso que preciso?",
    answer: "Os resultados variam de pessoa para pessoa, mas o plano Cetox30 foi desenhado para proporcionar uma perda de peso de até 10 quilos em 30 dias. Muitos utilizadores relatam ver os primeiros resultados logo na primeira semana."
  },
  {
    question: "Quais são as bebidas permitidas na dieta cetogénica?",
    answer: "Pode beber água, chás e cafés sem açúcar. Bebidas ricas em hidratos de carbono, como refrigerantes açucarados, sumos de fruta e a maioria das bebidas alcoólicas, devem ser evitadas."
  },
  {
    question: "O que acontece se me arrepender de comprar a dieta?",
    answer: "O seu risco é zero! Oferecemos uma garantia incondicional de 15 dias. Se, por qualquer motivo, não ficar completamente satisfeito, basta enviar-nos um e-mail e devolveremos 100% do seu investimento."
  }
];

export function Faq() {
  const [question, setQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState<FAQWithAIOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setError(null);
    setAiResponse(null);

    try {
      const response = await answerQuestion({ question });
      setAiResponse(response);
    } catch (err) {
      setError("Desculpe, não consegui encontrar uma resposta. Tente reformular sua pergunta.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Perguntas Frequentes</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">Ainda tem dúvidas? A gente te ajuda.</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Accordion type="single" collapsible className="w-full">
              {staticFaqs.map((faq, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger className="font-bold text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex items-start">
            <Card className="w-full shadow-lg">
              <CardHeader>
                <CardTitle>Tem outra pergunta?</CardTitle>
                <CardDescription>Use nossa Inteligência Artificial para obter uma resposta instantânea sobre o Plano Cetox30.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuestionSubmit} className="space-y-4">
                  <Input
                    placeholder="Ex: Posso comer fruta no plano Cetox30?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    disabled={isLoading}
                    className="text-base"
                  />
                  <Button type="submit" className="w-full font-bold" disabled={isLoading || !question.trim()}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Perguntar à IA"}
                  </Button>
                </form>
                {isLoading && (
                  <div className="mt-4 text-center text-muted-foreground flex items-center justify-center">
                    <p>Buscando a melhor resposta...</p>
                  </div>
                )}
                {error && (
                  <div className="mt-4 text-center text-destructive p-3 bg-destructive/10 rounded-md">
                    <p>{error}</p>
                  </div>
                )}
                {aiResponse && (
                  <div className="mt-4 p-4 bg-secondary/30 rounded-lg border">
                    <p className="font-semibold text-primary">Resposta da IA:</p>
                    <p className="text-muted-foreground">{aiResponse.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
