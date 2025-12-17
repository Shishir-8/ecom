"use client";

import React from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { removeItem, updateQuantity } from "@/redux/slice/cartSlice";
import { toast } from "react-hot-toast";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
    toast.success("Item removed from cart ✅");
  };

  const handleQuantityChange = (quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id: item.id, quantity }));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 py-5 border-b border-gray-200 hover:bg-gray-50 transition">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-xl border border-gray-100"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between items-start gap-4 w-full">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">
            {item.title}
          </h2>
          <p className="text-purple-600 font-bold mt-1 text-lg">${item.price.toFixed(2)}</p>
        </div>

        {/* Quantity & Remove */}
        <div className="flex items-center gap-3 mt-3 sm:mt-0">
          {/* Quantity */}
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
            <button
              className="px-3 py-1 hover:bg-gray-100 transition"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-1 font-medium">{item.quantity}</span>
            <button
              className="px-3 py-1 hover:bg-gray-100 transition"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={handleRemove}
            className="text-red-600 hover:text-red-800 transition rounded-full p-2"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}