"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

const SLOTS_STORAGE_KEY = 'cetox30_slots';

interface SlotsContextType {
  slots: number;
  decrementSlots: () => void;
}

const SlotsContext = createContext<SlotsContextType | undefined>(undefined);

export const SlotsProvider = ({ children, initialSlots = 35 }: { children: ReactNode, initialSlots: number }) => {
  const [slots, setSlots] = useState(initialSlots);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedSlots = localStorage.getItem(SLOTS_STORAGE_KEY);
      if (storedSlots !== null) {
        const parsedSlots = parseInt(storedSlots, 10);
        if (!isNaN(parsedSlots)) {
          setSlots(parsedSlots);
        }
      } else {
        localStorage.setItem(SLOTS_STORAGE_KEY, String(initialSlots));
      }
    } catch (error) {
      console.warn("Could not read slots from localStorage", error);
    }
    setIsInitialized(true);
  }, [initialSlots]);
  

  const decrementSlots = () => {
    if (!isInitialized) return;

    setSlots((prevSlots) => {
      const newSlots = prevSlots > 0 ? prevSlots - 1 : 0;
      try {
        localStorage.setItem(SLOTS_STORAGE_KEY, String(newSlots));
      } catch (error) {
        console.warn("Could not save slots to localStorage", error);
      }
      return newSlots;
    });
  };

  const contextValue = {
    slots,
    decrementSlots,
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