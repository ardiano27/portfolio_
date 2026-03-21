"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

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

// ✅ kasih tipe Variants biar TS ngerti
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.13,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function WhatIBring() {
  return (
    <section
      className="bg-navy px-[8%] py-[100px] text-cream"
      aria-label="What I bring to the table"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/assets/logo/logo.png"
            alt="Portfolio logo"
            width={60}
            height={60}
            className="mx-auto mb-5 brightness-0 invert sepia-[0.2] saturate-[0.5] hue-rotate-[10deg]"
          />
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light italic text-cream tracking-[-1px]">
            What I bring to the table?
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/20 pt-[60px]">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-4 cursor-default"
            >
              <motion.span
                className="font-serif text-[1.2rem] text-accent block"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >
                {v.num}
              </motion.span>
              <h3 className="font-sans text-[1.5rem] font-semibold text-white">
                {v.title}
              </h3>
              <p className="font-sans text-[1rem] text-white/70 leading-[1.7]">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
