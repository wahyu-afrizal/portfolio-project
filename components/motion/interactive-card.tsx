'use client';

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
  intensity?: "soft" | "medium";
};

export default function InteractiveCard({
  children,
  className,
  intensity = "soft",
}: InteractiveCardProps) {
  const reduceMotion = useReducedMotion();

  const hover =
    intensity === "medium"
      ? { y: -8 }
      : { y: -5 };

  return (
    <motion.div
      className={className}
      whileHover={reduceMotion ? undefined : hover}
      whileTap={reduceMotion ? undefined : { y: -2 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
        mass: 0.9,
      }}
    >
      {children}
    </motion.div>
  );
}
