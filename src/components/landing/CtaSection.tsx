import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, Truck } from "lucide-react";

export function CtaSection() {
  return (
    <section id="comprar" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl/tight font-headline">
            Pronto para Começar Sua Transformação?
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
            Não espere mais. Garanta seu Cetox30 hoje com uma oferta especial e veja a mudança que você tanto deseja.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4">
            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl animate-breathing-pulse shadow-xl h-14">
                <a href="#">COMPRAR AGORA COM DESCONTO</a>
            </Button>
            <div className="flex justify-center items-center gap-4 text-sm text-primary-foreground/90 pt-2">
                <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Compra 100% Segura</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Lock className="h-4 w-4" />
                    <span>Privacidade Garantida</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <Truck className="h-4 w-4" />
                    <span>Frete Grátis</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
