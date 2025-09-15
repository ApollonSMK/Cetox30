"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

const SLOTS_STORAGE_KEY = 'cetox30_slots';
const TARGET_SLOTS = 15;
const COUNTDOWN_DURATION_SECONDS = 360; // 6 minutes

interface SlotsContextType {
  slots: number;
  notificationTrigger: number;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  decrementSlots: () => void; // Kept for manual triggers if needed
  isContentVisible: boolean;
}

const SlotsContext = createContext<SlotsContextType | undefined>(undefined);

export const SlotsProvider = ({ children, initialSlots = 35 }: { children: ReactNode, initialSlots: number }) => {
  const [slots, setSlots] = useState(initialSlots);
  const [isInitialized, setIsInitialized] = useState(false);
  const [notificationTrigger, setNotificationTrigger] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedSlots = localStorage.getItem(SLOTS_STORAGE_KEY);
      if (storedSlots !== null) {
        const parsedSlots = parseInt(storedSlots, 10);
        if (!isNaN(parsedSlots) && parsedSlots > 0) {
          setSlots(parsedSlots);
        } else {
          // If stored value is invalid or 0, reset it
          localStorage.setItem(SLOTS_STORAGE_KEY, String(initialSlots));
        }
      } else {
        localStorage.setItem(SLOTS_STORAGE_KEY, String(initialSlots));
      }
    } catch (error) {
      console.warn("Could not read slots from localStorage", error);
    }
    setIsInitialized(true);
  }, [initialSlots]);

  const decrementSlots = useCallback((newSlots?: number) => {
    if (!isInitialized) return;
    
    setSlots((prevSlots) => {
      const updatedSlots = newSlots !== undefined ? newSlots : (prevSlots > 0 ? prevSlots - 1 : 0);
      try {
        localStorage.setItem(SLOTS_STORAGE_KEY, String(updatedSlots));
      } catch (error) {
        console.warn("Could not save slots to localStorage", error);
      }
      if (updatedSlots > 0) {
        setNotificationTrigger(val => val + 1);
      }
      return updatedSlots;
    });
  }, [isInitialized]);

  // The main countdown timer logic
  useEffect(() => {
    if (!isInitialized) return;

    // If we load and slots are already low, show content immediately.
    if (slots <= TARGET_SLOTS) {
      setIsContentVisible(true);
      return;
    }

    const slotsToDrop = slots - TARGET_SLOTS;
    const intervalMilliseconds = (COUNTDOWN_DURATION_SECONDS / slotsToDrop) * 1000;

    const timer = setInterval(() => {
      setSlots(prevSlots => {
        // This is the source of truth for stopping the timer.
        if (prevSlots <= TARGET_SLOTS) {
          clearInterval(timer);
          // This block won't be reached if the timer is cleared correctly below,
          // but it's a good safeguard.
          if (!isContentVisible) {
            setIsContentVisible(true);
            setShowModal(true);
          }
          return prevSlots;
        }

        const newSlots = prevSlots - 1;
        
        // Use the callback version of decrementSlots to ensure it has the latest state.
        decrementSlots(newSlots);
        
        // This check is the most important one.
        if (newSlots <= TARGET_SLOTS) {
          clearInterval(timer);
          setIsContentVisible(true);
          setShowModal(true);
          return TARGET_SLOTS;
        }

        return newSlots;
      });
    }, intervalMilliseconds);

    return () => clearInterval(timer);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);


  const contextValue = {
    slots,
    notificationTrigger,
    showModal,
    setShowModal,
    decrementSlots: () => decrementSlots(), // expose manual decrement
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
