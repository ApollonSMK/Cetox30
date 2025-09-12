"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ShoppingBag, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const names = [
    "Ana Silva", "João Santos", "Maria Oliveira", "Pedro Costa", "Sofia Pereira",
    "Carlos Martins", "Mariana Rodrigues", "José Ferreira", "Beatriz Almeida", "Miguel Sousa",
    "Catarina Gomes", "André Carvalho", "Inês Fernandes", "Ricardo Pinto", "Laura Ramos",
    "Francisco Jesus", "Bárbara Moreira", "Tiago Correia", "Daniela Nunes", "Rui Mendes",
    "Julia Fogaça", "Lucas Martins", "Gabriela Lima", "Matheus Almeida", "Isabela Ribeiro",
    "Enzo Pereira", "Manuela Azevedo", "Felipe Barbosa", "Yasmin Rocha", "Arthur Castro",
    "Clara Moraes", "Guilherme Dias", "Lívia Bernardes", "Rafael Teixeira", "Helena Faria"
];
const locations = [
    { city: "Lisboa", country: "Portugal", flag: "🇵🇹" },
    { city: "Porto", country: "Portugal", flag: "🇵🇹" },
    { city: "Sintra", country: "Portugal", flag: "🇵🇹" },
    { city: "Faro", country: "Portugal", flag: "🇵🇹" },
    { city: "Braga", country: "Portugal", flag: "🇵🇹" },
    { city: "Coimbra", country: "Portugal", flag: "🇵🇹" },
    { city: "Genebra", country: "Suíça", flag: "🇨🇭" },
    { city: "Zurique", country: "Suíça", flag: "🇨🇭" },
    { city: "Luxemburgo", country: "Luxemburgo", flag: "🇱🇺" },
    { city: "Funchal", country: "Portugal", flag: "🇵🇹" },
    { city: "Paris", country: "França", flag: "🇫🇷" },
    { city: "São Paulo", country: "Brasil", flag: "🇧🇷" },
    { city: "Rio de Janeiro", country: "Brasil", flag: "🇧🇷" },
    { city: "Londres", country: "Reino Unido", flag: "🇬🇧" }
];

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

    const showRandomProof = () => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        setCurrentProof({ name: randomName, location: randomLocation, time: Date.now() });
        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
        }, 6000); // Hide after 6 seconds
    };

    useEffect(() => {
        const initialTimeout = setTimeout(showRandomProof, 7000); 

        const interval = setInterval(() => {
            showRandomProof();
        }, Math.random() * (15000 - 8000) + 8000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

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