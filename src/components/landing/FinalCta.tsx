import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center border-t pt-12 space-y-4">
          <p className="text-lg text-muted-foreground font-semibold">
            TENHA ACESSO AO PLANO CETOX30 COM 70% DE DESCONTO HOJE!
          </p>
          <p className="text-lg text-muted-foreground">
            De <span className="line-through">107,97€</span> por apenas:
          </p>
          <p className="text-5xl lg:text-6xl font-extrabold text-primary">
            33,99€{" "}
            <span className="text-lg font-medium text-muted-foreground">
              (+IVA)
            </span>
          </p>
          <Button
            asChild
            size="lg"
            className="w-full max-w-md font-bold text-xl animate-breathing-pulse shadow-xl h-14"
          >
            <a href="#">Inscrever-me Agora</a>
          </Button>
          <p className="text-sm text-muted-foreground">
            ATENÇÃO: OFERTA POR TEMPO LIMITADO!
          </p>
          <p className="text-sm text-muted-foreground">
            Apenas 15 vagas restantes com desconto especial!
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center bg-secondary/30 p-8 rounded-lg border shadow-lg">
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
