import { Product } from '@/types/product';
import React from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col overflow-hidden p-2">
      
      {/* IMAGE (fixed height) */}
      <div className="h-48 w-full bg-gray-50 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain "
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 px-4 py-3">
        
        {/* Text Section (does NOT grow) */}
        <div className="space-y-2 mb-2">
          <h3 className="text-base font-semibold text-gray-900 truncate">
            {product.title}
          </h3>

          {/* ONE LINE ONLY */}
          <p className="text-sm text-gray-600 line-clamp-1">
            {product.description}
          </p>
        </div>

        {/* Push price + button to bottom */}
        <div className="">
          <span className="block text-lg font-medium text-gray-900">
            ${product.price}
          </span>

          <button className="mt-4 w-full bg-gray-900 text-white text-gray-900 py-3 text-sm font-medium rounded-lg hover:bg-gray-900 hover:text-white transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}