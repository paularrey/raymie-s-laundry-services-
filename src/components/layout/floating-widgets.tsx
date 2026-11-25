"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/lib/site";

const subscribeScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};
const subscribeNothing = () => () => {};
const getScrolled = () => window.scrollY > 600;
const getServerSnapshot = () => false;

/**
 * Floating engagement widgets:
 *  - Desktop: pulsing WhatsApp bubble (bottom-right) + back-to-top
 *  - Mobile: sticky bottom bar with Call + WhatsApp + Book
 */
export function FloatingWidgets() {
  const showTop = useSyncExternalStore(subscribeScroll, getScrolled, getServerSnapshot);
  const mounted = useSyncExternalStore(subscribeNothing, () => true, getServerSnapshot);

  const whatsappUrl = whatsappHref(defaultWhatsAppMessage);

  return (
    <>
      {/* Desktop WhatsApp + back-to-top */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 sm:flex">
        <AnimatePresence>
          {mounted && showTop && (
            <motion.button
              key="top"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-card ring-1 ring-lime-100 transition hover:bg-warm-100"
            >
              <ArrowUp className="h-4.5 w-4.5" aria-hidden="true" />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${site.name} on WhatsApp`}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-card animate-pulse-glow transition hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-lime-100/60 bg-white/90 px-3 py-2.5 backdrop-blur-xl sm:hidden">
        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneHref}`}
            aria-label={`Call ${site.name}`}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-warm-100 text-sm font-bold text-ink"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-bold text-ink"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </a>
          <Link
            href="/book"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-tang-400 to-lemon-300 text-sm font-bold text-ink shadow-glow"
          >
            Book
          </Link>
        </div>
      </div>

      {/* Space so page content is never hidden behind the mobile bar */}
      <div aria-hidden="true" className="h-[4.25rem] sm:hidden" />
    </>
  );
}
