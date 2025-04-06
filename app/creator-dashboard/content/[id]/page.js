"use client";
import React from "react";
import Image from "next/image";
import book1 from "@/public/img/book1.png";
import likes from "@/public/img/likes.png";
import views from "@/public/img/views.png";
import comments from "@/public/img/comments.png";
import playlist from "@/public/img/playlist.png";
import Chart from "@/components/CreatorDashboard/Content/Chart";
import { FaPlus } from "react-icons/fa6";
import eye from "@/public/img/eye.png";
import message from "@/public/img/message.png";
import heart1 from "@/public/img/heart1.png";
import { FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const viewsData = [
    { day: "شنبه", value: 450 },
    { day: "یکشنبه", value: 320 },
    { day: "دوشنبه", value: 580 },
    { day: "سه‌شنبه", value: 250 },
    { day: "چهارشنبه", value: 400 },
    { day: "پنج‌شنبه", value: 350 },
    { day: "جمعه", value: 200 },
  ];

  const likesData = [
    { day: "شنبه", value: 150 },
    { day: "یکشنبه", value: 220 },
    { day: "دوشنبه", value: 280 },
    { day: "سه‌شنبه", value: 150 },
    { day: "چهارشنبه", value: 300 },
    { day: "پنج‌شنبه", value: 250 },
    { day: "جمعه", value: 100 },
  ];

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
        {/* rightSide */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          {/* boxes */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 sm:col-span-7 bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 rounded-[16px] flex flex-wrap items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={book1}
                  alt="book1"
                  className="w-[66px] h-[66px] rounded-[8px] object-cover"
                />
                <p className="text-[#1E1E1E] text-[20px] font-bold">نقره</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[#1E1E1E] text-[20px] font-bold">25</p>
                <p className="text-[#1E1E1E] text-[20px] font-regular">قسمت</p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-5 bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 rounded-[16px] flex flex-wrap items-center">
              <div className="flex items-center gap-2">
                <Image src={likes} alt="likes" />
                <p className="text-[#1E1E1E] text-[20px] font-bold">5،620</p>
                <p className="text-[#1E1E1E] text-[20px] font-regular">پسند</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 my-2">
            <div className="col-span-12 sm:col-span-7 bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 rounded-[16px] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Image src={comments} alt="comments" />
                <div className="flex items-center gap-2">
                  <p className="text-[#1E1E1E] text-[20px] font-bold">14,500</p>
                  <p className="text-[#1E1E1E] text-[20px] font-regular">
                    دیدگاه
                  </p>
                </div>
              </div>
              <Link
                href="/creator-dashboard/comments"
                className="text-white text-center text-[16px] font-bold p-3 bg-[#354259] rounded-[8px]"
              >
                مشاهده نظرها
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-5 bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 rounded-[16px] flex flex-wrap items-center">
              <div className="flex items-center gap-2">
                <Image src={views} alt="views" />
                <p className="text-[#1E1E1E] text-[20px] font-bold">5،620</p>
                <p className="text-[#1E1E1E] text-[20px] font-regular">
                  بازدید
                </p>
              </div>
            </div>
          </div>

          {/* chart */}
          <Chart viewsData={viewsData} likesData={likesData} />
        </div>
        {/* leftSide */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3">
            <div className="flex gap-2 flex-wrap justify-between items-center">
              <div className="flex items-center gap-2">
                <Image src={playlist} alt="playlist" />
                <p className="text-[#1E1E1E] text-[20px] font-regular">
                  قسمت‌ها
                </p>
              </div>
              <button className="flex items-center justify-center gap-1 bg-[#354259] border-[2px] border-[#354259] rounded-[8px] p-3">
                <FaPlus color="white" />
                <p className="text-white text-[16px] font-bold">قسمت جدید</p>
              </button>
            </div>
            <div className="flex flex-wrap justify-between items-center my-5 gap-2">
              <p className="text-[#1E1E1E] text-[16px] font-regular">25 قسمت</p>

              <div className="flex items-center gap-2">
                <p className="text-[#1E1E1ECC] text-[16px] font-regular">
                  قدیم به جدید
                </p>{" "}
                <div className="w-[1px] h-5 bg-[#354259]"></div>
                <p className="text-[#354259] text-[16px] font-bold">
                  جدید به قدیم
                </p>
              </div>
            </div>

            <div
              className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[8px] p-2 flex flex-wrap sm:flex-nowrap gap-2 items-center my-2"
              dir="rtl"
            >
              <div className="w-16 h-16 bg-[#A0C498] rounded-[8px] flex items-center justify-center">
                <p className="text-[20px] font-bold text-[#354259]">1</p>
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center">
                  <p className="text-[#000000] font-bold text-[16px]">
                    قسمت اول
                  </p>
                  <div className="bg-[#A0C49833] p-2 rounded-[8px] text-center text-[#354259] text-[14px] font-regular">
                    منتشر شده
                  </div>
                </div>
                <div
                  className="flex  justify-between items-center my-2"
                  style={{ direction: "rtl" }}
                >
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      2,350
                    </p>
                    <Image
                      className="mb-1"
                      src={eye}
                      alt="eye"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      235
                    </p>
                    <Image
                      className="mb-1"
                      src={heart1}
                      alt="heart1"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      850
                    </p>
                    <Image
                      className="mb-1"
                      src={message}
                      alt="message"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>

              <FaChevronLeft color="#354259" />
            </div>
            <div
              className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[8px] p-2 flex flex-wrap sm:flex-nowrap gap-2 items-center my-2"
              dir="rtl"
            >
              <div className="w-16 h-16 bg-[#A0C498] rounded-[8px] flex items-center justify-center">
                <p className="text-[20px] font-bold text-[#354259]">1</p>
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center">
                  <p className="text-[#000000] font-bold text-[16px]">
                    قسمت اول
                  </p>
                  <div className="bg-[#A0C49833] p-2 rounded-[8px] text-center text-[#354259] text-[14px] font-regular">
                    منتشر شده
                  </div>
                </div>
                <div
                  className="flex  justify-between items-center my-2"
                  style={{ direction: "rtl" }}
                >
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      2,350
                    </p>
                    <Image
                      className="mb-1"
                      src={eye}
                      alt="eye"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      235
                    </p>
                    <Image
                      className="mb-1"
                      src={heart1}
                      alt="heart1"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      850
                    </p>
                    <Image
                      className="mb-1"
                      src={message}
                      alt="message"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>

              <FaChevronLeft color="#354259" />
            </div>
            <div
              className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[8px] p-2 flex flex-wrap sm:flex-nowrap gap-2 items-center my-2"
              dir="rtl"
            >
              <div className="w-16 h-16 bg-[#A0C498] rounded-[8px] flex items-center justify-center">
                <p className="text-[20px] font-bold text-[#354259]">1</p>
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center">
                  <p className="text-[#000000] font-bold text-[16px]">
                    قسمت اول
                  </p>
                  <div className="bg-[#A0C49833] p-2 rounded-[8px] text-center text-[#354259] text-[14px] font-regular">
                    منتشر شده
                  </div>
                </div>
                <div
                  className="flex  justify-between items-center my-2"
                  style={{ direction: "rtl" }}
                >
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      2,350
                    </p>
                    <Image
                      className="mb-1"
                      src={eye}
                      alt="eye"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      235
                    </p>
                    <Image
                      className="mb-1"
                      src={heart1}
                      alt="heart1"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      850
                    </p>
                    <Image
                      className="mb-1"
                      src={message}
                      alt="message"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>

              <FaChevronLeft color="#354259" />
            </div>
            <div
              className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[8px] p-2 flex flex-wrap sm:flex-nowrap gap-2 items-center my-2"
              dir="rtl"
            >
              <div className="w-16 h-16 bg-[#A0C498] rounded-[8px] flex items-center justify-center">
                <p className="text-[20px] font-bold text-[#354259]">1</p>
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center">
                  <p className="text-[#000000] font-bold text-[16px]">
                    قسمت اول
                  </p>
                  <div className="bg-[#A0C49833] p-2 rounded-[8px] text-center text-[#354259] text-[14px] font-regular">
                    منتشر شده
                  </div>
                </div>
                <div
                  className="flex  justify-between items-center my-2"
                  style={{ direction: "rtl" }}
                >
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      2,350
                    </p>
                    <Image
                      className="mb-1"
                      src={eye}
                      alt="eye"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      235
                    </p>
                    <Image
                      className="mb-1"
                      src={heart1}
                      alt="heart1"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      850
                    </p>
                    <Image
                      className="mb-1"
                      src={message}
                      alt="message"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>

              <FaChevronLeft color="#354259" />
            </div>
            <div
              className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[8px] p-2 flex flex-wrap sm:flex-nowrap gap-2 items-center my-2"
              dir="rtl"
            >
              <div className="w-16 h-16 bg-[#A0C498] rounded-[8px] flex items-center justify-center">
                <p className="text-[20px] font-bold text-[#354259]">1</p>
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center">
                  <p className="text-[#000000] font-bold text-[16px]">
                    قسمت اول
                  </p>
                  <div className="bg-[#A0C49833] p-2 rounded-[8px] text-center text-[#354259] text-[14px] font-regular">
                    منتشر شده
                  </div>
                </div>
                <div
                  className="flex  justify-between items-center my-2"
                  style={{ direction: "rtl" }}
                >
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      2,350
                    </p>
                    <Image
                      className="mb-1"
                      src={eye}
                      alt="eye"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      235
                    </p>
                    <Image
                      className="mb-1"
                      src={heart1}
                      alt="heart1"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1E1E] font-regular text-[14px]">
                      850
                    </p>
                    <Image
                      className="mb-1"
                      src={message}
                      alt="message"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>

              <FaChevronLeft color="#354259" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
