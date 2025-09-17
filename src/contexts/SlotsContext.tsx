"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const INITIAL_SLOTS_VALUE = 35;
const TARGET_SLOTS = 15;
const COUNTDOWN_DURATION_SECONDS = 420; // 7 minutes
const CONTENT_REVEAL_DELAY_SECONDS = 420; // 7 minutes

interface SlotsContextType {
  slots: number;
  notificationTrigger: number;
  isContentVisible: boolean;
}

const SlotsContext = createContext<SlotsContextType | undefined>(undefined);

export const SlotsProvider = ({ children, initialSlots = INITIAL_SLOTS_VALUE }: { children: ReactNode, initialSlots?: number }) => {
  const searchParams = useSearchParams();
  const unlock = searchParams.get('unlock') === 'true';

  const [slots, setSlots] = useState(initialSlots);
  const [notificationTrigger, setNotificationTrigger] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(unlock);

  // Effect to handle content visibility timer (reveal after 7 minutes)
  useEffect(() => {
    if (unlock) {
      setIsContentVisible(true);
      setSlots(TARGET_SLOTS);
      return;
    }

    const contentRevealTimer = setTimeout(() => {
      setIsContentVisible(true);
    }, CONTENT_REVEAL_DELAY_SECONDS * 1000);

    return () => clearTimeout(contentRevealTimer);
  }, [unlock]);

  // Effect to handle the slots countdown and notifications
  useEffect(() => {
    if (unlock || slots <= TARGET_SLOTS) {
        return;
    }

    const slotsToDrop = INITIAL_SLOTS_VALUE - TARGET_SLOTS;
    if (slotsToDrop <= 0) return;
    
    // The interval is calculated so the drop lasts for COUNTDOWN_DURATION_SECONDS
    const intervalMilliseconds = (COUNTDOWN_DURATION_SECONDS / slotsToDrop) * 1000;

    const slotTimer = setInterval(() => {
      setSlots(prevSlots => {
        if (prevSlots <= TARGET_SLOTS) {
          clearInterval(slotTimer);
          return TARGET_SLOTS;
        }

        // Trigger the purchase notification
        setNotificationTrigger(val => val + 1);
        
        return prevSlots - 1;
      });
    }, intervalMilliseconds);

    // Cleanup timer if the component unmounts
    return () => clearInterval(slotTimer);
  }, [unlock, slots]);


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
