"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import ResetCart from "../components/ResetCart";
import CartPayment from "../components/CartPayment";

const CartPage = () => {
  const { addToCart } = useSelector((state) => state.cartSlice);

  return (
    <section className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4 bg-gray-300">
      {addToCart?.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="border-b-[1px]  flex items-center justify-between border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold ">Shopping Cart</p>
              <p className="text-lg font-semibold ">SubTitle</p>
            </div>

            <div className="pt-2 flex flex-col gap-2 ">
              {addToCart.map((item) => (
                <div className="pt-2 flex flex-col gap-2" key={item.id}>
                  <CartItem item={item} />
                </div>
              ))}

              <ResetCart />
            </div>
          </div>
          <div className="bg-white h-64 span-1 p-4 rounded-lg flex items-center justify-center">
            <CartPayment />
          </div>
        </>
      ) : (
        <div className="h-64 bg-white col-span-5 flex flex-col gap-2 items-center justify-center rounded-lg py-5 shadow-lg">
          <h1 className="text-lg font-medium">Your Cart is Empty</h1>
          <Link href={"/"}>
            <button className="w-52 h-10 text-black rounded-lg text-sm font-semibold bg-[#ffe359] hover:bg-[#ffff30] ">
              Go to The Shopping
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartPage;
