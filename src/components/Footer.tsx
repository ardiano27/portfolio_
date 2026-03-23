"use client";

import { motion } from "framer-motion";
import { Mail, Github, Instagram } from "lucide-react";
import { useLiveTime } from "@/hooks/useLiveTime";

const socialLinks = [
  {
    href: "mailto:reviardiano109@gmail.com",
    icon: Mail,
    label: "Email Revi",
    display: "reviardiano109@gmail.com",
  },
  {
    href: "https://github.com/ardiano27",
    icon: Github,
    label: "GitHub profile",
    display: "@ardiano27",
    external: true,
  },
  {
    href: "https://instagram.com/revrdhn_",
    icon: Instagram,
    label: "Instagram profile",
    display: "@revrdhn_",
    external: true,
  },
];

export default function Footer() {
  const liveTime = useLiveTime("en-US");

  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-[8%] pt-36 pb-12"
      style={{ backgroundColor: "#fdfcf8" }}
      aria-label="Contact and footer"
    >
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-[8%] right-[8%] h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(13,27,66,0.12), transparent)" }}
        aria-hidden="true"
      />

      <motion.div
        className="text-center max-w-[700px] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        {/* Label */}
        <span
          className="inline-block font-sans text-[0.75rem] font-semibold tracking-[3px] uppercase mb-7"
          style={{ color: "#ff5722" }}
        >
          Get in touch
        </span>

        <h2
          className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.1] mb-8"
          style={{ color: "#0d1b42" }}
        >
          Let&apos;s Create Together
        </h2>

        {/* Live status */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 font-sans font-semibold text-[0.88rem]"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            color: "#0d1b42",
          }}
          aria-live="polite"
          aria-label={`Current time in Indonesia: ${liveTime}`}
        >
          <span
            className="status-dot w-2 h-2 rounded-full"
            style={{ backgroundColor: "#2ecc71" }}
            aria-hidden="true"
          />
          <span suppressHydrationWarning>{liveTime || "Loading…"}</span>
          <span style={{ color: "rgba(0,0,0,0.3)" }}>—</span>
          <span style={{ color: "#ff5722", fontStyle: "italic" }}>Indonesia</span>
        </div>

        <p
          className="font-sans text-[1.05rem] leading-loose mb-16"
          style={{ color: "#4a5568" }}
        >
          Feel free to reach out for collaborations, freelance work,
          or just a friendly hello.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {socialLinks.map(({ href, icon: Icon, label, display, external }) => (
            <motion.a
              key={href}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-3 font-sans font-semibold text-[0.92rem] px-5 py-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                color: "#0d1b42",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0d1b42";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#0d1b42";
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon size={18} />
              {display}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Copyright */}
      <div
        className="text-center font-sans text-[0.85rem] pt-8"
        style={{
          borderTop: "1px solid rgba(0,0,0,0.06)",
          color: "#4a5568",
        }}
      >
        © 2026 Ardiano. Made with code &amp; creativity.
      </div>
    </footer>
  );
}