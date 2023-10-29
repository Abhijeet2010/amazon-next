"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/Slices/cartSlice";

const AddToCartBtn = ({ product }) => {
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
    <button
      className="h-10 bg-[#ffe676] text-[#131921] outline-none rounded-md hover:bg-[#ffd932] duration-300 mt-5"
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
