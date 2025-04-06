"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";
import Link from "next/link";

import pencil from "@/public/img/pencil.png";
import save from "@/public/img/save.png";
const AddStoryEpisodeModal = ({ isAddStoryModalOpen, closeAddStoryModal }) => {
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <Portal>
      {isAddStoryModalOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
          onClick={closeAddStoryModal}
          dir="rtl"
        >
          <div
            className="bg-[#FEFCED] p-6 rounded-[16px] w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={closeAddStoryModal}>
                <IoMdClose size={20} color="#1E1E1E99" />
              </button>

              <p className="text-[#1E1E1E] text-[24px] font-regular">
                <strong className="text-[#1E1E1E] text-[24px] font-bold">
                  افزودن قسمت جدید
                </strong>
                (قسمت 41)
              </p>
              <div></div>
            </div>

            <div className="my-5">
              <div className="flex items-center gap-2">
                <Image src={pencil} alt="pencil" />
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  متن این قسمت
                </p>
              </div>
              <textarea
                rows={10}
                placeholder="متن ورودی را بنویسید"
                className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 resize-none w-full rounded-[8px] mt-5 outline-none"
              />
            </div>

            <button className=" w-full sm:w-[50%] flex items-center justify-center m-auto gap-2 bg-[#354259] rounded-[8px] px-5 py-3">
              <Image src={save} alt="save" />
              <p className="text-white text-[13px] sm:text-[16px] font-bold">
                ثبت و ذخیره سازی
              </p>
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default AddStoryEpisodeModal;
