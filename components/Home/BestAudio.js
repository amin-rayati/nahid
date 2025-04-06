"use client";
import React, { useState, useRef } from "react";
import StoryCard from "../Stories/StoryCard";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BestAudio = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto sm:my-12">
      <div
        className="flex flex-wrap items-center justify-between"
        style={{ direction: "rtl" }}
      >
        <p className="text-black text-[24px] font-bold">بهترین کتاب‌های صوتی</p>
        <div className="flex items-center gap-2">
          <p className="text-[#354259] text-[20px] font-fat">
            همه کتاب‌های صوتی
          </p>
          <FaArrowLeft color="#354259" size={20} />
        </div>
      </div>
      <div className="flex gap-2 justify-end my-5">
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
        <div className="h-[3px] w-64 bg-[#A0C498]"></div>
      </div>
      <p className="text-black text-[16px] font-light text-right">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>

      <div className="relative mt-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full z-10 px-2">
          {/* Previous Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isBeginning
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#354259] cursor-pointer border-[1px] border-white hover:bg-[#2a3547]"
            }`}
            disabled={isBeginning}
          >
            <FaArrowLeft color={isBeginning ? "#999" : "#fff"} size={16} />
          </button>

          {/* Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isEnd
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#354259] cursor-pointer border-[1px] border-white hover:bg-[#2a3547]"
            }`}
            disabled={isEnd}
          >
            <FaArrowRight color={isEnd ? "#999" : "#fff"} size={16} />
          </button>
        </div>

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
            320: { slidesPerView: 1, spaceBetween: 8 }, // Mobile
            480: { slidesPerView: 2.2, spaceBetween: 12 }, // Small tablets
            768: { slidesPerView: 3.5, spaceBetween: 12 }, // Tablets
            824: { slidesPerView: 4.5, spaceBetween: 17 }, // Small desktops
            1280: { slidesPerView: 4.5, spaceBetween: 17 }, // Large screens
          }}
        >
          <SwiperSlide className="my-5 ">
            <StoryCard />
          </SwiperSlide>
          <SwiperSlide className="my-5 ">
            <StoryCard />
          </SwiperSlide>
          <SwiperSlide className="my-5 ">
            <StoryCard />
          </SwiperSlide>
          <SwiperSlide className="my-5 ">
            <StoryCard />
          </SwiperSlide>
          <SwiperSlide className="my-5 ">
            <StoryCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestAudio;
