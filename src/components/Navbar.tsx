"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "About" },
  { href: "#visual-designer", label: "Visuals" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll handler (respects fixed nav height when scrolled)
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const navHeight = scrolled ? 72 : 0;
    const top =
      target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={[
        "flex justify-between items-center px-[8%] z-50 w-full transition-all duration-400",
        scrolled
          ? "fixed py-4 bg-cream/92 backdrop-blur-nav shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "absolute py-6",
      ].join(" ")}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => handleNavClick(e, "#hero")}
        className="font-serif text-2xl font-bold text-navy hover:text-accent transition-colors duration-300"
        aria-label="Back to top"
      >
        Portfolio.
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex list-none gap-8" role="list">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="nav-link-hover font-medium font-sans text-navy hover:text-navy transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile — hamburger placeholder (extend as needed) */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Open menu"
        aria-expanded={false}
      >
        <span className="w-6 h-0.5 bg-navy rounded" />
        <span className="w-6 h-0.5 bg-navy rounded" />
        <span className="w-4 h-0.5 bg-navy rounded" />
      </button>
    </motion.nav>
  );
}