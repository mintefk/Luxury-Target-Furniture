"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ================= TYPES =================
export type Product = {
  id: string | number;
  name: string;
  images: string[];
  featured?: boolean;
};

// ================= MAIN =================
export default function Gallery({
  products = [],
}: {
  products?: Product[];
}) {
  const featured = useMemo(
    () => products.filter((p) => p.featured),
    [products]
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) =>
      prev !== null ? (prev + 1) % featured.length : prev
    );
  }, [featured.length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) =>
      prev !== null
        ? (prev - 1 + featured.length) % featured.length
        : prev
    );
  }, [featured.length]);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <Header />
        <GalleryGrid items={featured} onOpen={open} />

        <Lightbox
          items={featured}
          activeIndex={activeIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      </div>
    </section>
  );
}

// ================= HEADER =================
function Header() {
  return (
    <div className="mb-12 space-y-3">
      <p className="text-xs tracking-[0.4em] uppercase text-neutral-500">
        Gallery
      </p>
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
        Crafted Spaces & Details
      </h2>
    </div>
  );
}

// ================= GRID =================
function GalleryGrid({
  items,
  onOpen,
}: {
  items: Product[];
  onOpen: (index: number) => void;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        show: {
          transition: { staggerChildren: 0.08 },
        },
      }}
      className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
    >
      {items.map((item, i) => (
        <GalleryItem
          key={item.id}
          item={item}
          index={i}
          onOpen={onOpen}
        />
      ))}
    </motion.div>
  );
}

// ================= ITEM =================
function GalleryItem({
  item,
  index,
  onOpen,
}: {
  item: Product;
  index: number;
  onOpen: (index: number) => void;
}) {
  return (
    <motion.button
      onClick={() => onOpen(index)}
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl"
    >

      <div className="relative aspect-[4/5]">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition" />

        <div className="absolute bottom-0 p-5">
          <h3 className="text-white text-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
            {item.name}
          </h3>
        </div>
      </div>
    </motion.button>
  );
}

// ================= LIGHTBOX =================
function Lightbox({
  items,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}: {
  items: Product[];
  activeIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, onClose, onNext, onPrev]);

  // Preload next/prev images
  useEffect(() => {
    if (activeIndex === null) return;

    const preload = (index: number) => {
      const img = new window.Image();
      img.src = items[index].images[0];
    };

    preload((activeIndex + 1) % items.length);
    preload((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items]);

  return (
    <AnimatePresence>
      {activeIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* IMAGE CONTAINER */}
          <motion.div
            key={items[activeIndex].id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) onNext();
              if (info.offset.x > 100) onPrev();
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full px-4"
          >
            <Image
              src={items[activeIndex].images[0]}
              alt={items[activeIndex].name}
              width={1400}
              height={900}
              className="w-full max-h-[85vh] object-contain rounded-xl"
              priority
            />

            {/* Caption */}
            <p className="absolute bottom-6 w-full text-center text-neutral-300 text-sm">
              {items[activeIndex].name}
            </p>
          </motion.div>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ×
          </button>

          {/* PREV */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 text-white text-8xl"
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 text-white text-8xl"
          >
            ›
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

