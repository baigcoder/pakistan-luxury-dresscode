import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/commerce/CatalogView";
import { BRAND } from "@/config/brand";

const VALID_CATEGORIES = ["women", "men", "couture", "accessories"] as const;
type CategoryType = typeof VALID_CATEGORIES[number];

export function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${capitalized} Collection`,
    description: `Browse the ${capitalized} collection by ${BRAND.name}. Modern sculptural silhouettes grounded in authentic Pakistani textile heritage.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!VALID_CATEGORIES.includes(category as CategoryType)) {
    notFound();
  }

  return <CatalogView initialCategory={category as CategoryType} />;
}
