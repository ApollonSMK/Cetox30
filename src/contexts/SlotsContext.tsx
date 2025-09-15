"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

const SLOTS_STORAGE_KEY = 'cetox30_slots';
const INITIAL_SLOTS_VALUE = 35;
const TARGET_SLOTS = 15;
const COUNTDOWN_DURATION_SECONDS = 420; // 7 minutes
const CONTENT_REVEAL_DELAY_SECONDS = 4680; // 78 minutes

interface SlotsContextType {
  slots: number;
  notificationTrigger: number;
  isContentVisible: boolean;
}

const SlotsContext = createContext<SlotsContextType | undefined>(undefined);

export const SlotsProvider = ({ children, initialSlots = INITIAL_SLOTS_VALUE }: { children: ReactNode, initialSlots?: number }) => {
  const [slots, setSlots] = useState(initialSlots);
  const [notificationTrigger, setNotificationTrigger] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Efeito para carregar o estado inicial do localStorage
  useEffect(() => {
    try {
      const storedSlots = localStorage.getItem(SLOTS_STORAGE_KEY);
      if (storedSlots !== null) {
        const parsedSlots = parseInt(storedSlots, 10);
        if (!isNaN(parsedSlots) && parsedSlots > 0) {
          if (parsedSlots <= TARGET_SLOTS) {
            // Se as vagas armazenadas já atingiram o alvo, mostramos tudo imediatamente.
            setSlots(parsedSlots);
            setIsContentVisible(true);
          } else {
            // Caso contrário, usamos o valor inicial para garantir que o processo comece do ponto certo.
            setSlots(initialSlots);
          }
        }
      } else {
        localStorage.setItem(SLOTS_STORAGE_KEY, String(initialSlots));
      }
    } catch (error) {
      console.warn("Could not read slots from localStorage", error);
      setSlots(initialSlots);
    }
  }, [initialSlots]);

  // Efeito para revelar o conteúdo após o delay de 78 minutos
  useEffect(() => {
    // Se o conteúdo já está visível (ex, por causa do localStorage), não faz nada.
    if (isContentVisible) {
      return;
    }

    const contentRevealTimer = setTimeout(() => {
      setIsContentVisible(true);
    }, CONTENT_REVEAL_DELAY_SECONDS * 1000);

    // Limpa o temporizador se o componente for desmontado
    return () => clearTimeout(contentRevealTimer);
  }, [isContentVisible]);


  // Efeito para diminuir as vagas, SÓ DEPOIS do conteúdo estar visível
  useEffect(() => {
    // Só executa se o conteúdo estiver visível e se ainda houver vagas para diminuir.
    if (!isContentVisible || slots <= TARGET_SLOTS) {
      return;
    }

    const slotsToDrop = slots - TARGET_SLOTS;
    if (slotsToDrop <= 0) return;
    
    // O intervalo é calculado para que a queda dure 7 minutos (420 segundos)
    const intervalMilliseconds = (COUNTDOWN_DURATION_SECONDS / slotsToDrop) * 1000;

    const slotTimer = setInterval(() => {
      setSlots(prevSlots => {
        // Para o temporizador se atingir o alvo
        if (prevSlots <= TARGET_SLOTS) {
          clearInterval(slotTimer);
          return prevSlots;
        }

        const newSlots = prevSlots - 1;
        
        // Dispara a notificação de compra
        setNotificationTrigger(val => val + 1);
        
        try {
          localStorage.setItem(SLOTS_STORAGE_KEY, String(newSlots));
        } catch (error) {
          console.warn("Could not save slots to localStorage", error);
        }
        
        return newSlots;
      });
    }, intervalMilliseconds);

    // Limpa o temporizador se o componente for desmontado ou as dependências mudarem
    return () => clearInterval(slotTimer);
  }, [isContentVisible, slots]);


  const contextValue = {
    slots,
    notificationTrigger,
    isContentVisible,
  };

  return (
    <SlotsContext.Provider value={contextValue}>
      {children}
    </SlotsContext.Provider>
  );
};

export const useSlots = () => {
  const context = useContext(SlotsContext);
  if (context === undefined) {
    throw new Error('useSlots must be used within a SlotsProvider');
  }
  return context;
};
