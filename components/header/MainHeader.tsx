"use client";

import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import SearchBar from "../common/SearchBar";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import SearchSuggestions from "../common/SearchSuggestions";

/* ---------- NAV LINKS ---------- */
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Wishlist", href: "/wishlist" },
  { name: "Stores", href: "/stores" },
  { name: "Checkout", href: "/checkout" },
];

export default function MainHeader() {
  const { items } = useAppSelector((state) => state.cart);
  const count = items.length;
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-100 shadow-sm relative">
      <div className="container mx-auto px-2 py-5">
        <div className="flex items-center justify-between gap-4">

          {/* LEFT */}
          <div className="flex items-center gap-4 max-w-3xl w-full">
            {/* LOGO */}
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-purple-700 shrink-0">
              <Link href="/">
                Shital <span className="text-pink-600"> Sekuwa</span>
              </Link>
            </h1>

            {/* DESKTOP SEARCH */}
            <div className="hidden lg:flex items-center flex-1 max-w-xl mx-auto bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
              <SearchBar />
              <SearchSuggestions />
            </div>
          </div>


          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">

            {/* MOBILE SEARCH */}
            <button className="lg:hidden text-gray-600 hover:text-purple-600 transition">
              <Search size={24} />
            </button>

            {/* CART */}
            <Link
              href="/cart"
              className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 transition"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-2 text-[10px] bg-purple-600 text-white px-1.5 rounded-full">
                {count}
              </span>
            </Link>

            {/* PROFILE (DESKTOP ONLY) */}
            <button className="hidden lg:block text-gray-600 hover:text-purple-600 transition">
              <User size={26} />
            </button>

            {/* HAMBURGER (MOBILE ONLY) */}
            <button
              className="md:hidden text-gray-600 hover:text-purple-600 transition"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-300 shadow-md z-50">
          <div className="flex flex-col p-4 space-y-4">

            {/* NAV LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-purple-600 transition"
              >
                {link.name}
              </Link>
            ))}

            <hr />

            {/* PROFILE SECTION */}
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition"
            >
              <User size={20} />
              <span>Profile</span>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}