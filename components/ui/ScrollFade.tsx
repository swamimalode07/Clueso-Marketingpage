"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const FADE = "48px";

type ScrollFadeProps = {
  children: ReactNode;
  className?: string;
};

const ScrollFade = ({ children, className = "" }: ScrollFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: false, end: false });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      setEdges({
        start: scrollLeft > 1,
        end: scrollLeft + clientWidth < scrollWidth - 1,
      });
    };

    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);

    return () => {
      element.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const maskImage = `linear-gradient(to right, ${
    edges.start ? `transparent 0, black ${FADE}` : "black 0"
  }, ${edges.end ? `black calc(100% - ${FADE}), transparent 100%` : "black 100%"})`;

  return (
    <div
      ref={ref}
      style={{ maskImage, WebkitMaskImage: maskImage }}
      className={`overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollFade;
