'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { technologies } from '@/data/technologies'
// import Particles from './Particles'
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

      {/* <Particles /> */}

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
       className="text-4xl md:text-5xl font-bold
          bg-gradient-to-r from-white via-white to-white/70
          bg-clip-text text-transparent"
        >
          HowellDev Tech Stack
        </motion.h2>

        <p className=" text-gray-400 mt-3">
          Tools & technologies I use to build high-performance products
        </p>

        {/* Marquee */}
        <TechMarquee />

        
        {/* Filters */}
<div className="flex justify-center gap-3 mb-14 flex-wrap">

  {filters.map(f => {
    const isActive = active === f

    return (
      <button
        key={f}
        onClick={() => setActive(f)}
        className="relative px-6 py-2 rounded-full text-sm transition"
      >

        {isActive && (
          <motion.span
            layoutId="activeTechPill"
            className="absolute inset-0 rounded-full
            bg-white/10 border border-white/60"
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
        )}

        <span
          className={`relative z-10
          ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
        >
          {f}
        </span>

      </button>
    )
  })}

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
                <tech.icon
                className="text-4xl text-white/50
                group-hover:text-blue-400
                transition-colors"
              />
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
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
