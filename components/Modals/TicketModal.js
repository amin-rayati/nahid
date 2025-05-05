"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";

import amin from "@/public/img/amin.jpg";
import support from "@/public/img/support.png";

const TicketModal = ({ isModalOpen, closeModal }) => {
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
            className="bg-[#E9EFF0] p-6 rounded-[16px] w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={closeModal}>
                <IoMdClose size={20} color="#1E1E1E99" />
              </button>

              <p className="text-[#1E1E1E] text-[20px] font-bold">متن تیکت</p>
              <div></div>
            </div>

            <div className="bg-[#FFFFFF80]  rounded-[12px] p-3 my-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div
                  className="flex flex-wrap items-center gap-2"
                  style={{ direction: "rtl" }}
                >
                  <Image
                    src={amin}
                    alt="amin"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <p className="text-[#1E1E1E] text-[14px] font-bold">
                    امین رعیتی
                  </p>
                </div>
                <p className="text-[14px] text-[#1E1E1E] font-regular">
                  1403/05/21 - 22:14
                </p>
              </div>

              <p className="text-[12px] text-[#1E1E1E] font-medium mt-3">
                خرید از فروشگاه
              </p>
              <p
                className="text-[#1E1E1E] font-regular text-[12px] text-justify leading-[25px] mt-3"
                style={{ direction: "rtl" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                و با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم
                است.
              </p>
            </div>

            <div className="bg-[#FFFFFF80]  rounded-[12px] p-3 my-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div
                  className="flex flex-wrap items-center gap-2"
                  style={{ direction: "rtl" }}
                >
                  <Image
                    src={support}
                    alt="support"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <p className="text-[#1E1E1E] text-[14px] font-bold">
                    پشتیبانی آنیکارت
                  </p>
                </div>
                <p className="text-[14px] text-[#1E1E1E] font-regular">
                  1403/05/21 - 22:14
                </p>
              </div>

              <p
                className="text-[#1E1E1E] font-regular text-[12px] text-justify leading-[25px] mt-3"
                style={{ direction: "rtl" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                و با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم
                است.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default TicketModal;
