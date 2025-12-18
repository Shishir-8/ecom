"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

/* ---------- NAV LINKS ---------- */
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/products" },
  { name: "About Us", href: "/wishlist" },
  { name: "Stores", href: "/cart" },
  { name: "Checkout", href: "/checkout" },
];

export default function BottomHeader() {
  return (
    <header className="w-full bg-white border-t border-gray-100 hidden md:flex">
      <div className="container mx-auto px-2 py-4">
        <div className="flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4 sm:gap-6">

            {/* ALL CATEGORIES */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-purple-50 text-purple-700 font-medium border border-purple-100">
              <Menu size={18} />
              <span className="hidden sm:inline">All Categories</span>
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-purple-600 transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
}