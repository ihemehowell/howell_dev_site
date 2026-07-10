"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/projects";

interface Props {
  project: Project;
}

export default function ProjectChallengeSolution({ project }: Props) {
  const hasChallenge = Boolean(project.challenge?.length);
  const hasSolution = Boolean(project.solution?.length);

  if (!hasChallenge && !hasSolution) return null;

  return (
    <div className="space-y-12">
      {/* CHALLENGE */}
      {hasChallenge && (
        <motion.section
          id="problem"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-8 bg-white/5 border border-white/10 overflow-hidden"
        >
          {/* red glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />

          <div className="relative">
            <h2 className="text-2xl font-semibold mb-6">Challenge</h2>

            <div className="space-y-6">
              {project.challenge!.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center mb-2">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white font-bold mr-4">
                            {item.figure}
                          </span>
                  <h3 className="text-lg font-medium text-white mb-1">
                    {item.title}
                  </h3>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* SOLUTION */}
      {hasSolution && (
        <motion.section
          id="solution"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-8 bg-white/5 border border-white/10 overflow-hidden"
        >
          {/* blue glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />

          <div className="relative">
            <h2 className="text-2xl font-semibold mb-6">Solution</h2>

            <div className="space-y-6">
              {project.solution!.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-4">
                    {item.figure}
                  </span>
                  <h3 className="text-lg font-medium text-white mb-1">
                    {item.title}
                  </h3>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}