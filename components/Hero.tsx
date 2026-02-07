import MotionDiv from '@/components/MotionDiv'


export default function Hero() {
    return (
        <MotionDiv>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">

            {/* Glow Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-25 blur-[160px]" />
            </div>

            <div className="max-w-6xl px-6 text-center">

            <span className="inline-block px-4 py-2 rounded-full border border-white/10 text-sm  uppercase tracking-widest text-neutral-400">
                    Founder-led Development Studio
                </span>

                <h1 className="mt-8 text-6xl md:text-7xl font-semibold leading-tight">
                    Designing & Building <br />
                   Modern Digital Products
                </h1>

                <p className="mt-6 text-xl text-neutral-400 max-w-3xl mx-auto">
                    HowellDev is a product-focused studio creating high-performance websites, web apps, and digital experience for ambitious teams
                </p>

                <div className="mt-12 flex justify-center gap-4">

                    <a
                        href="/contact"
                        className="px-10 py-4 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
                    >
                        Start a Project
                    </a>

                    <a
                        href="/projects"
                        className="px-10 py-4 rounded-xl border border-white/15  hover:border-white/40 transition"
                    >
                        View Work
                    </a>

                </div>
            </div>
        </section>
        </MotionDiv>
    )
}
