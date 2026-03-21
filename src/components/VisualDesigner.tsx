"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Floating visual config — matches original CSS positions/delays
const visuals = [
  {
    src: "/assets/design/konekin.png",
    alt: "Konekin design work",
    style: "top-[10%] left-[10%] w-[200px] lg:w-[300px]",
    delay: 0,
    zIndex: 2,
  },
  {
    src: "/assets/design/girl.png",
    alt: "Girl illustration",
    style: "top-[40%] right-[10%] w-[160px] lg:w-[250px]",
    delay: 3,
    zIndex: 1,
  },
  {
    src: "/assets/design/rep.png",
    alt: "Design work 3",
    style: "bottom-[10%] left-[40%] w-[180px] lg:w-[280px]",
    delay: 5,
    zIndex: 3,
  },
];

export default function VisualDesigner() {
  return (
    <section
      id="visual-designer"
      className="px-[8%] py-[100px] relative min-h-[80vh] overflow-hidden flex flex-col items-center"
      aria-label="Visual design work"
    >
      {/* Header */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] mb-4">
          Product &amp; Visual Designer
        </h2>
        <p className="font-sans text-[1.1rem] text-muted max-w-[600px] mx-auto">
          Crafting digital experiences that engage users.
        </p>
      </motion.div>

      {/* Floating visuals container */}
      <div className="relative w-full h-[500px] mt-[50px]" aria-hidden="true">
        {visuals.map((v) => (
          <div
            key={v.alt}
            className={`visual-floater absolute rounded-[15px] shadow-card cursor-pointer ${v.style}`}
            style={{ zIndex: v.zIndex, animationDelay: `${v.delay}s` }}
          >
            <Image
              src={v.src}
              alt={v.alt}
              width={300}
              height={300}
              className="rounded-[15px] w-full h-auto"
              sizes="(max-width: 768px) 180px, 300px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}