'use client'

import MotionDiv from '@/components/MotionDiv'

const projects = [
  {
    title: 'Ecommerce Platform',
    desc: 'Full-stack ecommerce platform with cart, checkout, and admin.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
  },
  {
    title: 'Business Landing Page',
    desc: 'High-conversion marketing website for a service business.',
    tags: ['Next.js', 'SEO', 'Performance'],
  },
  {
    title: 'Admin Dashboard',
    desc: 'Analytics dashboard for internal operations.',
    tags: ['React', 'Charts', 'UI System'],
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio website showcasing projects and skills.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-32 px-6 border-t border-white/5 bg-grid">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Selected Work
        </p>

        <h2 className="mt-4 text-5xl font-semibold">
          Case Studies
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-12">

          {projects.map((project, i) => (
            <MotionDiv key={project.title} delay={i * 0.1}>

              <div className="glow-card relative group rounded-3xl cursor-pointer bg-neutral-900/60 border border-white/10 overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300">

                {/* Image Placeholder */}
                <div className="h-64 bg-neutral-800 group-hover:scale-105 transition-transform duration-300" />

                <div className="p-8">

                  <h3 className="text-2xl font-medium">{project.title}</h3>

                  <p className="mt-3 text-neutral-400">{project.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <span className="group relative overflow-hidden px-8 py-4 rounded-xl bg-white text-black font-medium transition ">
                      View Case Study →
                      <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
                    </span>
                  </div>

                </div>
              </div>

            </MotionDiv>
          ))}

        </div>
      </div>
    </section>
  )
}
