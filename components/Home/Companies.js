"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import company1 from "@/public/img/company1.png";
import company2 from "@/public/img/company2.png";
import company3 from "@/public/img/company3.png";
import user2 from "@/public/img/icons/user2.png";

import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Companies = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="mt-5 sm:mt-20 px-2 sm:px-4 py-4" dir="rtl">
      {/* Navigation Buttons */}
      <div className="flex items-center justify-end gap-2">
        {/* Next Button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isBeginning
              ? "bg-[#EDF3F6] cursor-not-allowed border-[1px] border-white opacity-40"
              : "bg-[#EDF3F6] cursor-pointer border-[1px] border-white  hover:bg-[#EDF3F6]"
          }`}
          disabled={isBeginning}
        >
          <FaChevronRight
            color={isBeginning ? "#1F5D6A" : "#1F5D6A"}
            size={16}
          />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isEnd
              ? "bg-[#EDF3F6] cursor-not-allowed border-[1px] border-white opacity-40"
              : "bg-[#EDF3F6] cursor-pointer border-[1px] border-white hover:bg-[#EDF3F6]"
          }`}
          disabled={isEnd}
        >
          <FaChevronLeft color={isEnd ? "#1F5D6A" : "#1F5D6A"} size={16} />
        </button>
      </div>
      <div
        className="bg-[#1F5D6A] rounded-[16px] p-4 grid grid-cols-12 mt-2"
        dir="rtl"
      >
        <Link
          href="/shop"
          className="col-span-12 md:col-span-4 lg:col-span-2 flex flex-col justify-center items-center text-center my-3 mt:my-0"
        >
          <Image src={user2} alt="user2" />
          <p className="text-white text-[20px] font-bold mt-2">
            شرکت‌های همکار
          </p>
        </Link>
        <div className="col-span-12 md:col-span-8 lg:col-span-10 relative my-3 mt:my-0">
          <Swiper
            spaceBetween={20}
            slidesPerView={5.5}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              150: { slidesPerView: 1, spaceBetween: 8 }, // Mobilesm
              320: { slidesPerView: 2, spaceBetween: 8 }, // Mobile
              480: { slidesPerView: 3, spaceBetween: 12 }, // Small tablets
              768: { slidesPerView: 3, spaceBetween: 12 }, // Tablets
              824: { slidesPerView: 3.5, spaceBetween: 12 }, // Small desktops
              1025: { slidesPerView: 4.5, spaceBetween: 12 }, // Small desktops
              1280: { slidesPerView: 6, spaceBetween: 12 }, // Large screens
              1400: { slidesPerView: 7, spaceBetween: 12 }, // extra Large screens
            }}
          >
            <SwiperSlide>
              <Link href="/shop/نقاشی">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px] sm:h-[175px]">
                  <Image
                    src={company1}
                    alt="company1"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه نقاشی
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/مک دونالد">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px]  sm:h-[175px]">
                  <Image
                    src={company2}
                    alt="company2"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه مک دونالد
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/تکنو">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px]  sm:h-[175px]">
                  <Image
                    src={company3}
                    alt="company3"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه تکنو
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/نقاشی">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px] sm:h-[175px]">
                  <Image
                    src={company1}
                    alt="company1"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه نقاشی
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/مک دونالد">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px]  sm:h-[175px]">
                  <Image
                    src={company2}
                    alt="company2"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه مک دونالد
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/تکنو">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px]  sm:h-[175px]">
                  <Image
                    src={company3}
                    alt="company3"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه تکنو
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/نقاشی">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px] sm:h-[175px]">
                  <Image
                    src={company1}
                    alt="company1"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه نقاشی
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/مک دونالد">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px]  sm:h-[175px]">
                  <Image
                    src={company2}
                    alt="company2"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه مک دونالد
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/تکنو">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px]  sm:h-[175px]">
                  <Image
                    src={company3}
                    alt="company3"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه تکنو
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/نقاشی">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px] sm:h-[175px]">
                  <Image
                    src={company1}
                    alt="company1"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه نقاشی
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/مک دونالد">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px]  sm:h-[175px]">
                  <Image
                    src={company2}
                    alt="company2"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه مک دونالد
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shop/تکنو">
                <div className="bg-[#E9EFF0] p-2 rounded-[12px]  sm:h-[175px]">
                  <Image
                    src={company3}
                    alt="company3"
                    className="w-full  h-[125px] rounded-[12px] m-auto object-cover"
                  />
                  <p className="mt-2 text-[#1E1E1E] text-[14px] font-bold text-center">
                    فروشگاه تکنو
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Companies;
