'use client'

import { motion } from 'framer-motion'
import { technologies } from '@/data/technologies'

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-10">

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex w-max gap-12 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >

        {[...technologies, ...technologies].map((tech, i) => (
          <div
            key={i}
            className="text-3xl sm:text-4xl md:text-5xl
            text-white/70 hover:text-blue-400 transition-colors"
          >
            <tech.icon />
          </div>
        ))}

      </motion.div>

    </div>
  )
}
