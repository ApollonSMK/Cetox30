"use client";

import { Zap, TrendingUp, HeartHandshake } from "lucide-react";

const benefits = [
    {
        icon: <Zap className="h-10 w-10 text-primary-solid" />,
        title: "Resultados em 7 Dias",
        description: "Começará a ver os primeiros resultados logo na primeira semana. O nosso método é tão eficaz que 94% dos utilizadores relatam mudanças significativas nos primeiros 7 dias.",
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-primary-solid" />,
        title: "Sistema Passo a Passo",
        description: "Não há espaço para dúvidas. A cada dia saberá exatamente o que fazer, quando fazer e como fazer para alcançar os seus objetivos.",
    },
    {
        icon: <HeartHandshake className="h-10 w-10 text-primary-solid" />,
        title: "Transformação Completa",
        description: "Não se trata apenas de um aspeto da sua vida. O CETOX30 trabalha de forma holística para transformar TODAS as áreas importantes da sua vida.",
    },
];

export function Benefits() {
    return (
        <section id="apresentacao" className="w-full py-12 md:py-16 lg:py-20 bg-background">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline uppercase">Apresentamos o <span className="text-primary">CETOX30</span></h2>
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
    );
}
