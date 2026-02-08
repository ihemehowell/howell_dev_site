'use client'
import { motion } from 'framer-motion'
import { technologies } from '@/data/technologies'

export default function TechMarquee() {
  return (
    <div className="overflow-hidden py-10">
      <motion.div
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        className="flex gap-14 w-max"
      >
        {[...technologies, ...technologies].map((tech, i) => (
          <div key={i} className="text-5xl text-white/80 hover:text-blue-400 transition">
            <tech.icon />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
