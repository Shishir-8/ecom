import React from 'react'
import ProductCard from './ProductCard'
import { BiLeftArrow } from 'react-icons/bi'
import { MoveRight } from 'lucide-react'

export default function MostPopular() {
  return (
    <div className='py-16'>

      <div className="text-center mb-12">
        <h2 className="relative inline-block mb-4 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Most Popular
        </h2>

        <p className="text-muted-foreground text-sm text-gray-600 md:text-base">
          Discover the most loved items this week
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>


      <div className="flex mt-10 items-center justify-center">
        <button className="px-8 flex items-center gap-2 py-4 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition transform hover:-translate-y-1 hover:shadow-lg">
          Explore More <span><MoveRight /></span>
        </button>
      </div>
    </div>
  )
}
