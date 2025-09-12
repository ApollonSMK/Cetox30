"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SlotsContextType {
  slots: number;
  decrementSlots: () => void;
}

const SlotsContext = createContext<SlotsContextType | undefined>(undefined);

export const SlotsProvider = ({ children, initialSlots = 35 }: { children: ReactNode, initialSlots: number }) => {
  const [slots, setSlots] = useState(initialSlots);

  const decrementSlots = () => {
    setSlots((prevSlots) => (prevSlots > 0 ? prevSlots - 1 : 0));
  };

  return (
    <SlotsContext.Provider value={{ slots, decrementSlots }}>
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
