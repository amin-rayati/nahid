"use client";

import React, { useState } from "react";
import Image from "next/image";
import filter from "@/public/img/filter.png";

import { IoEyeOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const EpisodeSort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("پربازدید ترین");

  const options = ["پربازدید ترین", "جدیدترین", "پرفروش‌ترین"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div
      className="flex flex-wrap items-center justify-between sm:my-5"
      style={{ direction: "rtl" }}
    >
      <p className="text-[#354259] text-[16px] font-regular my-2">
        درحال نمایش 30 قسمت
      </p>

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

      <div className="relative my-2">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 justify-between cursor-pointer text-[#354259] font-bold text-[16px] w-[110px]"
        >
          <Image src={filter} alt="filter" />
          <p>{selectedOption}</p>
        </div>

        {isOpen && (
          <div className="absolute right-0 z-10 bg-[#FAF1D7] shadow-lg rounded-[8px] w-[110px] mt-2 p-1">
            {options.map((option) => (
              <p
                key={option}
                onClick={() => handleSelect(option)}
                className={`cursor-pointer p-2 rounded-lg hover:bg-[#EBDFBE] transition ${
                  selectedOption === option
                    ? "text-[#354259] font-bold"
                    : "text-gray-700"
                }`}
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeSort;
