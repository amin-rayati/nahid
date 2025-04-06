"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import news1 from "@/public/img/news1.png";
import calender from "@/public/img/calendar.png";

const RelatedBlog = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto sm:my-12">
      <div
        className="flex flex-wrap items-center justify-between"
        style={{ direction: "rtl" }}
      >
        <p className="text-black text-[24px] font-bold">مقالات مرتبط</p>
        <div className="flex items-center gap-2">
          <p className="text-[#354259] text-[20px] font-fat">همه مقالات</p>
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

      <div className="relative">
        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full z-10 px-2">
          {/* Previous Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isBeginning
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#354259] cursor-pointer border-[1px] border-white"
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
                : "bg-[#354259] cursor-pointer border-[1px] border-white"
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
            480: { slidesPerView: 2.1, spaceBetween: 12 }, // Small tablets
            768: { slidesPerView: 2.5, spaceBetween: 12 }, // Tablets
            824: { slidesPerView: 3.5, spaceBetween: 17 }, // Small desktops
            1280: { slidesPerView: 3.5, spaceBetween: 17 }, // Large screens
          }}
        >
          <SwiperSlide>
            <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-5  hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
              <Image
                src={news1}
                alt="news1"
                className="rounded-[8px]"
                style={{ width: "-webkit-fill-available" }}
              />

              <div
                className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
                style={{ direction: "rtl" }}
              >
                <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
                  هنری و ادبی
                </button>
              </div>

              <div
                className="flex flex-wrap justify-between items-center my-2"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    1403/05/23
                  </p>
                  <Image src={calender} alt="calender" />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    2,350
                  </p>
                  <IoEyeOutline color="#A0C498" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#00000017]"></div>

              <p className="text-[20px] font-bold text-black text-right my-2">
                ناهید گلکار جشن امضا میگذارد
              </p>

              <p
                className="font-light text-[14px] leading-[25px] text-[#1E1E1ECC] text-justify "
                style={{ direction: "rtl" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-5  hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
              <Image
                src={news1}
                alt="news1"
                className="rounded-[8px]"
                style={{ width: "-webkit-fill-available" }}
              />

              <div
                className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
                style={{ direction: "rtl" }}
              >
                <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
                  هنری و ادبی
                </button>
              </div>

              <div
                className="flex flex-wrap justify-between items-center my-2"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    1403/05/23
                  </p>
                  <Image src={calender} alt="calender" />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    2,350
                  </p>
                  <IoEyeOutline color="#A0C498" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#00000017]"></div>

              <p className="text-[20px] font-bold text-black text-right my-2">
                ناهید گلکار جشن امضا میگذارد
              </p>

              <p
                className="font-light text-[14px] leading-[25px] text-[#1E1E1ECC] text-justify "
                style={{ direction: "rtl" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-5  hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
              <Image
                src={news1}
                alt="news1"
                className="rounded-[8px]"
                style={{ width: "-webkit-fill-available" }}
              />

              <div
                className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
                style={{ direction: "rtl" }}
              >
                <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
                  هنری و ادبی
                </button>
              </div>

              <div
                className="flex flex-wrap justify-between items-center my-2"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    1403/05/23
                  </p>
                  <Image src={calender} alt="calender" />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    2,350
                  </p>
                  <IoEyeOutline color="#A0C498" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#00000017]"></div>

              <p className="text-[20px] font-bold text-black text-right my-2">
                ناهید گلکار جشن امضا میگذارد
              </p>

              <p
                className="font-light text-[14px] leading-[25px] text-[#1E1E1ECC] text-justify "
                style={{ direction: "rtl" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-5  hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
              <Image
                src={news1}
                alt="news1"
                className="rounded-[8px]"
                style={{ width: "-webkit-fill-available" }}
              />

              <div
                className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
                style={{ direction: "rtl" }}
              >
                <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
                  هنری و ادبی
                </button>
              </div>

              <div
                className="flex flex-wrap justify-between items-center my-2"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    1403/05/23
                  </p>
                  <Image src={calender} alt="calender" />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    2,350
                  </p>
                  <IoEyeOutline color="#A0C498" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#00000017]"></div>

              <p className="text-[20px] font-bold text-black text-right my-2">
                ناهید گلکار جشن امضا میگذارد
              </p>

              <p
                className="font-light text-[14px] leading-[25px] text-[#1E1E1ECC] text-justify "
                style={{ direction: "rtl" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-5  hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
              <Image
                src={news1}
                alt="news1"
                className="rounded-[8px]"
                style={{ width: "-webkit-fill-available" }}
              />

              <div
                className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
                style={{ direction: "rtl" }}
              >
                <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
                  هنری و ادبی
                </button>
              </div>

              <div
                className="flex flex-wrap justify-between items-center my-2"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    1403/05/23
                  </p>
                  <Image src={calender} alt="calender" />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    2,350
                  </p>
                  <IoEyeOutline color="#A0C498" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#00000017]"></div>

              <p className="text-[20px] font-bold text-black text-right my-2">
                ناهید گلکار جشن امضا میگذارد
              </p>

              <p
                className="font-light text-[14px] leading-[25px] text-[#1E1E1ECC] text-justify "
                style={{ direction: "rtl" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-5  hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
              <Image
                src={news1}
                alt="news1"
                className="rounded-[8px]"
                style={{ width: "-webkit-fill-available" }}
              />

              <div
                className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
                style={{ direction: "rtl" }}
              >
                <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
                  هنری و ادبی
                </button>
              </div>

              <div
                className="flex flex-wrap justify-between items-center my-2"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    1403/05/23
                  </p>
                  <Image src={calender} alt="calender" />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    2,350
                  </p>
                  <IoEyeOutline color="#A0C498" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#00000017]"></div>

              <p className="text-[20px] font-bold text-black text-right my-2">
                ناهید گلکار جشن امضا میگذارد
              </p>

              <p
                className="font-light text-[14px] leading-[25px] text-[#1E1E1ECC] text-justify "
                style={{ direction: "rtl" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-5  hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
              <Image
                src={news1}
                alt="news1"
                className="rounded-[8px]"
                style={{ width: "-webkit-fill-available" }}
              />

              <div
                className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
                style={{ direction: "rtl" }}
              >
                <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
                  هنری و ادبی
                </button>
              </div>

              <div
                className="flex flex-wrap justify-between items-center my-2"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    1403/05/23
                  </p>
                  <Image src={calender} alt="calender" />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-[#354259] font-regular text-[14px]">
                    2,350
                  </p>
                  <IoEyeOutline color="#A0C498" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#00000017]"></div>

              <p className="text-[20px] font-bold text-black text-right my-2">
                ناهید گلکار جشن امضا میگذارد
              </p>

              <p
                className="font-light text-[14px] leading-[25px] text-[#1E1E1ECC] text-justify "
                style={{ direction: "rtl" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedBlog;
