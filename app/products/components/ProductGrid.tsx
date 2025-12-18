"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setProducts } from "@/redux/slice/productSlice";

export default function ProductGrid() {
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  const storedProducts = useAppSelector((state) => state.product.items);
  const searchQuery = useAppSelector((state) => state.filter.query); // 👈 SEARCH

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        console.log(data)
        dispatch(setProducts(data.recipes));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);


  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading products...
      </div>
    );
  }

  if (!storedProducts.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No products found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
      {storedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}