"use client";

import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import Gallery from "@/components/gallery"; 

import { ProductGrid } from "@/components/product-grid";
import { products, categories } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  const testimonials = [
    {
      quote:
        "The Horizon table transformed our dining room. It's sculptural yet quiet, and the craftsmanship is exceptional.",
      author: "private Client, Addis Ababa",
    },
    {
      quote:
        "Pieces that feel like they've always belonged in our home. The oak develops a soft patina instead of wearing out.",
      author: "Private Residence, New York",
    },
    {
      quote:
        "Exceptional craftsmanship and timeless design. Target Furniture pieces elevate every space.",
      author: "Architecture Studio, Milan",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Scroll-triggered animation variants
  const sectionReveal = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemReveal = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="space-y-20 pb-16">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="luxury-container space-y-10"
      >
       <Gallery products={products} />
      </motion.section>

      {/* Featured Products */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="luxury-container space-y-8"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Featured Product
            </p>
            <h2 className="mt-1 text-xl font-medium tracking-tight">
              The Target New Arrival
            </h2>
          </div>
        </div>
        <ProductGrid products={featured} />
      </motion.section>

      {/* Categories */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="luxury-container space-y-8"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Categories
            </p>
            <h2 className="mt-1 text-xl font-medium tracking-tight">
              Pieces for every room
            </h2>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-4 md:grid-cols-5"
        >
          {categories.map((c) => {
            const categoryProduct = products.find((p) => p.category === c.id);
            return (
              <motion.div key={c.id} variants={itemReveal}>
                <Link
                  href={`/shop?category=${c.id}`}
                  className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-border bg-card/70 p-4 pb-5 transition-transform duration-500 hover:-translate-y-2 hover:bg-foreground hover:text-background"
                >
                  <div className="relative h-28 w-full overflow-hidden rounded-2xl bg-muted/70 max-w-[1400px] mx-auto px-4 md:px-0">
                    {categoryProduct && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                      >
                        <Image
                          src={categoryProduct.images[0]}
                          alt={categoryProduct.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.26em]">
                    <span>{c.label}</span>
                    <span className="text-[0.6rem] text-muted-foreground group-hover:text-background">
                      View
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Our Story */}
      <motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1 }}
  className="relative luxury-container overflow-hidden rounded-[2.5rem]"
>
  {/* 🔥 Background Image Layer */}
  <Image
    src="/images/cabinet-2.jpg" // <-- your background image
    alt="Background texture"
    fill
    className="object-cover "
  />

  <motion.div
    initial={{ scale: 1.05 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.5 }}
  >
   
  </motion.div>

  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

  <div className="relative grid gap-12 px-10 py-16 md:grid-cols-[1.3fr,1fr]">
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="max-w-xl space-y-6 text-white"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-white/70">Our story</p>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Furniture that lives with you.
      </h2>
      <p className="text-sm leading-relaxed text-white/80">
        Target Furniture was founded on the belief that everyday objects should
        feel as considered as gallery pieces. Each design begins with proportion,
        then material, then the small details—edge radius, stitching, and the
        way light moves across a surface.
      </p>
      <p className="text-sm leading-relaxed text-white/70">
        We collaborate with family-owned workshops across Europe using responsibly
        sourced oak, walnut, marble, and linen. Every piece is finished by hand,
        creating subtle variations that make each object uniquely yours.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="rounded-[2rem] border border-white/10 bg-white/80 p-8 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-transform duration-500"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Craft</p>
      <p className="mt-4 text-sm leading-relaxed text-neutral-700">
        “We design for the quiet moments—a first coffee in the morning,
        evening light drifting across a room. The pieces almost disappear,
        but you feel them in the way you move through your space.”
      </p>
      <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-600">
        Creative Director
      </p>
    </motion.div>
  </div>
</motion.section>

      {/* Testimonials & Location */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="relative w-full luxury-container overflow-hidden rounded-[2.5rem]"
      >  
    
  
  <Image
    src="/images/hero-bg.jpg" // Make sure this path exists in your public folder
    alt="Background texture"
    fill
    className="object-cover w-full h-full"
    priority
  />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" /> 
      
               
        <div className="relative grid gap-10 p-8 md:grid-cols-[1.2fr,1fr]">
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="space-y-6 rounded-[2.2rem] border border-white/10 bg-white/70 p-7 backdrop-blur-xl shadow-xl hover:-translate-y-2 transition-transform duration-500"
          > 
            <p className="text-xs uppercase tracking-[0.3em] text-black-500">Testimonials</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 text-sm text-black-700"
              >
                <p>“{testimonials[index].quote}”</p>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  — {testimonials[index].author}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2 pt-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-black" : "w-2 bg-neutral-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="space-y-5 rounded-[2.2rem] border border-white/10 bg-white/60 p-7 backdrop-blur-xl shadow-xl hover:-translate-y-2 transition-transform duration-500"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-black-400">Location</p>
            <h3 className="text-lg font-medium tracking-tight text-white opacity-90">
              Garad City Mall, Wello Sefer
            </h3>
            <p className="text-sm text-black-400">Addis Ababa, Ethiopia</p>
            <div className="relative w-full h-[220px] overflow-hidden rounded-xl border border-white/10">
              <iframe
                src="https://maps.google.com/maps?q=Garad%20City%20Mall%20Addis%20Ababa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}