"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";
import upload from "@/public/img/upload.png";
import copy from "@/public/img/copy.png";
import bank1 from "@/public/img/bank1.png";

const CharityModal = ({ isModalOpen, closeModal }) => {
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
                کمک به خیریه
              </p>
              <div></div>
            </div>

            <div
              className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-3 rounded-[8px] flex flex-wrap justify-between mt-3"
              dir="rtl"
            >
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                شماره کارت:
              </p>

              <div className="flex gap-2 items-center">
                <Image src={copy} alt="copy" />
                <p className="text-[#1E1E1E] text-[16px] font-bold">
                  6219 8619 8049 8408
                </p>
              </div>
            </div>

            <p
              className="text-[#1E1E1E] text-[14px] font-light text-justify leading-[28px] my-5"
              dir="rtl"
            >
              لطفا مبلغ مورد نظر را به شماره کارت مشخص شده در بالا به نام بهاره
              بنک دار واریز کرده و رسید پرداخت را از طریق دکمه زیر برای ما ارسال
              بفرمایید. با سپاس فراوان از همدلی شما.
            </p>

            <div className="flex gap-2 items-center my-2">
              <Image src={bank1} alt="bank1" />
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                مبلغ واریزی
              </p>
            </div>
            <div className="relative w-full">
              <input
                placeholder="متن ورودی را بنویسید"
                className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 px-5 text-right placeholder:text-[#1E1E1ECC]  placeholder:font-light placeholder:text-[14px] placeholder:sm:text-[16px]"
                style={{ direction: "rtl" }}
              />

              <p className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#1E1E1E] text-[16px] font-regular">
                تومان
              </p>
            </div>

            <button className="mt-5 bg-[#354259] rounded-[8px] p-3 text-[white] text-center text-[16px] font-bold mt-2 w-full flex gap-2 items-center justify-center">
              <Image src={upload} alt="upload" className="mb-1" />
              بارگذاری فیش واریز
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default CharityModal;
