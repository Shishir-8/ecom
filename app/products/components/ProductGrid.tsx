"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setProducts } from "@/redux/slice/productSlice";

export default function ProductGrid() {
  const [loading, setLoading] = useState(true);
  const storedProducts = useAppSelector((state) => state.product.items)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        dispatch(setProducts(data))
        
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading products...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
      {storedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}