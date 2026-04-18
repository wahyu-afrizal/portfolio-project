'use client';

import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxYProps = {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
};

export default function ParallaxY({
  children,
  className,
  from = 24,
  to = -24,
}: ParallaxYProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} className={className} style={{ position: "relative" }}>
      <motion.div style={reduceMotion ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}
