'use client';

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroStat = {
  value: string;
  label: string;
};

type HomeHeroMotionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  panelEyebrow: string;
  panelTitle: string;
  panelCopy: string;
  stats: HeroStat[];
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HomeHeroMotion({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  panelEyebrow,
  panelTitle,
  panelCopy,
  stats,
}: HomeHeroMotionProps) {
  const reduceMotion = useReducedMotion();
  const visualRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start start", "end start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 1], [0, -26]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.42]);

  return (
    <>
      <motion.div
        className="home-hero__content"
        variants={reduceMotion ? undefined : containerVariants}
        initial={reduceMotion ? undefined : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
      >
        <motion.p
          className="section-label"
          variants={reduceMotion ? undefined : itemVariants}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="home-hero__title font-display"
          variants={reduceMotion ? undefined : itemVariants}
        >
          {title}
        </motion.h1>
        <motion.p
          className="home-hero__copy"
          variants={reduceMotion ? undefined : itemVariants}
        >
          {description}
        </motion.p>

        <motion.div
          className="home-hero__actions"
          variants={reduceMotion ? undefined : itemVariants}
        >
          <Link href={primaryHref} className="button-primary">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="button-secondary">
            {secondaryLabel}
          </Link>
        </motion.div>
      </motion.div>

      <div ref={visualRef} className="home-hero__visual">
        <motion.div
          className="home-hero__visual-layer"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={reduceMotion ? undefined : { duration: 0.5 }}
        >
        <motion.div
          className="home-hero__orbit home-hero__orbit--outer"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 26, ease: "linear", repeat: Number.POSITIVE_INFINITY }
          }
        />
        <motion.div
          className="home-hero__orbit home-hero__orbit--inner"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 18, ease: "linear", repeat: Number.POSITIVE_INFINITY }
          }
        />

        <motion.div
          className="home-hero__panel section-card"
          style={reduceMotion ? undefined : { y: panelY }}
          variants={reduceMotion ? undefined : panelVariants}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
        >
          <p className="section-label">{panelEyebrow}</p>
          <p className="home-hero__panel-title font-display">{panelTitle}</p>
          <p className="home-hero__panel-copy">{panelCopy}</p>
        </motion.div>

        <motion.div
          className="home-hero__stats"
          style={reduceMotion ? undefined : { y: statsY, opacity: statsOpacity }}
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.7, delay: 0.55 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="home-hero__stat"
              whileHover={reduceMotion ? undefined : { x: -4 }}
            >
              <span className="home-hero__stat-value">{stat.value}</span>
              <span className="home-hero__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </>
  );
}
