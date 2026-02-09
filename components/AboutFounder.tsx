import Image from "next/image"

export default function AboutFounder() {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-white/5">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Text */}
        <div>

          <p className="text-sm uppercase tracking-widest text-neutral-400">
            About
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold">
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

        {/* Image */}
        <div className="flex justify-center md:justify-end">

          <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[360px]
            rounded-2xl overflow-hidden
            border border-white/10
            bg-neutral-900/40 backdrop-blur-xl shadow-xl">

            <Image
              src='/images/howell.jpg'
              alt="Howell portrait"
              fill
              className="object-cover"
              priority
            />

          </div>

        </div>

      </div>

    </section>
  )
}
