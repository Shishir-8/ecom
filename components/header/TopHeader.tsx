import { Phone } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-[#161c2d] text-white text-sm">
      {/* Left Side: Links */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex gap-4">
          <Link
            href="/about"
            className="border border-gray-400 px-2 rounded-full opacity-60"
          >
            About Us
          </Link>
          <Link
            href="/wishlist"
            className="border border-gray-400 px-2 rounded-full opacity-60"
          >
            Wishlist
          </Link>
          <Link
            href="/order-tracking"
            className="border border-gray-400 px-2 rounded-full opacity-60"
          >
            Order Tracking
          </Link>
        </div>

        {/* Right Side: Phone */}
        <div className="flex items-center gap-2 opacity-70">
          <Phone size={16} />
          <span>Need Help?</span>
          <a
            href="tel:+1234567890"
            className="font-semibold"
          >
            +1 234 567 890
          </a>
        </div>
      </div>
    </div>
  );
}