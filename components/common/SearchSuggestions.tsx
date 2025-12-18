"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function SearchSuggestions() {
  const query = useAppSelector((state) => state.filter.query);
  const products = useAppSelector((state) => state.product.items);

  if (!query) return null; // don't show if no query

  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5); // max 5 suggestions

  return (
    <div className="absolute top-full left-[300px] right-0 max-w-md w-full mt-3 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">
      {filteredProducts.length ? (
        <ul className="max-h-60 overflow-y-auto">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-10 h-10 object-contain rounded-md"
                />
                <span className="text-gray-700 text-sm truncate">{product.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-4 py-2 text-gray-500 text-sm">No results found</p>
      )}
    </div>
  );
}