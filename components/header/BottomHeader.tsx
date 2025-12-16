// src/components/header/MainHeader.tsx
import { Menu } from "lucide-react";
import Link from "next/link";

export default function BottomHeader() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-purple-50 text-purple-700 font-medium border border-purple-100">
           <Menu size={20} />
            All categories
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-promoPurple">Home</Link>
            <Link href="products" className="hover:text-promoPurple">Products</Link>
            <Link href="#" className="hover:text-promoPurple">Wishlist</Link>
            <Link href="#" className="hover:text-promoPurple">Stores</Link>
            <Link href="#" className="hover:text-promoPurple">Checkout</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <p>70% off</p>
        </div>
      </div>
    </header>
  );
}