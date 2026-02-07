import MotionDiv from "./MotionDiv"

const capabilities = [
  {
    title: 'Product Engineering',
    desc: 'Architecting and building scalable web applications.',
  },
  {
    title: 'Frontend Systems',
    desc: 'Design systems, UI libraries, and component architecture.',
  },
  {
    title: 'Experience Design',
    desc: 'Interfaces that feel intuitive and refined.',
  },
  {
    title: 'Performance & SEO',
    desc: 'Speed, accessibility, and search visibility.',
  },
  {
        title: 'Web Applications',
        desc: 'Dashboards, portals, and custom web platforms.',
    },
    {
        title: 'UI/UX Implementation',
        desc: 'Pixel-perfect conversion of designs into code.',
    },
]

export default function Capabilities() {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Capabilities
        </p>

        <h2 className="mt-4 text-5xl font-semibold">
          What I Specialize In
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {capabilities.map((item, i) => (
            <MotionDiv  key={i} delay={i * 0.1}>
            <div
              className="glow-card p-10 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition"
            >
              <h3 className="text-2xl font-medium">{item.title}</h3>
              <p className="mt-4 text-neutral-400">{item.desc}</p>
            </div>
            </MotionDiv>
          ))}

        </div>
      </div>
    </section>
  )
}
