"use client";

import type { Project } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { WheelEvent, useEffect, useState } from "react";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (!project) return;
    setSelectedPhoto(project.image);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  if (!project) return null;

  const activePhoto = selectedPhoto ?? project.image;
  const handleAlbumWheel = (event: WheelEvent<HTMLDivElement>) => {
    const scroller = event.currentTarget.querySelector<HTMLDivElement>("[data-gallery-scroller]");
    if (!scroller || scroller.scrollHeight <= scroller.clientHeight) return;

    event.preventDefault();
    event.stopPropagation();
    scroller.scrollTop += event.deltaY;
  };

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Album ${project.title}`}
          className="fixed inset-0 z-[70] overflow-y-auto bg-black/88 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="mx-auto flex h-[calc(100dvh-2rem)] max-h-[920px] w-full max-w-7xl flex-col overflow-hidden border border-white/12 bg-[#080808]"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="shrink-0 flex items-start justify-between gap-5 border-b border-white/10 p-5 sm:p-7">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#c8ad7f]">
                  <span>{project.category}</span>
                  <span className="h-px w-8 bg-white/20" />
                  <span>{project.countLabel}</span>
                </div>
                <h2 className="text-3xl font-light text-white sm:text-5xl">{project.title}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">{project.description}</p>
              </div>
              <button
                type="button"
                aria-label="Fermer l'album"
                onClick={onClose}
                className="shrink-0 border border-white/14 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/78 transition duration-500 hover:border-[#c8ad7f]/70 hover:text-white sm:px-5"
              >
                Fermer
              </button>
            </div>

            <div
              className="grid min-h-0 flex-1 overflow-hidden md:grid-cols-[0.92fr_1.08fr]"
              onWheel={handleAlbumWheel}
            >
              <div className="relative hidden min-h-[62vh] border-r border-white/10 md:block">
                <Image src={activePhoto} alt={project.title} fill sizes="46vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              <div data-gallery-scroller className="h-full min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.photos.map((photo, index) => (
                    <button
                      key={photo.src}
                      type="button"
                      aria-label={`Voir la photo ${index + 1} de l'album ${project.title}`}
                      onClick={() => setSelectedPhoto(photo.src)}
                      className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#111111] text-left transition duration-500 hover:border-[#c8ad7f]/45"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 18vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/18" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
