import React from 'react'
import CategoryCard from './CategoryCard'
import { div } from 'framer-motion/client';

export interface Category {
  title: string;
  offer: string;
  image: string;
}

const categories: Category[] = [
  {
    title: "Momo's Collection",
    offer: "Offer 15% Off!",
    image: "/momo.png",
  },
  {
    title: "Pizza's Collection",
    offer: "Offer 20% Off!",
    image: "/pizza.png",
  },
];

export default function CategorySection() {
  return (
   <div className='container mx-auto px-2'>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
   </div>
  );
}
