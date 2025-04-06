"use client";

import React, { useState } from "react";
import Image from "next/image";
import filter from "@/public/img/filter.png";
const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("پربازدید ترین");

  const options = ["پربازدید ترین", "جدیدترین", "پرفروش‌ترین"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div
      className="flex flex-wrap items-center justify-between my-5"
      style={{ direction: "rtl" }}
    >
      <p className="text-[#354259] text-[16px] font-regular">
        درحال نمایش 30 اثر
      </p>

      <div className="relative">
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

export default Sort;
