"use client"; // Only if this page needs client hooks, otherwise remove

import CategoryFilter from "@/app/products/components/CategoryFilter";
import ProductGrid from "@/app/products/components/ProductGrid";

export default function ProductsPage() {
  return (
    <section className="container mx-auto py-6 px-2 sm:px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar: sticky only on md and above */}

        <CategoryFilter />


        <ProductGrid />

      </div>
    </section>
  );
}