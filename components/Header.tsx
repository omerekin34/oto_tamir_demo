"use client";

import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState, type MouseEvent } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  function onNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    const delay = open ? 180 : 0;
    setOpen(false);
    window.setTimeout(() => {
      const target = document.querySelector(href);
      if (target instanceof HTMLElement) {
        target.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      }
      window.history.pushState(null, "", href);
    }, delay);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#hero"
          className="flex min-w-0 items-center gap-2.5"
          onClick={(event) => onNavClick(event, "#hero")}
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span className="font-display text-2xl font-bold tracking-wide text-white">
            Oto<span className="text-yellow-400">Usta</span>
          </span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex" aria-label="Sayfa">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => onNavClick(event, link.href)}
              className="text-sm font-medium text-zinc-300 transition hover:text-yellow-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.emergencyTel}`}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-red-500 px-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600 sm:px-4"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Hemen Ara
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobil"
            className="overflow-hidden border-t border-white/10 bg-zinc-950 md:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => onNavClick(event, link.href)}
                  className="border-b border-zinc-800 py-3 text-base font-medium text-zinc-200 last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
