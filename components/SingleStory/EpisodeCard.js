import React from "react";
import Image from "next/image";
import check from "@/public/img/check.png";
import read from "@/public/img/read.png";

import { IoEyeOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const EpisodeCard = ({ checked, free, part }) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] px-5 py-3">
        <div className="flex justify-between items-center">
          <p className="text-[#1E1E1E] text-[24px] font-bold">{part}</p>
          <Image
            src={checked === "yes" ? read : check}
            alt={checked === "yes" ? "read" : "check"}
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#1E1E1E] text-[20px] font-bold">قسمت</p>
          {free === "yes" ? (
            <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-2 py-1 rounded-[8px]">
              رایگان
            </button>
          ) : (
            <button className="bg-[#FAF1D7] border-[1px] border-[#354259] text-[#354259] text-[14px] font-regular px-2 py-1 rounded-[8px]">
              با اشتراک
            </button>
          )}
        </div>
        <div className="h-[1px] w-full bg-[#00000017] my-3"></div>
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
      </div>
    </div>
  );
};

export default EpisodeCard;
