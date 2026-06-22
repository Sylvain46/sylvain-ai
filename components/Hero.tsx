"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={reduceMotion ? undefined : { scale: 1.12 }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/media/Travel/DSC02462.jpg"
          alt="Paysage de voyage cinematographique"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.9),rgba(5,5,5,0.48),rgba(5,5,5,0.76))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="section-shell relative z-10 flex min-h-screen items-center pt-20">
        <div className="max-w-4xl">
          <motion.p
            className="eyebrow mb-5"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Portfolio
          </motion.p>
          <motion.h1
            className="text-balance text-6xl font-extralight leading-[0.95] tracking-normal text-white sm:text-7xl md:text-8xl lg:text-9xl"
            initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(16px)" }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Sylvain AI
          </motion.h1>
          <motion.p
            className="mt-5 text-sm uppercase tracking-[0.28em] text-[#c8ad7f]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Photographe & videaste
          </motion.p>
          <motion.p
            className="mt-7 max-w-xl text-lg leading-8 text-white/70 sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Photographe & videaste d'aventure, je capture les emotions brutes, les
            paysages puissants et les histoires qui se vivent autant qu'elles se regardent.
          </motion.p>
          <motion.a
            href="#portfolio"
            className="mt-10 inline-flex h-12 items-center border border-white/18 px-7 text-sm uppercase tracking-[0.22em] text-white transition duration-500 hover:border-[#c8ad7f]/70 hover:bg-[#c8ad7f]/10"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explorer
          </motion.a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/40 md:flex">
        <span>Scroll</span>
        <span className="h-12 w-px overflow-hidden bg-white/15">
          <motion.span
            className="block h-5 w-px bg-[#c8ad7f]"
            animate={reduceMotion ? undefined : { y: [-20, 52] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </section>
  );
}
