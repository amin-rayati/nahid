"use client";
import React, { useState } from "react";
import Menu from "@/components/CreatorDashboard/Menu";

import Image from "next/image";
import amin from "@/public/img/amin.jpg";

import { IoMdClose } from "react-icons/io";
import { LuImage } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";

const page = () => {
  const { containerVariants, itemVariants } = commonAnimations;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 w-[100%] lg:w-[100%] xl:w-[85%] m-auto my-20"
    >
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-12 gap-2 sm:gap-5"
        dir="rtl"
      >
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="profile" />
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 md:flex md:justify-center md:h-fit md:m-auto">
          <div className="grid grid-cols-12 sm:gap-10 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] py-10 px-5">
            <div className="col-span-12 sm:col-span-8">
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                نام و نام خوانوادگی
              </p>
              <div className="relative w-full my-2">
                <input
                  // value="امین رعیتی"
                  className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-3 px-5 text-right text-[#1E1E1E] text-[16px] font-light"
                  style={{ direction: "rtl" }}
                />

                <FiEdit
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  size={15}
                  color="#354259"
                />
              </div>

              <p className="text-[#1E1E1E] text-[16px] font-regular mt-5">
                شماره تماس
              </p>
              <div className="w-full my-2">
                <input
                  // value="+98 921 008 5374"
                  className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-3 px-5 text-left text-[#1E1E1E] text-[16px] font-bold"
                  style={{ direction: "ltr" }}
                />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4 m-auto">
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                عکس پروفایل
              </p>

              <div className="relative w-32 h-32 mt-3">
                <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden flex justify-center items-center">
                  <Image
                    src={amin}
                    alt="Profile"
                    className="rounded-full object-cover"
                    layout="fixed"
                    width={150}
                    style={{ height: "140px" }}
                  />
                </div>
                <div
                  className="absolute transform translate-x-1/2 translate-y-1/2 p-1 rounded-full"
                  style={{
                    right: "15px",
                    bottom: "20px",
                    backgroundColor: "#FF7F5B",
                  }}
                >
                  <LuImage size={20} color="white" />
                </div>
                <div
                  className="absolute transform translate-x-1/2 translate-y-1/2 p-1 rounded-full border-[1px] border-[#EBDFBE]"
                  style={{
                    left: "-15px",
                    bottom: "20px",
                    backgroundColor: "#FAF1D7",
                  }}
                >
                  <IoMdClose size={20} color="#354259" />
                </div>
              </div>

              <button className="bg-[#354259] rounded-[8px] px-3 py-2 mt-5 text-[16px] text-white font-bold text-center block mx-auto">
                ذخیره تغییرات
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default page;
