import { Flame } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-8 px-4 md:px-6 text-center text-sm space-y-4">
        <p className="text-xs text-background/60 max-w-3xl mx-auto">
            A venda do Projeto Cetox30 só pode ser realizada através deste site, registado em nome de Plano Cetox. Qualquer outro site onde encontre este programa é uma FALSIFICAÇÃO e vai contra as leis. Evite falsificações e recuse conteúdos ilegais ou pirateados. NÃO adquira programas parecidos que não são baseados em anos de estudo da psicologia comportamental. Não nos responsabilizamos por compras realizadas noutros sites.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4 border-t border-background/20 pt-6">
            <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                <p>Copyright {currentYear} – Plano Cetox ® | Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-4">
                <Link href="/termos" className="hover:underline text-background/80 hover:text-background">Termos de Utilização</Link>
                <Link href="/privacidade" className="hover:underline text-background/80 hover:text-background">Política de Privacidade</Link>
                <a href="#" className="hover:underline text-background/80 hover:text-background">Política de Reembolso</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
