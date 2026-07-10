"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types/projects";

interface RelatedProjectsProps {
  projects: Project[];
  currentSlug: string;
}

export default function RelatedProjects({
  projects,
  currentSlug,
}: RelatedProjectsProps) {
  const related = projects.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-24">
      <h2 className="text-2xl font-semibold mb-6">More Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {related.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm text-neutral-400 mt-1 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
