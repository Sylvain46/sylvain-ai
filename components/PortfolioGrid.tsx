"use client";

import { projects, type Project } from "@/data/projects";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import RevealText from "./RevealText";

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="relative bg-[#050505] py-28 sm:py-36">
      <div className="section-shell">
        <RevealText>
          <p className="eyebrow">Portfolio</p>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-5xl font-extralight leading-tight text-white sm:text-6xl">
              Albums photo par univers.
            </h2>
            <p className="max-w-sm text-sm leading-7 text-white/56">
              Ouvrez un dossier pour parcourir toutes les images d'une categorie : voyage,
              portraits, sport, mecanique, vivant et atmospheres cinematographiques.
            </p>
          </div>
        </RevealText>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
