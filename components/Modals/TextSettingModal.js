"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import { FaPlus, FaBold, FaMinus } from "react-icons/fa6";
import Portal from "./Portal";
const TextSettingModal = ({ isModalOpen, closeModal }) => {
  const { containerVariants, itemVariants } = commonAnimations;

  const [color, setColor] = useState("#354259");
  return (
    <Portal>
      {isModalOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999] "
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
                تنظیمات متن
              </p>
              <div></div>
            </div>

            <p className="my-5 text-[#000000] text-[16px] font-light text-center">
              ابعاد، رنگ و حتی فاصله بین خطوط را از این طریق تنظیم کنید.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-1">
              <div className="w-[100%] sm:w-fit  flex items-center gap-2 border-[2px] border-[#354259] rounded-[8px] py-2 px-4 justify-center text-[#354259]">
                <button className="flex  border-[2px] border-[#354259] rounded-[8px] p-1 justify-center text-[#354259]">
                  <FaMinus />
                </button>
                <p className="text-[#354259] text-[16px] font-bold">
                  کوچک کردن
                </p>
              </div>
              <p className="w-[100%] sm:w-fit text-center  text-[#000000] text-[16px] font-regular">
                اندازه متن
              </p>
              <div className="w-[100%] sm:w-fit  flex items-center gap-2 border-[2px] border-[#354259] rounded-[8px] py-2 px-4 justify-center text-[#354259]">
                <button className="flex  border-[2px] border-[#354259] rounded-[8px] p-1 justify-center text-[#354259]">
                  <FaPlus />
                </button>
                <p className="text-[#354259] text-[16px] font-bold">
                  بزرگ نمایی
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 my-5">
              <button className="flex  border-[2px] border-[#354259] rounded-full p-1 justify-center text-[#354259]">
                <FaMinus />
              </button>

              <p className="text-[#000000] text-[16px] font-regular">
                فاصله بین خطوط
              </p>
              <button className="flex  border-[2px] border-[#354259] rounded-full p-1 justify-center text-[#354259]">
                <FaPlus />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-between my-5">
              <div className="w-[100%] sm:w-fit justify-center flex items-center gap-3">
                <p className="text-[#000000] text-[16px] font-regular">
                  رنگ متن
                </p>
                <div className="relative w-12 h-6 border-[2px] border-[#354259] rounded-[8px] overflow-hidden">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              </div>
              <div className="w-[100%] sm:w-fit justify-center flex items-center gap-3">
                <p className="text-[#000000] text-[16px] font-regular">
                  ضخامت متن
                </p>
                <button className="flex  border-[2px] border-[#354259] rounded-[8px] p-1 justify-center text-[#354259]">
                  <FaBold />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default TextSettingModal;
