import { useEffect, useRef } from 'react';

export default function useScrollLogger(onScrollDown: () => void, delay: number) {
  const cooldown = useRef(false);
  const startY = useRef(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0 && !cooldown.current) {
        onScrollDown();
        cooldown.current = true;
        setTimeout(() => {
          cooldown.current = false;
        }, delay);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      startY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const endY = event.changedTouches[0].clientY;
      const distance = startY.current - endY;

      if (distance > 50 && !cooldown.current) {
        onScrollDown();
        cooldown.current = true;
        setTimeout(() => {
          cooldown.current = false;
        }, delay);
      }
    };

    addEventListener('wheel', handleScroll, { passive: true });
    addEventListener('touchstart', handleTouchStart);
    addEventListener('touchend', handleTouchEnd);

    return () => {
      removeEventListener('wheel', handleScroll);
      removeEventListener('touchstart', handleTouchStart);
      removeEventListener('touchend', handleTouchEnd);
    };
  }, [onScrollDown, delay]);
}
