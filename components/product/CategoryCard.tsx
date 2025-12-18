import { Category } from "./CategorySection";

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white w-full rounded-xl shadow-md p-6 flex items-center justify-between relative overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="space-y-4 w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          {category.title}
        </h2>

        <p className="text-lg font-medium text-gray-600">
          {category.offer}
        </p>

        <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow hover:bg-indigo-700 transition">
          View Collection
        </button>
      </div>

      {/* RIGHT IMAGE AREA */}
      <div className="relative w-1/2 h-40 flex justify-center items-center">

        {/* Background lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-8 h-full w-3 bg-blue-500/40 -skew-x-12"></div>
          <div className="absolute top-0 right-14 h-full w-2 bg-blue-500/30 -skew-x-12"></div>
          <div className="absolute top-0 right-20 h-full w-1 bg-blue-500/20 -skew-x-12"></div>
        </div>

        {/* IMAGE */}
        <img
          src={category.image}
          alt={category.title}
          className="relative h-36 object-contain rotate-[-10deg] drop-shadow-md"
        />
      </div>
    </div>
  );
}