'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { technologies } from '@/data/technologies'

export default function TechMarquee() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="relative overflow-hidden py-10">

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex w-max gap-12 items-center motion-reduce:animate-none"
        animate={paused ? {} : { x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >

        {[...technologies, ...technologies].map((tech, i) => (
          <div
            key={i}
            title={tech.name}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="group relative flex flex-col items-center gap-2 text-3xl sm:text-4xl md:text-5xl text-white/70 transition-colors"
            style={{ ['--hover-color' as string]: tech.color }}
          >
            <tech.icon
              className="transition-colors"
              style={{ color: undefined }}
              onMouseEnter={(e) => (e.currentTarget.style.color = tech.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 text-xs font-normal text-white/60 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {tech.name}
            </span>
            <span className="sr-only">{tech.name}</span>
          </div>
        ))}

      </motion.div>

    </div>
  )
}