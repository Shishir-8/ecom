"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const images = ["/kfc.png", "/momo.png", "/panipuri.png"]; // food images
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
            <span className="inline-block bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-tight shadow-sm">
              Free Delivery • Orders over $20
            </span>

            {/* Heading */}
            <h1 className="font-semibold leading-tight text-gray-900
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Hungry? Treat Yourself!{" "}
              <span className="block text-purple-600
                text-4xl sm:text-5xl  lg:text-7xl">
                Delicious
              </span>
              <span className="block text-pink-600
                text-4xl sm:text-5xl lg:text-7xl">
                Meals Await
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 max-w-xl
              text-sm sm:text-base md:text-lg">
              Order your favorite dishes from our menu. Freshly prepared, hot, and delivered fast to your doorstep!
            </p>

            {/* CTA */}
            <button className="px-8 py-3 rounded-lg shadow-md transition-all
              text-xs sm:text-sm font-medium outline outline-purple-500
              hover:bg-purple-500 hover:text-white">
              Explore Menu
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-[260px] sm:h-[320px] md:h-[500px] flex items-center justify-center overflow-hidden">
              <Image
                key={index}
                src={images[index]}
                alt="Food showcase"
                className="max-h-full max-w-full object-contain transition-opacity duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}