"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const values = [
  {
    num: "01",
    title: "Visual Storytelling",
    body: "I don't just design interfaces; I craft visual narratives that align with brand identity, using typography and color psychology to guide user emotion.",
  },
  {
    num: "02",
    title: "Clean Engineering",
    body: "Behind every pixel is robust logic. I write scalable, maintainable code ensuring the site performs as beautifully as it looks.",
  },
  {
    num: "03",
    title: "User-Centricity",
    body: "Bridging the gap between stakeholder goals and user needs. I focus on accessibility and intuitive flows to create frictionless experiences.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function WhatIBring() {
  return (
    <section
className="relative px-[8%] py-40 overflow-hidden"
      style={{ backgroundColor: "#0d1b42" }}
      aria-label="What I bring to the table"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* ── Header ─────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-36"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <Image
            src="/assets/logo/logo.png"
            alt="Portfolio logo"
            width={52}
            height={52}
            className="mx-auto mb-8 brightness-0 invert opacity-80"
          />
          <h2
            className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light italic tracking-[-1px] mb-5"
            style={{ color: "#fdfcf8" }}
          >
            What I bring to the table?
          </h2>
          <p className="font-sans text-[1rem] leading-relaxed" style={{ color: "rgba(253,252,248,0.5)" }}>
            The intersection of design thinking and technical execution.
          </p>
        </motion.div>

        {/* ── Cards ──────────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          style={{ borderTop: "1px solid rgba(253,252,248,0.12)" }}
        >
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
className="group flex flex-col gap-6 cursor-default px-10 py-20 relative"
              style={{
                borderRight: i < 2 ? "1px solid rgba(253,252,248,0.08)" : "none",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"
                style={{ background: "radial-gradient(ellipse at top left, rgba(255,87,34,0.06), transparent 70%)" }}
                aria-hidden="true"
              />

              {/* Number */}
              <span
                className="font-serif text-[1rem] font-medium"
                style={{ color: "#ff5722" }}
              >
                {v.num}
              </span>

              <h3
                className="font-sans text-[1.4rem] font-semibold leading-snug"
                style={{ color: "#ffffff" }}
              >
                {v.title}
              </h3>

              {/* Divider */}
              <div
                className="w-8 h-[1px] transition-all duration-500 group-hover:w-16"
                style={{ backgroundColor: "#ff5722" }}
              />

              <p
                className="font-sans text-[0.95rem] leading-loose"
                style={{ color: "rgba(253,252,248,0.6)" }}
              >
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}