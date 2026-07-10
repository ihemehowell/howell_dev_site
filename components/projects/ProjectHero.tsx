"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <motion.div
      id="overview"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-12"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
        {project.title}
      </h1>

      {/* Meta */}
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-400">
        {project.type && <span>{project.type}</span>}
        {project.year && (
          <>
            <span>•</span>
            <span>{project.year}</span>
          </>
        )}
        {project.role && (
          <>
            <span>•</span>
            <span>{project.role}</span>
          </>
        )}
        {project.duration && (
          <>
            <span>•</span>
            <span>{project.duration}</span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="mt-6 text-lg text-neutral-400 max-w-5xl whitespace-pre-line">
        {project.longDescription}
      </p>
    </motion.div>
  );
}
