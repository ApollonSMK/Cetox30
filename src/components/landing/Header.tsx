export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-destructive text-destructive-foreground">
      <div className="container flex h-14 items-center justify-center px-4 text-center md:px-6">
        <p className="font-semibold">
          Atenção: Esta oferta termina em breve!
        </p>
      </div>
    </header>
  );
}
