"use client"

import React, { useState } from "react";

export default function CategoryFilter() {
  const categories = ["Electronics", "Clothing", "Shoes", "Accessories"];
  const [priceRange, setPriceRange] = useState([0, 500]); // example min-max

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = Number(e.target.value);
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  return (
    <aside className="md:col-span-1">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        
        {/* Category Filter */}
        <h3 className="px-5 py-4 text-sm font-semibold text-gray-900 border-b border-gray-100">
          Filter by Category
        </h3>

        <ul className="divide-y divide-gray-100">
          {categories.map((category) => (
            <li key={category} className="px-5 py-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="
                    h-4 w-4
                    border border-gray-300
                    rounded-sm
                    accent-purple-600
                    focus:ring-0
                  "
                />
                <span className="text-sm text-gray-700">
                  {category}
                </span>
              </label>
            </li>
          ))}
        </ul>

        {/* Price Range Filter */}
        <div className="px-5 py-4 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Filter by Price
          </h3>

          <div className="flex items-center gap-3">
            <input
              type="number"
              min={0}
              max={priceRange[1]}
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-1/2 px-2 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="Min"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              min={priceRange[0]}
              max={10000}
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-1/2 px-2 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="Max"
            />
          </div>
        </div>

      </div>
    </aside>
  );
}