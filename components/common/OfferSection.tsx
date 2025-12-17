"use client";

import { Sparkles } from "lucide-react";

export default function OfferSection() {
  return (
    <section className="max-w-7xl mx-auto my-8 px-4 sm:px-6">

      {/* SPECIAL OFFER BANNER */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-10 sm:p-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl min-h-[180px] sm:min-h-[220px]">
        
        {/* TEXT */}
        <div className="flex items-center gap-5 sm:gap-8">
          <Sparkles size={36} className="text-yellow-300" />
          <div>
            <h3 className="text-2xl sm:text-4xl font-extrabold">Special Offer!</h3>
            <p className="text-base sm:text-lg mt-2">
              Get 20% OFF on Robotics Kits for a limited time.
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <a
          href="/offers"
          className="mt-4 sm:mt-0 inline-block bg-white text-purple-700 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-gray-200 transition text-lg sm:text-xl"
        >
          Shop Now
        </a>
      </div>

    </section>
  );
}
