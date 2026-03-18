"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroImage from "@/components/HeroImage";
import MobileHeroSlider from "@/components/MobileHeroSlider";

export function Hero() {
  return (
    <section className="luxury-gradient border-b border-border/60">
      <div className="luxury-container flex min-h-[70vh] flex-col gap-10 py-14 md:min-h-[80vh] md:flex-row md:items-center">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Target Furniture 
          </motion.p>

          <motion.h1
            className="text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            ኑሮን ቀለል
            <span className="block font-sm">
            Siplicity Innovation Style
            </span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-sm leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Target Furniture crafts timeless pieces in noble materials. Designed to age beautifully and live at the center
            of everyday rituals.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full text-xs tracking-[0.22em] uppercase bg-black text-white hover:bg-[#924e1f] transition-colors"
            >
              <Link href="/shop">Explore collection</Link>
            </Button>

            <Button
               asChild
              size="lg"
              className="rounded-full text-xs tracking-[0.22em] uppercase bg-white text-black hover:bg-[#924e1f] transition-colors"
             >
             <Link href="/contact">Pre-order</Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-4 flex gap-10 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span>Hand-finished with luxury tone</span>
            <span>Responsible materials</span>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          <div className="relative h-[360px] overflow-hidden rounded-[2.5rem] border border-border bg-[#efe4d8] shadow-soft md:h-[480px]">

            {/* Desktop Slideshow */}
            <HeroImage />

            {/* Mobile Images */}
           {/* Mobile Images */}
            <div className="flex h-full flex-col md:hidden">
              {/* Mobile Slider */}
               <MobileHeroSlider />
             </div>

            {/* Light Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75)_0,_transparent_55%)]" />

           
          </div>
        </motion.div>

      </div>
    </section>
  );
}