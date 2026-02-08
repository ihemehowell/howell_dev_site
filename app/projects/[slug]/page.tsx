'use client'

import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { notFound, useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { SiC, SiGithub } from 'react-icons/si'

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
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/username/repo',
    screenshots: [
      '/screenshots/ecommerce-1.png',
      '/screenshots/ecommerce-2.png',
    ],
    metrics: [
      { label: 'Users', value: '1.2k+' },
      { label: 'Orders', value: '3.5k+' },
      { label: 'Pages', value: '25+' },
      { label: 'Performance Score', value: '98%' },
    ],
  },
  {
    slug: 'event-planner',
    title: 'Event Planner Web App',
    overview: 'Full-stack event planning system.',
    problem: 'Manual booking and tracking was inefficient.',
    solution:
      'Built a dashboard with bookings, calendar, and admin tools.',
    stack: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/ihemehowell/jochennathrift',
    screenshots: [
      '/screenshots/ecommerce-1.png',
      '/screenshots/ecommerce-2.png',
    ],
    metrics: [
      { label: 'Users', value: '1.2k+' },
      { label: 'Orders', value: '3.5k+' },
      { label: 'Pages', value: '25+' },
      { label: 'Performance Score', value: '98%' },
    ],
  },
]

export default function ProjectPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [activeSection, setActiveSection] = useState('Overview')

  const project = projects.find(p => p.slug === slug)
  if (!project) return notFound()

  // Scrollspy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview',
        'problem',
        'solution',
        'tech-stack',
        'screenshots',
        'results',
      ]
      let current = 'overview'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id
        }
      }
      setActiveSection(current.charAt(0).toUpperCase() + current.slice(1).replace('-', ' '))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-24 relative">
      {/* Sticky Side Nav */}
      <div className="hidden md:flex fixed top-32 left-6 flex-col gap-4 z-10">
        {['Overview', 'Problem', 'Solution', 'Tech Stack', 'Screenshots', 'Results'].map(
          section => (
            <a
          key={section}
          href={`#${section.toLowerCase().replace(' ', '-')}`}
          onClick={(e) => {
            e.preventDefault()
            const el = document.getElementById(section.toLowerCase().replace(' ', '-'))
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
          className={`cursor-pointer transition-colors ${
            activeSection === section ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
          }`}
        >
          {section}
        </a>
          )
        )}
      </div>

      <div className="max-w-4xl mx-auto">

        <ChevronLeft size={24} className="mb-8 text-white/70 hover:text-white cursor-pointer" onClick={() => window.history.back()} />

        {/* Buttons */}
        <div className="mb-6 flex gap-4 flex-wrap">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500
                text-white font-medium hover:scale-105 transition transform shadow-lg"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-2xl bg-white/10 backdrop-blur-lg
                border border-white/20 text-white hover:bg-white/20 hover:scale-105
                transition transform items-center flex gap-2 shadow-sm"
            >
              GitHub <SiGithub size={20} />
            </a>
          )}
        </div>

        {/* HERO */}
        <motion.div
          id="overview"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
          <p className="mt-2 text-lg text-neutral-400 max-w-2xl">{project.overview}</p>
        </motion.div>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* PROBLEM */}
        <motion.section
          id="problem"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent" />
          <h2 className="text-2xl font-semibold mb-3">Problem</h2>
          <p className="relative text-neutral-400 leading-relaxed">{project.problem}</p>
        </motion.section>

        {/* SOLUTION */}
        <motion.section
          id="solution"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent" />
          <h2 className="text-2xl font-semibold mb-3">Solution</h2>
          <p className="relative text-neutral-400 leading-relaxed">{project.solution}</p>
        </motion.section>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* SCREENSHOTS */}
        <section id="screenshots" className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
          <div className="overflow-x-auto flex gap-6 py-4 scrollbar-none">
            {project.screenshots?.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="rounded-2xl shadow-lg flex-shrink-0 w-[300px] h-[200px] object-cover cursor-pointer hover:scale-105 transition"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <motion.section
          id="tech-stack"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-sm
                  hover:border-blue-500/60 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* RESULTS */}
        <section id="results" className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics?.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {m.value}
                </p>
                <p className="text-gray-400 mt-2">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
