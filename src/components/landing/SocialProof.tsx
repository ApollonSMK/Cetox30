"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ShoppingBag, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const names = ["Ana S.", "João P.", "Mariana C.", "Pedro M.", "Sofia R."];
const locations = ["Lisboa", "Porto", "Coimbra", "Faro", "Braga"];

export function SocialProof() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentProof, setCurrentProof] = useState({ name: '', location: '' });

    const showRandomProof = () => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        setCurrentProof({ name: randomName, location: randomLocation });
        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Hide after 5 seconds
    };

    useEffect(() => {
        // Show the first one after a short delay
        const initialTimeout = setTimeout(showRandomProof, 7000); 

        // Then show others on a random interval
        const interval = setInterval(() => {
            showRandomProof();
        }, Math.random() * (15000 - 8000) + 8000); // Random interval between 8 and 15 seconds

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
                "max-w-xs w-full"
            )}
        >
            {isVisible && (
                <Card className="p-4 shadow-2xl flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <ShoppingBag className="h-6 w-6 text-primary-solid" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-sm text-foreground">
                            {currentProof.name} de {currentProof.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Acabou de adquirir o Plano Cetox30!
                        </p>
                    </div>
                    <button onClick={() => setIsVisible(false)} className="text-muted-foreground hover:text-foreground">
                        <X className="h-4 w-4" />
                    </button>
                </Card>
            )}
        </div>
    );
}
