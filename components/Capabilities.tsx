'use client'

import MotionDiv from "./MotionDiv"
import { useState } from "react"
import {
  Boxes,
  LayoutGrid,
  Sparkles,
  Gauge,
  Monitor,
  PencilRuler
} from "lucide-react"

import type { LucideIcon } from "lucide-react"

type Capability = {
  title: string
  desc: string
  icon: LucideIcon
}

const capabilities: Capability[] = [
  {
    title: 'Product Engineering',
    desc: 'Architecting and building scalable web applications.',
    icon: Boxes,
  },
  {
    title: 'Frontend Systems',
    desc: 'Design systems, UI libraries, and component architecture.',
    icon: LayoutGrid,
  },
  {
    title: 'Experience Design',
    desc: 'Interfaces that feel intuitive and refined.',
    icon: Sparkles,
  },
  {
    title: 'Performance & SEO',
    desc: 'Speed, accessibility, and search visibility.',
    icon: Gauge,
  },
  {
    title: 'Web Applications',
    desc: 'Dashboards, portals, and custom web platforms.',
    icon: Monitor,
  },
  {
    title: 'UI/UX Implementation',
    desc: 'Pixel-perfect conversion of designs into code.',
    icon: PencilRuler,
  },
]

export default function Capabilities() {

  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Capabilities
        </p>

        <h2 className="mt-4 text-5xl font-semibold">
          What I Specialize In
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {capabilities.map((item, i) => (
            <MotionDiv key={i} delay={i * 0.1}>
              <SpotlightCard index={i} item={item} />
            </MotionDiv>
          ))}

        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------- */
/* Spotlight Card Component */
/* -------------------------------------------- */

function SpotlightCard({ item, index }: { item: Capability; index: number }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
      className="relative overflow-hidden glow-card p-10 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition group"
    >

      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.15), transparent 40%)`
        }}
      />

      {/* Number */}
      <span className="absolute top-6 right-6 text-sm text-white/30">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
        <item.icon className="w-6 h-6 text-white/50" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-medium relative z-10">
        {item.title}
      </h3>

      <p className="mt-4 text-neutral-400 relative z-10">
        {item.desc}
      </p>

    </div>
  )
}
