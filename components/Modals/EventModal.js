"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";
import user1 from "@/public/img/user1.png";

const EventModal = ({ isModalOpen, closeModal }) => {
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
                شرکت در رویداد
              </p>
              <div></div>
            </div>

            <div
              className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-3 rounded-[8px] flex justify-between mt-3"
              dir="rtl"
            >
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                ظرفیت باقی مانده:
              </p>

              <p className="text-[#1E1E1E] text-[16px] font-bold">6 نفر</p>
            </div>

            <div
              className="flex flex-wrap items-center justify-between my-5"
              dir="rtl"
            >
              <div className="flex gap-2 items-center my-2">
                <Image src={user1} alt="user1" className="mb-1" />
                <p className="text-[#1E1E1E] text-[16px] font-regular">
                  تعداد شرکت کنندگان
                </p>
              </div>

              <div className="flex items-center gap-2 my-2">
                <button className="flex border-[2px] border-[#354259] rounded-full p-1 justify-center">
                  <FaMinus size={18} color="#354259" />
                </button>
                <p className="text-[#1E1E1E] text-[16px] font-regular">2</p>
                <button className="flex border-[2px] border-[#354259] rounded-full p-1 justify-center">
                  <FaPlus size={18} color="#354259" />
                </button>
              </div>
            </div>

            <button className="bg-[#354259] rounded-[8px] p-3 text-[white] text-center text-[16px] font-bold mt-2 w-full">
              پرداخت هزینه / 500،000 تومان
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default EventModal;
