"use client";

import { ShoppingCart, User, Search } from "lucide-react";
import Link from "next/link";
import SearchBar from "../common/SearchBar";
import { useAppSelector } from "@/redux/hooks";

export default function MainHeader() {
  const {items} = useAppSelector((state) => state.cart)
  const count = items.length
  return (
    <header className="w-full bg-gray-100 shadow-sm">
      <div className="container mx-auto px-2 py-5">
      <div className="flex items-center justify-between gap-4">

        <div className="flex items-center gap-4 max-w-3xl w-full">
          {/* LOGO */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-purple-700 shrink-0">
            <Link href="/">
              Robo<span className="text-pink-600">Tech</span>
            </Link>
          </h1>

          {/* SEARCH BAR (Desktop Only) */}
          <div className="hidden lg:flex items-center flex-1 max-w-xl mx-auto bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
            <SearchBar />
        </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 sm:gap-6 ml-auto">

          {/* SEARCH ICON (Mobile / Tablet) */}
          <button className="lg:hidden text-gray-600 hover:text-purple-600 transition">
            <Search size={24} />
          </button>

          {/* CART */}
          <Link href={"/cart"} className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 transition">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-2 text-[10px] bg-purple-600 text-white px-1.5 rounded-full">
              {count}
            </span>
          </Link>

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
