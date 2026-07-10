// ProjectFeatures.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Project } from "@/types/projects";

interface ProjectFeaturesProps {
  project: Project;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
  if (!project.features || project.features.length === 0) {
    return null;
  }

  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 mt-14 rounded-2xl border border-white/10 bg-white/5 p-8"
    >
      <h2 className="text-2xl font-semibold mb-6">Key Features</h2>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-3 md:grid-cols-2"
      >
        {project.features.map((feature) => (
          <motion.li
            key={feature}
            variants={item}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-neutral-300 hover:border-blue-500/40 hover:bg-white/[0.07] transition-colors"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400 mt-0.5" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}