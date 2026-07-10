"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/projects";
import { getTechIcon } from "@/lib/tech-icons";

interface ProjectTechStackProps {
  project: Project;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  if (!project.techStack || project.techStack.length === 0) {
    return null;
  }

  return (
    <motion.section
      id="tech-stack"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 rounded-2xl border border-white/10 bg-white/5 p-8"
    >
      <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {project.techStack.map((tech) => {
          const { icon: Icon, color } = getTechIcon(tech);
          return (
            <motion.span
              key={tech}
              variants={item}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-neutral-200 hover:border-blue-500/60 hover:bg-white/15 transition-colors"
            >
              <Icon style={{ color }} className="h-4 w-4 shrink-0" />
              {tech}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.section>
  );
}