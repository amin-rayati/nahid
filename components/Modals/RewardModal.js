"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
const RewardModal = ({ isModalOpen, closeModal }) => {
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

              <p className="text-[#1E1E1E] text-[24px] font-bold">
                راهمای کسب امتیاز
              </p>
              <div></div>
            </div>

            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] flex items-center justify-between py-4 px-3 rounded-[8px] my-5">
              <p className="text-[16px] font-bold">ثبت نام با کد معرف</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-[#FF7F5B] rounded-[8px] w-8 h-8">
                  <p className="text-[16px] font-bold text-[#ffffff]">5</p>
                </div>
                <p className="text-[16px] font-regular text-[#1E1E1E]">
                  امتیاز
                </p>
              </div>
            </div>
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] flex items-center justify-between py-4 px-3 rounded-[8px] my-5">
              <p className="text-[16px] font-bold">ثبت نام با کد معرف</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-[#FF7F5B] rounded-[8px] w-8 h-8">
                  <p className="text-[16px] font-bold text-[#ffffff]">5</p>
                </div>
                <p className="text-[16px] font-regular text-[#1E1E1E]">
                  امتیاز
                </p>
              </div>
            </div>
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] flex items-center justify-between py-4 px-3 rounded-[8px] my-5">
              <p className="text-[16px] font-bold">ثبت نام با کد معرف</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-[#FF7F5B] rounded-[8px] w-8 h-8">
                  <p className="text-[16px] font-bold text-[#ffffff]">5</p>
                </div>
                <p className="text-[16px] font-regular text-[#1E1E1E]">
                  امتیاز
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default RewardModal;
