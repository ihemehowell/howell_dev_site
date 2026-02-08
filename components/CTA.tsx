'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-32 text-center border-t border-white/5 flex flex-col items-center">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-semibold"
      >
        Have a project in mind?
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-neutral-400 max-w-xl"
      >
        Let’s build something great together.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10"
      >
        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-xl bg-white text-black font-medium shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          Start a Project
        </a>
      </motion.div>

    </section>
  )
}
