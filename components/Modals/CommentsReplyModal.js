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

const CommentsReplyModal = ({ isModalOpen, closeModal }) => {
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
                پاسخ به نظر
              </p>
              <div></div>
            </div>

            <div
              className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-3 rounded-[8px] mt-3"
              dir="rtl"
            >
              <p className="text-[#1E1E1E] text-[16px] font-regulare text-center">
                متن نظر:
              </p>

              <p className="text-[#1E1E1E] text-[14px] font-light leading-[28px] mt-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است .
              </p>
            </div>

            <p className="text-[#1E1E1E] text-[16px] font-regular mt-10 mb-2">
              متن پاسخ
            </p>

            <textarea
              rows={4}
              placeholder="متن ورودی را بنویسید"
              className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 px-5  text-right placeholder:text-[#1E1E1ECC] placeholder:font-light placeholder:text-[14px] placeholder:sm:text-[16px] resize-none"
              style={{ direction: "rtl" }}
            />

            <button className="mt-5 bg-[#354259] rounded-[8px] p-3 text-[white] text-center text-[16px] font-bold mt-2 w-full sm:w-[40%] flex justify-center m-auto">
              ثبت پاسخ
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default CommentsReplyModal;
