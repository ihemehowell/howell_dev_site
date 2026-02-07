import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50  backdrop-blur-md bg-black/40 border-b border-white/5">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                <Link href="/" className="text-lg font-semibold">
                    Howell Dev
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
                    <Link href="/about" className="hover:text-white transition">About</Link>
                    <Link href="/projects" className="hover:text-white transition">Projects</Link>
                    <Link href="/contact" className="hover:text-white transition">Contact</Link>
                </nav>

                <Link
                    href="/contact"
                    className="px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
                >
                    Start Project
                </Link>

            </div>
        </header>
    )
}
