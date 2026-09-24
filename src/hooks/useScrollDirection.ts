import { useEffect, useRef, useState } from "react";

interface ScrollDirectionState {
  hidden: boolean;
}

export const useScrollDirection = (deltaThreshold = 12, hideAfterY = 56): ScrollDirectionState => {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const smoothedDelta = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    smoothedDelta.current = 0;

    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const delta = y - lastY.current;
        lastY.current = y;

        if (Math.abs(delta) < deltaThreshold) return;

        smoothedDelta.current = smoothedDelta.current * 0.4 + delta * 0.6;
        const trendingDown = smoothedDelta.current > 0;
        setHidden(trendingDown && y > hideAfterY);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [deltaThreshold, hideAfterY]);

  return { hidden };
};

export default useScrollDirection;