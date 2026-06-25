"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProtectedImage from "@/components/ProtectedImage";
import { publicPath } from "@/lib/paths";
import { useEffect, useRef } from "react";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_URL = "https://youtube.com/";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !mediaRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        mediaRef.current,
        { scale: 0.92, opacity: 0.72 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#111111] py-24">
      <div ref={mediaRef} className="absolute inset-0">
        <ProtectedImage
          src={publicPath("/media/Aventure et voyage/DSC02462.jpg")}
          alt="Paysage de voyage en atmosphère cinématique"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/58" />
      </div>

      <div className="section-shell relative z-10 flex min-h-[78vh] items-center">
        <RevealText className="max-w-4xl">
          <p className="eyebrow">Film</p>
          <h2 className="mt-5 text-balance text-5xl font-extralight leading-tight text-white sm:text-7xl">
            L'intensité comme matière, l'aventure et l'émotion dans sa forme la plus pure.
          </h2>
          <div className="mt-10 flex justify-center sm:justify-start">
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center border border-white/18 px-7 text-sm uppercase tracking-[0.22em] text-white transition duration-500 hover:border-[#c8ad7f]/70 hover:bg-[#c8ad7f]/10"
            >
              Voir la vidéo
            </a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
