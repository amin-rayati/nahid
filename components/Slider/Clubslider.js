"use client";

import React, { useState, useRef } from "react";
import ClubCard from "../Club/ClubCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import club1 from "@/public/img/club1.png";
import club2 from "@/public/img/club2.png";
import club3 from "@/public/img/club3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ClubSlider = ({ title }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div dir="rtl">
      <div
        className="flex flex-wrap items-center justify-between"
        style={{ direction: "rtl" }}
      >
        <p className="text-[#1E1E1E] text-[20px] font-bold">{title}</p>
      </div>

      <div
        className="flex flex-wrap items-center justify-between gap-2"
        style={{ direction: "rtl" }}
      >
        <div className="flex gap-2 justify-left mt-2">
          <div className="h-[1.5px] w-48 bg-[#1F5D6A]"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
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
      </div>

      <div className="relative mt-2">
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
            824: { slidesPerView: 3, spaceBetween: 17 }, // Small desktops
            1280: { slidesPerView: 3, spaceBetween: 17 }, // Large screens
          }}
        >
          <SwiperSlide className="mt-2">
            <ClubCard pic={club1} />
          </SwiperSlide>
          <SwiperSlide className="mt-2">
            <ClubCard pic={club2} />
          </SwiperSlide>{" "}
          <SwiperSlide className="mt-2">
            <ClubCard pic={club3} />
          </SwiperSlide>{" "}
          <SwiperSlide className="mt-2">
            <ClubCard pic={club1} />
          </SwiperSlide>{" "}
          <SwiperSlide className="mt-2">
            <ClubCard pic={club2} />
          </SwiperSlide>{" "}
          <SwiperSlide className="mt-2">
            <ClubCard pic={club3} />
          </SwiperSlide>{" "}
          <SwiperSlide className="mt-2">
            <ClubCard pic={club1} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClubSlider;
