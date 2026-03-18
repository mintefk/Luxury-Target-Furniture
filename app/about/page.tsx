"use client";

import { BackButton } from "@/components/back-button";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="luxury-container space-y-12 py-10">
      <BackButton />

      <div className="h-px w-full bg-border/70" />

      {/* Header */}
      <motion.header
        className="space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          About
        </p>

        <h1 className="text-3xl font-medium tracking-tight leading-tight">
          A studio for quiet luxury.
        </h1>

        <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
          Target Woodworks is a design-led furniture studio exploring the
          intersection of architecture, craftsmanship, and everyday living —
          where form meets feeling.
        </p>
      </motion.header>

      {/* Story + Mission */}
      <section className="grid gap-10 md:grid-cols-[1.2fr,1fr]">

        {/* Story */}
        <motion.div
          className="space-y-6 text-sm leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Our collections are shaped by a few essential gestures — a softened
            corner, a generous seat depth, the way a surface meets the palm of
            your hand. These are quiet details, but they define how a piece is
            experienced every day.
          </p>

          <p>
            We design in small, intentional series, allowing each piece to evolve
            and refine over time rather than follow seasonal trends. The result
            is a collection that feels cohesive, timeless, and deeply considered.
          </p>

          <p>
            At its core, our work is about creating spaces that feel calm,
            grounded, and quietly luxurious.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="space-y-4 rounded-[2.2rem] border border-border bg-card/80 backdrop-blur-sm p-7 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.3em]">
            Mission
          </p>

          <p className="leading-relaxed">
            To create enduring furniture that supports daily life with a sense
            of ease, clarity, and beauty — without excess. Every piece is
            designed to last, both physically and emotionally.
          </p>
        </motion.div>
      </section>

      {/* Craftsmanship */}
      <motion.section
  className="relative rounded-[2rem] border border-border overflow-hidden p-6 text-white h-[350px] md:h-[400px]"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  {/* Background Image with subtle vertical motion */}
  <motion.div
    className="absolute inset-0 z-0 w-full h-full opacity-80"
    style={{

      backgroundImage: "url('/images/sofa-2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    animate={{ y: ["-5px", "5px", "-5px"] }} // smaller motion for compact section
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Transparent overlay for readability */}
  <div className="absolute inset-0 z-0 bg-black/35" />

  {/* Content */}
  <div className="relative z-10 space-y-6 h-full flex flex-col justify-center">
    <p className="text-xs uppercase tracking-[0.3em] font-semibold text-white/90">
      Craftsmanship
    </p>

    <div className="grid gap-6 md:grid-cols-3 mt-2 text-sm text-white/90">
      {/* Materials */}
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white">
          Materials
        </p>
        <p className="leading-relaxed text-white/80">
          Carefully selected hardwoods, natural stone, and premium finishes chosen for durability, texture, and timeless appeal.
        </p>
      </div>

      {/* Workshops */}
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white">
          Workshops
        </p>
        <p className="leading-relaxed text-white/80">
          Each piece is crafted in collaboration with skilled artisans and local workshops, preserving generational knowledge.
        </p>
      </div>

      {/* Responsibility */}
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white">
          Responsibility
        </p>
        <p className="leading-relaxed text-white/80">
          Thoughtful sourcing, repairable construction, and timeless design reduce waste and extend the life of every piece.
        </p>
      </div>
    </div>
  </div>
</motion.section>
    </div>
  );
}