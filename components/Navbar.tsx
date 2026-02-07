'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-neutral-900/70 backdrop-blur-xl border border-white/10'
        : 'bg-neutral-900/40 backdrop-blur-md border border-white/5'
      }
      rounded-2xl px-6`}
    >
      <div className="h-14 flex items-center gap-10">

        <Link href="/" className="font-medium">
          Howell Dev
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="ml-auto px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
        >
          Start
        </Link>

      </div>
    </header>
  )
}
