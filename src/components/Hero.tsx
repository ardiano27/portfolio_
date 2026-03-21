"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { personas } from "@/data/projects";

// ── Tool positions per persona ────────────────────────────────────────────
const devPositions = [
  { top: "10%", left: "5%", delay: 0, width: 70 },
  { top: "60%", right: "0%", delay: 2, width: 60 },
  { bottom: "10%", left: "15%", delay: 4, width: 80 },
];
const desPositions = [
  { top: "15%", right: "10%", delay: 1, width: 70 },
  { top: "50%", left: "0%", delay: 3, width: 65 },
  { bottom: "5%", right: "20%", delay: 5, width: 75 },
];

// ── Motion variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const slideUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
  },
};

// ── Persona text swap variants ────────────────────────────────────────────
const textSwapVariants = {
  enter: { opacity: 0, y: 10 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const imageSwapVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function Hero() {
  const [isDesigner, setIsDesigner] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const persona = isDesigner ? personas.designer : personas.developer;
  const toolPositions = isDesigner ? desPositions : devPositions;

  // ── Parallax setup ──────────────────────────────────────────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const imageY = useTransform(
    scrollY,
    [0, 600],
    prefersReducedMotion ? [0, 0] : [0, 72]
  );
  const floatersY = useTransform(
    scrollY,
    [0, 600],
    prefersReducedMotion ? [0, 0] : [0, 108]
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-between px-[8%] pt-[150px] pb-[100px] relative gap-12 flex-col lg:flex-row"
      aria-label="Hero – introduction"
    >
      {/* ── Left: Text Content ───────────────────────────────────────────── */}
      <motion.div
        className="flex-1 max-w-[500px] z-[2] text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          variants={slideUpVariant}
          className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-4"
        >
          Hi! My Name{" "}
          <span className="highlight">Revi Ardiano</span>
        </motion.h1>

        {/* Dynamic persona description */}
        <motion.div variants={slideUpVariant} className="mb-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={persona.label}
              variants={prefersReducedMotion ? {} : textSwapVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="font-sans text-[1.2rem] text-muted"
            >
              I&apos;m{" "}
              <span className="highlight">{persona.subtitle}</span>
              {", "}
              {persona.description}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Toggle */}
        <motion.div
          variants={slideUpVariant}
          className="flex items-center gap-4 font-semibold justify-center lg:justify-start"
        >
          <span
            className={`font-sans transition-colors duration-300 ${
              !isDesigner ? "text-accent" : "text-muted"
            }`}
          >
            Developer
          </span>

          <label
            className="toggle-switch"
            aria-label={`Switch to ${isDesigner ? "Developer" : "Designer"} persona`}
          >
            <input
              type="checkbox"
              checked={isDesigner}
              onChange={(e) => setIsDesigner(e.target.checked)}
              aria-checked={isDesigner}
            />
            <span className="toggle-slider" />
          </label>

          <span
            className={`font-sans transition-colors duration-300 ${
              isDesigner ? "text-accent" : "text-muted"
            }`}
          >
            Designer
          </span>
        </motion.div>
      </motion.div>

      {/* ── Right: Image + Floating Tools ────────────────────────────────── */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        className="hero-image-container flex-1 relative h-[600px] flex justify-center items-center w-full lg:w-auto"
      >
        {/* Blurred background glow (hover reveal) */}
        <AnimatePresence>
          <div
            className="blur-bg-hero"
            style={{ backgroundImage: `url('${persona.image}')` }}
            aria-hidden="true"
          />
        </AnimatePresence>

        {/* Main portrait image */}
        <motion.div
          style={{ y: imageY }}
          className="relative z-[2] w-[280px] h-[380px] sm:w-[350px] sm:h-[450px] lg:w-[400px] lg:h-[550px] rounded-[20px] overflow-hidden shadow-image transition-transform duration-300 hover:scale-[1.02]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={persona.image}
              variants={prefersReducedMotion ? {} : imageSwapVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={persona.image}
                alt={`Revi Ardiano as ${persona.label}`}
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Floating tool icons */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tools-${persona.label}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            style={{ y: floatersY }}
            className="absolute inset-0 pointer-events-none z-[3]"
            aria-hidden="true"
          >
            {persona.tools.map((tool, i) => {
              const pos = toolPositions[i];
              return (
                <Image
                  key={tool.alt}
                  src={tool.src}
                  alt={tool.alt}
                  width={pos.width}
                  height={pos.width}
                  className="floater absolute"
                  style={{
                    ...pos,
                    animationDelay: `${pos.delay}s`,
                    width: pos.width,
                    height: "auto",
                  }}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}