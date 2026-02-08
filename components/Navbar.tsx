'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl
      transition-all duration-300
      ${scrolled
        ? 'bg-neutral-900/70 backdrop-blur-xl border border-white/10'
        : 'bg-neutral-900/40 backdrop-blur-md border border-white/5'
      }
      rounded-2xl px-6`}
    >
      {/* Top Bar */}
      <div className="h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-medium">
          Howell Dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition
                ${pathname === link.href
                  ? 'text-white'
                  : 'text-neutral-400 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:block px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
        >
          Start
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden pb-4 pt-2 flex flex-col gap-4 items-start justify-center text-sm">

          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm transition
                ${pathname === link.href
                  ? 'text-white'
                  : 'text-neutral-400 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 w-fit px-5 py-2  rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
          >
            Start
          </Link>

        </div>
      )}

    </header>
  )
}
