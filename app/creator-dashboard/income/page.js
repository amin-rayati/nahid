"use client";
import React, { useState } from "react";
import Image from "next/image";

import Menu from "@/components/CreatorDashboard/Menu";
import Deposited from "@/components/CreatorDashboard/Income/Deposited";
import Review from "@/components/CreatorDashboard/Income/Review";
import WithdraModal from "@/components/Modals/WithdraModal";

import income1 from "@/public/img/income1.png";
import income2 from "@/public/img/income2.png";
import income3 from "@/public/img/income3.png";
import filter from "@/public/img/filter.png";
import calendarsingle from "@/public/img/calendarsingle.png";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const tabs = [
  { id: "deposited", label: "واریز شده" },
  { id: "review", label: "درحال بررسی" },
];
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [activeTab, setActiveTab] = useState("deposited");
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
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-12 gap-2 sm:gap-5"
        dir="rtl"
      >
        {/* menu */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="income" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          {/* box */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-5 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] py-7 px-4 flex flex-wrap  gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src={income1} alt="income1" />
                <p className="text-[#1E1E1E] text-[16px] sm:text-[20px] font-bold">
                  مجموع درآمد:
                </p>
              </div>
              <p className="text-[#1E1E1E] text-[16px] sm:text-[20px] font-regular">
                <strong className="text-[#1E1E1E] text-[16px] sm:text-[20px] font-bold">
                  1،500،000
                </strong>{" "}
                تومان
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] py-7 px-4 flex flex-wrap  gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src={income2} alt="income2" />
                <p className="text-[#1E1E1E] text-[16px] sm:text-[20px] font-bold">
                  قابل برداشت:
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[#1E1E1E] text-[16px] sm:text-[20px] font-regular">
                  <strong className="text-[#1E1E1E] text-[16px] sm:text-[20px] font-bold">
                    1،500،000
                  </strong>{" "}
                  تومان
                </p>

                <button
                  onClick={openModal}
                  className="bg-[#354259] rounded-[8px] p-3 text-center text-white text-[16] font-bold"
                >
                  درخواست برداشت
                </button>
                <WithdraModal
                  isModalOpen={isModalOpen}
                  closeModal={closeModal}
                />
              </div>
            </div>
          </div>
          {/* mainBox */}
          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-5 my-2">
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src={income3} alt="income3" />
                <p className="text-[#1E1E1E] text-[16px] sm:text-[20px] font-regular">
                  مبالغ واریز شده برای خالق اثر
                </p>
              </div>
              <div className="flex flex-wrap gap-2 items-center gap-2">
                <p className="text-[#1E1E1E] text-[16px] sm:text-[20px] font-regular">
                  مجموع واریز شده:
                </p>
                <p className="text-[#1E1E1E] text-[16px] sm:text-[20px] font-bold">
                  26،000،000 تومان
                </p>
              </div>
            </div>

            {/* tabs */}
            <div className="hidden sm:flex flex-wrap justify-between items-center gap-2 mt-10">
              <div className="flex flex-wrap gap-2 items-center justify-right">
                <div className="flex justify-start gap-2 overflow-x-auto ">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`px-2 sm:px-10 py-3 border-b-2 bg-[#FAF1D7] rounded-t-[8px] ${
                        activeTab === tab.id
                          ? "border-black text-[#354259] font-bold text-[13px] sm:text-[16px]"
                          : "border-[#1e1e1e0a] text-[#1e1e1eb5] font-regular text-[13px] sm:text-[16px]"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <button className="flex gap-1 border-[2px] border-[#354259] rounded-[8px] p-2 sm:p-3">
                  <Image src={calendarsingle} alt="calendarsingle" />
                  <p className="text-[#354259] text-[13px] sm:text-[16px] font-bold">
                    تاریخ سفارش
                  </p>
                </button>
              </div>
              <div className="relative" dir="rtl">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 justify-between cursor-pointer text-[#354259] font-bold text-[13px] sm:text-[16px] w-[100px] sm:w-[110px]"
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
              <div className="flex justify-start gap-2 overflow-x-auto ">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-2 sm:px-10 py-3 border-b-2 bg-[#FAF1D7] rounded-t-[8px] ${
                      activeTab === tab.id
                        ? "border-black text-[#354259] font-bold text-[13px] sm:text-[16px]"
                        : "border-[#1e1e1e0a] text-[#1e1e1eb5] font-regular text-[13px] sm:text-[16px]"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between my-2">
                <button className="flex items-center gap-1 border-[2px] border-[#354259] rounded-[8px] p-2 sm:p-3 my-1">
                  <Image src={calendarsingle} alt="calendarsingle" />
                  <p className="text-[#354259] text-[13px] font-bold">
                    تاریخ سفارش
                  </p>
                </button>
                <div className="relative my-1" dir="rtl">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-1 justify-between cursor-pointer text-[#354259] font-bold text-[13px] w-[100px]"
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

            <div className="my-2">
              {activeTab === "deposited" && <Deposited />}
              {activeTab === "review" && <Review />}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
