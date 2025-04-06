"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import filter from "@/public/img/filter.png";
import creator1 from "@/public/img/creator1.png";
import { IoEyeOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("پربازدید ترین");

  const options = ["پربازدید ترین", "جدیدترین", "پرفروش‌ترین"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 w-[100%] lg:w-[100%] xl:w-[85%] m-auto my-20"
    >
      <div
        variants={itemVariants}
        className="flex items-center gap-2"
        style={{ direction: "rtl" }}
      >
        <p className="text-black text-[24px] font-bold">خالقین اثر دنبال شده</p>
        <p className="text-black text-[20px] font-regular">(125)</p>
      </div>
      <div variants={itemVariants} className="flex gap-2 justify-end my-5">
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
        <div className="h-[3px] w-64 bg-[#A0C498]"></div>
      </div>

      <div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-between my-5"
        style={{ direction: "rtl" }}
      >
        <div
          variants={itemVariants}
          className="relative w-full sm:w-[50%] my-2"
        >
          <input
            placeholder="جستجتوی خالق اثر"
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

        <div variants={itemVariants} className="relative my-2">
          <div
            variants={itemVariants}
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

      <div variants={itemVariants} className="grid grid-cols-12 gap-3 my-5">
        <div
          variants={itemVariants}
          className="col-span-12 sm:col-span-6 md:col-span-3 flex gap-2 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px]
              p-3"
          style={{ direction: "rtl" }}
        >
          <Image src={creator1} alt="creator1" className="rounde-[8px]" />
          <section className="flex flex-col justify-between">
            <p className="text-[#1E1E1E] text-[20px] font-bold">امین رعیتی</p>
            <div className="flex gap-1 items-center">
              <IoEyeOutline color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">
                  2,500,000
                </p>
                <p className="text-[#354259] font-regular text-[12px]">
                  بازدید
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LuBook color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">253</p>
                <p className="text-[#354259] font-regular text-[12px]">اثر</p>
              </div>
            </div>
          </section>
        </div>
        <div
          variants={itemVariants}
          className="col-span-12 sm:col-span-6 md:col-span-3 flex gap-2 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px]
              p-3"
          style={{ direction: "rtl" }}
        >
          <Image src={creator1} alt="creator1" className="rounde-[8px]" />
          <section className="flex flex-col justify-between">
            <p className="text-[#1E1E1E] text-[20px] font-bold">امین رعیتی</p>
            <div className="flex gap-1 items-center">
              <IoEyeOutline color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">
                  2,500,000
                </p>
                <p className="text-[#354259] font-regular text-[12px]">
                  بازدید
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LuBook color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">253</p>
                <p className="text-[#354259] font-regular text-[12px]">اثر</p>
              </div>
            </div>
          </section>
        </div>
        <div
          variants={itemVariants}
          className="col-span-12 sm:col-span-6 md:col-span-3 flex gap-2 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px]
              p-3"
          style={{ direction: "rtl" }}
        >
          <Image src={creator1} alt="creator1" className="rounde-[8px]" />
          <section className="flex flex-col justify-between">
            <p className="text-[#1E1E1E] text-[20px] font-bold">امین رعیتی</p>
            <div className="flex gap-1 items-center">
              <IoEyeOutline color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">
                  2,500,000
                </p>
                <p className="text-[#354259] font-regular text-[12px]">
                  بازدید
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LuBook color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">253</p>
                <p className="text-[#354259] font-regular text-[12px]">اثر</p>
              </div>
            </div>
          </section>
        </div>
        <div
          variants={itemVariants}
          className="col-span-12 sm:col-span-6 md:col-span-3 flex gap-2 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px]
              p-3"
          style={{ direction: "rtl" }}
        >
          <Image src={creator1} alt="creator1" className="rounde-[8px]" />
          <section className="flex flex-col justify-between">
            <p className="text-[#1E1E1E] text-[20px] font-bold">امین رعیتی</p>
            <div className="flex gap-1 items-center">
              <IoEyeOutline color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">
                  2,500,000
                </p>
                <p className="text-[#354259] font-regular text-[12px]">
                  بازدید
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LuBook color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">253</p>
                <p className="text-[#354259] font-regular text-[12px]">اثر</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
