import React from 'react'
import CategoryCard from './CategoryCard'

export default function CategorySection() {
    return (
        <div className='bg-gray-100 w-full py-16'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <CategoryCard />
                    <CategoryCard />
                </div>
            </div>
        </div>
    )
}
