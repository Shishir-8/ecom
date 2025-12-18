"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSearchQuery } from "@/redux/slice/filterSlice";
import { Search } from "lucide-react";
import SearchSuggestions from "./SearchSuggestions";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.filter.query);

  return (
    <div className="relative flex-1">
      {/* Input */}
      <div className="flex border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Looking for something tasty...?"
          value={query}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="flex-1 px-4 py-3 text-sm "
        />
        <button
          type="button"
          className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 border-l border-gray-300 transition"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
}