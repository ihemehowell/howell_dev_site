'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

import Link from 'next/link'
import { useState } from 'react'

export const  Metadata = {
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
      : projects.filter(p => p.tags.includes(active))

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 pt-32 max-w-6xl mx-auto"
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
        {techs.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-lg border transition
              ${active === t
                ? 'bg-white text-black'
                : 'bg-neutral-900 border-white/10 text-white'
              }
            `}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">

        {filtered.map(project => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-white/20 transition glow-card"
          >

            <div className="h-48 rounded-xl bg-neutral-800 mb-6" />

            <h3 className="text-2xl font-medium">
              {project.title}
            </h3>

            <p className="mt-3 text-neutral-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 mb-10">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span
            className="mt-12 py-2 px-4 bg-white text-black rounded-full opacity-70 hover:opacity-100 transition"
          >
            View case study <ChevronRight className="inline-block ml-2" />
          </span>

          </Link>
        ))}

      </div>

    </motion.main>
  )
}
