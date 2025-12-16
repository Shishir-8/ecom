"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const images = [
    "/iphone1.png",
    "/headphone.png",
    "/laptop1.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-30 px-10 bg-gradient-to-r from-purple-200 via-blue-100 to-pink-100">
      <div className="flex max-w-7xl mx-auto items-center justify-between gap-10">

        {/* LEFT — 50% */}
    <div className="w-1/2 space-y-6 pr-10">

  {/* Badge */}
  <span className="inline-block bg-yellow-300 text-yellow-900 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
    Free Shipping • Orders over $100
  </span>

  {/* Heading */}
  <h1 className="text-6xl font-bold leading-[70px] tracking-wider text-gray-900">
    Limited Time <br />
    Offer <span className="text-purple-600 text-7xl">Up To</span> <br />
    <span className="text-pink-600  text-7xl">50% OFF</span>
  </h1>

  {/* Subtext */}
  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
    Discover premium electronics with exclusive discounts.  
    Shop smart, shop fast — elevate your lifestyle today.
  </p>

  {/* CTA Button */}
  <button className="px-6 py-3 text-sm outline-2 outline-purple font-medium outline outline-purple-500 rounded-lg shadow-md transition-all">
    Explore Store
  </button>

</div>

        {/* RIGHT — 50% */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-full h-[380px] flex justify-center items-center overflow-hidden">
            <img
              key={index}
              src={images[index]}
              alt="slider"
              className="
                max-h-full max-w-full 
                object-contain 
                transition-opacity duration-700 ease-in-out
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}