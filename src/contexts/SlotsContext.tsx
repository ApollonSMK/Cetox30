"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

const SLOTS_STORAGE_KEY = 'cetox30_slots';
const TARGET_SLOTS = 15;
const COUNTDOWN_DURATION_SECONDS = 360; // 6 minutes

interface SlotsContextType {
  slots: number;
  notificationTrigger: number;
  decrementSlots: () => void;
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
            setIsContentVisible(true);
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

  const decrementSlots = useCallback(() => {
    setSlots((prevSlots) => {
      const updatedSlots = prevSlots > 0 ? prevSlots - 1 : 0;
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
  }, []);

  useEffect(() => {
    if (isContentVisible) {
        return;
    }

    const slotsToDrop = slots - TARGET_SLOTS;
    if (slotsToDrop <= 0) {
        setIsContentVisible(true);
        return;
    }
    
    const intervalMilliseconds = (COUNTDOWN_DURATION_SECONDS / slotsToDrop) * 1000;

    const slotTimer = setInterval(() => {
        setSlots(prevSlots => {
            const newSlots = prevSlots > TARGET_SLOTS ? prevSlots - 1 : TARGET_SLOTS;
             if (newSlots > 0) {
                setNotificationTrigger(val => val + 1);
            }
             try {
                localStorage.setItem(SLOTS_STORAGE_KEY, String(newSlots));
            } catch (error) {
                console.warn("Could not save slots to localStorage", error);
            }
            if (newSlots === TARGET_SLOTS) {
                 clearInterval(slotTimer);
            }
            return newSlots;
        });
    }, intervalMilliseconds);

    const contentRevealTimer = setTimeout(() => {
        setIsContentVisible(true);
    }, COUNTDOWN_DURATION_SECONDS * 1000);

    return () => {
        clearInterval(slotTimer);
        clearTimeout(contentRevealTimer);
    };
  }, [isContentVisible, slots]);


  const contextValue = {
    slots,
    notificationTrigger,
    decrementSlots,
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
