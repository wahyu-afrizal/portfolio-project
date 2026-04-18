"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type TypeLineProps = {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
};

export default function TypeLine({
  text,
  className,
  delay = 0,
  speed = 22,
}: TypeLineProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? text.length : 0);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCount(text.length);
      return;
    }

    if (!inView) {
      return;
    }

    const startTimeout = window.setTimeout(() => {
      let current = 0;
      const interval = window.setInterval(() => {
        current += 1;
        setVisibleCount(current);

        if (current >= text.length) {
          window.clearInterval(interval);
        }
      }, speed);
    }, delay * 1000);

    return () => {
      window.clearTimeout(startTimeout);
    };
  }, [delay, inView, reduceMotion, speed, text]);

  const typedText = text.slice(0, visibleCount);
  const isComplete = visibleCount >= text.length;

  return (
    <p ref={ref} className={className}>
      <span className="type-line__measure">{text}</span>
      <span aria-hidden="true" className="type-line__animated">
        <span className="type-line__text">{typedText}</span>
        {!isComplete ? <span className="type-line__caret" /> : null}
      </span>
    </p>
  );
}
