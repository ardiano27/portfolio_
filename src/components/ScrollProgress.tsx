"use client";

import { useScroll, useSpring, motion } from "framer-motion";

/**
 * Renders a fixed 2px progress bar at the top of the viewport.
 * useScroll provides scrollYProgress (0–1), useSpring smooths it.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Spring gives it a satisfying inertia feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none"
      aria-hidden="true"
    >
      {/* Gradient fill matching the original CSS */}
      <div className="w-full h-full bg-gradient-to-r from-accent to-accent-light" />
    </motion.div>
  );
}