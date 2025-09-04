import { Button } from "@/components/ui/button";

export function Guarantee() {
  return (
    <section className="w-full pb-12 md:pb-16 lg:pb-20 bg-background">
        <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-secondary/30 p-8 rounded-lg border shadow-lg">
                <h3 className="text-2xl font-bold mb-4">O seu Risco é ZERO!</h3>
                <p className="text-muted-foreground mb-4">
                    Temos tanta confiança nos resultados que o plano CETOX30 pode
                    proporcionar que lhe oferecemos uma garantia incondicional de 15
                    dias. Se, por qualquer motivo, não ficar completamente satisfeito,
                    basta enviar-nos um e-mail e devolveremos 100% do seu investimento.
                    Sem perguntas, sem complicações.
                </p>
                <Button asChild size="lg">
                    <a href="#comprar">QUERO TRANSFORMAR O MEU CORPO</a>
                </Button>
            </div>
        </div>
    </section>
  );
}
