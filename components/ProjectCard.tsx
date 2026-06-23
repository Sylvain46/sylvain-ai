"use client";

import type { Project } from "@/data/projects";
import { motion, useReducedMotion } from "framer-motion";
import ProtectedImage from "@/components/ProtectedImage";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-label={`Ouvrir l'album ${project.title}`}
      onClick={onOpen}
      className={`group relative min-h-[360px] overflow-hidden border border-white/10 bg-[#0b0b0b] text-left sm:min-h-[420px] ${
        index % 3 === 0 ? "md:col-span-2" : ""
      }`}
      initial={reduceMotion ? false : { opacity: 0, y: 52, filter: "blur(12px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <ProtectedImage
        src={project.image}
        alt=""
        fill
        sizes="100vw"
        className="scale-110 object-cover opacity-45 blur-xl lg:hidden"
      />
      <ProtectedImage
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-contain transition duration-[1400ms] ease-out lg:object-cover lg:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/22 to-transparent opacity-80 transition duration-700 group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50">
          <span>{project.category}</span>
          <span className="h-px w-8 bg-white/25" />
          <span>{project.countLabel}</span>
        </div>
        <h3 className="text-3xl font-light text-white">{project.title}</h3>
        <span className="mt-5 inline-flex text-xs uppercase tracking-[0.22em] text-[#c8ad7f] opacity-80">
          Ouvrir le dossier
        </span>
        <p className="mt-3 max-w-lg translate-y-3 text-sm leading-6 text-white/62 opacity-0 transition duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          {project.description}
        </p>
      </div>
    </motion.button>
  );
}
