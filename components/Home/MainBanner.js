import React from "react";
import Image from "next/image";
import banner1 from "@/public/img/banners/banner1.png";
import banner2 from "@/public/img/banners/banner2.png";
import banner3 from "@/public/img/banners/banner3.png";
import banner4 from "@/public/img/banners/banner4.png";
import back2 from "@/public/img/back2.png";

const MainBanner = () => {
  return (
    <div className="px-2 sm:px-4 py-4 mt-[110px] sm:mt-[175px] md:mt-[190px] relative">
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: `url(${back2.src})`,
          opacity: 0.05,
        }}
      ></div>

      <div className="relative z-10">
        <Image
          src={banner1}
          alt="banner1"
          className="rounded-[16px] border-white border-[2px] h-[120px] sm:h-[150px] md:h-full object-cover"
        />
        <div className="grid grid-cols-12 gap-2 sm:gap-4 mt-2 sm:mt-4">
          <div className="col-span-4">
            <Image
              src={banner2}
              alt="banner2"
              className="rounded-[16px] border-white border-[2px] h-[60px] sm:h-[90px] md:h-[120px] object-cover"
            />
          </div>
          <div className="col-span-4">
            <Image
              src={banner3}
              alt="banner3"
              className="rounded-[16px] border-white border-[2px] h-[60px] sm:h-[90px] md:h-[120px] object-cover"
            />
          </div>
          <div className="col-span-4">
            <Image
              src={banner4}
              alt="banner4"
              className="rounded-[16px] border-white border-[2px] h-[60px] sm:h-[90px] md:h-[120px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
