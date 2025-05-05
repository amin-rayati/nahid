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
      <p className="text-[#1E1E1E] text-[24px] font-bold">باشگاه جوایز</p>
      <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>

      <div className="grid grid-cols-12 gap-2">
        <Link
          href={"/prizes/special"}
          className="col-span-12 sm:col-span-6 lg:col-span-3"
        >
          <div className="bg-[#EDF3F6] border-[2px] border-[#FFFFFF] p-3 rounded-[16px]">
            <div className="bg-[#1F5D6A] py-5 rounded-[12px] flex justify-center">
              <Image src={medal} alt="medal" />
            </div>

            <p className="text-[#1E1E1E] text-[16px] font-bold text-right my-3">
              10 روز اشتراک ویژه
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 my-3">
              <div className="flex items-center gap-2">
                <Image src={coin2} alt="coin2" />
                <p className="text-[#1E1E1E] font-regular text-[14px]">
                  امتیاز لازم:
                </p>
              </div>
              <div className="border-[#1F5D6A] border-[1px] rounded-[4px] px-4">
                <p className="text-[#1E1E1E] text-[14px] font-bold">25</p>
              </div>
            </div>

            <div className="h-[1.5px] w-full bg-white"></div>
            <div className="flex justify-center  mt-2">
              <p className="text-[#1F5D6A] text-[14px] font-fat">
                دریافت جایزه
              </p>
            </div>
          </div>
        </Link>
        <Link
          href={"/prizes/discount"}
          className="col-span-12 sm:col-span-6 lg:col-span-3"
        >
          <div className="bg-[#EDF3F6] border-[2px] border-[#FFFFFF] p-3 rounded-[16px]">
            <div className="bg-[#1F5D6A] py-5 rounded-[12px] flex justify-center">
              <Image src={dis} alt="dis" />
            </div>

            <p className="text-[#1E1E1E] text-[16px] font-bold text-right my-3">
              15 درصد تخفیف از فروشگاه‌ها
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 my-3">
              <div className="flex items-center gap-2">
                <Image src={coin2} alt="coin2" />
                <p className="text-[#1E1E1E] font-regular text-[14px]">
                  امتیاز لازم:
                </p>
              </div>
              <div className="border-[#1F5D6A] border-[1px] rounded-[4px] px-4">
                <p className="text-[#1E1E1E] text-[14px] font-bold">25</p>
              </div>
            </div>

            <div className="h-[1.5px] w-full bg-white"></div>
            <div className="flex justify-center  mt-2">
              <p className="text-[#1F5D6A] text-[14px] font-fat">
                دریافت جایزه
              </p>
            </div>
          </div>
        </Link>
        <Link
          href={"/prizes/token"}
          className="col-span-12 sm:col-span-6 lg:col-span-3"
        >
          <div className="bg-[#EDF3F6] border-[2px] border-[#FFFFFF] p-3 rounded-[16px]">
            <div className="bg-[#1F5D6A] py-5 rounded-[12px] flex justify-center">
              <Image src={cup} alt="cup" />
            </div>

            <p className="text-[#1E1E1E] text-[16px] font-bold text-right my-3">
              دریافت توکن قرعه کشی
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 my-3">
              <div className="flex items-center gap-2">
                <Image src={coin2} alt="coin2" />
                <p className="text-[#1E1E1E] font-regular text-[14px]">
                  امتیاز لازم:
                </p>
              </div>
              <div className="border-[#1F5D6A] border-[1px] rounded-[4px] px-4">
                <p className="text-[#1E1E1E] text-[14px] font-bold">25</p>
              </div>
            </div>

            <div className="h-[1.5px] w-full bg-white"></div>
            <div className="flex justify-center  mt-2">
              <p className="text-[#1F5D6A] text-[14px] font-fat">
                دریافت جایزه
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
