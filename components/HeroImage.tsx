"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/images/hero-desktop-2.jpg",
  "/images/hero-desktop.jpg",
 
];

export default function HeroImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 hidden md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9, // faster fade
            ease: "easeInOut", // smoother
          }}
        >
          <Image
            src={images[index]}
            alt="Target Furniture luxury living room"
            fill
            priority
            sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}