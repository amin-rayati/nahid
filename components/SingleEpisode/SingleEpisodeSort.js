import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

import Image from "next/image";
import heart1 from "@/public/img/heart1.png";
import bookmark from "@/public/img/bookmark.png";

const SingleEpisodeSort = () => {
  return (
    <div
      className="flex flex-wrap items-center justify-between sm:my-5"
      style={{ direction: "rtl" }}
    >
      <p className="text-[#354259] text-[32px] font-bold my-2">قسمت 1</p>

      <div className="flex flex-wrap gap-2 my-2">
        <div className="flex items-center justify-center gap-1 bg-[#FEFCED] border-[1px] border-[#EBDFBE] py-2 px-3 rounded-[8px]">
          <IoEyeOutline color="#A0C498" />
          <div className="flex gap-1 items-center">
            <p className="text-[#354259] font-bold text-[16px]">2,500,000</p>
            <p className="text-[#354259] font-regular text-[12px]">بازدید</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 bg-[#FEFCED] border-[1px] border-[#EBDFBE] py-2 px-3 rounded-[8px]">
          <LuMessageSquareText color="#A0C498" />
          <div className="flex gap-1 items-center">
            <p className="text-[#354259] font-bold text-[16px]">60</p>
            <p className="text-[#354259] font-regular text-[12px]">دیدگاه</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 bg-[#FEFCED] border-[1px] border-[#EBDFBE] py-2 px-3 rounded-[8px]">
          <CiHeart color="#A0C498" />
          <div className="flex gap-1 items-center">
            <p className="text-[#354259] font-bold text-[16px]">850</p>
            <p className="text-[#354259] font-regular text-[12px]">پسند</p>
          </div>
        </div>
      </div>

      <div className="my-2 flex items-center gap-5">
        <Image src={bookmark} alt="bookmark" />
        <Image src={heart1} alt="heart1" />
      </div>
    </div>
  );
};

export default SingleEpisodeSort;
