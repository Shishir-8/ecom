export default function CategoryFilter() {
  const categories = ["Electronics", "Clothing", "Shoes", "Accessories"];

  return (
    <aside className="md:col-span-1 sticky top-24">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 ">
          Filter by Category
        </h3>

        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category} className="flex items-center gap-4">
              <input
                type="checkbox"
                className="h-5 w-5 accent-purple-600 cursor-pointer"
              />
              <label className="text-base text-gray-600 cursor-pointer select-none">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}