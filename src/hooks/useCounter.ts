import { useState, useEffect, useRef } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
  trigger?: boolean;
}

export const useCounter = ({ 
  start = 0, 
  end, 
  duration = 2000, 
  suffix = '', 
  trigger = true 
}: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || !trigger) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;
    const totalDuration = duration;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOut);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, trigger, start, end, duration]);

  const displayValue = `${count}${suffix}`;

  return {
    count,
    displayValue,
    elementRef,
    isVisible,
    hasAnimated
  };
};