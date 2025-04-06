"use client";

import React, { useState } from "react";
import Image from "next/image";
import user3 from "@/public/img/user3.png";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";

const StepFour = ({ nextStep }) => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  return (
    <motion.section initial="hidden" animate="visible">
      <motion.div
        variants={itemVariants}
        className="bg-[#FEFCED] border-[#EBDFBE] border-[1px] rounded-[16px] p-5"
        dir="rtl"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <Image src={user3} alt="user3" className="mb-1" />
          <p className="text-[#000000] text-[16px] font-bold">
            کاربر امین رعیتی گرامی
          </p>
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-[#000000] text-[16px] font-light leading-[28px] mt-5"
        >
          شما در تاریخ{" "}
          <strong className="font-bold mx-2">جمعه 10 اسفند 1403</strong>
          اقدام به ثبت نام کرده‌اید. ما در حال بررسی هستیم و به زودی جهت تکمیل
          اطلاعات و شروع فعالیت با شما تماس خواهیم گرفت.
        </motion.p>
      </motion.div>

      <motion.button
        variants={itemVariants}
        onClick={nextStep}
        className="my-5 w-[60%] m-auto justify-center flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px]"
      >
        ورود به اپلیکیشن
      </motion.button>
    </motion.section>
  );
};

export default StepFour;
