"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1Img from "@/public/images/banner-1.jpg";
import banner2Img from "@/public/images/banner-2.jpg";
import banner3Img from "@/public/images/banner-3.jpg";
import banner4Img from "@/public/images/banner-4.jpg";
import banner5Img from "@/public/images/banner-5.jpg";
import banner6Img from "@/public/images/banner-6.jpg";
import banner7Img from "@/public/images/banner-7.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <Image src={banner1Img} priority alt="banner-1" />
        </div>

        <div>
          <Image src={banner2Img} priority alt="banner-2" />
        </div>
        <div>
          <Image src={banner3Img} priority alt="banner-3" />
        </div>

        <div>
          <Image src={banner4Img} priority alt="banner-4" />
        </div>

        <div>
          <Image src={banner5Img} priority alt="banner-5" />
        </div>

        <div>
          <Image src={banner6Img} priority alt="banner-6" />
        </div>

        <div>
          <Image src={banner7Img} priority alt="banner-7" />
        </div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-200 to-transparent absolute bottom-0 z-20" />
    </div>
  );
};

export default Banner;
