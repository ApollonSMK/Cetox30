"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

const SLOTS_STORAGE_KEY = 'cetox30_slots';
const TARGET_SLOTS = 15;
const COUNTDOWN_DURATION_SECONDS = 420; // 7 minutes
const CONTENT_REVEAL_DELAY_SECONDS = 4680; // 78 minutes

interface SlotsContextType {
  slots: number;
  notificationTrigger: number;
  isContentVisible: boolean;
}

const SlotsContext = createContext<SlotsContextType | undefined>(undefined);

export const SlotsProvider = ({ children, initialSlots = 35 }: { children: ReactNode, initialSlots: number }) => {
  const [slots, setSlots] = useState(initialSlots);
  const [notificationTrigger, setNotificationTrigger] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    try {
      const storedSlots = localStorage.getItem(SLOTS_STORAGE_KEY);
      if (storedSlots !== null) {
        const parsedSlots = parseInt(storedSlots, 10);
        if (!isNaN(parsedSlots) && parsedSlots > 0) {
          if (parsedSlots <= TARGET_SLOTS) {
            setSlots(parsedSlots);
            setIsContentVisible(true); // Se as vagas já estão baixas, mostra o conteúdo
          } else {
            setSlots(initialSlots);
            localStorage.setItem(SLOTS_STORAGE_KEY, String(initialSlots));
          }
        }
      } else {
        localStorage.setItem(SLOTS_STORAGE_KEY, String(initialSlots));
      }
    } catch (error) {
      console.warn("Could not read slots from localStorage", error);
    }
  }, [initialSlots]);
  
  // Efeito para revelar o conteúdo após o delay
  useEffect(() => {
    if (isContentVisible) {
      return;
    }

    const contentRevealTimer = setTimeout(() => {
      setIsContentVisible(true);
    }, CONTENT_REVEAL_DELAY_SECONDS * 1000);

    return () => {
      clearTimeout(contentRevealTimer);
    };
  }, [isContentVisible]);

  // Efeito para diminuir as vagas, SÓ DEPOIS do conteúdo estar visível
  useEffect(() => {
    if (!isContentVisible || slots <= TARGET_SLOTS) {
      return;
    }

    const slotsToDrop = slots - TARGET_SLOTS;
    if (slotsToDrop <= 0) return;
    
    const intervalMilliseconds = (COUNTDOWN_DURATION_SECONDS / slotsToDrop) * 1000;

    const slotTimer = setInterval(() => {
      setSlots(prevSlots => {
        if (prevSlots <= TARGET_SLOTS) {
          clearInterval(slotTimer);
          return prevSlots;
        }

        const newSlots = prevSlots - 1;
        
        setNotificationTrigger(val => val + 1);
        
        try {
          localStorage.setItem(SLOTS_STORAGE_KEY, String(newSlots));
        } catch (error) {
          console.warn("Could not save slots to localStorage", error);
        }
        
        return newSlots;
      });
    }, intervalMilliseconds);

    return () => {
      clearInterval(slotTimer);
    };
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
