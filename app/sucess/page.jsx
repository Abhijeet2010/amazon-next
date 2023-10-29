"use client";
import { resetCart } from "@/redux/Slices/cartSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const SucessPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-20">
      <h1 className="text-2xl font-semibold">
        Thanks for shopping in Next-Amazon
      </h1>
      <Link href={"/"} onClick={() => dispatch(resetCart())}>
        <p className="text-blue-500 hover:underline">Continue Shopping</p>
      </Link>
    </div>
  );
};

export default SucessPage;
