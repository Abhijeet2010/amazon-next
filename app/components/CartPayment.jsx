"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";

import React, { useEffect, useState } from "react";
import { SiMediamarkt } from "react-icons/si";
import { useSelector } from "react-redux";

const CartPayment = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { addToCart, userInfo } = useSelector((state) => state.cartSlice);
  const { data: session } = useSession();

  useEffect(() => {
    let amount = 0;
    addToCart?.map((item) => {
      amount += item.price * item.quantity;
      return;
    });

    setTotalAmount(amount.toFixed(2));
  }, [addToCart]);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          items: addToCart,
          email: session?.user.email,
        }),
      });

      const checkoutSession = await response.json();
      console.log(checkoutSession);

      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h3 className="text-center text-xl font-bold underline ">Checkout</h3>
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full text-sm p-1 h-6 w-6 text-white flex justify-center items-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order ready for shipping for FREE shipping by choosing this
          option at checkout. see details...
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total : <span className="font-bold text-xl">₹ {totalAmount}</span>
      </p>

      {userInfo ? (
        <div className="flex flex-col items-center">
          <button
            className="w-full h-10 text-sm font-semibold bg-yellow-300 bg-opacity-50 rounded-lg hover:bg-yellow-500 "
            onClick={handleCheckout}
          >
            Proceed to Checkout{" "}
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button className="w-full h-10 text-sm font-semibold bg-gray-300 bg-opacity-50 rounded-lg cursor-not-allowed">
            Proceed to Buy{" "}
          </button>
          <p className="text-sm animate-bounce text-red-700 mt-2">
            Please login to continue
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPayment;
