"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const visuals = [
  {
    src: "/assets/design/konekin.png",
    alt: "Konekin design work",
    className: "top-[8%] left-[8%]",
    width: "w-[200px] lg:w-[290px]",
    delay: 0,
    zIndex: 2,
    rotate: "-rotate-2",
  },
  {
    src: "/assets/design/girl.png",
    alt: "Girl illustration",
    className: "top-[35%] right-[8%]",
    width: "w-[160px] lg:w-[240px]",
    delay: 3,
    zIndex: 1,
    rotate: "rotate-3",
  },
  {
    src: "/assets/design/rep.png",
    alt: "Design work 3",
    className: "bottom-[8%] left-[38%]",
    width: "w-[170px] lg:w-[260px]",
    delay: 5,
    zIndex: 3,
    rotate: "-rotate-1",
  },
];

export default function VisualDesigner() {
  return (
    <section
      id="visual-designer"
className="px-[8%] py-40 relative min-h-[90vh] overflow-hidden flex flex-col items-center"
      style={{ backgroundColor: "#fdfcf8" }}
      aria-label="Visual design work"
    >
      {/* Subtle section divider at top */}
      <div
        className="absolute top-0 left-[8%] right-[8%] h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(13,27,66,0.08), transparent)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <motion.div
        className="text-center z-10 max-w-[620px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <span
          className="inline-block font-sans text-[0.75rem] font-semibold tracking-[3px] uppercase mb-5"
          style={{ color: "#ff5722" }}
        >
          Design Work
        </span>
        <h2
          className="font-serif text-[clamp(2rem,4vw,3rem)] mb-12 leading-tight"
          style={{ color: "#0d1b42" }}
        >
          Product &amp; Visual Designer
        </h2>
        <p className="font-sans text-[1.05rem] leading-relaxed" style={{ color: "#4a5568" }}>
          Where logic meets aesthetics — crafting experiences that engage and delight.
        </p>
      </motion.div>

      {/* Floating visuals */}
      <div className="relative w-full h-[540px] mt-28" aria-hidden="true">
        {visuals.map((v) => (
          <motion.div
            key={v.alt}
            className={`visual-floater absolute rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] cursor-pointer ${v.className} ${v.width} ${v.rotate}`}
            style={{ zIndex: v.zIndex, animationDelay: `${v.delay}s` }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: 10,
              boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
              transition: { duration: 0.35 },
            }}
          >
            <Image
              src={v.src}
              alt={v.alt}
              width={300}
              height={300}
              className="w-full h-auto block"
              sizes="(max-width: 768px) 170px, 290px"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}