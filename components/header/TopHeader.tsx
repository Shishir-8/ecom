import { Phone } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-[#161c2d] text-white text-xs sm:text-sm">
      <div className="container mx-auto px-2 py-2">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
          
          {/* Left Section */}
          <div className="flex justify-center sm:justify-start gap-2 sm:gap-4">
            <Link
              href="/about"
              className="border border-gray-400 px-2 py-0.5 rounded-full opacity-70 hover:opacity-100 transition"
            >
              About Us
            </Link>

            <Link
              href="/wishlist"
              className="border border-gray-400 px-2 py-0.5 rounded-full opacity-70 hover:opacity-100 transition"
            >
              Wishlist
            </Link>

            <Link
              href="/order-tracking"
              className="border border-gray-400 px-2 py-0.5 rounded-full opacity-70 hover:opacity-100 transition sm:inline-block"
            >
              Order Tracking
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex justify-center sm:justify-end items-center gap-2 opacity-80">
            <Phone size={14} />
            <span className="hidden sm:inline">Need Help?</span>
            <a
              href="tel:+1234567890"
              className="font-semibold hover:underline"
            >
              +1 234 567 890
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}