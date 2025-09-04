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
    question: "O que é o Cetox30?",
    answer: "Cetox30 é um suplemento alimentar 100% natural, projetado para auxiliar na perda de peso de forma rápida e segura. Sua fórmula exclusiva acelera o metabolismo, promove a queima de gordura e ajuda a controlar o apetite."
  },
  {
    question: "Como devo usar o Cetox30?",
    answer: "A recomendação é tomar duas cápsulas por dia, uma antes do almoço e outra antes do jantar. Para melhores resultados, mantenha uma dieta balanceada e pratique atividades físicas."
  },
  {
    question: "O Cetox30 tem efeitos colaterais?",
    answer: "Por ser um produto com composição 100% natural, o Cetox30 não possui efeitos colaterais. No entanto, gestantes, lactantes e pessoas com doenças preexistentes devem consultar um médico antes de iniciar o uso."
  },
  {
    question: "Em quanto tempo vejo os resultados?",
    answer: "Os resultados podem variar de pessoa para pessoa, mas muitos de nossos clientes relatam mudanças significativas já nas primeiras semanas de uso, com resultados mais expressivos em 30 dias."
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
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Perguntas Frequentes</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">Ainda tem dúvidas? A gente te ajuda.</p>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
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
                <CardDescription>Use nossa Inteligência Artificial para obter uma resposta instantânea sobre o Cetox30.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuestionSubmit} className="space-y-4">
                  <Input
                    placeholder="Ex: Cetox30 ajuda a perder barriga?"
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
                  <div className="mt-4 p-4 bg-background rounded-lg border">
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
