"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
const PoemModal = ({ isModalOpen, closeModal }) => {
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
            className="bg-[#FEFCED] p-6 rounded-[16px] w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={closeModal}>
                <IoMdClose size={20} color="#1E1E1E99" />
              </button>

              <p className="text-[#1E1E1E] text-[24px] font-bold">دیوان شمس</p>
              <div></div>
            </div>
            <div className="grid grid-cols-12 gap-3 my-5" dir="rtl">
              <div className="col-span-12 sm:col-span-6  py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
                <p className="text-[#1E1E1E] text-[20px] font-bold">
                  گلستان سعدی
                </p>
                <p
                  className="my-2 text-[#1E1E1E] text-[16px] font-regular"
                  dir="rtl"
                >
                  4 بخش
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6  py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
                <p className="text-[#1E1E1E] text-[20px] font-bold">
                  گلستان سعدی
                </p>
                <p
                  className="my-2 text-[#1E1E1E] text-[16px] font-regular"
                  dir="rtl"
                >
                  4 بخش
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6  py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
                <p className="text-[#1E1E1E] text-[20px] font-bold">
                  گلستان سعدی
                </p>
                <p
                  className="my-2 text-[#1E1E1E] text-[16px] font-regular"
                  dir="rtl"
                >
                  4 بخش
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6  py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
                <p className="text-[#1E1E1E] text-[20px] font-bold">
                  گلستان سعدی
                </p>
                <p
                  className="my-2 text-[#1E1E1E] text-[16px] font-regular"
                  dir="rtl"
                >
                  4 بخش
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default PoemModal;
