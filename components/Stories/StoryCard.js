import React from "react";
import Image from "next/image";
import best1 from "@/public/img/best1.png";
import amin from "@/public/img/amin.jpg";

import { IoEyeOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
const StoryCard = () => {
  return (
    <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
      <Image src={best1} alt="best1" className="rounded-[8px]" />

      <div
        className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
        style={{ direction: "rtl" }}
      >
        <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
          135 قسمت
        </button>
        <button className="bg-[#EBDFBE] border-[1px] border-[#354259] text-[#354259] text-[14px] font-regular px-3 py-1 rounded-[8px]">
          در جریان
        </button>
      </div>

      <div
        className="flex flex-wrap justify-between items-center my-2"
        style={{ direction: "rtl" }}
      >
        <div className="flex items-center gap-1">
          <p className="text-[#354259] font-regular text-[14px]">2,350</p>
          <IoEyeOutline color="#A0C498" />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-[#354259] font-regular text-[14px]">235</p>
          <LuMessageSquareText color="#A0C498" />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-[#354259] font-regular text-[14px]">850</p>
          <CiHeart color="#A0C498" />
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#00000017]"></div>

      <p className="text-[20px] font-bold text-black text-right my-2">
        اگر دریا ببارد
      </p>

      <div
        className="flex flex-wrap items-center gap-2"
        style={{ direction: "rtl" }}
      >
        <Image
          src={amin}
          alt="amin"
          width={20}
          height={20}
          className="rounded-full"
        />
        <p className="text-[#1E1E1E] text-[15px] font-regular">امین رعیتی</p>
      </div>

      <div
        className="flex  text-left my-2 gap-2"
        style={{ justifyContent: "left" }}
      >
        <button className="bg-[#A0C49833] rounded-[8px] px-3 py-2 text-[#354259] text-[12px] font-regular">
          عاشقانه
        </button>
        <button className="bg-[#A0C49833] rounded-[8px] px-3 py-2 text-[#354259] text-[12px] font-regular">
          خانوادگی
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
