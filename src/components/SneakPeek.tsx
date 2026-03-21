"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { sneakPeekImages } from "@/data/projects";

// Double the array so the CSS marquee loop is seamless
const marqueeImages = [...sneakPeekImages, ...sneakPeekImages];

export default function SneakPeek() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section
        className="py-[80px] overflow-hidden bg-cream"
        aria-label="Sneak peek gallery"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 px-[8%]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-2">
            Sneak Peek of My Works
          </h2>
          <p className="font-sans text-[1.1rem] text-muted">
            A curated collection of my visual explorations.
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full overflow-hidden py-5 relative"
        >
          {/* Fade edge masks */}
          <div
            className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--bg-color), transparent)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, var(--bg-color), transparent)",
            }}
            aria-hidden="true"
          />

          <div
            className="marquee-track flex gap-5 w-max"
            role="list"
            aria-label="Portfolio image gallery"
          >
            {marqueeImages.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                role="listitem"
                onClick={() => setLightbox(img.src)}
                className="relative group flex-shrink-0 rounded-[12px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)] cursor-pointer"
                aria-label={`View ${img.alt} fullscreen`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={250}
                  className="h-[250px] w-auto object-cover transition-transform duration-300 group-hover:scale-[1.05] group-hover:brightness-110"
                  style={{ maxWidth: "none" }}
                />
                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300">
                  <ZoomIn
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    size={32}
                  />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Lightbox Viewer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-navy/95 backdrop-blur-[5px] p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
            aria-modal="true"
            role="dialog"
            aria-label="Image viewer"
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-8 right-8 text-white/70 hover:text-accent transition-colors duration-200"
              aria-label="Close image viewer"
            >
              <X size={40} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[900px] w-full max-h-[80vh]"
            >
              <Image
                src={lightbox}
                alt="Fullscreen view"
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                style={{ maxHeight: "80vh" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}