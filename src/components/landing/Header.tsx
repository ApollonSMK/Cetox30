import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary/90 text-primary-foreground backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container flex h-14 items-center justify-center px-4 text-center md:px-6">
        <div className="flex items-center gap-4">
          <p className="hidden font-semibold sm:block">
            Atenção: Esta oferta termina em breve!
          </p>
          <Button
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold shadow-md transition-transform hover:scale-105"
            size="sm"
          >
            <a href="/checkout">
              Aproveitar Oferta
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
