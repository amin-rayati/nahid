"use client";
import React, { useState } from "react";
import Image from "next/image";
import calendar from "@/public/img/calendar.png";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 w-[100%] lg:w-[100%] xl:w-[85%] m-auto my-20"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-between"
        style={{ direction: "rtl" }}
      >
        <p className="text-black text-[24px] font-bold">اعلان‌ها</p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex gap-2 justify-end my-5"
      >
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
        <div className="h-[3px] w-64 bg-[#A0C498]"></div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 my-5 rounded-[8px] w-full"
        dir="rtl"
      >
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-[#1E1E1E] text-[16px] font-bold">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <div className="w-4 h-4 rounded-full bg-[#FF7F5B]" />
        </div>
        <div className="h-[1px] w-full bg-[#EBDFBE] my-3"></div>
        <div className="flex items-center gap-1 justify-end">
          <p className="text-[#354259] font-regular text-[16px] " dir="ltr">
            1403/05/23 | 12:23
          </p>
          <Image src={calendar} alt="calendar" className="mb-1" />
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 my-5 rounded-[8px] w-full"
        dir="rtl"
      >
        <div className="flex justify-between items-center">
          <p className="text-[#1E1E1E] text-[16px] font-regular">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="h-[1px] w-full bg-[#EBDFBE] my-3"></div>
        <div className="flex items-center gap-1 justify-end">
          <p className="text-[#354259] font-regular text-[16px] " dir="ltr">
            1403/05/23 | 12:23
          </p>
          <Image src={calendar} alt="calendar" className="mb-1" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default page;
