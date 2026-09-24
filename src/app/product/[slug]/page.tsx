import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetailView } from "@/components/commerce/ProductDetailView";
import { BRAND } from "@/config/brand";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Atelier Piece Not Found",
    };
  }

  return {
    title: `${product.name} — ${product.collection}`,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${BRAND.name}`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1500,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
