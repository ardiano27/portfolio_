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
  // Hydration-safe live time — renders empty on SSR, fills in on client
  const liveTime = useLiveTime("en-US");

  return (
    <footer
      id="contact"
      className="px-[8%] pt-[100px] pb-8 bg-cream"
      aria-label="Contact and footer"
    >
      {/* ── Main content ───────────────────────────────────────────────── */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] mb-4">
          Let&apos;s Create Together
        </h2>

        {/* Live status widget */}
        <div
          className="inline-flex items-center gap-2.5 bg-white px-5 py-2 rounded-pill shadow-social font-sans font-semibold text-[0.9rem] mb-5 border border-black/5"
          aria-live="polite"
          aria-label={`Current time in Indonesia: ${liveTime}`}
        >
          <span
            className="status-dot w-2 h-2 bg-[#2ecc71] rounded-full inline-block"
            aria-hidden="true"
          />
          {/* Suppress hydration warning: time only available client-side */}
          <span suppressHydrationWarning>{liveTime || "Loading…"}</span>
          <span aria-hidden="true"> — </span>
          <span className="highlight">Indonesia</span>
        </div>

        <p className="font-sans text-[1.2rem] text-muted mb-12">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          {socialLinks.map(({ href, icon: Icon, label, display, external }) => (
            <motion.a
              key={href}
              href={href}
              aria-label={label}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              whileHover={{ y: -6, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group flex flex-row items-center gap-3 font-sans font-semibold bg-white px-5 py-2.5 rounded-pill border border-black/5 transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              <span className="text-[1.2rem] text-navy group-hover:text-white transition-colors duration-300">
                <Icon size={20} />
              </span>
              <span className="transition-colors duration-300">{display}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* ── Copyright ─────────────────────────────────────────────────── */}
      <div className="text-center font-sans text-[0.9rem] text-muted border-t border-black/5 pt-8">
        © 2026 Ardiano. Made with code &amp; creativity.
      </div>
    </footer>
  );
}