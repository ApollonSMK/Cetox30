import { Flame } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
        <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-primary" />
            <p>&copy; {currentYear} Cetox30. Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-4">
            <a href="#" className="hover:underline text-background/80 hover:text-background">Política de Privacidade</a>
            <a href="#" className="hover:underline text-background/80 hover:text-background">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
