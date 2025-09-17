"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Loader2, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createCheckoutSession } from "./actions";
import { useToast } from "@/hooks/use-toast";
import * as fpixel from '@/lib/fpixel';

const checkoutSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
});

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  
  const product = {
    name: "Plano de Emagrecimento Cetox30",
    price: "33,99€",
  };

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof checkoutSchema>) {
    setIsSubmitting(true);
    
    try {
      // Track InitiateCheckout event with Facebook Pixel
      // This is inside the try block so if it's blocked by an ad-blocker, it doesn't stop the checkout process.
      fpixel.event('InitiateCheckout');

      const result = await createCheckoutSession(values);
      
      if (result.error) {
        toast({
          title: "Erro",
          description: result.error,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      if (result.url) {
        router.push(result.url);
      } else {
        throw new Error("URL de checkout não recebida.");
      }
    } catch (error) {
      console.error("Erro inesperado no cliente:", error);
      toast({
        title: "Erro Inesperado",
        description: "Não foi possível iniciar o checkout. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-lg animate-zoom-in relative">
          <Button 
            variant="ghost"
            size="icon"
            className="absolute top-3 left-3 rounded-full" 
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Voltar</span>
          </Button>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline text-center">Quase lá!</CardTitle>
            {!isSubmitting && (
                <CardDescription className="text-center">
                    Preencha os seus dados para continuar para o pagamento.
                </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-background/50 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">{product.name}</span>
                    <span className="font-bold text-primary">{product.price}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-extrabold text-primary">{product.price}</span>
                </div>
            </div>
            
            {isSubmitting ? (
              <div className="flex flex-col items-center justify-center space-y-4 text-muted-foreground pt-6">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-center">
                  Você está sendo redirecionado para um ambiente seguro para finalizar o pagamento.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full font-bold" size="lg">
                      INSCREVER-ME
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
