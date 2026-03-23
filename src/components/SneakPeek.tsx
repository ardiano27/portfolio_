"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { sneakPeekImages } from "@/data/projects";

const marqueeImages = [...sneakPeekImages, ...sneakPeekImages];

export default function SneakPeek() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section
className="py-40 overflow-hidden"
        style={{ backgroundColor: "#fdfcf8" }}
        aria-label="Sneak peek gallery"
      >
        {/* Subtle section divider */}
        <div
className="mx-[8%] mb-24 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(13,27,66,0.08), transparent)" }}
          aria-hidden="true"
        />

        {/* Header */}
        <motion.div
className="text-center mb-24 px-[8%]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <span
            className="inline-block font-sans text-[0.75rem] font-semibold tracking-[3px] uppercase mb-5"
            style={{ color: "#ff5722" }}
          >
            Gallery
          </span>
          <h2
            className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] mb-4 leading-tight"
            style={{ color: "#0d1b42" }}
          >
            Sneak Peek of My Works
          </h2>
          <p className="font-sans text-[1rem] leading-relaxed" style={{ color: "#4a5568" }}>
            A curated collection of my visual explorations.
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.8 }}
className="w-full overflow-hidden py-6 relative mt-12"
        >
          {/* Edge fade masks */}
          <div
            className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #fdfcf8, transparent)" }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #fdfcf8, transparent)" }}
            aria-hidden="true"
          />

          <div
            className="marquee-track flex gap-6 w-max"
            role="list"
            aria-label="Portfolio image gallery"
          >
            {marqueeImages.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                role="listitem"
                onClick={() => setLightbox(img.src)}
                className="relative group flex-shrink-0 rounded-[16px] overflow-hidden cursor-pointer"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
                aria-label={`View ${img.alt} fullscreen`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={320}
                  height={260}
                  className="h-[230px] w-auto object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  style={{ maxWidth: "none" }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(13,27,66,0.35)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                  >
                    <ZoomIn size={20} style={{ color: "#0d1b42" }} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6 cursor-pointer"
            style={{ backgroundColor: "rgba(13,27,66,0.96)", backdropFilter: "blur(8px)" }}
            onClick={() => setLightbox(null)}
            aria-modal="true"
            role="dialog"
            aria-label="Image viewer"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-8 right-8 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff5722")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
              aria-label="Close image viewer"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[900px] w-full"
            >
              <Image
                src={lightbox}
                alt="Fullscreen view"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-[16px]"
                style={{
                  maxHeight: "82vh",
                  boxShadow: "0 0 80px rgba(0,0,0,0.6)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}