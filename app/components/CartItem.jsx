"use client";

import {
  decrementQuantity,
  deleteProduct,
  incrementQuantity,
} from "@/redux/Slices/cartSlice";
import Image from "next/image";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { LuPlus, LuMinus } from "react-icons/lu";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <section className="bg-gray-100 rounded-lg   flex items-center gap-4">
      <Image
        src={item.image}
        height={150}
        width={150}
        alt="Cart-Product-Image"
      />

      <div className="flex items-center px-2 gap-4 py-4">
        {/* TextBox */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm">
            {" "}
            ₹. <span className="font-semibold">{item.price}</span>
          </p>

          {/* Increment - Decrement */}

          <div className="flex items-center gap-6">
            <div className="flex items-center justify-between mt-1 border-gray-300 px-4 py-2 rounded-lg w-28 shadow-lg shadow-gray-300">
              <span>
                <LuPlus
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        id: item.id,
                        // title: item.title,
                        // price: item.price,
                        // description: item.description,
                        // category: item.category,
                        // image: item.image,
                        // rating: {
                        //   rate: item.rating.rate,
                        //   count: item.rating.count,
                        // },
                        quantity: 1,
                      })
                    )
                  }
                  className="cursor-pointer hover:bg-gray-300 hover:rounded-full"
                />
              </span>
              <span>{item.quantity}</span>
              <span>
                <LuMinus
                  className="cursor-pointer hover:bg-gray-300 hover:rounded-full"
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        id: item.id,
                        // title: item.title,
                        // price: item.price,
                        // description: item.description,
                        // category: item.category,
                        // image: item.image,
                        // rating: {
                        //   rate: item.rating.rate,
                        //   count: item.rating.count,
                        // },
                        quantity: 1,
                      })
                    )
                  }
                />
              </span>
            </div>
            <p
              className="flex items-center gap-2 hover:text-red-600 cursor-pointer"
              onClick={() => dispatch(deleteProduct(item.id))}
            >
              <AiFillDelete className="text-red-600" />
              <span>Remove</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">
            ₹.{(item.quantity * item.price).toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
