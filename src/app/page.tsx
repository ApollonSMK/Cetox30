import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Frustrations } from "@/components/landing/Frustrations";
import { Creator } from "@/components/landing/Creator";
import { Benefits } from "@/components/landing/Benefits";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { ProductInfo } from "@/components/landing/ProductInfo";
import { Reviews } from "@/components/landing/Reviews";
import { CtaSection } from "@/components/landing/CtaSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { Guarantee } from "@/components/landing/Guarantee";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Frustrations />
        <Creator />
        <Benefits />
        <BeforeAfter />
        <ProductInfo />
        <Reviews />
        <CtaSection />
        <Guarantee />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
