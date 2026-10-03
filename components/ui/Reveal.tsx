"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

const subscribe = () => () => {};

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const prefersReduced = useReducedMotion();
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const reduce = hydrated && Boolean(prefersReduced);
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .15 }}
      transition={{ duration: .55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`motion-reveal ${className}`}
    >{children}</motion.div>
  );
}
