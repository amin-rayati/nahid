"use client";

import React, { useState } from "react";
import Image from "next/image";
import creator2 from "@/public/img/creator2.png";
import calendar from "@/public/img/calendar.png";
import pageImg from "@/public/img/page.png";
import follow from "@/public/img/follow.png";
import filter from "@/public/img/filter.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import best1 from "@/public/img/best1.png";
import cat1 from "@/public/img/cat1.png";
import cat2 from "@/public/img/cat2.png";
import cat3 from "@/public/img/cat3.png";
import cat4 from "@/public/img/cat4.png";

import { IoEyeOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("همه آثار");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("پربازدید ترین");

  const options = ["پربازدید ترین", "جدیدترین", "پرفروش‌ترین"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const cat = [
    { name: "همه آثار" },
    { name: "عاشقانه" },
    { name: "هنری" },
    { name: "ادبی" },
  ];

  const handleSelectCat = (cat) => {
    setSelectedCat(cat);
    setIsCatOpen(false);
  };
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto my-20"
    >
      <motion.div
        variants={itemVariants}
        className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 rounded-[16px] flex justify-between flex-wrap md:flex-nowrap"
        dir="rtl"
      >
        <div className="flex items-center flex-wrap md:flex-nowrap gap-3 w-[100%] md:w-[75%] my-1">
          <Image
            src={creator2}
            alt="creator2"
            className="rounded-[16px] w-40 h-40"
          />
          <section>
            <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
              <p className="text-[24px] text-[#1E1E1E] font-bold">
                ناهید گلکار
              </p>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <Image src={pageImg} alt="pageImg" className="mb-1" />
                  <div className="flex gap-1 items-center">
                    <p className="text-[#354259] font-bold text-[16px]">125</p>
                    <p className="text-[#354259] font-regular text-[12px]">
                      اثر
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <Image src={calendar} alt="calendar" className="mb-1" />
                  <div className="flex gap-1 items-center">
                    <p className="text-[#354259] font-bold text-[16px]">125</p>
                    <p className="text-[#354259] font-regular text-[12px]">
                      روز در ناهید
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[16px] text-[#1E1E1E] leading-[28px] font-light text-justify mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده است.
            </p>
          </section>
        </div>
        <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-3 rounded-[8px] flex flex-col items-center justify-center w-[100%] md:w-[20%] my-1">
          <div className="flex gap-1 items-center">
            <p className="text-[#354259] font-bold text-[16px]">125,000</p>
            <p className="text-[#354259] font-regular text-[12px]">
              دنبال کننده
            </p>
          </div>
          <button className="mt-3 flex items-center gap-2 bg-[#354259] rounded-[8px] px-4 py-2 text-center justify-center text-[12px] text-[white] font-bold">
            <Image src={follow} alt="follow" />
            دنبال کردن
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="hidden sm:flex flex-wrap justify-between items-center gap-2 my-10"
      >
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
        <div className="flex gap-2 items-center w-[80%] justify-end">
          <div className="relative w-[60%]">
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
                  <div className="flex items-center gap-2 justify-end">
                    <span className="text-[14px]">{option.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="block sm:hidden my-2">
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
        <div className="flex items-center justify-between my-2">
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
                  <div className="flex items-center gap-2 justify-end">
                    <span className="text-[14px]">{option.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
            <Image src={best1} alt="best1" className="rounded-[8px]" />

            <div
              className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
              style={{ direction: "rtl" }}
            >
              <button className="flex gap-2 items-center bg-[#FAF1D7] border-[1px] border-[#354259] text-[#354259] text-[14px] font-regular px-3 py-2 rounded-[8px]">
                <Image src={cat4} alt="cat4" className="w-6 h-6" />
                داستان
              </button>
            </div>

            <p className="text-[20px] font-bold text-black text-right my-2">
              اگر دریا ببارد
            </p>

            <div className="h-[1px] w-full bg-[#00000017]"></div>

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
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
            <Image src={best1} alt="best1" className="rounded-[8px]" />

            <div
              className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
              style={{ direction: "rtl" }}
            >
              <button className="flex gap-2 items-center bg-[#FAF1D7] border-[1px] border-[#354259] text-[#354259] text-[14px] font-regular px-3 py-2 rounded-[8px]">
                <Image src={cat3} alt="cat3" className="w-6 h-6" />
                داستان
              </button>
            </div>

            <p className="text-[20px] font-bold text-black text-right my-2">
              اگر دریا ببارد
            </p>

            <div className="h-[1px] w-full bg-[#00000017]"></div>

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
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
            <Image src={best1} alt="best1" className="rounded-[8px]" />

            <div
              className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
              style={{ direction: "rtl" }}
            >
              <button className="flex gap-2 items-center bg-[#FAF1D7] border-[1px] border-[#354259] text-[#354259] text-[14px] font-regular px-3 py-2 rounded-[8px]">
                <Image src={cat2} alt="cat2" className="w-6 h-6" />
                داستان
              </button>
            </div>

            <p className="text-[20px] font-bold text-black text-right my-2">
              اگر دریا ببارد
            </p>

            <div className="h-[1px] w-full bg-[#00000017]"></div>

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
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
            <Image src={best1} alt="best1" className="rounded-[8px]" />

            <div
              className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
              style={{ direction: "rtl" }}
            >
              <button className="flex gap-2 items-center bg-[#FAF1D7] border-[1px] border-[#354259] text-[#354259] text-[14px] font-regular px-3 py-2 rounded-[8px]">
                <Image src={cat1} alt="cat1" className="w-6 h-6" />
                داستان
              </button>
            </div>

            <p className="text-[20px] font-bold text-black text-right my-2">
              اگر دریا ببارد
            </p>

            <div className="h-[1px] w-full bg-[#00000017]"></div>

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
      </motion.div>
    </motion.div>
  );
};

export default Page;
