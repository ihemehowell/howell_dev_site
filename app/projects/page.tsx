'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const Metadata = {
  title: 'Projects',
}

const projects = [
  {
    slug: 'ecommerce-platform',
    title: 'Modern eCommerce Platform',
    description:
      'Scalable eCommerce platform with cart, checkout, admin dashboard, and product management.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Tailwind'],
  },
  {
    slug: 'event-planner',
    title: 'Event Planner Web App',
    description:
      'Full-stack event planning system with bookings, admin tools, and customer management.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    slug: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description:
      'Responsive analytics dashboard with authentication and role-based access.',
    tags: ['Next.js', 'Postgres', 'Auth'],
  },
  {
    slug: 'social-network',
    title: 'Social Network Platform',
    description:
      'Modern social network platform with profiles, posts, messaging, and realtime updates.',
    tags: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind'],
  },
]

export default function ProjectsPage() {
  const techs = ['All', 'Next.js', 'React', 'Supabase', 'Stripe']
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter(project => project.tags.includes(active))

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-32 max-w-6xl mx-auto"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-semibold"
      >
        Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 text-neutral-400"
      >
        Selected work and case studies.
      </motion.p>

      {/* Filters */}
      <div className="mt-10 flex gap-3 flex-wrap">
        {techs.map(tech => (
          <button
            key={tech}
            onClick={() => setActive(tech)}
            className={`px-6 py-2 rounded-full border transition ${
              active === tech
                ? 'bg-white text-black'
                : 'bg-neutral-900 border-white/10 text-white'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 ">
        <AnimatePresence>
          {filtered.map(project => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white/5 border border-white/10 shadow-lg"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex flex-col h-full"
              >
                <div className="h-48 rounded-xl bg-neutral-800 mb-6" />

                <h3 className="text-2xl font-medium">{project.title}</h3>
                <p className="mt-3 text-neutral-400">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-white/10"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <span
                  className="mt-12 py-2 px-4 bg-transparent text-white rounded-full opacity-70 
                             hover:opacity-100 transition transform flex items-center gap-2 border border-white/10 
                             group-hover:scale-105 w-50 text-center justify-center"
                >
                  View case study <ChevronRight className="inline-block" />
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.main>
  )
}
