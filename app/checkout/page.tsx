"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/slice/cartSlice";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";
import { MoveLeft, MoveRight } from "lucide-react";

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  // Calculate totals dynamically
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cartItems.length ? 15 : 0;
  const total = subtotal + shipping;

  // Form state
  const [email, setEmail] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");

  const handlePlaceOrder = () => {
    if (!email || !cardHolder || !cardNo) {
      toast.error("Please fill all required fields");
      return;
    }
    // Here you can call your backend API to process payment/order
    toast.success("Order placed successfully ✅");
    dispatch(clearCart()); // clear cart after order
  };

  if (!cartItems.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-6 max-w-sm">
          Looks like you haven't added any products yet. Start shopping now!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-10 lg:px-20 xl:px-32">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Order Summary */}
        <div>
          <p className="text-xl font-medium mb-2">Order Summary</p>
          <p className="text-gray-400 mb-4">Check your items and select a shipping method.</p>

          <div className="space-y-3 rounded-lg border border-gray-300 shadow-sm   px-4 py-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row  rounded-lg p-2 sm:p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-28 rounded-md object-contain"
                />
                <div className="flex flex-col justify-between flex-1 px-4 py-2">
                  <span className="font-semibold">{item.name}</span>
              
                  <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping Method */}
          <p className="mt-6 text-lg font-medium">Shipping Method</p>
          <form className="mt-3">
            <label className="flex mb-4 items-center p-4 border border-gray-300 rounded-lg cursor-pointer bg-white">
              <input type="radio" name="shipping" defaultChecked className="mr-4" />
              <div>
                <span className="font-semibold">Khalti</span>
                <p className="text-gray-500 text-sm">Delivery: 2-4 Days</p>
              </div>
            </label>

                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer bg-white">
              <input type="radio" name="shipping" defaultChecked className="mr-4" />
              <div>
                <span className="font-semibold">COD</span>
                <p className="text-gray-500 text-sm">Delivery: 2-4 Days</p>
              </div>
            </label>
          </form>

          <div className="mt-10 flex items-center gap-2">
             <MoveLeft className="text-blue-500" />
            <Link className="text-base text-blue-500" href={"/products"}>Continue to Shopping</Link>
           
          </div>
        </div>

        {/* Right Column - Payment */}
        <div className="bg-white rounded-lg p-6">
          <p className="text-xl font-medium mb-2">Payment Details</p>
          <p className="text-gray-400 mb-4">Complete your order by providing your payment details.</p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Card Number"
                value={cardNo}
                onChange={(e) => setCardNo(e.target.value)}
                className="w-7/12 rounded-md border border-gray-200 px-2 py-3 text-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="flex-1 rounded-md border border-gray-200 px-2 py-3 text-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-1/6 rounded-md border border-gray-200 px-2 py-3 text-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              placeholder="Billing Address"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <select
                value={billingState}
                onChange={(e) => setBillingState(e.target.value)}
                className="flex-1 rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">State</option>
              </select>
              <input
                type="text"
                placeholder="ZIP"
                value={billingZip}
                onChange={(e) => setBillingZip(e.target.value)}
                className="w-1/6 rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Totals */}
            <div className="mt-4 border-t border-b py-2 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-900 font-medium">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900 font-medium">Shipping</span>
                <span className="font-semibold">${shipping.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-900 font-medium">Total</span>
              <span className="text-2xl font-semibold">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-4 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}