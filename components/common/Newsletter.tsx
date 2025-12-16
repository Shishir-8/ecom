"use client";

export default function 
Newsletter() {
  return (
    <section className="relative max-w-7xl mx-auto rounded-xl bg-[#c8dddc] py-16 px-6 sm:px-12 lg:px-16 overflow-hidden">


      <div className="absolute top-0 left-12 h-40 w-50 z-10">
        <img className="object-cover" src="https://cdn.pixabay.com/photo/2016/10/23/14/05/a-discount-1762995_1280.png" alt="" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join Our Newsletter
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-sm md:text-base text-gray-600">
          Stay informed with the latest products, deals, and updates.
        </p>

        {/* Input + Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900  focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          />
          <button className="px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-gray-700 shadow-md transform hover:-translate-y-1 transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}