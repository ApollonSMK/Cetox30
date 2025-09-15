"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useSlots } from "@/contexts/SlotsContext";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function SlotsModal() {
  const { showModal, setShowModal } = useSlots();
  const router = useRouter();

  const handleAction = () => {
    setShowModal(false);
    router.push('/checkout');
  }

  return (
    <AlertDialog open={showModal} onOpenChange={setShowModal}>
      <AlertDialogContent className="max-w-md text-center">
        <AlertDialogHeader className="space-y-4">
          <div className="mx-auto w-fit rounded-full bg-destructive/10 p-4">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <AlertDialogTitle className="text-2xl font-extrabold font-headline">
            ÚLTIMAS VAGAS!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-muted-foreground">
            Restam apenas <span className="font-bold text-destructive">15 vagas</span> com o desconto especial. Não perca esta oportunidade única e garanta já a sua!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogAction 
          onClick={handleAction} 
          className="w-full font-bold text-lg h-12"
        >
          GARANTIR A MINHA VAGA AGORA
          <ArrowRight className="ml-2 h-5 w-5" />
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
