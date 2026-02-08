'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { technologies } from '@/data/technologies'
import Particles from './Particles'
import TechMarquee from './TechMarquee'

const filters = ['All', 'Frontend', 'Backend', 'Tools']

export default function Technologies() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? technologies
      : technologies.filter(t => t.type === active)

  return (
    <section className="relative py-28 bg-black text-white overflow-hidden bg-grid">

      <Particles />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold "
        >
          HowellDev Tech Stack
        </motion.h2>

        <p className=" text-gray-400 mt-3">
          Tools & technologies I use to build high-performance products
        </p>

        {/* Marquee */}
        <TechMarquee />

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2 rounded-full border transition
              ${active === f
                ? 'bg-transparent border-white/80 text-white'
                : 'border-white/20 hover:border-white/50 text-white/70 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {filtered.map((tech, i) => (
            <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative p-6 rounded-2xl
            bg-white/10
            border border-white/20
            backdrop-blur-xl
            shadow-[0_0_30px_rgba(0,0,0,0.4)]
            hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
            transition-all duration-300"
            >
            <div className="absolute inset-0 rounded-2xl
                bg-gradient-to-br from-white/10 to-transparent
                opacity-0 group-hover:opacity-100 transition" />

              <div className="flex items-center gap-4">
                <tech.icon className="text-4xl text-white/50 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-1">{tech.level}%</p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
