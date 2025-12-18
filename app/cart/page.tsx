"use client";

import React from "react";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeItem, updateQuantity, clearCart } from "@/redux/slice/cartSlice";
import { toast } from "react-hot-toast";
import Link from "next/link";
import ProductCard from "../products/components/ProductCard";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const cartItems = useAppSelector((state) => state.cart.items);
    const storeProducts = useAppSelector((state) => state.product.items)

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = cartItems.length ? 15 : 0;
    const total = subtotal + shipping;

    const handleRemove = (id: number) => {
        dispatch(removeItem(id));
        toast.success("Item removed ✅");
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity < 1) return;
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        toast.success("Cart cleared ✅");
    };

    if (!cartItems.length) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-gray-50 p-6 text-center">
                <ShoppingBag size={80} className="text-gray-300 mb-6" />
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Cart is Empty</h1>
                <p className="text-gray-500 mb-6 max-w-sm">
                    Looks like you haven't added any products yet. Start shopping now!
                </p>
                <Link href={"/products"} className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
                    <h1 className="text-3xl font-semibold text-gray-900">Shopping Cart</h1>
                    <button
                        onClick={handleClearCart}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition font-medium"
                    >
                        Clear All
                    </button>
                </div>

                <div className="lg:flex lg:space-x-8">
                    {/* Cart Items */}
                    <div className="flex-1 space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id}
                                className="bg-white rounded-2xl p-5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 border border-gray-200 hover:shadow-lg transition"
                            >
                                {/* Product Image */}
                                <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                                    <img
                                        src={item.image} // assuming item.image is the URL
                                        alt={item.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-4">
                                    <div>
                                        <h2 className="font-semibold text-gray-900">{item.name}</h2>
                                        <p className="text-gray-600 mt-1 text-sm">Unit Price: ${item.price?.toFixed(2)}</p>
                                    </div>

                                    {/* Quantity + Total + Remove */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 w-full">
                                        {/* Quantity Control */}
                                        <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                className="px-4 py-2 hover:bg-gray-200 transition-colors text-gray-700 font-semibold"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="px-6 py-2 font-semibold text-gray-900">{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                className="px-4 py-2 hover:bg-gray-200 transition-colors text-gray-700 font-semibold"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>

                                        {/* Item Total */}
                                        <div className="font-bold text-gray-900 text-lg">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>

                                        {/* Remove Button at the end */}
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full text-red-600 hover:bg-red-200 hover:text-red-800 transition"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="mt-8 lg:mt-0 lg:w-96 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Order Summary</h2>
                        <div className="space-y-4 text-gray-700">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-gray-900 text-lg border-t pt-3">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                        onClick={() => router.push("/checkout")}
                        className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                            Proceed to Checkout <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Suggested / Related Products */}
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">You may also like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
                        {storeProducts.slice(0, 4).map((product: any) => (
                           <ProductCard  key={product.id} product={product}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}