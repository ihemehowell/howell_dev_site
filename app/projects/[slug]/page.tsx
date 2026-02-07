'use client'

import { motion } from 'framer-motion'
import { notFound, useParams } from 'next/navigation'

const projects = [
  {
    slug: 'ecommerce-platform',
    title: 'Modern eCommerce Platform',
    overview:
      'A scalable eCommerce platform built for a growing retail brand.',
    problem:
      'Client needed a modern storefront with cart, checkout, and admin management.',
    solution:
      'Built a Next.js platform with Supabase backend, Stripe payments, and admin dashboard.',
    stack: ['Next.js', 'Supabase', 'Stripe', 'Tailwind'],
  },
  {
    slug: 'event-planner',
    title: 'Event Planner Web App',
    overview:
      'Full-stack event planning system.',
    problem:
      'Manual booking and tracking was inefficient.',
    solution:
      'Built a dashboard with bookings, calendar, and admin tools.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
]

export default function ProjectPage() {
  const params = useParams() // gets { slug }
  const slug = params?.slug as string

  const project = projects.find(p => p.slug === slug)
  if (!project) return notFound()



  if (!project) return notFound()

  return (
    <main className="min-h-screen px-6 pt-32 max-w-4xl mx-auto">

      <h1 className="text-5xl font-semibold">{project.title}</h1>

      <p className="mt-6 text-neutral-400">
        {project.overview}
      </p>

      <section className="mt-16">
        <h2 className="text-2xl mb-4">Problem</h2>
        <p className="text-neutral-400">{project.problem}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl mb-4">Solution</h2>
        <p className="text-neutral-400">{project.solution}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl mb-4">Tech Stack</h2>
        <div className="flex gap-2 flex-wrap">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-neutral-800 border border-white/10 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

    </main>
  )
}
