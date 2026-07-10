"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { projects } from "@/data/projects";

const filters = ["All", "Product", "E-commerce", "Client", "Hackathon"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Projects
        </h1>

        <p className="mt-4 text-neutral-400 max-w-2xl">
          A collection of products, experiments, and client work focused on
          building scalable, real-world systems.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto mt-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full border transition text-sm ${
              activeFilter === filter
                ? "bg-white text-black"
                : "bg-white/5 border-white/10 text-white hover:bg-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{project.title}</h2>

                  {project.year && (
                    <span className="text-xs text-neutral-400">
                      {project.year}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 text-sm text-white/70 group-hover:text-white transition flex items-center gap-2">
                  View case study →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
