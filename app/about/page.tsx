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
        className="space-y-8 rounded-[2.2rem] border border-border bg-[#f3e7da]/80 backdrop-blur-sm p-7"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Craftsmanship
        </p>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Materials */}
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground">
              Materials
            </p>
            <p className="leading-relaxed">
              We work with carefully selected hardwoods, natural stone, and
              premium finishes chosen for durability, texture, and timeless
              appeal — not trend.
            </p>
          </div>

          {/* Workshops */}
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground">
              Workshops
            </p>
            <p className="leading-relaxed">
              Each piece is crafted in collaboration with skilled artisans and
              local workshops, preserving generational knowledge and precision.
            </p>
          </div>

          {/* Responsibility */}
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground">
              Responsibility
            </p>
            <p className="leading-relaxed">
              Thoughtful sourcing, repairable construction, and timeless design
              reduce waste and extend the life of every piece we create.
            </p>
          </div>

        </div>
      </motion.section>
    </div>
  );
}