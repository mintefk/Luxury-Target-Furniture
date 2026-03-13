import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { ProductGrid } from "@/components/product-grid";
import { ProductDetail } from "@/components/product-detail";
import { BackButton } from "@/components/back-button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  const related = getRelatedProducts(product, 3);

  return (
    <div className="luxury-container space-y-10 py-10">
      <BackButton />
      <div className="h-px w-full bg-border/70" />

      <ProductDetail product={product} />

      <section className="space-y-5">
        <h2 className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Related pieces
        </h2>

        <ProductGrid products={related} />
      </section>
    </div>
  );
}