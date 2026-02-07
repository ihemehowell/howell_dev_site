'use client'

import { motion } from 'framer-motion'

export const Metadata = {
  title: 'About Howell Dev',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pt-32 max-w-4xl mx-auto">

      <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold"
    >
      About Howell Dev
    </motion.h1>

      <p className="mt-8 text-neutral-400 leading-relaxed">
        Howell Dev is a product-focused development studio building modern web
        platforms for startups and growing businesses.
      </p>

      <p className="mt-4 text-neutral-400 leading-relaxed">
        We specialize in crafting fast, scalable, and conversion-driven digital
        experiences using modern technologies like Next.js, React, and Tailwind CSS.
      </p>


    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">

      <div className="p-6 rounded-xl bg-neutral-900 border border-white/10">
        <p className="text-3xl font-semibold">4+</p>
        <p className="text-neutral-400 mt-1">Years Experience</p>
      </div>

      <div className="p-6 rounded-xl bg-neutral-900 border border-white/10">
        <p className="text-3xl font-semibold">20+</p>
        <p className="text-neutral-400 mt-1">Projects Shipped</p>
      </div>

      <div className="p-6 rounded-xl bg-neutral-900 border border-white/10">
        <p className="text-3xl font-semibold">10+</p>
        <p className="text-neutral-400 mt-1">Technologies</p>
      </div>

      <div className="p-6 rounded-xl bg-neutral-900 border border-white/10">
        <p className="text-3xl font-semibold">100%</p>
        <p className="text-neutral-400 mt-1">Client Satisfaction</p>
      </div>

    </div>

  </motion.div>

    <div className="border-t border-white/10 mt-24"/>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
    <div className="mt-24">

      <h2 className="text-2xl font-medium mb-10">Our Journey</h2>

      <div className="space-y-10 border-l border-white/10 pl-6">

          <div>
            <p className="text-sm text-neutral-500">2019</p>
            <p className="mt-1">Started building websites and web applications.</p>
          </div>

          <div>
            <p className="text-sm text-neutral-500">2021</p>
            <p className="mt-1">Specialized in React and modern frontend development.</p>
          </div>

          <div>
            <p className="text-sm text-neutral-500">2023</p>
            <p className="mt-1">Launched Howell Dev as a product-focused studio.</p>
          </div>

          <div>
            <p className="text-sm text-neutral-500">Today</p>
            <p className="mt-1">
              Partnering with startups and businesses to build scalable digital products.
            </p>
          </div>

        </div>

    </div>
    </motion.div>

      <div className="border-t border-white/10 mt-24"/>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <div className="mt-12 space-y-6">

        <h2 className="text-2xl font-medium">Our Philosophy</h2>

        <p className="text-neutral-400 leading-relaxed">
          We believe great products are built at the intersection of design,
          engineering, and strategy. Every project starts with understanding
          your goals and translating them into clean, intuitive user experiences.
        </p>

        <h2 className="text-2xl font-medium">Founder</h2>

        <p className="text-neutral-400 leading-relaxed mb-10">
          Howell Dev is led by Howell, a frontend-focused engineer with a strong
          passion for building modern web interfaces and scalable product systems.
          Howell has worked on multiple production projects and focuses on
          delivering reliable, maintainable software that grows with your business.
        </p>

      </div>
    </motion.div>

    </main>
  )
}
