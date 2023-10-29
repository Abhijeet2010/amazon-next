import Image from "next/image";
import React from "react";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import AddToCartBtn from "./AddToCartBtn";
import AddToFavBtn from "./AddToFavBtn";
import CartIconBtn from "./CartIconBtn";

const fethcData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const Products = async () => {
  const ProductsData = await fethcData();

  return (
    <section className="w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Products */}
      {ProductsData?.map((item) => (
        <div
          key={item.id}
          className="w-full bg-white text-black mx-auto p-4 group overflow-hidden  border-gray-300 rounded-lg"
        >
          {/* Image Card */}
          <div className="w-full h-[230px] relative ">
            <Image
              src={item.image}
              fill
              sizes="(max-width: 768px) 100vw"
              className="p-5 object-contain mx-auto aspect-auto scale-90 hover:scale-100 transition-transform duration-300 cursor-pointer"
              alt={item.title}
            />
            <div className="w-12 h-24 border-[1px] absolute bottom-10 bg-white rounded-md flex flex-col right-0 translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
              {/* cart Icon */}
              {/* <span className="w-full h-full border-b-[1px] border-gray-300 flex items-center justify-center text-xl bg-transparent hover:bg-[#F3A847] cursor-pointer duration-300">
                  <AiOutlineShoppingCart />
                </span> */}
              <CartIconBtn product={item} />

              <AddToFavBtn product={item} />

              {/* Heart Icon */}
              {/* <span className="w-full h-full border-b-[1px] border-gray-300 flex items-center justify-center text-xl bg-transparent hover:bg-[#F3A847] cursor-pointer duration-300">
                <AiOutlineHeart />
              </span> */}
            </div>
          </div>
          <hr />
          {/* text-box */}
          <div className="px-4 py-3 flex flex-col gap-1">
            <p className=" uppercase text-xs text-gray-500 tracking-wide">
              {item.category}
            </p>
            <p className="text-base font-medium line-clamp-1">{item.title}</p>
            <p className>
              <span className="text-sm font-semibold"> ₹ {item.price} </span>
            </p>
            <p className="line-clamp-4 text-justify text-gray-600 text-xs">
              {item.description}
            </p>
            <AddToCartBtn product={item} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
