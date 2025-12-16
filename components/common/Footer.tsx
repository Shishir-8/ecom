import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function EcommerceFooter() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShopVerse</h2>
          <p className="text-gray-400 leading-relaxed">
            Your trusted destination for premium products. Shop smart, shop fast, shop with confidence.
          </p>

          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
              <div key={idx} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer transition">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">New Arrivals</li>
            <li className="hover:text-white transition cursor-pointer">Best Sellers</li>
            <li className="hover:text-white transition cursor-pointer">Discount Offers</li>
            <li className="hover:text-white transition cursor-pointer">Gift Cards</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Help Center</li>
            <li className="hover:text-white transition cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-white transition cursor-pointer">Order Tracking</li>
            <li className="hover:text-white transition cursor-pointer">Shipping Info</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3"><Mail className="w-5" /> support@shopverse.com</li>
            <li className="flex items-center gap-3"><Phone className="w-5" /> +1 800 234 5678</li>
            <li className="flex items-center gap-3"><MapPin className="w-5" /> 123 Street, New York, USA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ShopVerse. All rights reserved.
      </div>
    </footer>
  );
}