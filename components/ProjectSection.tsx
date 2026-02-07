const projects = [
    {
        title: 'Ecommerce Platform',
        desc: 'Full-stack ecommerce web app with cart and checkout.',
    },
    {
        title: 'Business Landing Page',
        desc: 'High-conversion marketing website.',
    },
    {
        title: 'Admin Dashboard',
        desc: 'Analytics and management dashboard.',
    },
]

export default function ProjectsSection() {
    return (
        <section className="py-28 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto">

                <p className="text-sm uppercase tracking-widest text-neutral-400">
                    Selected Work
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                    Projects
                </h2>

                <div className="mt-14 grid md:grid-cols-3 gap-8">

                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 transition"
                        >
                            <div className="h-40 rounded-lg bg-neutral-800 mb-6" />

                            <h3 className="text-xl font-medium">{project.title}</h3>
                            <p className="mt-3 text-neutral-400">{project.desc}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
