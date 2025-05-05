"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";

const ConvertPoint = ({ isModalPointOpen, closeModalPoint }) => {
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <Portal>
      {isModalPointOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
          onClick={closeModalPoint}
          dir="rtl"
        >
          <div
            className="bg-[#E9EFF0] p-6 rounded-[16px] w-[95%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={closeModalPoint}>
                <IoMdClose size={20} color="#1E1E1E99" />
              </button>

              <p className="text-[#1E1E1E] text-[20px] font-bold">
                تبدیل امتیاز به اعتبار
              </p>
              <div></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 my-5">
              <p className="text-[#1E1E1E] text-[16px] font-bold">
                امتیازهای شما:
              </p>
              <p className="text-[#1F5D6A] text-[16px] font-bold">525،500</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 my-5">
              <p className="text-[#1E1E1E] text-[14px] font-regular">
                مقدار امتیاز انتخابی
              </p>
              <p className="text-[#1F5D6A] text-[14px] font-bold">
                همه امتیاز موجود
              </p>
            </div>

            <div className="relative w-full mt-2 mb-5">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="مقدار امتیاز"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 my-5">
              <p className="text-[#1E1E1E] text-[14px] font-regular">
                میزان اعتبار کیف پول:
              </p>
              <p className="text-[#1E1E1E] text-[14px] font-bold">0 تومان</p>
            </div>

            <button className="w-[100%] justify-center flex items-center gap-2 bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-4 text-[14px]">
              تایید
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default ConvertPoint;
