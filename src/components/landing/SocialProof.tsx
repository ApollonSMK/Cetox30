"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { ShoppingBag, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSlots } from '@/contexts/SlotsContext';

const names = [
    "Ana Silva", "João Santos", "Maria Oliveira", "Pedro Costa", "Sofia Pereira", "Carlos Martins", "Mariana Rodrigues", "José Ferreira", "Beatriz Almeida", "Miguel Sousa",
    "Catarina Gomes", "André Carvalho", "Inês Fernandes", "Ricardo Pinto", "Laura Ramos", "Francisco Jesus", "Bárbara Moreira", "Tiago Correia", "Daniela Nunes", "Rui Mendes",
    "Léa Schmitt", "Paul Muller", "Sophie Weber", "Felix Becker", "Marie Hoffmann", "Lars Fischer", "Julia Schneider", "Tom Klein", "Emma Wagner", "Ben Bauer",
    "Lucía García", "Mateo Rodríguez", "Sofía Martínez", "Hugo López", "Martina Sánchez", "Daniel Pérez", "Paula Gómez", "Alejandro Martín", "Valeria Ruiz", "Pablo Díaz",
    "Chloé Dubois", "Louis Lambert", "Manon Bernard", "Gabriel Thomas", "Camille Petit", "Jules Durand", "Alice Moreau", "Adam Simon", "Louise Michel", "Hugo Leroy",
    "Giulia Rossi", "Alessandro Russo", "Sofia Ferrari", "Lorenzo Esposito", "Alice Bianchi", "Matteo Romano", "Beatrice Colombo", "Leonardo Ricci", "Ginevra Marino", "Tommaso Greco"
];

const locations = [
    { city: "Lisboa", country: "Portugal", flag: "🇵🇹" }, { city: "Porto", country: "Portugal", flag: "🇵🇹" }, { city: "Faro", country: "Portugal", flag: "🇵🇹" },
    { city: "Braga", country: "Portugal", flag: "🇵🇹" }, { city: "Coimbra", country: "Portugal", flag: "🇵🇹" },
    { city: "Luxemburgo", country: "Luxemburgo", flag: "🇱🇺" }, { city: "Esch-sur-Alzette", country: "Luxemburgo", flag: "🇱🇺" },
    { city: "Munique", country: "Alemanha", flag: "🇩🇪" }, { city: "Berlim", country: "Alemanha", flag: "🇩🇪" }, { city: "Hamburgo", country: "Alemanha", flag: "🇩🇪" },
    { city: "Bruxelas", country: "Bélgica", flag: "🇧🇪" }, { city: "Antuérpia", country: "Bélgica", flag: "🇧🇪" },
    { city: "Madrid", country: "Espanha", flag: "🇪🇸" }, { city: "Barcelona", country: "Espanha", flag: "🇪🇸" }, { city: "Valência", country: "Espanha", flag: "🇪🇸" },
    { city: "Genebra", country: "Suíça", flag: "🇨🇭" }, { city: "Zurique", country: "Suíça", flag: "🇨🇭" },
    { city: "Paris", country: "França", flag: "🇫🇷" }, { city: "Marselha", country: "França", flag: "🇫🇷" },
];


// Helper to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};


type Proof = {
    name: string;
    location: { city: string; country: string; flag: string; };
    time: number;
};

function TimeAgo({ time }: { time: number }) {
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setNow(Date.now()), 5000); // update every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const secondsAgo = Math.round((now - time) / 1000);

    if (secondsAgo < 5) return <span>há poucos segundos</span>;
    if (secondsAgo < 60) return <span>há {secondsAgo} segundos</span>;
    if (secondsAgo < 120) return <span>há um minuto</span>;
    
    return <span>há {Math.floor(secondsAgo / 60)} minutos</span>;
}

export function SocialProof() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentProof, setCurrentProof] = useState<Proof | null>(null);
    const { decrementSlots } = useSlots();
    
    // State to hold the shuffled names and the current index
    const [shuffledNames, setShuffledNames] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Shuffle names only once on component mount
    useEffect(() => {
        setShuffledNames(shuffleArray(names));
    }, []);

    const showRandomProof = useCallback(() => {
        if (shuffledNames.length === 0) return;

        // Reset index if we've used all names
        const index = currentIndex >= shuffledNames.length ? 0 : currentIndex;

        const randomName = shuffledNames[index];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        
        setCurrentProof({ name: randomName, location: randomLocation, time: Date.now() });
        setIsVisible(true);
        decrementSlots();

        // Increment index for the next use
        setCurrentIndex(index + 1);

        setTimeout(() => {
            setIsVisible(false);
        }, 6000); // Hide after 6 seconds
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shuffledNames, currentIndex, decrementSlots]);

    useEffect(() => {
        const initialTimeout = setTimeout(showRandomProof, 7000); 

        const interval = setInterval(() => {
            showRandomProof();
        }, Math.random() * (15000 - 8000) + 8000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, [showRandomProof]);

    return (
        <div 
            className={cn(
                "fixed bottom-4 left-4 z-50 transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                "w-[calc(100%-2rem)] max-w-sm"
            )}
        >
            {isVisible && currentProof && (
                <Card className="p-4 shadow-2xl flex items-start gap-4 animate-fade-in-up">
                    <div className="p-3 bg-primary/10 rounded-full mt-1">
                        <ShoppingBag className="h-5 w-5 text-primary-solid" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <p className="font-semibold text-sm text-foreground leading-tight">
                            {currentProof.name} comprou o plano!
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                           <span>{currentProof.location.flag} {currentProof.location.city}</span>
                           <span className="text-xs text-muted-foreground/50">•</span>
                           <span className="text-xs"><TimeAgo time={currentProof.time} /></span>
                        </div>
                    </div>
                    <button onClick={() => setIsVisible(false)} className="text-muted-foreground hover:text-foreground absolute top-2 right-2">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Fechar</span>
                    </button>
                </Card>
            )}
        </div>
    );
}
