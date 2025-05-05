"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";
import starback from "@/public/img/starback.png";
import Link from "next/link";

const WelcomeModal = ({ isModalOpen, closeModal }) => {
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
            className="bg-[#E9EFF0] p-6 rounded-[16px] w-[95%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-20 right-10 w-[80px] h-[80px] overflow-hidden z-0">
              <Image
                src={starback}
                alt="Star background"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-24 left-10 w-[80px] h-[80px] overflow-hidden z-0">
              <Image
                src={starback}
                alt="Star background"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            {/* Modal content with higher z-index to appear above the stars */}
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <button onClick={closeModal}>
                  <IoMdClose size={20} color="#1E1E1E99" />
                </button>
                <p className="text-[#1E1E1E] text-[20px] font-bold">
                  به آنیکارت خوش اومدید!
                </p>
                <div></div>
              </div>
              <div className="my-5">
                <p className="text-[#1E1E1E] text-[14px] font-regular leading-[30px]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-2 sm:gap-0 justify-between mt-5">
                <button className="w-[100%] sm:w-[49%] justify-center flex items-center gap-2 bg-none border-[2px] border-[#1F5D6A] font-bold text-[#1F5D6A] rounded-[8px] py-4 text-[14px]">
                  بعدا احراز هویت می‌کنم
                </button>
                <Link
                  href="/anikart/auth"
                  className="w-[100%] sm:w-[49%] justify-center flex items-center gap-2 bg-[#1F5D6A] border-[2px] border-[#1F5D6A] font-bold text-[white] rounded-[8px] py-4 text-[14px]"
                >
                  احراز هویت
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default WelcomeModal;
