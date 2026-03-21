"use client";

import { useState, useEffect } from "react";

/**
 * useLiveTime
 *
 * Returns the current local time string, updated every second.
 * Returns an empty string on the server (and on first client render)
 * to prevent hydration mismatches between SSR and CSR.
 *
 * @param locale  BCP 47 locale string (default: "en-US")
 */
export function useLiveTime(locale = "en-US"): string {
  // Start with empty string so SSR output matches first client paint
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Format helper
    const format = () =>
      new Date().toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

    // Set immediately on mount (no visible flicker on fast connections)
    setTime(format());

    const id = setInterval(() => setTime(format()), 1_000);
    return () => clearInterval(id);
  }, [locale]);

  return time;
}