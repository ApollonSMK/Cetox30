"use client";

import { Suspense } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
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
import { SocialProof } from "@/components/landing/SocialProof";
import { SlotsProvider, useSlots } from "@/contexts/SlotsContext";

function PageContent() {
  const { isContentVisible } = useSlots();
  return (
    <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col min-h-[100dvh] bg-background">
          <Header />
          <main className="flex-1 overflow-hidden">
            <AnimateOnScroll animation="fade-in-down" delay={200}>
              <Hero />
            </AnimateOnScroll>
            {isContentVisible && (
              <>
                <AnimateOnScroll animation="fade-in-up">
                  <Frustrations />
                </AnimateOnScroll>
                <AnimateOnScroll animation="zoom-in" threshold={0.3}>
                  <Creator />
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-in-up">
                  <Benefits />
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-in-up">
                  <BeforeAfter />
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-in-up">
                  <ProductInfo />
                </AnimateOnScroll>
                <AnimateOnScroll animation="zoom-in" threshold={0.1}>
                  <Reviews />
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-in-up">
                  <CtaSection />
                </AnimateOnScroll>
                <AnimateOnScroll animation="zoom-in" threshold={0.1}>
                  <FinalCta />
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-in-up">
                  <Guarantee />
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-in-up" threshold={0.1}>
                  <Faq />
                </AnimateOnScroll>
              </>
            )}
          </main>
          <Footer />
          <SocialProof />
        </div>
      </div>
  )
}

function PageWithProvider() {
  return (
    <SlotsProvider initialSlots={35}>
      <PageContent />
    </SlotsProvider>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageWithProvider />
    </Suspense>
  );
}
