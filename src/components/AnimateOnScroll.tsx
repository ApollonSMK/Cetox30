"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationName = "fade-in-up" | "fade-in-down" | "zoom-in";

const animationClasses: Record<AnimationName, string> = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in-down": "animate-fade-in-down",
  "zoom-in": "animate-zoom-in",
};

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationName;
  duration?: number;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-in-up",
  duration = 800,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  const style = {
    animationDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
  };

  const animationClass = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0", // Start as invisible
        isVisible && `${animationClass} opacity-100`, // Apply animation and make visible
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
