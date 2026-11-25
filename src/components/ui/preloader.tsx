"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Lightweight brand preloader — fades out quickly and never blocks content
 * (it unmounts after a short timeout regardless of load events).
 */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="relative flex h-14 w-14 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60" />
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-tang-400 to-lemon-300 text-ink">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c-1.5 3-5 4.5-5 8a5 5 0 0 0 10 0c0-3.5-3.5-5-5-8Z" />
                </svg>
              </span>
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-700">
              Fresh &amp; clean
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
