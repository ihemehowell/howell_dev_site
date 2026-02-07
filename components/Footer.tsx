import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                <p className="text-neutral-400">
                    © {new Date().getFullYear()} Howell Dev. All rights reserved.
                </p>

                <div className="flex gap-6 text-sm text-neutral-400">
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>

            </div>
        </footer>
    )
}
