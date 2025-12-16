"use client";

import { ShoppingCart, User, Search } from "lucide-react";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="w-full bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">

          {/* LOGO */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-purple-700">
            <Link href="/">
              Robo<span className="text-pink-600">Tech</span>
            </Link>
          </h1>

          {/* SEARCH BAR (Desktop Only) */}
          <div className="hidden lg:flex items-center max-w-xl mx-auto w-full bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-4 py-2.5 text-base outline-none"
            />
            <button className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 border-l border-gray-300 transition">
              <Search size={20} />
            </button>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4 sm:gap-6 justify-end">
            
            {/* SEARCH ICON (Mobile / Tablet) */}
            <button className="lg:hidden text-gray-600 hover:text-purple-600 transition">
              <Search size={24} />
            </button>

            {/* CART */}
            <button className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 transition">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-2 text-[10px] bg-purple-600 text-white px-1.5 rounded-full">
                3
              </span>
            </button>

            {/* USER */}
            <button className="text-gray-600 hover:text-purple-600 transition">
              <User size={26} />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}