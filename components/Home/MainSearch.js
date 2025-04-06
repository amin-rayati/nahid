"use client";
import React from "react";
import Image from "next/image";
import mainSearchBack from "@/public/img/mainSearchBack.png";
import se1 from "@/public/img/se1.png";
import se2 from "@/public/img/se2.png";
import se3 from "@/public/img/se3.png";
import se4 from "@/public/img/se4.png";
import se5 from "@/public/img/se5.png";
import se6 from "@/public/img/se6.png";
import { CiSearch } from "react-icons/ci";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainSearch = () => {
  return (
    <div className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto">
      <div
        className="responsive-bg flex flex-col items-center justify-center mt-10 sm:mb-10"
        style={{ backgroundImage: `url(${mainSearchBack.src})` }}
      >
        <div className="bg-[#FAF1D7] rounded-[16px] border-[1px] border-[#EBDFBE] px-3 sm:px-10 py-5 w-[100%] md:w-[65%]">
          <div className="relative w-full">
            <input
              placeholder="جستجوی داستان..."
              className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 pr-12 text-right placeholder:text-black placeholder:sm:text-[16px] placeholder:sm:font-light placeholder:text-[10px]"
              style={{ direction: "rtl", paddingLeft: "100px" }}
            />

            <CiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              size={25}
              color="#354259"
            />

            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#354259] px-4 py-2 text-white text-[16px] font-bold rounded-[8px]">
              جستجو
            </button>
          </div>

          <Swiper
            className="mt-10"
            spaceBetween={20}
            slidesPerView={5.5}
            breakpoints={{
              150: { slidesPerView: 2, spaceBetween: 10 }, // Mobilesm
              320: { slidesPerView: 3.5, spaceBetween: 10 }, // Mobile
              480: { slidesPerView: 4.5, spaceBetween: 15 }, // Small tablets
              768: { slidesPerView: 4.5, spaceBetween: 15 }, // Tablets
              1024: { slidesPerView: 6, spaceBetween: 20 }, // Small desktops
              1280: { slidesPerView: 6, spaceBetween: 20 }, // Large screens
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col">
                <Image src={se1} alt="se1" />
                <p className="text-[#1E1E1E] text-[16px] font-bold my-3 text-center">
                  نقره
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <Image src={se2} alt="se2" />
                <p className="text-[#1E1E1E] text-[16px] font-bold my-3 text-center">
                  نقره
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <Image src={se3} alt="se3" />
                <p className="text-[#1E1E1E] text-[16px] font-bold my-3 text-center">
                  نقره
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <Image src={se4} alt="se4" />
                <p className="text-[#1E1E1E] text-[16px] font-bold my-3 text-center">
                  نقره
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <Image src={se5} alt="se5" />
                <p className="text-[#1E1E1E] text-[16px] font-bold my-3 text-center">
                  نقره
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <Image src={se6} alt="se6" />
                <p className="text-[#1E1E1E] text-[16px] font-bold my-3 text-center">
                  نقره
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MainSearch;
