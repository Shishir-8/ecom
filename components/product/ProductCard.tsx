import React from 'react'

export default function ProductCard() {
  return (
    <div className="max-w-sm">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl duration-300">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Product"
            className="w-full h-58 object-cover"
          />


          <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
            New Arrival
          </span>
        </div>


        <div className="p-3">

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Premium Wireless Headphones
          </h3>

          <p className="text-gray-500 text-sm mb-2 line-clamp-1 leading-relaxed">
            Experience high-fidelity sound with active noise cancellation and soft comfort cushioning. l
          </p>


          <div className="flex items-center justify-between mb-3">
            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold text-gray-900">$149</span>
              <span className="text-sm text-gray-400 line-through">$199</span>
            </div>
            <span className="text-green-600 text-sm font-medium">25% Off</span>
          </div>

          <button
            className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  )
}
