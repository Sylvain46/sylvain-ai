"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "A propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 120], ["rgba(5,5,5,0)", "rgba(5,5,5,0.72)"]);
  const borderColor = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]);

  return (
    <motion.header
      style={{ background, borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#accueil" className="text-sm font-medium tracking-[0.28em] uppercase">
          Sylvain AI
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/62 transition duration-500 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="grid size-11 place-items-center border border-white/10 bg-white/[0.03] md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-[#050505]/95 px-5 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg text-white/78"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
