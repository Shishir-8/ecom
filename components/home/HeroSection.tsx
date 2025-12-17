"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const images = ["/iphone1.png", "/headphone.png", "/laptop1.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-purple-200 via-blue-100 to-pink-100">
      <div className="container mx-auto px-4 py-20">

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            {/* Badge */}
            <span className="inline-block bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight shadow-sm">
              Free Shipping • Orders over $100
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              Limited Time <br /> Offer!{" "}
              <span className="text-purple-600 text-8xl">Up To <br /></span>{" "}
              <span className="text-pink-600 text-8xl">50% OFF</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-xl">
              Discover premium electronics with exclusive discounts.
              Shop smart, shop fast — elevate your lifestyle today.
            </p>

            {/* CTA */}
            <button className="px-8 py-3 text-sm font-medium outline outline-purple-500 rounded-lg shadow-md hover:bg-purple-500 hover:text-white transition-all">
              Explore Store
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden">
              <img
                key={index}
                src={images[index]}
                alt="Product showcase"
                className="max-h-full max-w-full object-contain transition-opacity duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}