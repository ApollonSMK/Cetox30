import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProductInfo } from "@/components/landing/ProductInfo";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Reviews } from "@/components/landing/Reviews";
import { Faq } from "@/components/landing/Faq";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductInfo />
        <BeforeAfter />
        <Reviews />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
