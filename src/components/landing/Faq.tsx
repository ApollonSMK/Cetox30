"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  return (
    <section id="faq" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Perguntas Frequentes</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">Ainda tem dúvidas? A gente te ajuda.</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {staticFaqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="font-bold text-lg text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
