"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    
    "/images/hero-desktop-2.jpg",
    "/images/chair-2.jpg",
];

export default function MobileHeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <div className="absolute inset-0 md:hidden overflow-hidden rounded-[2.5rem]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -80) {
              setDirection(1);
              setIndex((prev) => (prev + 1) % images.length);
            } else if (info.offset.x > 80) {
              setDirection(-1);
              setIndex(
                (prev) => (prev - 1 + images.length) % images.length
              );
            }
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Target Furniture mobile showcase"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Luxury overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-6 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}