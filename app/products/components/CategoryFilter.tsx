export default function CategoryFilter() {
  const categories = ["Electronics", "Clothing", "Shoes", "Accessories"];

  return (
    <aside className="md:col-span-1 sticky top-24">
      <div className="bg-white border border-gray-200 rounded-xl">
        
        <h3 className="px-5 py-4 text-sm font-semibold text-gray-900 border-b border-gray-100">
          Filter by Category
        </h3>

        <ul className="divide-y divide-gray-100">
          {categories.map((category) => (
            <li key={category} className="px-5 py-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="
                    h-4 w-4
                    border border-gray-300
                    rounded-sm
                    accent-purple-600
                    focus:ring-0
                  "
                />
                <span className="text-sm text-gray-700">
                  {category}
                </span>
              </label>
            </li>
          ))}
        </ul>

      </div>
    </aside>
  );
}