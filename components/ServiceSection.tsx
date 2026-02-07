const services = [
    {
        title: 'Website Development',
        desc: 'High-performance marketing websites and landing pages.',
    },
    {
        title: 'Web Applications',
        desc: 'Dashboards, portals, and custom web platforms.',
    },
    {
        title: 'UI/UX Implementation',
        desc: 'Pixel-perfect conversion of designs into code.',
    },
    {
        title: 'Optimization & SEO',
        desc: 'Speed, accessibility, and search optimization.',
    },
]

export default function ServicesSection() {
    return (
        <section className="py-28 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto">

                <p className="text-sm uppercase tracking-widest text-neutral-400">
                    Services
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                    What I Do
                </h2>

                <div className="mt-14 grid md:grid-cols-2 gap-8">

                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 transition"
                        >
                            <h3 className="text-xl font-medium">{service.title}</h3>
                            <p className="mt-3 text-neutral-400">{service.desc}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
