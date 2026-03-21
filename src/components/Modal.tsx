"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, Variants } from "framer-motion"; // ✅ tambahin Variants
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}

// ✅ kasih tipe Variants biar TS ngerti
const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.1 } },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export default function Modal({
  isOpen,
  onClose,
  children,
  ariaLabel = "Project details",
}: ModalProps) {
  // Escape key handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] overflow-auto bg-black/80 backdrop-blur-[5px] flex items-start justify-center py-[5vh] px-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          aria-modal="true"
          role="dialog"
          aria-label={ariaLabel}
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-cream rounded-[20px] p-8 sm:p-10 w-full max-w-[1000px] shadow-modal"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-muted hover:text-accent transition-colors duration-200 p-1"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
