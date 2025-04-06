"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";
import bank1 from "@/public/img/bank1.png";
import card from "@/public/img/card.png";

const WithdraModal = ({ isModalOpen, closeModal }) => {
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
                درخواست برداشت
              </p>
              <div></div>
            </div>

            <div
              className="flex items-center justify-between bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-3 rounded-[8px] mt-3"
              dir="rtl"
            >
              <p className="text-[#1E1E1E] text-[16px] font-regulare">
                قابل برداشت:
              </p>

              <p className="text-[#1E1E1E] text-[16px] font-bold">
                500،000 تومان
              </p>
            </div>

            <div
              className="flex flex-wrap gap-2 items-center justify-between mt-10 mb-2"
              dir="rtl"
            >
              <div className="flex items-center gap-2">
                <Image src={bank1} alt="bank1" />
                <p className="text-[#1E1E1E] text-[16px] font-regulare">
                  قابل برداشت:
                </p>
              </div>

              <p className="text-[#354259] text-[16px] font-bold">
                کل مبلغ قابل برداشت
              </p>
            </div>
            <input
              placeholder="متن ورودی را بنویسید"
              className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 px-5  text-right placeholder:text-[#1E1E1ECC] placeholder:font-light placeholder:text-[14px] placeholder:sm:text-[16px]"
              style={{ direction: "rtl" }}
            />

            <div
              className="flex flex-wrap gap-2 items-center justify-between mt-10 mb-2"
              dir="rtl"
            >
              <div className="flex items-center gap-2">
                <Image src={card} alt="card" />
                <p className="text-[#1E1E1E] text-[16px] font-regulare">
                  شماره شبا (مطابق با کد ملی)
                </p>
              </div>

              <p className="text-[#354259] text-[16px] font-bold">
                انتخاب از شباهای قبلی
              </p>
            </div>
            <input
              placeholder="متن ورودی را بنویسید"
              className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 px-5  text-right placeholder:text-[#1E1E1ECC] placeholder:font-light placeholder:text-[14px] placeholder:sm:text-[16px]"
              style={{ direction: "rtl" }}
            />

            <button className="mt-5 bg-[#354259] rounded-[8px] p-3 text-[white] text-center text-[16px] font-bold mt-2 w-full sm:w-[40%] flex justify-center m-auto">
              ثبت درخواست
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default WithdraModal;
