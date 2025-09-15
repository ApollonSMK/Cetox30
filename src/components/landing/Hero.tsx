"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from 'lucide-react';
import { useSlots } from '@/contexts/SlotsContext';

export function Hero() {
  const [viewers, setViewers] = useState(0);
  const { slots, isContentVisible } = useSlots();

  useEffect(() => {
    // Set initial random viewers
    const initialViewers = Math.floor(Math.random() * (350 - 250 + 1)) + 250;
    setViewers(initialViewers);

    // Function to update viewers count
    const updateViewers = () => {
      const change = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, 1, 2
      setViewers(prevViewers => Math.max(200, prevViewers + change)); // Keep it above a minimum
    };

    // Update every few seconds
    const interval = setInterval(updateViewers, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30 text-center">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Desafio
          </h2>
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline max-w-4xl mx-auto uppercase">
            <span className="text-primary">30 Dias</span> para perder peso em casa{" "}
            <span className="text-primary">sem deixar de comer</span> o que mais gosta!
          </h1>
        </div>

        <div className="w-full max-w-4xl relative">
          <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
            <iframe
              src="https://poetic-llama-eabca1.netlify.app/"
              allow="autoplay; encrypted-media"
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
             {viewers > 0 && (
              <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-lg flex items-center gap-2 text-sm backdrop-blur-sm animate-fade-in-up">
                <Eye className="h-5 w-5" />
                <span>{viewers} pessoas estão a assistir a este vídeo</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto">
          <p className="text-muted-foreground md:text-xl">
            Descubra o sistema revolucionário que já ajudou mais de 1000 pessoas a alcançarem resultados extraordinários.
          </p>

          <Badge variant="destructive" className="text-base font-semibold animate-pulse p-3 whitespace-normal text-center">
            🔥 OFERTA LIMITADA: Apenas {slots} vagas restantes! Garanta já a sua!
          </Badge>

          {isContentVisible && (
            <div className="flex flex-col items-center space-y-4 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-2xl text-muted-foreground line-through">67,98€</span>
                <span className="text-4xl sm:text-5xl font-bold text-primary">33,99€</span>
              </div>

              <Button asChild size="lg" className="font-bold text-xl h-14 animate-breathing-pulse shadow-xl w-full sm:w-auto">
                <a href="/checkout">QUERO EMAGRECER</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
