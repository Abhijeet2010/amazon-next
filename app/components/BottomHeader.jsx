import Image from "next/image";
import React from "react";
import bottomHeaderImg from "@/public/images/bottom-header.jpg";

const BottomHeader = () => {
  const menuLinks = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Amazon miniTv",
    },
    {
      id: 3,
      name: "Sell",
    },
    {
      id: 4,
      name: "Today's Deals",
    },
    {
      id: 5,
      name: "Best Sellers",
    },
    {
      id: 6,
      name: "Mobiles",
    },
    {
      id: 7,
      name: "Electronic",
    },
    {
      id: 8,
      name: "Customer Service",
    },
    {
      id: 9,
      name: "Prime",
    },
    {
      id: 10,
      name: "New Releases",
    },
    {
      id: 11,
      name: "Home & Kitchen",
    },
    {
      id: 12,
      name: "Gift Ideas",
    },
  ];

  return (
    <section className=" hidden lg:inline-flex  h-[40px]  gap-1 items-center bg-[#232F3E] w-full text-white text-[14px] ">
      {menuLinks.map((link) => (
        <div key={link.id}>
          <span className="hover:border-2 cursor-pointer p-2">{link.name}</span>
        </div>
      ))}
      <Image
        src={bottomHeaderImg}
        className="w-fit h-full object-contain "
        alt="header-banner"
        priority
      />
    </section>
  );
};

export default BottomHeader;
