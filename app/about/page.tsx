'use client'

import { motion } from 'framer-motion'
import Timeline from '@/components/Timeline'


export const Metadata = {
  title: 'About Howell Dev',
}

export default function AboutPage() {
  const particlesInit = async (main: any) => {
    // await loadFull(main)
  }

  return (
    <main className="relative min-h-screen px-6 pt-32 max-w-4xl mx-auto">

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
          particles: {
            color: { value: "#3B82F6" },
            links: { enable: true, color: "#3B82F6", distance: 120, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.6 },
            number: { value: 40, density: { enable: true, area: 800 } },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.5 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white text-center"
      >
        About Howell Dev
      </motion.h1>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 space-y-4 text-center"
      >
        <p className="text-neutral-400 leading-relaxed">
          Howell Dev is a product-focused development studio building modern web
          platforms for startups and growing businesses.
        </p>
        <p className="text-neutral-400 leading-relaxed">
          We specialize in crafting fast, scalable, and conversion-driven digital
          experiences using modern technologies like Next.js, React, and Tailwind CSS.
        </p>
      </motion.div>

      {/* Key Metrics with Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 "
      >
        {[
          { value: '4+', label: 'Years Experience' },
          { value: '20+', label: 'Projects Shipped' },
          { value: '10+', label: 'Technologies' },
          { value: '100%', label: 'Client Satisfaction' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition"
          >
            <p className="text-3xl font-bold text-gradient text-white  bg-clip-text text-transparent">
              {item.value}
            </p>
            <p className="text-neutral-400 mt-1">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="border-t border-white/10 mt-24" />

      {/* Journey Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24"
      >
        <Timeline />
      </motion.div>

      <div className="border-t border-white/10 mt-24" />

      {/* Philosophy & Founder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 space-y-6"
      >
        <h2 className="text-2xl font-medium text-white">Our Philosophy</h2>
        <p className="text-neutral-400 leading-relaxed">
          We believe great products are built at the intersection of design,
          engineering, and strategy. Every project starts with understanding
          your goals and translating them into clean, intuitive user experiences.
        </p>

        <h2 className="text-2xl font-medium text-white">Founder</h2>
        <p className="text-neutral-400 leading-relaxed mb-10">
          Howell Dev is led by Howell, a frontend-focused engineer with a strong
          passion for building modern web interfaces and scalable product systems.
          Howell has worked on multiple production projects and focuses on
          delivering reliable, maintainable software that grows with your business.
        </p>
      </motion.div>
    </main>
  )
}
