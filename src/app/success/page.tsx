"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
    return (
        <div className="flex flex-col min-h-screen bg-secondary/30">
            <Header />
            <main className="flex-1 flex items-center justify-center p-4">
                <Card className="max-w-md w-full shadow-lg animate-zoom-in text-center">
                <CardHeader>
                    <div className="mx-auto bg-green-100 rounded-full p-3 w-fit">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold font-headline text-center mt-4">Pagamento Aprovado!</CardTitle>
                    <CardDescription className="text-center text-lg mt-2">
                        Obrigado pela sua compra!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                        Em breve, você receberá um e-mail com todos os detalhes de acesso ao seu plano <strong>Cetox30</strong>.
                    </p>
                    <Button asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Voltar ao Início
                        </Link>
                    </Button>
                </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
