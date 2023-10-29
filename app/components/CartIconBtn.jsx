"use client";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/Slices/cartSlice";

const CartIconBtn = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: {
          rate: product.rating.rate,
          count: product.rating.count,
        },
        quantity: 1,
      })
    );
  };
  return (
    <span
      className="w-full h-full border-b-[1px] border-gray-300 flex items-center justify-center text-xl bg-transparent hover:bg-[#F3A847] cursor-pointer duration-300"
      onClick={handleClick}
    >
      <AiOutlineShoppingCart />
    </span>
  );
};

export default CartIconBtn;
