'use client'

import { useRef, useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import MotionDiv from '@/components/MotionDiv'
import { projects } from "@/data/projects";
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollState()
    el.addEventListener('scroll', updateScrollState)
    window.addEventListener('resize', updateScrollState)

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amt = Math.min(el.clientWidth * 0.8, 400)
    el.scrollBy({ left: direction === 'left' ? -amt : amt, behavior: 'smooth' })
  }

  return (
    <section className="py-12 px-6 border-t border-white/5 bg-grid">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Selected Work
        </p>

        <h2 className="mt-4 text-5xl font-semibold">
          Projects
        </h2>

        <div className="mt-16">

          <div className="relative">

            {canScrollLeft && (
              <button
                aria-label="Scroll left"
                onClick={() => scroll('left')}
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 absolute left-2 top-1/2 -translate-y-1/2 z-10 transition-opacity"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            {canScrollRight && (
              <button
                aria-label="Scroll right"
                onClick={() => scroll('right')}
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 absolute right-2 top-1/2 -translate-y-1/2 z-10 transition-opacity"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}

            <div ref={scrollRef} className="grid grid-cols-1 gap-12 md:flex md:gap-6 md:overflow-x-auto md:pb-4 md:pr-4 md:scroll-smooth hide-scrollbar">

         {projects.slice(0, 6).map((project, i) => (
            <div key={project.title} className="md:flex-none">
              <MotionDiv delay={i * 0.1}>

                <div className="glow-card relative group rounded-2xl cursor-pointer bg-neutral-900/60 border border-white/10 overflow-hidden transition-all duration-300 md:min-w-65 md:max-w-65">

                  {/* Image */}
                  <div className="h-40 w-full bg-neutral-800 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5">

                    <h3 className="text-lg font-medium">{project.title}</h3>

                    <p className="mt-2 text-[13px] text-neutral-400 line-clamp-1">{project.description}</p>

                    <div className="mt-3 flex  gap-1.5">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-[7px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Link href={`/projects/${project.slug}`} >
                      <span className="group relative overflow-hidden px-5 py-2.5 text-sm rounded-lg bg-white text-black font-medium transition inline-flex items-center">
                        View Project <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                        
                      </span>
                      </Link>
                    </div>

                  </div>
                </div>

              </MotionDiv>
            </div>
          ))}

            </div>
          </div>
        </div>
        </div>
    </section>
  )
}