"use client";

import React, { useState } from "react";
import Menu from "@/components/CreatorDashboard/Menu";
import CommentsReplyModal from "@/components/Modals/CommentsReplyModal";

import Image from "next/image";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import filter from "@/public/img/filter.png";
import calendar from "@/public/img/calendar.png";
import trash2 from "@/public/img/trash2.png";
import reply from "@/public/img/reply.png";
import amin from "@/public/img/amin.jpg";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isCatOpen, setIsCatOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("همه داستان ها");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("پربازدید ترین");

  const options = ["پربازدید ترین", "جدیدترین", "پرفروش‌ترین"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const cat = [
    { name: "همه داستان ها" },
    { name: "عاشقانه" },
    { name: "هنری" },
    { name: "ادبی" },
  ];

  const handleSelectCat = (cat) => {
    setSelectedCat(cat);
    setIsCatOpen(false);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 w-[100%] lg:w-[100%] xl:w-[85%] m-auto my-20"
    >
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-12 gap-2 sm:gap-5"
        dir="rtl"
      >
        {/* menu */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="comments" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-wrap gap-2 items-center justify-left">
              <div className="relative">
                <div
                  onClick={() => setIsCatOpen(!isCatOpen)}
                  className={`flex items-center justify-between gap-2 bg-[#354259] w-full sm:w-[200px] px-5 py-3 cursor-pointer transition-all duration-300 ease-in-out ${
                    isCatOpen ? "rounded-t-[8px]" : "rounded-[8px]"
                  }`}
                >
                  <p className="text-[white] text-[16px] font-bold">
                    {selectedCat}
                  </p>
                  {isCatOpen ? (
                    <FaAngleUp color="white" />
                  ) : (
                    <FaAngleDown color="white" />
                  )}
                </div>

                <div
                  className={`absolute left-0 right-0 bg-[#354259] border-x-[2px] border-b-[2px] border-[#354259] rounded-b-[8px] z-[999] transition-all duration-300 ease-in-out ${
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
                      className="py-2 px-3 cursor-pointer text-[white]  transition my-1 "
                    >
                      <div className="flex items-center gap-2 justify-left">
                        <span className="text-[14px]">{option.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                25,620 نظر
              </p>
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
          <div className="grid grid-cols-12 gap-5 my-5">
            <div className="col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6">
              <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 rounded-[8px] relative">
                <div className="flex justify-between items-center">
                  <p className="text-[#1E1E1E] text-[16px] font-bold">نقره</p>
                  <p className="text-[#1E1E1E] text-[16px] font-regular">
                    قسمت 2
                  </p>
                </div>
                <p className="text-[#1E1E1E] text-[14px] font-light my-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
                <div className="h-[1px] w-full bg-[#EBDFBE] my-3"></div>
                <div className="flex flex-wrap justify-between items-center">
                  <div
                    className="flex flex-wrap items-center gap-2 my-1"
                    style={{ direction: "rtl" }}
                  >
                    <Image
                      src={amin}
                      alt="amin"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <p className="text-[#1E1E1E] text-[16px] font-bold">
                      امین رعیتی
                    </p>
                  </div>
                  <div className="flex justify-end items-center gap-2 my-1">
                    <div className="flex gap-1 items-center">
                      <p className="text-[14px] text-[#1E1E1E] font-regular">
                        12:22
                      </p>
                      <div className="w-[1px] h-4 mx-1 bg-[#1E1E1E]"></div>
                      <p className="text-[14px] text-[#1E1E1E] font-regular">
                        1403/05/23
                      </p>
                    </div>
                    <Image src={calendar} alt="calendar" className="mb-1" />
                  </div>
                </div>

                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 flex gap-1">
                  <div
                    onClick={openModal}
                    className="rounded-full bg-[#354259] border-[1px] border-[#354259] p-2 cursor-pointer"
                  >
                    <Image src={reply} alt="reply" width={15} height={15} />
                  </div>
                  <div className="rounded-full bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-2 cursor-pointer">
                    <Image src={trash2} alt="trash2" width={15} height={15} />
                  </div>
                </div>

                <CommentsReplyModal
                  isModalOpen={isModalOpen}
                  closeModal={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
