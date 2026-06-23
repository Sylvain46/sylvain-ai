"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProtectedImage from "@/components/ProtectedImage";
import { publicPath } from "@/lib/paths";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="accueil" className="relative min-h-[100svh] overflow-hidden lg:min-h-screen">
      <motion.div
        className="absolute inset-0 hidden lg:block"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={reduceMotion ? undefined : { scale: 1.12 }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <ProtectedImage
          src={publicPath("/media/Aventure et voyage/couverture Aventure.jpg")}
          alt="Paysage de voyage cinématique"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 lg:hidden"
        initial={reduceMotion ? false : { scale: 1.02 }}
        animate={reduceMotion ? undefined : { scale: 1.08 }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <ProtectedImage
          src={publicPath("/media/Aventure et voyage/couverture Aventure.jpg")}
          alt="Paysage de voyage cinématique"
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover blur-xl"
        />
      </motion.div>
      <div className="absolute inset-x-4 bottom-[38%] top-24 lg:hidden">
        <ProtectedImage
          src={publicPath("/media/Aventure et voyage/couverture Aventure.jpg")}
          alt="Paysage de voyage cinématique"
          fill
          priority
          sizes="100vw"
          className="object-contain opacity-78"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.92),rgba(5,5,5,0.52),rgba(5,5,5,0.76))] lg:bg-[linear-gradient(90deg,rgba(5,5,5,0.9),rgba(5,5,5,0.48),rgba(5,5,5,0.76))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="section-shell relative z-10 flex min-h-[100svh] items-end pb-9 pt-28 lg:min-h-screen lg:items-center lg:pb-0 lg:pt-20">
        <div className="max-w-4xl">
          <motion.p
            className="eyebrow mb-5"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Portfolio - Sylvain AI
          </motion.p>
          <motion.h1
            className="text-balance text-5xl font-extralight leading-[0.95] tracking-normal text-white sm:text-6xl md:text-7xl lg:text-9xl"
            initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(16px)" }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Entre liberté et puissance
          </motion.h1>
          <motion.p
            className="mt-5 text-sm uppercase tracking-[0.28em] text-[#c8ad7f]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Photographe & vidéaste
          </motion.p>
          <motion.div
            className="mt-7 max-w-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <p className="max-w-md text-base leading-7 text-white/72 sm:max-w-xl sm:text-xl sm:leading-8">
              Là où la nature s’ouvre, les corps vibrent, et où les machines rugissent.
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[#c8ad7f]">
              Aventure / Voyage — Sport — Sport mécanique
            </p>
          </motion.div>
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
