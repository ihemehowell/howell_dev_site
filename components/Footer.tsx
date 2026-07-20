import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 backdrop-blur py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              height={150}
              width={150}
              className="w-50 object-contain"
            />
          </Link>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Frontend-focused developer building modern web experiences for
            startups and growing businesses.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-neutral-500">
            Pages
          </h4>
          <ul className="mt-6 space-y-3 text-neutral-400">
            <li><Link className="hover:text-white transition" href="/about">About</Link></li>
            <li><Link className="hover:text-white transition" href="/projects">Projects</Link></li>
            <li><Link className="hover:text-white transition" href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-neutral-500">
            Services
          </h4>
          <ul className="mt-6 space-y-3 text-neutral-400">
            <li>Website Development</li>
            <li>Web Applications</li>
            <li>UI / UX Design</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-neutral-500">
            Connect
          </h4>
          <div className="mt-6 flex gap-4 items-center">
            <a
              href="https://github.com/ihemehowell"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/30 hover:scale-110 transition"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* TODO: swap in your real LinkedIn profile URL */}
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/30 hover:scale-110 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* TODO: swap in your real X/Twitter handle */}
            <a
              href="https://x.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/30 hover:scale-110 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="mailto:kelvinuc111@gmail.com"
              className="p-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/30 hover:scale-110 transition"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* NOTE: WhatsApp deep links need the FULL international number,
                no leading 0. Nigerian numbers use country code 234.
                07047845861 -> 2347047845861 (double-check this is correct) */}
            <a
              href="https://wa.me/2347047845861"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/30 hover:scale-110 transition"
            >
              <SiWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Howell Dev. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  )
}