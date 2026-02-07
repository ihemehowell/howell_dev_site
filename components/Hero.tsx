export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Glow Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-20 blur-[140px]" />
            </div>

            <div className="max-w-5xl px-6 text-center">

                <p className="text-sm uppercase tracking-widest text-neutral-400">
                    Howell Dev
                </p>

                <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-tight">
                    Building Digital Products <br />
                    That Feel Effortless
                </h1>

                <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
                    I design and develop modern websites and web applications
                    for startups and growing businesses.
                </p>

                <div className="mt-10 flex justify-center gap-4">

                    <a
                        href="/contact"
                        className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
                    >
                        Start a Project
                    </a>

                    <a
                        href="/projects"
                        className="px-8 py-4 rounded-xl border border-neutral-700 hover:border-neutral-400 transition"
                    >
                        View Work
                    </a>

                </div>
            </div>
        </section>
    )
}
