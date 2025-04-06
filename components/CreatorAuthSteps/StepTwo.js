"use client";
import React, { useState } from "react";
import Image from "next/image";
import calendar from "@/public/img/calendarsingle.png";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const StepTwo = ({ nextStep }) => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  return (
    <motion.section initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <p className="text-[#1E1E1E] text-[16px] font-regular">کد ملی</p>
        <input
          placeholder="کد ملی خود را وارد کنید"
          className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 my-2 rounded-[8px] text-right text-[#1E1E1E] text-[16px] font-regular placeholder:text-[#1e1e1ea8] placeholder:text-[16px] placeholder:font-ligth outline-none w-full"
        />
      </motion.div>
      <motion.div variants={itemVariants} className="my-5">
        <p className="text-[#1E1E1E] text-[16px] font-regular">تاریخ تولد</p>
        <div className="flex items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 my-2 rounded-[8px] text-right text-[#1E1E1E] text-[16px] font-regular">
          <input
            placeholder="تاریخ تولد خود را وارد کنید"
            className="bg-transparent outline-none text-right text-[#1E1E1E] text-[16px] font-regular placeholder:text-[#1e1e1ea8] placeholder:text-[16px] placeholder:font-light w-full"
          />
          <div className="mr-2">
            <Image src={calendar} alt="تاریخ تولد" />
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <p className="text-[#1E1E1E] text-[16px] font-regular">توضیحات</p>
        <textarea
          rows={4}
          placeholder="توضیحات را وارد کنید"
          className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 my-2 rounded-[8px] text-right text-[#1E1E1E] text-[16px] font-regular placeholder:text-[#1e1e1ea8] placeholder:text-[16px] placeholder:font-ligth outline-none w-full resize-none"
        />
      </motion.div>

      <motion.button
        variants={itemVariants}
        onClick={nextStep}
        className="my-5 w-[60%] m-auto justify-center flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px]"
      >
        ثبت اطلاعات و ادامه
      </motion.button>
    </motion.section>
  );
};

export default StepTwo;
