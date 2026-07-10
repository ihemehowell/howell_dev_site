"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/types/projects";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const gallery = project.gallery ?? [];

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : (prev - 1 + gallery.length) % gallery.length));
  }, [gallery.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length));
  }, [gallery.length]);

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (activeIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [activeIndex]);

  if (gallery.length === 0) {
    return null;
  }

  return (
    <section id="screenshots" className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Gallery</h2>

      <div className="overflow-x-auto flex gap-6 py-4 scrollbar-none">
        {gallery.map((src, i) => (
          <motion.div
            key={src}
            whileHover={{ scale: 1.05 }}
            className="shrink-0 cursor-pointer relative group"
            onClick={() => setActiveIndex(i)}
          >
            <Image
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              width={900}
              height={600}
              className="rounded-2xl w-75 h-50 object-contain shadow-lg"
            />
            <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-white bg-black/50 px-3 py-1 rounded-full">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
            onClick={close}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <X className="h-5 w-5" />
            </button>

            {gallery.length > 1 && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-sm text-neutral-300 bg-white/10 px-3 py-1 rounded-full">
                {activeIndex + 1} / {gallery.length}
              </div>
            )}

            {gallery.length > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <motion.div
              key={activeIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full"
            >
              <Image
                src={gallery[activeIndex]}
                alt={`${project.title} screenshot ${activeIndex + 1}`}
                width={1600}
                height={1000}
                className="w-full h-full object-contain rounded-xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}