"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "@/public/images/amazon-logo.png";
import locationIcon from "@/public/images/location-icon.png";
import searchIcon from "@/public/images/search-icon.png";
import indiaFlg from "@/public/images/india-flag.png";
import cartIcon from "@/public/images/cart-icon.png";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, adduser, removeUser } from "@/redux/Slices/cartSlice";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { addToCart, addToFavourite, userInfo } = useSelector(
    (state) => state.cartSlice
  );
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      dispatch(
        adduser({
          name: session?.user.name,
          email: session?.user.email,
          image: session?.user.image,
        })
      );
    }
  }, [session]);

  const username = "Abhijeet";

  return (
    <section className="w-full h-16 text-white bg-[#131921] flex items-center justify-around sticky top-0 z-50 ">
      <div className="flex items-center gap-3 ">
        {/* Logo */}
        <Link href={"/"}>
          <div className="relative h-[30px] w-[100px]  mt-1 hover:border-2 hover:cursor-pointer p-4">
            <Image src={logo} fill alt="amazon-logo" sizes="100vh, 100vw" />
          </div>
        </Link>

        {/* delivery */}
        <div className="flex items-center hover:border-2 p-1 cursor-pointer  ">
          <div className="relative h-6 w-6 fle">
            <Image
              src={locationIcon}
              className="aspect-auto"
              fill
              alt="location-icon"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
          <div className="leading-4 ">
            <span className="text-[#ccc] text-[12px] ">Hello</span> <br />
            <span className="text-[14px] font-bold">Select Your Address</span>
          </div>
        </div>

        {/* searchbar */}
        <div className="text-black flex items-center outline-3 active:outline active:outline-orange-300 rounded-md">
          <select
            name="All"
            className="bg-[#E6E6E6] rounded-l-md w-[60px] p-2 h-[40px] outline-none"
          >
            <option value="All">All</option>
            <option value="All category">All Category</option>
            <option value="Alexa Skills"> Alexa Skills</option>
            <option value="Amazon Device"> Amazon Device</option>
            <option value="Amazon Fashion"> Amazon Fashion</option>
            <option value="Appliances"> Appliances</option>
            <option value="Apps and Games"> Apps and Games</option>
          </select>
          <input
            type="text"
            className="p-[6.5px] w-[650px] h-[40px] outline-none "
            placeholder="Search Amazon Items"
          />
          <button className="p-[6.5px] rounded-r-md bg-[#ffc170] hover:bg-[#f4b25c]">
            <Image
              src={searchIcon}
              alt="search-icon"
              className="h-[27px] w-[40px] p-1 object-contain"
            />
          </button>
        </div>
        {/* language */}
        <div className="flex gap-1 items-center hover:border-2 p-2 cursor-pointer">
          <Image
            src={indiaFlg}
            alt="india-flag"
            className="h-[30px] w-[30px]"
          />
          <p className="font-bold"> EN </p>
        </div>
        {/* SignIn */}
        {userInfo ? (
          <>
            <div
              className=" flex items-center px-2 hover:border-white cursor-pointer duration-300 gap-2"
              onClick={() => signIn("google")}
            >
              <div>
                <img
                  src={userInfo.image}
                  alt={userInfo.name}
                  className="rounded-full w-8 h-8 object-cover outline outline-[1px] outline-yellow-400 "
                />
              </div>
              <div className="text-xs text-gray-100 flex flex-col justify-between">
                <p className="text-white font-bold">{userInfo.name}</p>
                <button
                  onClick={() => {
                    signOut();
                    dispatch(removeUser());
                  }}
                  className="bg-yellow-300 rounded-lg p-1 text-black font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="flex flex-col leading-4 hover:border-2 p-2 cursor-pointer"
              onClick={() => signIn("google")}
            >
              <span className="text-[12px]">Login</span>

              <span className="font-bold text-[14px]">Account & Lists</span>
            </div>
          </>
        )}

        {/* Returns And Orders */}
        <div className="leading-4 hover:border-2 p-2 cursor-pointer">
          <span className="text-[12px]">Returns</span>
          <br />
          <span className="text-[14px] font-bold">& Orders</span>
        </div>

        {/* Fav
        <div className="leading-4">
          <Link href={"/favorite-products"}>
            <span className="">
              <AiFillHeart />
            </span>
            <span className="text-[14px] font-bold">Item</span>
          </Link>
        </div> */}

        {/* cart */}
        <Link href="/cart">
          <div className="flex gap-1 items-center relative p-2 hover:border-2 cursor-pointer ">
            <Image
              src={cartIcon}
              className="h-[30px] w-[40px] aspect-auto "
              sizes="(max-width: 768px) 100vw"
              alt="cart-logo"
            />
            <span className="absolute left-6 bottom-7 text-[#F08804] font-bold">
              {addToCart ? addToCart.length : 0}
            </span>
            <span className="font-bold text-[14px]">Cart</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
