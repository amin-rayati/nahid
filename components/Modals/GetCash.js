"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";

const GetCash = ({ isModalOpen, closeModal }) => {
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <Portal>
      {isModalOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
          onClick={closeModal}
          dir="rtl"
        >
          <div
            className="bg-[#E9EFF0] p-6 rounded-[16px] w-[95%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={closeModal}>
                <IoMdClose size={20} color="#1E1E1E99" />
              </button>

              <p className="text-[#1E1E1E] text-[20px] font-bold">
                دریافت وجه نقد
              </p>
              <div></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 my-5">
              <p className="text-[#1E1E1E] text-[16px] font-bold">
                موجودی کیف پول:
              </p>
              <p className="text-[#1F5D6A] text-[16px] font-bold">
                550،000 تومان
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 my-5">
              <p className="text-[#1E1E1E] text-[14px] font-regular">
                مقدار مبلغ انتخابی
              </p>
              <p className="text-[#1F5D6A] text-[14px] font-bold">همه موجودی</p>
            </div>

            <div className="relative w-full mt-2 mb-5">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="مبلغ انتخابی"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 my-5">
              <p className="text-[#1E1E1E] text-[14px] font-regular ">
                شماره شبا
              </p>
              <p className="text-[#1F5D6A] text-[14px] font-bold ">
                انتخاب از شباهای قبلی
              </p>
            </div>

            <div className="relative w-full mt-2 mb-5">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="شماره شبا"
              />
            </div>

            <button className="w-[100%] justify-center flex items-center gap-2 bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-4 text-[14px]">
              درخواست برداشت
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default GetCash;
