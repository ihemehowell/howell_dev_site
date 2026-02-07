import howell from '../images/howell.jpg'


export default function AboutFounder() {
    return (
        <section className="py-28 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Text */}
                <div>
                    <p className="text-sm uppercase tracking-widest text-neutral-400">
                        About
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                        I’m Howell — Frontend Developer & Product Builder
                    </h2>

                    <p className="mt-6 text-neutral-400 leading-relaxed">
                        I design and develop modern websites and web applications that are fast,
                        scalable, and visually refined.
                    </p>

                    <p className="mt-4 text-neutral-400">
                        I work closely with clients to transform ideas into reliable digital
                        products that feel effortless to use.
                    </p>
                </div>

                {/* Image Placeholder */}
                <div className="h-105 w-3xl rounded-2xl   flex items-center justify-center">
                    <img
                        src={howell.src}
                        alt="Howell's Photo"
                        className="rounded-2xl h-[420px]  object-cover"
                    />
                </div>

            </div>
        </section>
    )
}
