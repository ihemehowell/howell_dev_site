'use client'

import { motion } from 'framer-motion'
import { Code, Monitor, Rocket, Users } from 'lucide-react'

export default function Timeline() {
  const milestones = [
    { year: '2019', text: 'Started building websites and web applications.', icon: <Code size={25} /> },
    { year: '2021', text: 'Specialized in React and modern frontend development.', icon: <Monitor size={25} /> },
    { year: '2023', text: 'Launched Howell Dev as a product-focused studio.', icon: <Rocket size={25} /> },
    { year: 'Today', text: 'Partnering with startups and businesses to build scalable digital products.', icon: <Users size={25} /> },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-24"
    >
      <h2 className="text-2xl font-medium mb-10 text-white text-center">Our Journey</h2>

      <div className="space-y-24 border-l border-white/10 pl-8">
        {milestones.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="relative flex  items-start "
          >
            {/* Icon */}
            <div className="absolute -left-6 top-0 bg-transparent rounded-full p-1 flex items-center justify-center ">
              {item.icon}
            </div>

            <p className="text-lg text-neutral-500 px-6">{item.year}</p>
            <p className="mt-1 text-neutral-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
