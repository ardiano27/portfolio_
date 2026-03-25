"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const bioParagraphs = [
  "Hi! My name is Revi Ardiano, a Full Stack Developer and designer who loves turning ideas into digital experiences. I enjoy combining logic and aesthetics — writing code that functions well and designing interfaces that feel right.",
  "I believe good products are built where technology and creativity meet. Whether it's developing a web application, crafting a UI, or solving technical problems, I focus on creating solutions that are simple, efficient, and meaningful.",
  "When I'm not designing or coding, you'll probably find me searching for the perfect combination of coffee and milk in a small café somewhere. Great ideas often come between sips of good coffee and quiet moments of thinking.",
];

const badges = [
  { label: "Full Stack Dev", icon: "⚡" },
  { label: "UI/UX Designer", icon: "🎨" },
  { label: "Cat Person", icon: "🐈" },
  { label: "Coffee Enjoyer", icon: "☕" },
];

export default function About() {
  return (
    <section id="about" aria-label="About Revi Ardiano">
      <AuroraBackground showRadialGradient className="w-full min-h-0 py-32 px-[5%]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-24 justify-between">

            {/* ── Left: Text ────────────────────────────────────────────── */}
            <motion.div
              className="flex-1 max-w-[580px] text-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              {/* Label */}
              <motion.span
                className="inline-block font-sans text-[0.75rem] font-semibold tracking-[3px] uppercase mb-5"
                style={{ color: "#ff5722" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                About me
              </motion.span>

              <h2
                className="font-serif text-[clamp(2.2rem,3.5vw,3rem)] font-extrabold mb-8 leading-[1.12] mx-auto w-fit"
                style={{ color: "#111111" }}
              >
                Behind The Canvas
              </h2>

              {/* Blockquote */}
              <div
                className="mb-10 pl-5 mx-auto w-fit"
                style={{ borderLeft: "3px solid #ff5722" }}
              >
                <p
                  className="font-sans text-[1.05rem] italic font-medium leading-relaxed"
                  style={{ color: "#555" }}
                >
                  Finally, meet the mind behind the screen — someone who enjoys
                  building things that actually work.
                </p>
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-6 mb-12">
                {bioParagraphs.map((text, i) => (
                  <motion.p
                    key={i}
                    className="font-sans text-[0.97rem] leading-loose"
                    style={{ color: "#444" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                    }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Badge pills */}
              <motion.div
                className="flex flex-wrap gap-3 justify-center w-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {badges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-2 font-sans text-[0.82rem] font-medium px-4 py-2.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.75)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      color: "#333",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    <span style={{ fontSize: "14px" }}>{badge.icon}</span>
                    {badge.label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: Photos ─────────────────────────────────────────── */}
            <motion.div
              className="flex gap-6 items-end justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.15 }}
            >
              {/* Portrait card */}
              <motion.div
                className="image-card flex-shrink-0"
                style={{ width: 220, height: 300 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <Image
                  src={"/assets/images/kakak(2).jpeg"}
                  alt="Revi Ardiano portrait"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
                <div className="hover-overlay">
                  <span>Hi, it's me</span>
                </div>
              </motion.div>

              {/* Cat card — offset down */}
              <motion.div
                className="image-card flex-shrink-0"
                style={{ width: 220, height: 300, marginBottom: -40 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <Image
                  src="/assets/images/catsideeye.jpg"
                  alt="Revi's cat"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
                <div className="hover-overlay">
                  <span>cat person</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
