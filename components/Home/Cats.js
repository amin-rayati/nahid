"use client";
import React from "react";

import Image from "next/image";

import cat1 from "@/public/img/cat1.png";
import cat2 from "@/public/img/cat2.png";
import cat3 from "@/public/img/cat3.png";
import cat4 from "@/public/img/cat4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Cats = () => {
  return (
    <>
      <div className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto">
        <div className="w-[100%] md:w-[80%] m-auto">
          <Swiper
            spaceBetween={20}
            slidesPerView={5.5}
            breakpoints={{
              150: { slidesPerView: 1, spaceBetween: 10 }, // Mobilesm
              320: { slidesPerView: 1.5, spaceBetween: 10 }, // Mobile
              480: { slidesPerView: 2.5, spaceBetween: 15 }, // Small tablets
              768: { slidesPerView: 3.5, spaceBetween: 15 }, // Tablets
              1024: { slidesPerView: 4, spaceBetween: 20 }, // Small desktops
              1280: { slidesPerView: 4, spaceBetween: 20 }, // Large screens
            }}
          >
            <SwiperSlide>
              <div className="flex bg-[#FAF1D7] rounded-[16px] py-5 border-[1px] border-[#EBDFBE] items-center justify-center gap-3">
                <p className="text-[#354259] font-bold text-[20px]">اشعار</p>
                <Image src={cat1} alt="cat1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-[#FAF1D7] rounded-[16px] py-5 border-[1px] border-[#EBDFBE] items-center justify-center gap-3">
                <p className="text-[#354259] font-bold text-[20px]">کتاب‌ها</p>
                <Image src={cat2} alt="cat2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-[#FAF1D7] rounded-[16px] py-5 border-[1px] border-[#EBDFBE] items-center justify-center gap-3">
                <p className="text-[#354259] font-bold text-[20px]">
                  کتاب صوتی
                </p>
                <Image src={cat3} alt="cat3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-[#FAF1D7] rounded-[16px] py-5 border-[1px] border-[#EBDFBE] items-center justify-center gap-3">
                <p className="text-[#354259] font-bold text-[20px]">
                  داستان‌ها
                </p>
                <Image src={cat4} alt="cat4" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Cats;
