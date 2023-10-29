"use client";
import { resetCart } from "@/redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const ResetCart = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const confirm = window.confirm("Are you sure want to reset the cart?");
    if (confirm) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={handleClick}
      className="w-44 h-10 font-semibold rounded-lg bg-gray-200 hover:bg-red-600 duration-300 hover:text-white"
    >
      ResetCart
    </button>
  );
};

export default ResetCart;
