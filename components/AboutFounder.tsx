"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutFounder() {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-widest text-neutral-400">
            About
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold">
            I’m Howell <br /> Full Stack Developer & Product Builder
          </h2>

          <p className="mt-6 text-neutral-400 leading-relaxed">
            I design and develop modern websites and web applications that are
            fast, scalable, and visually refined.
          </p>

          <p className="mt-4 text-neutral-400">
            I work closely with clients to transform ideas into reliable digital
            products that feel effortless to use.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96
            rounded-2xl overflow-hidden
            border border-white/10
            bg-neutral-900/40 backdrop-blur-xl shadow-xl"
          >
            <Image
              src="/images/howell.jpg"
              alt="Howell Dev"
              fill
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}