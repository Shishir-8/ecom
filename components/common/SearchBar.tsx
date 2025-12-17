import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
    return (
        <>
            <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 px-4 py-2.5 text-base outline-none"
            />
            <button className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 border-l border-gray-300 transition">
                <Search size={20} />
            </button>
        </>
  )
}
