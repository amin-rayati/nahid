"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import banner1 from "@/public/img/banners/banner1.png";
import banner2 from "@/public/img/banners/banner2.png";
import banner3 from "@/public/img/banners/banner3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Advertise = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const totalSlides = 3;

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(1, 0);
    }
  }, []);

  return (
    <div className="mt-5 sm:mt-20 px-2 sm:px-4 py-4" dir="rtl">
      <div className="w-full">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setActiveIndex(swiper.activeIndex);
          }}
          className="mySwiper custom-coverflow-slider"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false} // Disable default pagination
          initialSlide={1}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide className="!w-[250px] sm:!w-[550px]">
            <Image
              className="w-full h-[250px] object-cover border-[2px] border-white rounded-[16px]"
              src={banner2}
              alt="banner2"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[250px] sm:!w-[550px]">
            <Image
              className="w-full h-[250px] object-cover border-[2px] border-white rounded-[16px]"
              src={banner1}
              alt="banner1"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[250px] sm:!w-[550px]">
            <Image
              className="w-full h-[250px] object-cover border-[2px] border-white rounded-[16px]"
              src={banner3}
              alt="banner3"
            />
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons with Dots */}
        <div className="flex items-center justify-center mt-5 gap-2">
          {/* Next Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isBeginning
                ? "bg-[#EDF3F6] cursor-not-allowed border-[1px] border-white opacity-40"
                : "bg-[#EDF3F6] cursor-pointer border-[1px] border-white hover:bg-[#EDF3F6]"
            }`}
            disabled={isBeginning}
          >
            <FaChevronRight
              color={isBeginning ? "#1F5D6A" : "#1F5D6A"}
              size={16}
            />
          </button>

          {/* Custom Pagination Dots */}
          <div className="flex items-center gap-2 mx-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#1F5D6A] scale-110 w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

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
    </div>
  );
};

export default Advertise;
