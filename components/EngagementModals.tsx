import MotionDiv from '@/components/MotionDiv'

const models = [
  {
    name: 'Starter',
    price: 'From $500',
    desc: 'For simple websites and landing pages.',
    features: [
      'Single-page or small website',
      'Responsive design',
      'Basic SEO setup',
      '2 weeks delivery',
    ],
  },
  {
    name: 'Growth',
    price: 'From $1,500',
    desc: 'For startups and growing businesses.',
    features: [
      'Multi-page website or web app',
      'Custom UI components',
      'Performance optimization',
      '4–6 weeks delivery',
    ],
  },
  {
    name: 'Custom',
    price: 'Let’s Talk',
    desc: 'For complex products and platforms.',
    features: [
      'Product architecture',
      'Advanced integrations',
      'Ongoing support',
      'Flexible timeline',
    ],
  },
]

export default function EngagementModels() {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Engagement
        </p>

        <h2 className="mt-4 text-5xl font-semibold">
          How We Can Work Together
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {models.map((model, i) => (
            <MotionDiv key={i} delay={i * 0.1}>
              <div className="glow-card p-10 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition">

                <h3 className="text-2xl font-medium">{model.name}</h3>

                <p className="mt-2 text-neutral-400">{model.desc}</p>

                <p className="mt-6 text-3xl font-semibold">
                  {model.price}
                </p>

                <ul className="mt-6 space-y-3 text-neutral-400 mb-8">
                  {model.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>

                <a
                  href="/contact"
                 className="group relative overflow-hidden px-8  py-4 rounded-xl bg-white text-black font-medium transition" 
                >
                  Get Started
                </a>

              </div>
            </MotionDiv>
          ))}

        </div>
      </div>
    </section>
  )
}
