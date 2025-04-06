"use client";

import React, { useState } from "react";
import Image from "next/image";
import alert from "@/public/img/alert.png";
import upload from "@/public/img/upload1.png";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const StepThree = ({ nextStep }) => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <motion.section initial="hidden" animate="visible">
      <motion.div
        variants={itemVariants}
        className="bg-[#FEFCED] border-[#EBDFBE] border-[1px] rounded-[16px] p-5"
        dir="rtl"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <Image src={alert} alt="alert" className="mb-1" />
          <p className="text-[#000000] text-[16px] font-bold">
            لطفا مدارک هویتی خود را جهت احراز هویت بارگذاریک کنید.
          </p>
        </motion.div>

        <motion.button
          variants={itemVariants}
          className="w-full rounded-[8px] bg-[#A0C498] p-3 flex items-center justify-center gap-2 my-5"
        >
          <Image src={upload} alt="upload" className="mb-1" />
          <p className="text-[#354259] text-[16px] font-bold">آپلود</p>
        </motion.button>

        <motion.p
          variants={itemVariants}
          className="text-[#000000] text-[16px] font-light leading-[28px]"
        >
          این مدارک صرفا توسط گروه پشتیبانی پلتفرم فرهنگی ادبی ناهید بررسی شده و
          به هیچ عنوان در دسترس عموم قرار نخواهد گرفت.
        </motion.p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center justify-left my-10"
        dir="rtl"
      >
        <label className="flex items-center cursor-pointer gap-2">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 mr-2  rounded-[6px] flex items-center justify-center ${
              acceptTerms ? "bg-[#A0C498] " : "border-[1px] bg-white"
            }`}
          >
            {acceptTerms && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#354259]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span className="text-[#000000] text-[16px] font-regular">
            <span className="text-[#354259] text-[16px] font-bold underline underline-offset-2">
              قوانین و مقررات
            </span>{" "}
            را می‌پذیرم
          </span>
        </label>
      </motion.div>

      <motion.button
        variants={itemVariants}
        onClick={nextStep}
        disabled={!acceptTerms}
        className={`my-5 w-[60%] m-auto justify-center flex items-center gap-2 rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px] font-bold ${
          acceptTerms
            ? "bg-[#354259] text-white"
            : "bg-gray-300 text-gray-600 border-gray-300 cursor-not-allowed"
        }`}
      >
        تایید قوانین و ادامه
      </motion.button>
    </motion.section>
  );
};

export default StepThree;
