"use client";

import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import loginBack1 from "@/public/img/loginBack1.png";
import phonecall from "@/public/img/phonecall.png";
import mail from "@/public/img/mail.png";
import map from "@/public/img/map.png";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";

const Page = () => {
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <motion.div
      className="grid grid-cols-12"
      dir="rtl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative sm:col-span-6 min-h-[100vh] hidden sm:block"
        variants={itemVariants}
      >
        <Image
          src={loginBack1}
          alt="loginBack1"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        <div
          className="w-[80%] lg:w-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          variants={itemVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex gap-5 bg-[#FAF1D7] border-[#EBDFBE] border-[1px] px-5 py-4 rounded-[8px] my-4"
            dir="rtl"
          >
            <Image src={phonecall} alt="phonecall" className="object-contain" />
            <div>
              <p className="text-[#1E1E1E] text-[16px] font-regular my-2">
                شماره تماس:
              </p>
              <p className="text-[#1E1E1E] text-[16px] font-bold my-2">
                021 - 3365 6636
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-5 bg-[#FAF1D7] border-[#EBDFBE] border-[1px] px-5 py-4 rounded-[8px] my-4"
            dir="rtl"
          >
            <Image src={mail} alt="mail" className="object-contain" />
            <div>
              <p className="text-[#1E1E1E] text-[16px] font-regular my-2">
                ایمیل پشتیبانی:
              </p>
              <p className="text-[#1E1E1E] text-[16px] font-bold my-2">
                support@nahid-app.com
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-5 bg-[#FAF1D7] border-[#EBDFBE] border-[1px] px-5 py-4 rounded-[8px] my-4"
            dir="rtl"
          >
            <Image src={map} alt="map" className="object-contain" />
            <div>
              <p className="text-[#1E1E1E] text-[16px] font-regular my-2">
                آدرس دفتر:
              </p>
              <p className="text-[#1E1E1E] text-[16px] font-bold my-2">
                مشهد، بلوار احمد آباد، خیابان عارف، عارف 8، پلاک 25
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-2"
            dir="ltr"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-2 rounded-[8px]"
            >
              <CiYoutube color="#A0C498" size={20} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-2 rounded-[8px]"
            >
              <FaLinkedinIn color="#A0C498" size={20} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-2 rounded-[8px]"
            >
              <FaInstagram color="#A0C498" size={20} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-2 rounded-[8px]"
            >
              <PiTelegramLogoBold color="#A0C498" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="col-span-12 sm:col-span-6 sm:min-h-[100vh] my-20 sm:my-0"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center sm:items-center sm:min-h-[100vh]"
        >
          <motion.div
            variants={itemVariants}
            className="col-span-12 sm:col-span-6 w-[95%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]"
          >
            <motion.p
              variants={itemVariants}
              className="font-bold text-[32px] text-right"
            >
              تماس با ما
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-2 justify-left my-5"
            >
              <div className="h-[3px] w-64 bg-[#A0C498]"></div>
              <div className="h-[3px] w-10 bg-[#A0C498]"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-light text-[16px] text-right text-[#1E1E1E]"
            >
              پیام خود را بنویسید؛ کارشناسان ما در اسرع وقت با شما تماس خواهند
              گرفت.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10">
              <span className="text-[#1E1E1E] text-[16px] font-regular text-right">
                نام و نام خوانوادگی
              </span>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                placeholder="متن ورودی را بنویسید"
                className="w-[100%] bg-[#FEFCED] border-[1px] border-[#EBDFBE] text-[16px] font-light rounded-[8px] p-3 my-3 outline-none placeholder:text-[16px] placeholder:text-[#1E1E1ECC] font-light"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="my-5">
              <span className="text-[#1E1E1E] text-[16px] font-regular text-right">
                شماره تماس
              </span>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                placeholder="متن ورودی را بنویسید"
                className="w-[100%] bg-[#FEFCED] border-[1px] border-[#EBDFBE] text-[16px] font-light rounded-[8px] p-3 my-3 outline-none placeholder:text-[16px] placeholder:text-[#1E1E1ECC] font-light"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mt-5">
              <span className="text-[#1E1E1E] text-[16px] font-regular text-right">
                متن پیام
              </span>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows={4}
                placeholder="متن ورودی را بنویسید"
                className="w-[100%] bg-[#FEFCED] border-[1px] border-[#EBDFBE] text-[16px] font-light rounded-[8px] p-3 my-3 outline-none placeholder:text-[16px] placeholder:text-[#1E1E1ECC] font-light resize-none"
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-[100%] justify-center flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px]"
            >
              ارسال پیام
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-[95%] m-auto block sm:hidden"
        >
          <motion.div
            variants={itemVariants}
            className="flex gap-5 bg-[#FAF1D7] border-[#EBDFBE] border-[1px] px-5 py-4 rounded-[8px] my-4"
            dir="rtl"
          >
            <Image src={phonecall} alt="phonecall" className="object-contain" />
            <div>
              <p className="text-[#1E1E1E] text-[16px] font-regular my-2">
                شماره تماس:
              </p>
              <p className="text-[#1E1E1E] text-[16px] font-bold my-2">
                021 - 3365 6636
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-5 bg-[#FAF1D7] border-[#EBDFBE] border-[1px] px-5 py-4 rounded-[8px] my-4"
            dir="rtl"
          >
            <Image src={mail} alt="mail" className="object-contain" />
            <div>
              <p className="text-[#1E1E1E] text-[16px] font-regular my-2">
                ایمیل پشتیبانی:
              </p>
              <p className="text-[#1E1E1E] text-[16px] font-bold my-2">
                support@nahid-app.com
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-5 bg-[#FAF1D7] border-[#EBDFBE] border-[1px] px-5 py-4 rounded-[8px] my-4"
            dir="rtl"
          >
            <Image src={map} alt="map" className="object-contain" />
            <div>
              <p className="text-[#1E1E1E] text-[16px] font-regular my-2">
                آدرس دفتر:
              </p>
              <p className="text-[#1E1E1E] text-[16px] font-bold my-2">
                مشهد، بلوار احمد آباد، خیابان عارف، عارف 8، پلاک 25
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-2"
            dir="ltr"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-2 rounded-[8px]"
            >
              <CiYoutube color="#A0C498" size={20} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-2 rounded-[8px]"
            >
              <FaLinkedinIn color="#A0C498" size={20} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-2 rounded-[8px]"
            >
              <FaInstagram color="#A0C498" size={20} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-2 rounded-[8px]"
            >
              <PiTelegramLogoBold color="#A0C498" size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
