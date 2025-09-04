import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a className="flex items-center gap-2" href="#">
          <Flame className="h-6 w-6 text-primary" />
          <span className="text-xl font-extrabold tracking-tight">Plano Cetox30</span>
        </a>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-md transition-transform hover:scale-105 px-2 text-sm sm:px-4 sm:text-base">
          <a href="#comprar">Comprar Agora</a>
        </Button>
      </div>
    </header>
  );
}
