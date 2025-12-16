"use client";

import { ChevronDown, ShoppingCart, User, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MainHeader() {
  const [category, setCategory] = useState("All Categories");

  return (
    <header className="w-full bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6">

        {/* LEFT SIDE: LOGO + SEARCH */}
        <div className="flex items-center gap-6 flex-1">
          {/* LOGO */}
          <h1 className="text-3xl font-extrabold text-purple-700 tracking-tight">
            <Link href={"/"}>Robo<span className="text-pink-600">Tech</span></Link>
          </h1>

          {/* SEARCH BAR */}
          <div className="hidden lg:flex flex-1 max-w-xl items-center bg-white rounded-md border border-gray-200 shadow-md overflow-hidden">
    
            {/* SEARCH INPUT */}
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-4 py-3 text-base outline-none"
            />

            {/* SEARCH BUTTON — WHITE BG */}
            <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 border-l border-l-gray-300 transition flex items-center justify-center">
              <Search size={22} className="text-gray-900" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="flex items-center gap-6">
          {/* CART */}
          <button className="w-12 h-12 bg-white  rounded-full flex items-center justify-center relative text-gray-600 hover:text-purple-600 transition">
            <ShoppingCart size={26} />
            <span className="absolute -top-1 -right-2 text-xs bg-purple-600 text-white px-1 rounded-full">
              3
            </span>
          </button>

          {/* USER */}
          <button className="text-gray-600 hover:text-purple-600 transition">
            <User size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}