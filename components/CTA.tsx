export default function CTA() {
    return (
        <section className="py-32 px-6 text-center border-t border-white/5">

            <h2 className="text-4xl md:text-5xl font-semibold">
                Have a project in mind?
            </h2>

            <p className="mt-6 text-neutral-400">
                Let’s build something great together.
            </p>

            <div className="mt-10">
                <a
                    href="/contact"
                    className="inline-block px-10 py-4 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
                >
                    Start a Project
                </a>
            </div>

        </section>
    )
}
