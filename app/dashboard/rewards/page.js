"use client";
import React from "react";
import Image from "next/image";
import Menu from "@/components/Dashboard/Menu";
import Reward from "@/components/Dashboard/Reward";
import cup from "@/public/img/cup.png";
import hugging from "@/public/img/hugging.png";
import direction from "@/public/img/direction.png";
import ribbon from "@/public/img/ribbon.png";
import gift from "@/public/img/gift.png";
import { FaAngleLeft } from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
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
        className="grid grid-cols-12 gap-2 sm:gap-5"
        dir="rtl"
      >
        {/* menu */}
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <Menu active="rewards" />
        </div>

        {/* dashboard */}
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-8 lg:col-span-9"
        >
          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-4 flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-[100%] sm:w-[50%]">
              <Image src={cup} alt="cup" className="m-auto" />
              <div>
                <p className="text-[#FF7F5B] text-[36px] font-heavy">
                  ناهید کلاب
                </p>
                <p className="text-[#1E1E1E] font-regular text-[20px]">
                  به باشگاه مشتریان ناهید خوش آمدید. از اینجا دست خالی بیرون
                  نمیری!
                </p>
              </div>
            </div>
            <div className="w-[100%] sm:w-[45%]">
              <Reward />
            </div>
          </div>
          <div className="grid grid-cols-12 my-5 gap-2">
            <div className="col-span-12 lg:col-span-6 flex flex-col">
              <div className="h-full bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] py-6 px-4 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={hugging} alt="hugging" />
                  <p className="text-[#1E1E1E] text-[15px] sm:text-[20px] font-bold">
                    معرفی به دوستان
                  </p>
                </div>
                <div className="flex gap-2 items-center bg-[#FF7F5B] border-[1px] border-[#EBDFBE] rounded-[8px] px-5 py-2 text-center">
                  <p className="text-[20px] font-bold text-[#ffffff]">2525</p>
                  <RiShareLine color="white" />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 flex flex-col">
              <div className="h-full bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] py-6 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={direction} alt="direction" />
                  <p className="text-[#1E1E1E] text-[15px] sm:text-[20px] font-bold">
                    راهنمای دریافت امتیاز
                  </p>
                </div>
                <FaAngleLeft color="#354259" />
              </div>
            </div>
          </div>
          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-4 rounded-[16px]">
            {/* status */}

            <div className="flex gap-2">
              <Image src={gift} alt="gift" />
              <p className="text-[#1E1E1E] text-[20px] font-regular">
                جوایز ویژه
              </p>
            </div>

            <Swiper
              className="mt-5"
              spaceBetween={20}
              slidesPerView={4.5}
              breakpoints={{
                150: { slidesPerView: 1, spaceBetween: 8 }, // Mobilesm
                320: { slidesPerView: 1, spaceBetween: 8 }, // Mobile
                480: { slidesPerView: 2.2, spaceBetween: 12 }, // Small tablets
                768: { slidesPerView: 2.5, spaceBetween: 12 }, // Tablets
                824: { slidesPerView: 2.5, spaceBetween: 17 }, // Small desktops
                1280: { slidesPerView: 4.5, spaceBetween: 17 }, // Large screens
              }}
            >
              <SwiperSlide>
                <div className="bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[16px] p-3">
                  <div className="bg-[#A0C498] rounded-[8px] flex justify-center p-4">
                    <Image src={ribbon} alt="ribbon" />
                  </div>
                  <p className="text-[16px] font-bold my-3">
                    10 روز اشتراک ویژه
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-regular">امتیاز لازم:</p>
                    <div className="border-[1px] border-[#FF7F5B] px-2 py-1 rounded-[8px]">
                      5,000
                    </div>
                  </div>
                  <button className="bg-[#354259] rounded-[8px] w-full text-[#ffffff] text-center p-2 my-2">
                    دریافت
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[16px] p-3">
                  <div className="bg-[#A0C498] rounded-[8px] flex justify-center p-4">
                    <Image src={ribbon} alt="ribbon" />
                  </div>
                  <p className="text-[16px] font-bold my-3">
                    10 روز اشتراک ویژه
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-regular">امتیاز لازم:</p>
                    <div className="border-[1px] border-[#FF7F5B] px-2 py-1 rounded-[8px]">
                      5,000
                    </div>
                  </div>
                  <button className="bg-[#354259] rounded-[8px] w-full text-[#ffffff] text-center p-2 my-2">
                    دریافت
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[16px] p-3">
                  <div className="bg-[#A0C498] rounded-[8px] flex justify-center p-4">
                    <Image src={ribbon} alt="ribbon" />
                  </div>
                  <p className="text-[16px] font-bold my-3">
                    10 روز اشتراک ویژه
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-regular">امتیاز لازم:</p>
                    <div className="border-[1px] border-[#FF7F5B] px-2 py-1 rounded-[8px]">
                      5,000
                    </div>
                  </div>
                  <button className="bg-[#354259] rounded-[8px] w-full text-[#ffffff] text-center p-2 my-2">
                    دریافت
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[16px] p-3">
                  <div className="bg-[#A0C498] rounded-[8px] flex justify-center p-4">
                    <Image src={ribbon} alt="ribbon" />
                  </div>
                  <p className="text-[16px] font-bold my-3">
                    10 روز اشتراک ویژه
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-regular">امتیاز لازم:</p>
                    <div className="border-[1px] border-[#FF7F5B] px-2 py-1 rounded-[8px]">
                      5,000
                    </div>
                  </div>
                  <button className="bg-[#354259] rounded-[8px] w-full text-[#ffffff] text-center p-2 my-2">
                    دریافت
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[16px] p-3">
                  <div className="bg-[#A0C498] rounded-[8px] flex justify-center p-4">
                    <Image src={ribbon} alt="ribbon" />
                  </div>
                  <p className="text-[16px] font-bold my-3">
                    10 روز اشتراک ویژه
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-regular">امتیاز لازم:</p>
                    <div className="border-[1px] border-[#FF7F5B] px-2 py-1 rounded-[8px]">
                      5,000
                    </div>
                  </div>
                  <button className="bg-[#354259] rounded-[8px] w-full text-[#ffffff] text-center p-2 my-2">
                    دریافت
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[16px] p-3">
                  <div className="bg-[#A0C498] rounded-[8px] flex justify-center p-4">
                    <Image src={ribbon} alt="ribbon" />
                  </div>
                  <p className="text-[16px] font-bold my-3">
                    10 روز اشتراک ویژه
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-regular">امتیاز لازم:</p>
                    <div className="border-[1px] border-[#FF7F5B] px-2 py-1 rounded-[8px]">
                      5,000
                    </div>
                  </div>
                  <button className="bg-[#354259] rounded-[8px] w-full text-[#ffffff] text-center p-2 my-2">
                    دریافت
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
