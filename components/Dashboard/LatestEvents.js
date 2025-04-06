"use client";
import React from "react";
import Image from "next/image";

import deadline from "@/public/img/deadline.png";
import event1 from "@/public/img/event1.png";
import calendarsingle from "@/public/img/calendarsingle.png";
import users from "@/public/img/users.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LatestEvents = () => {
  return (
    <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-4 rounded-[16px]">
      {/* status */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
          <Image src={deadline} alt="deadline" />
          <p className="text-[#1E1E1E] text-[20px] font-regular">
            آخرین رویدادها
          </p>
        </div>
        <button className="border-[2px] border-[#354259] rounded-[8px] text-[#354259] text-[16px] font-bold p-2">
          مشاهده همه
        </button>
      </div>

      <Swiper
        className="mt-5"
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          150: { slidesPerView: 1, spaceBetween: 8 }, // Mobilesm
          320: { slidesPerView: 1, spaceBetween: 8 }, // Mobile
          480: { slidesPerView: 1.5, spaceBetween: 12 }, // Small tablets
        }}
      >
        <SwiperSlide>
          <div className="bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[16px] p-3 ">
            <Image
              src={event1}
              alt="event1"
              className="rounded-[8px]"
              style={{
                width: "-webkit-fill-available",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <p className="text-[16px] font-bold my-3">رویداد خرید کتاب</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image src={users} alt="users" className="mb-1" />
                <div className="flex items-center gap-1">
                  <p className="text-[#1E1E1E] font-bold text-[16px]">2500</p>
                  <p className="text-[#1E1E1E] font-regular text-[12px]">نفر</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src={calendarsingle}
                  alt="calendarsingle"
                  className="mb-1"
                />
                <div className="flex items-center gap-1">
                  <p className="text-[#1E1E1E] font-regular text-[12px]">تا</p>
                  <p className="text-[#1E1E1E] font-bold text-[16px]">07/25</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[16px] p-3">
            <Image
              src={event1}
              alt="event1"
              className="rounded-[8px]"
              style={{
                width: "-webkit-fill-available",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <p className="text-[16px] font-bold my-3">رویداد خرید کتاب</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image src={users} alt="users" className="mb-1" />
                <div className="flex items-center gap-1">
                  <p className="text-[#1E1E1E] font-bold text-[16px]">2500</p>
                  <p className="text-[#1E1E1E] font-regular text-[12px]">نفر</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src={calendarsingle}
                  alt="calendarsingle"
                  className="mb-1"
                />
                <div className="flex items-center gap-1">
                  <p className="text-[#1E1E1E] font-regular text-[12px]">تا</p>
                  <p className="text-[#1E1E1E] font-bold text-[16px]">07/25</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[16px] p-3">
            <Image
              src={event1}
              alt="event1"
              className="rounded-[8px]"
              style={{
                width: "-webkit-fill-available",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <p className="text-[16px] font-bold my-3">رویداد خرید کتاب</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image src={users} alt="users" className="mb-1" />
                <div className="flex items-center gap-1">
                  <p className="text-[#1E1E1E] font-bold text-[16px]">2500</p>
                  <p className="text-[#1E1E1E] font-regular text-[12px]">نفر</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src={calendarsingle}
                  alt="calendarsingle"
                  className="mb-1"
                />
                <div className="flex items-center gap-1">
                  <p className="text-[#1E1E1E] font-regular text-[12px]">تا</p>
                  <p className="text-[#1E1E1E] font-bold text-[16px]">07/25</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LatestEvents;
