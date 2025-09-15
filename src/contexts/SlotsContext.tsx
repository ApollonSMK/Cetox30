"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

const SLOTS_STORAGE_KEY = 'cetox30_slots';
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
  const [slots, setSlots] = useState(initialSlots);
  const [notificationTrigger, setNotificationTrigger] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Effect to handle content visibility timer
  useEffect(() => {
    // If content is already visible (e.g., from a previous session that completed the timer), do nothing.
    if (isContentVisible) {
      return;
    }

    const contentRevealTimer = setTimeout(() => {
      setIsContentVisible(true);
    }, CONTENT_REVEAL_DELAY_SECONDS * 1000);

    // Cleanup timer if the component unmounts
    return () => clearTimeout(contentRevealTimer);
  }, [isContentVisible]);


  // Effect to handle the slots countdown, ONLY after the content is visible.
  useEffect(() => {
    // This effect should only run once the content is visible and if there are slots to count down.
    if (!isContentVisible || slots <= TARGET_SLOTS) {
        if(isContentVisible && slots <= TARGET_SLOTS) {
            setSlots(TARGET_SLOTS);
        }
      return;
    }

    const slotsToDrop = slots - TARGET_SLOTS;
    if (slotsToDrop <= 0) return;
    
    // The interval is calculated so the drop lasts for COUNTDOWN_DURATION_SECONDS
    const intervalMilliseconds = (COUNTDOWN_DURATION_SECONDS / slotsToDrop) * 1000;

    const slotTimer = setInterval(() => {
      setSlots(prevSlots => {
        // Stop the timer if the target is reached
        if (prevSlots <= TARGET_SLOTS) {
          clearInterval(slotTimer);
          return TARGET_SLOTS;
        }

        const newSlots = prevSlots - 1;
        
        // Trigger the purchase notification
        setNotificationTrigger(val => val + 1);
        
        try {
          localStorage.setItem(SLOTS_STORAGE_KEY, String(newSlots));
        } catch (error) {
          console.warn("Could not save slots to localStorage", error);
        }
        
        return newSlots;
      });
    }, intervalMilliseconds);

    // Cleanup timer if the component unmounts or dependencies change
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
