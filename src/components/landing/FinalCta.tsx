"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function FinalCta() {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        // Set a fixed target date for demonstration, e.g., end of the current day
        const difference = +new Date(`${year}-12-31T23:59:59`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto border-2 border-muted rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
                    <h2 className="text-center text-2xl sm:text-3xl font-bold uppercase">
                        <span className="text-destructive">Atenção:</span> Oferta por Tempo Limitado!
                    </h2>
                    
                    <div className="bg-destructive text-destructive-foreground rounded-lg p-4 text-center">
                        <p className="text-sm mb-2">Esta oferta termina em:</p>
                        <div className="flex justify-center items-center gap-2 sm:gap-4">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl sm:text-4xl font-bold">{formatTime(timeLeft.hours || 0)}</span>
                                <span className="text-xs uppercase">Horas</span>
                            </div>
                            <span className="text-3xl sm:text-4xl font-bold">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl sm:text-4xl font-bold">{formatTime(timeLeft.minutes || 0)}</span>
                                <span className="text-xs uppercase">Min</span>
                            </div>
                            <span className="text-3xl sm:text-4xl font-bold">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl sm:text-4xl font-bold">{formatTime(timeLeft.seconds || 0)}</span>
                                <span className="text-xs uppercase">Seg</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-muted-foreground">
                        Apenas <span className="font-bold text-destructive">15 vagas</span> restantes com desconto especial!
                    </p>

                    <div className="bg-primary/10 rounded-lg p-6 text-center space-y-4">
                         <h3 className="text-xl sm:text-2xl font-bold text-primary">TENHA ACESSO AO PLANO CETOX30 COM 70% DE DESCONTO HOJE!</h3>
                         <Button asChild size="lg" className="w-full sm:w-auto font-bold animate-breathing-pulse">
                            <a href="#">
                                INSCREVER-ME AGORA
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
