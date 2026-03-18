"use client";

import { Suspense, useMemo, useCallback, useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { products, categories, type Category } from "@/data/products";
import { BackButton } from "@/components/back-button";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "popularity", label: "Most Popular" }
] as const;

type SortType = (typeof sortOptions)[number]["id"];

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const activeCategory = searchParams.get("category") as Category | null;
  const query = (searchParams.get("q") ?? "").toLowerCase();
  const sort = (searchParams.get("sort") as SortType) ?? "featured";

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (!value) params.delete(key);
        else params.set(key, value);
      });

      startTransition(() => {
        router.push(`/shop?${params.toString()}`);
      });
    },
    [router, searchParams]
  );

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Filter by category
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Search filter
    if (query) {
      list = list.filter((p) => {
        const text = `${p.name} ${p.description}`.toLowerCase();
        return text.includes(query);
      });
    }

    // Sorting
    const sortMap: Record<SortType, (a: any, b: any) => number> = {
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      popularity: (a, b) => b.popularity - a.popularity,
      featured: (a, b) => Number(b.featured) - Number(a.featured)
    };

    return list.sort(sortMap[sort]);
  }, [activeCategory, query, sort]);

  return (
    <div className="luxury-container space-y-10 py-10">
      <BackButton />
      <div className="h-px w-full bg-border/70" />

      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Collection
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Furniture for every room
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
          Explore sofas, beds, tables, and more—crafted to elevate your space with
          timeless design and modern comfort.
        </p>
      </header>

      {/* Filters */}
      <section className="flex flex-col gap-4 rounded-3xl border border-border bg-card/60 backdrop-blur p-5 md:flex-row md:items-center md:justify-between">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <CategoryButton
            active={!activeCategory}
            onClick={() => updateParams({ category: null })}
            label="All"
          />

          {categories.map((c) => (
            <CategoryButton
              key={c.id}
              active={activeCategory === c.id}
              onClick={() =>
                updateParams({
                  category: activeCategory === c.id ? null : c.id
                })
              }
              label={c.label}
            />
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3 text-xs">
          <span className="text-muted-foreground">Sort</span>

          <select
            value={sort}
            onChange={(e) => updateParams({ sort: e.target.value })}
            className="rounded-full border border-border bg-card px-4 py-1.5 text-xs outline-none hover:border-foreground transition"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Results */}
      <section className="space-y-5">
        <p className="text-xs text-muted-foreground">
          {isPending ? "Updating..." : `Showing ${filteredProducts.length} piece${filteredProducts.length !== 1 ? "s" : ""}`}
        </p>

        <ProductGrid products={filteredProducts} />
      </section>
    </div>
  );
}

function CategoryButton({
  active,
  onClick,
  label
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.25em] transition-all duration-200 border
        ${
          active
            ? "border-foreground bg-foreground text-background shadow-sm"
            : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground"
        }`}
    >
      {label}
    </button>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center text-sm text-muted-foreground animate-pulse">
          Loading products...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
