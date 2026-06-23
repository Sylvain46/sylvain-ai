"use client";

import type { Project } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProtectedImage from "@/components/ProtectedImage";
import { MouseEvent, WheelEvent, useEffect, useState } from "react";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [expandedPhoto, setExpandedPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (!project) return;
    setSelectedPhoto(project.image);
    setExpandedPhoto(null);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (expandedPhoto) {
          setExpandedPhoto(null);
          return;
        }
        onClose();
      }

      if (!expandedPhoto) return;

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        const currentIndex = project.photos.findIndex((photo) => photo.src === expandedPhoto);
        const fallbackIndex = currentIndex === -1 ? 0 : currentIndex;
        const offset = event.key === "ArrowLeft" ? -1 : 1;
        const nextIndex = (fallbackIndex + offset + project.photos.length) % project.photos.length;
        const nextPhoto = project.photos[nextIndex]?.src;

        if (nextPhoto) {
          setSelectedPhoto(nextPhoto);
          setExpandedPhoto(nextPhoto);
        }
        return;
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [expandedPhoto, onClose, project]);

  if (!project) return null;

  const activePhoto = selectedPhoto ?? project.image;
  const openPhoto = (src: string) => {
    setSelectedPhoto(src);
    setExpandedPhoto(src);
  };

  const closeExpandedPhoto = (event?: MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    event?.stopPropagation();
    setExpandedPhoto(null);
  };

  const closeExpandedPhotoFromBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    closeExpandedPhoto(event);
  };

  const showAdjacentPhoto = (offset: -1 | 1, event?: MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    event?.stopPropagation();

    const sourcePhoto = expandedPhoto ?? activePhoto;
    const currentIndex = project.photos.findIndex((photo) => photo.src === sourcePhoto);
    const fallbackIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex = (fallbackIndex + offset + project.photos.length) % project.photos.length;
    const nextPhoto = project.photos[nextIndex]?.src;

    if (!nextPhoto) return;
    setSelectedPhoto(nextPhoto);
    setExpandedPhoto(nextPhoto);
  };

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
              <div data-protected-media className="relative hidden min-h-[62vh] border-r border-white/10 md:block">
                <ProtectedImage src={activePhoto} alt={project.title} fill sizes="46vw" className="object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              <div data-gallery-scroller className="h-full min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6">
                <button
                  type="button"
                  aria-label="Agrandir la photo selectionnee"
                  onClick={() => setExpandedPhoto(activePhoto)}
                  className="relative mb-4 block aspect-[4/5] w-full overflow-hidden border border-white/10 bg-[#111111] md:hidden"
                >
                  <ProtectedImage src={activePhoto} alt={project.title} fill sizes="100vw" className="object-contain" />
                </button>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.photos.map((photo, index) => (
                    <button
                      key={photo.src}
                      type="button"
                      aria-label={`Voir la photo ${index + 1} de l'album ${project.title}`}
                      onClick={() => openPhoto(photo.src)}
                      onPointerUp={() => openPhoto(photo.src)}
                      className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#111111] text-left transition duration-500 hover:border-[#c8ad7f]/45"
                    >
                      <ProtectedImage
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

          <AnimatePresence>
            {expandedPhoto ? (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Photo en grand"
                className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onMouseDown={closeExpandedPhotoFromBackdrop}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  aria-label="Fermer la photo"
                  onMouseDown={closeExpandedPhoto}
                  onClick={(event) => event.stopPropagation()}
                  className="absolute right-4 top-4 z-10 border border-white/14 bg-black/30 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/82 backdrop-blur-md"
                >
                  Fermer
                </button>
                <button
                  type="button"
                  aria-label="Photo precedente"
                  onMouseDown={(event) => showAdjacentPhoto(-1, event)}
                  onClick={(event) => event.stopPropagation()}
                  className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center border border-white/14 bg-black/30 text-white/82 backdrop-blur-md transition duration-300 hover:border-[#c8ad7f]/60 hover:text-white sm:left-5 sm:size-12"
                >
                  <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.4} />
                </button>
                <button
                  type="button"
                  aria-label="Photo suivante"
                  onMouseDown={(event) => showAdjacentPhoto(1, event)}
                  onClick={(event) => event.stopPropagation()}
                  className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center border border-white/14 bg-black/30 text-white/82 backdrop-blur-md transition duration-300 hover:border-[#c8ad7f]/60 hover:text-white sm:right-5 sm:size-12"
                >
                  <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.4} />
                </button>
                <motion.div
                  data-protected-media
                  className="relative h-[82dvh] w-[calc(100vw-2rem)] overflow-hidden sm:h-[86dvh] sm:w-[calc(100vw-8rem)]"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  onMouseDown={(event) => event.stopPropagation()}
                >
                  <ProtectedImage
                    src={expandedPhoto}
                    alt={`${project.title} en grand`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
