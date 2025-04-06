"use client";

import React, { useState } from "react";
import Image from "next/image";

import filter from "@/public/img/filter.png";
import calendarsingle from "@/public/img/calendarsingle.png";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const ContentFilter = () => {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("داستان ها");

  const cat = [{ name: "داستان ها" }, { name: "اشعار" }, { name: "کتاب صوتی" }];

  const handleSelectCat = (cat) => {
    setSelectedCat(cat);
    setIsCatOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("پربازدید ترین");

  const options = ["پربازدید ترین", "جدیدترین", "پرفروش‌ترین"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="hidden sm:flex flex-wrap justify-between items-center gap-2 my-5">
        <div className="flex gap-2 items-center justify-right  md:w-[80%]">
          <div className="w-fit relative">
            <div
              onClick={() => setIsCatOpen(!isCatOpen)}
              className={`flex items-center gap-2 border-[2px] border-[#354259] w-fit px-3 py-3 cursor-pointer transition-all duration-300 ease-in-out ${
                isCatOpen
                  ? "border-[#354259] rounded-t-[8px]"
                  : "border-[#354259] rounded-[8px]"
              }`}
            >
              <p className="text-[#354259] text-[16px] font-bold">
                {selectedCat}
              </p>
              {isCatOpen ? (
                <FaAngleUp color="#354259" />
              ) : (
                <FaAngleDown color="#354259" />
              )}
            </div>

            <div
              className={`absolute left-0 right-0 bg-[#FEFCED] border-x-[2px] border-b-[2px] border-[#354259] rounded-b-[8px] z-[999] transition-all duration-300 ease-in-out ${
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
                  className="py-2 px-3 cursor-pointer text-[#354259]  transition my-1 "
                >
                  <div className="flex items-center gap-2 justify-right">
                    <span className="text-[14px]">{option.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative  md:w-[60%]">
            <input
              placeholder="جستجوی داستان..."
              className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 pr-12 text-right placeholder:text-black placeholder:sm:text-[16px] placeholder:sm:font-light placeholder:text-[10px]"
              style={{ direction: "rtl", paddingLeft: "100px" }}
            />

            <CiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              size={25}
              color="#354259"
            />

            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#354259] px-5 py-2 text-white text-[16px] font-bold rounded-[8px]">
              جستجو
            </button>
          </div>
        </div>
        <div className="relative" dir="rtl">
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
      <div className="block sm:hidden my-2">
        <div className="relative w-full">
          <input
            placeholder="جستجوی داستان..."
            className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 pr-12 text-right placeholder:text-black placeholder:sm:text-[16px] placeholder:sm:font-light placeholder:text-[10px]"
            style={{ direction: "rtl", paddingLeft: "100px" }}
          />

          <CiSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            size={25}
            color="#354259"
          />

          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#354259] px-5 py-2 text-white text-[16px] font-bold rounded-[8px]">
            جستجو
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between my-2">
          <div className="w-fit relative">
            <div
              onClick={() => setIsCatOpen(!isCatOpen)}
              className={`flex items-center gap-2 border-[2px] border-[#354259] w-fit px-3 py-3 cursor-pointer transition-all duration-300 ease-in-out ${
                isCatOpen
                  ? "border-[#354259] rounded-t-[8px]"
                  : "border-[#354259] rounded-[8px]"
              }`}
            >
              <p className="text-[#354259] text-[13px] font-bold">
                {selectedCat}
              </p>
              {isCatOpen ? (
                <FaAngleUp color="#354259" />
              ) : (
                <FaAngleDown color="#354259" />
              )}
            </div>

            <div
              className={`absolute left-0 right-0 bg-[#FEFCED] border-x-[2px] border-b-[2px] border-[#354259] rounded-b-[8px] z-[999] transition-all duration-300 ease-in-out ${
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
                  className="py-2 px-3 cursor-pointer text-[#354259]  transition my-1 "
                >
                  <div className="flex items-center gap-2 justify-right">
                    <span className="text-[13px]">{option.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative my-1" dir="rtl">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 justify-between cursor-pointer text-[#354259] font-bold text-[13px] w-[100px]"
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
      </div>
    </>
  );
};

export default ContentFilter;
