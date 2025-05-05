"use client";

import React, { useState } from "react";
import Image from "next/image";

import filter from "@/public/img/icons/filter.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

import Pagination from "@/components/Pagination/Pagination";
import BlogCard from "@/components/Blog/BlogCard";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

const page = () => {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("دسته بندی");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("جدیدترین");

  const options = [
    "جدیدترین",
    "بیشترین تخفیف",
    "بیشترین امتیاز",
    "پربازدیدترین",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const cat = [{ name: "دسته بندی" }, { name: "کیف و کفش" }, { name: "لباس" }];

  const handleSelectCat = (cat) => {
    setSelectedCat(cat);
    setIsCatOpen(false);
  };

  return (
    <div
      className="px-2 sm:px-4 py-4 mt-[110px] sm:mt-[175px] md:mt-[190px]"
      dir="rtl"
    >
      <div dir="ltr">
        <BreadCrumb />
      </div>

      {/* desktop */}
      <div className="hidden sm:flex flex-wrap justify-between items-center gap-2 mb-8">
        {/* search and cats */}
        <div className="flex gap-2 items-center w-[60%] justify-end">
          {/* search */}
          <div className="relative flex-grow w-[60%]">
            <input
              placeholder="جستجوی مقاله"
              className="w-full rounded-[8px] border-[1px] bg-white border-[#C9D9DB] outline-none py-4 pr-6 text-right placeholder:text-[#1E1E1E] placeholder:text-[14px] placeholder:font-regular"
              style={{ direction: "rtl", paddingLeft: "80px" }}
            />

            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1F5D6A] py-2 px-3 rounded-[8px]">
              <CiSearch size={25} color="white" />
            </button>
          </div>

          {/* cats */}
          <div className="w-fit relative">
            <div
              onClick={() => setIsCatOpen(!isCatOpen)}
              className={`flex items-center gap-2 border-[2px] border-[#1F5D6A] w-fit px-3 py-3 cursor-pointer transition-all duration-300 ease-in-out ${
                isCatOpen
                  ? "border-[#1F5D6A] rounded-t-[8px]"
                  : "border-[#1F5D6A] rounded-[8px]"
              }`}
            >
              <p className="text-[#1F5D6A] text-[16px] font-bold">
                {selectedCat}
              </p>
              {isCatOpen ? (
                <FaAngleUp color="#1F5D6A" />
              ) : (
                <FaAngleDown color="#1F5D6A" />
              )}
            </div>

            <div
              className={`absolute left-0 right-0 bg-[#EDF3F6] border-x-[2px] border-b-[2px] border-[#1F5D6A] rounded-b-[8px] z-20 transition-all duration-300 ease-in-out ${
                isCatOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                top: "100%",
                transform: isCatOpen ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
                maxHeight: isCatOpen ? `${cat.length * 50}px` : "0px",
                overflow: "hidden",
              }}
            >
              {cat.map((option) => (
                <div
                  key={option.name}
                  onClick={() => handleSelectCat(option.name)}
                  className="py-2 px-3 cursor-pointer text-[#1F5D6A]  transition my-1 "
                >
                  <div className="flex items-center gap-2 justify-left">
                    <span className="text-[14px]">{option.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* filter */}
        <div className="relative" dir="rtl">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 justify-between cursor-pointer text-[#1F5D6A] font-bold text-[14px] w-[110px]"
          >
            <Image src={filter} alt="filter" />
            <p>{selectedOption}</p>
          </div>

          {isOpen && (
            <div className="absolute right-0 z-20 bg-[#EDF3F6] shadow-lg rounded-[8px] w-[110px] mt-2 p-1">
              {options.map((option) => (
                <p
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`cursor-pointer p-2 rounded-lg hover:bg-[#1f5d6a69] transition text-[12px] ${
                    selectedOption === option
                      ? "text-[#1F5D6A] font-bold"
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

      {/* mobile */}
      <div className="block sm:hidden mb-2">
        {/* search */}
        <div className="relative flex-grow w-full">
          <input
            placeholder="جستجوی فروشگاه"
            className="w-full rounded-[8px] border-[1px] bg-white border-[#C9D9DB] outline-none py-4 pr-6 text-right placeholder:text-[#1E1E1E] placeholder:text-[14px] placeholder:font-regular"
            style={{ direction: "rtl", paddingLeft: "80px" }}
          />

          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1F5D6A] py-2 px-3 rounded-[8px]">
            <CiSearch size={25} color="white" />
          </button>
        </div>

        {/* filter and cats */}
        <div className="flex items-center justify-between my-2">
          {/* cats */}
          <div className="w-fit relative">
            <div
              onClick={() => setIsCatOpen(!isCatOpen)}
              className={`flex items-center gap-2 border-[2px] border-[#1F5D6A] w-fit px-3 py-3 cursor-pointer transition-all duration-300 ease-in-out ${
                isCatOpen
                  ? "border-[#1F5D6A] rounded-t-[8px]"
                  : "border-[#1F5D6A] rounded-[8px]"
              }`}
            >
              <p className="text-[#1F5D6A] text-[16px] font-bold">
                {selectedCat}
              </p>
              {isCatOpen ? (
                <FaAngleUp color="#1F5D6A" />
              ) : (
                <FaAngleDown color="#1F5D6A" />
              )}
            </div>

            <div
              className={`absolute left-0 right-0 bg-[#EDF3F6] border-x-[2px] border-b-[2px] border-[#1F5D6A] rounded-b-[8px] z-20 transition-all duration-300 ease-in-out ${
                isCatOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                top: "100%",
                transform: isCatOpen ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
                maxHeight: isCatOpen ? `${cat.length * 50}px` : "0px",
                overflow: "hidden",
              }}
            >
              {cat.map((option) => (
                <div
                  key={option.name}
                  onClick={() => handleSelectCat(option.name)}
                  className="py-2 px-3 cursor-pointer text-[#1F5D6A]  transition my-1 "
                >
                  <div className="flex items-center gap-2 justify-left">
                    <span className="text-[14px]">{option.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* filter */}
          <div className="relative" dir="rtl">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2  cursor-pointer text-[#1F5D6A] font-bold text-[16px] w-[110px]"
            >
              <Image src={filter} alt="filter" />
              <p>{selectedOption}</p>
            </div>

            {isOpen && (
              <div className="absolute right-0 z-20 bg-[#EDF3F6] shadow-lg rounded-[8px] w-[110px] mt-2 p-1">
                {options.map((option) => (
                  <p
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`cursor-pointer p-2 rounded-lg hover:bg-[#1f5d6a69] transition text-[12px] ${
                      selectedOption === option
                        ? "text-[#1F5D6A] font-bold"
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
      </div>

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <BlogCard />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <BlogCard />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <BlogCard />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <BlogCard />
        </div>
      </div>
      <div className="my-10">
        <Pagination />
      </div>
    </div>
  );
};

export default page;
