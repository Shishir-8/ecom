"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BottomHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-t border-gray-100">
      <div className="container mx-auto px-2 py-4">
        <div className="flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-purple-50 text-purple-700 font-medium border border-purple-100">
              <Menu size={18} />
              <span className="hidden sm:inline">All Categories</span>
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link href="/" className="hover:text-purple-600">Home</Link>
              <Link href="/products" className="hover:text-purple-600">Products</Link>
              <Link href="#" className="hover:text-purple-600">Wishlist</Link>
              <Link href="#" className="hover:text-purple-600">Stores</Link>
              <Link href="#" className="hover:text-purple-600">Checkout</Link>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <p className="hidden sm:block text-sm font-semibold text-purple-600">
              70% OFF
            </p>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md border border-gray-200"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <nav className="flex flex-col divide-y text-sm font-medium">
              <Link href="/" className="px-4 py-3 hover:bg-gray-50">Home</Link>
              <Link href="/products" className="px-4 py-3 hover:bg-gray-50">Products</Link>
              <Link href="#" className="px-4 py-3 hover:bg-gray-50">Wishlist</Link>
              <Link href="#" className="px-4 py-3 hover:bg-gray-50">Stores</Link>
              <Link href="#" className="px-4 py-3 hover:bg-gray-50">Checkout</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}