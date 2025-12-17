import React from 'react'
import ProductCard from '../../app/products/components/ProductCard'
import { BiLeftArrow } from 'react-icons/bi'
import { MoveRight } from 'lucide-react'

export default async function MostPopular() {
    const response = await fetch("https://fakestoreapi.com/products?limit=8")
  const products = await response.json()
  return (
    <div className='py-16'>

      <div className="text-center mb-12">
        <h2 className="relative inline-block mb-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          New Arrivals
        </h2>

        <p className="text-muted-foreground text-sm text-gray-600 md:text-base">
          Discover the latest most new arrivals
        </p>
      </div>

      <div className="container mx-auto px-2 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="flex mt-10 items-center justify-center">
        <button className="px-8 flex items-center gap-2 py-4 border border-2 border-violet-600  rounded shadow-md hover:bg-purple-600 hover:text-white transition transform hover:-translate-y-1 hover:shadow-lg">
          Explore More <span><MoveRight /></span>
        </button>
      </div>
    </div>
  )
}
