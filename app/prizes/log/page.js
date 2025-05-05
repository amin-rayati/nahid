"use client";
import React, { useState } from "react";
import Image from "next/image";

import medal from "@/public/img/medal.png";
import dis from "@/public/img/dis.png";
import cup from "@/public/img/cup.png";
import coin2 from "@/public/img/icons/coin2.png";
import Link from "next/link";

const Page = () => {
  return (
    <div
      className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl my-20 p-4"
      dir="rtl"
    >
      <p className="text-[#1E1E1E] text-[24px] font-bold">تاریخچه امتیازات</p>
      <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>
      <div className="w-full overflow-x-auto" dir="rtl">
        <div className="min-w-[768px]">
          <div className="min-w-[768px] rounded-[16px] overflow-hidden border border-[#EDF3F6]">
            {/* Table Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#EDF3F6] border-[1px] border-[#FFFFFF]">
              <p className="w-[10%] text-right text-[#0F1419] text-[14px] font-medium">
                ردیف
              </p>
              <p className="w-[15%] text-right text-[#0F1419] text-[14px] font-medium">
                نوع تراکنش
              </p>
              <p className="w-[15%] text-right text-[#0F1419] text-[14px] font-medium">
                مقدار امتیاز
              </p>
              <p className="w-[20%] text-right text-[#0F1419] text-[14px] font-medium">
                زمان
              </p>
              <p className="w-[40%] text-right text-[#0F1419] text-[14px] font-medium">
                علت
              </p>
            </div>
            {/* Table Rows */}
            <div className="flex items-center justify-between py-5  shadowTemp px-5 bg-[white]">
              <div className="w-[10%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">1</p>
              </div>

              <div className="w-[15%] flex items-center right gap-2">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  دریافت امتیاز
                </p>
              </div>

              <div className="w-[15%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  100 سکه
                </p>
              </div>

              <div className="w-[20%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  1403/05/21 - 22:14
                </p>
              </div>

              <div className="w-[40%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
                </p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#EDF3F6]" />
            <div className="flex items-center justify-between py-5  shadowTemp px-5 bg-[white]">
              <div className="w-[10%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">1</p>
              </div>

              <div className="w-[15%] flex items-center right gap-2">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  دریافت امتیاز
                </p>
              </div>

              <div className="w-[15%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  100 سکه
                </p>
              </div>

              <div className="w-[20%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  1403/05/21 - 22:14
                </p>
              </div>

              <div className="w-[40%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
                </p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#EDF3F6]" />
            <div className="flex items-center justify-between py-5  shadowTemp px-5 bg-[white]">
              <div className="w-[10%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">1</p>
              </div>

              <div className="w-[15%] flex items-center right gap-2">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  دریافت امتیاز
                </p>
              </div>

              <div className="w-[15%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  100 سکه
                </p>
              </div>

              <div className="w-[20%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  1403/05/21 - 22:14
                </p>
              </div>

              <div className="w-[40%] flex right">
                <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
                </p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#EDF3F6]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
