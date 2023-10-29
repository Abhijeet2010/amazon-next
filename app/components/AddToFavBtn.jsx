"use client";
import { addToFavourite } from "@/redux/Slices/cartSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";

const AddToFavBtn = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addToFavourite({
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
      <AiOutlineHeart />
    </span>
  );
};

export default AddToFavBtn;
