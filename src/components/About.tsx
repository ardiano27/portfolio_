"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bioParagraphs = [
  "Hi! My name is Revi Ardiano, a Full Stack Developer and designer who loves turning ideas into digital experiences. I enjoy combining logic and aesthetics — writing code that functions well and designing interfaces that feel right.",
  "I believe good products are built where technology and creativity meet. Whether it's developing a web application, crafting a UI, or solving technical problems, I focus on creating solutions that are simple, efficient, and meaningful.",
  "When I'm not designing or coding, you'll probably find me searching for the perfect combination of coffee and milk in a small café somewhere. For me, great ideas often come between sips of good coffee and quiet moments of thinking.",
  "I enjoy experimenting, learning new technologies, and building things that people can actually use. No unnecessary complexity — just thoughtful design, clean code, and ideas that grow into real products.",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#fcfcfc] px-[5%] py-[100px]"
      aria-label="About Revi Ardiano"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-[80px] justify-between">

          {/* ── Left: Text ──────────────────────────────────────────────── */}
          <motion.div
            className="flex-1 max-w-[550px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold text-[#111] mb-4">
              Behind The Canvas
            </h2>
            <p className="font-sans text-[1.1rem] text-[#666] italic font-medium leading-[1.5] mb-8">
              Finally, meet the mind behind the screen — someone who enjoys
              building things that actually work.
            </p>

            <div className="space-y-[18px]">
              {bioParagraphs.map((text, i) => (
                <motion.p
                  key={i}
                  className="font-sans text-[1rem] text-[#444] leading-[1.8]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Images ────────────────────────────────────────────── */}
          <motion.div
            className="flex gap-6 justify-end items-center flex-wrap lg:flex-nowrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            {/* Portrait */}
            <div className="image-card w-[240px] h-[320px]">
              <Image
                src="/assets/images/kakak(2).jpeg"
                alt="Revi Ardiano portrait"
                fill
                className="object-cover"
                sizes="240px"
              />
              <div className="hover-overlay">
                <span>Hi, it&apos;s me</span>
              </div>
            </div>

            {/* Cat (offset down) */}
            <div className="image-card w-[240px] h-[320px] lg:translate-y-[40px]">
              <Image
                src="/assets/images/catsideeye.jpg"
                alt="Revi's cat"
                fill
                className="object-cover"
                sizes="240px"
              />
              <div className="hover-overlay">
                <span>cat person</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}