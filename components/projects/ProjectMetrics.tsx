"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/projects";

interface ProjectMetricsProps {
  project: Project;
}

export default function ProjectMetrics({ project }: ProjectMetricsProps) {
  if (!project.metrics || project.metrics.length === 0) {
    return null;
  }

  return (
    <section id="results" className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Results</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {project.metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {metric.value}
            </p>

            <p className="mt-2 text-sm text-neutral-400">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
