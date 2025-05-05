"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";

const ClubCodeModal = ({ isModalOpen, closeModal }) => {
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
                وارد کردن کد
              </p>
              <div></div>
            </div>

            <p className="text-[#1E1E1E] text-[14px] font-regular mt-5">
              کد کارت باشگاه خود را وارد کنید
            </p>

            <div className="relative w-full my-5">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="کد را وارد کنید"
              />
            </div>

            <button className="w-[100%] justify-center flex items-center gap-2 bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-4 text-[14px]">
              تایید کد
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default ClubCodeModal;
