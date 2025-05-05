"use client";
import React, { useState } from "react";
import Image from "next/image";

import reply from "@/public/img/icons/reply.png";
import message from "@/public/img/icons/message.png";

import Menu from "@/components/Dashboard/Menu";
import StoreCard from "@/components/Shop/StoreCard";
const Page = () => {
  return (
    <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl my-20 p-4">
      <div className="grid grid-cols-12 gap-2 sm:gap-5" dir="rtl">
        {/* menu */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="comment" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <p className="text-[#1E1E1E] text-[24px] font-bold">دیدگاه‌های من</p>

          <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <StoreCard />
              <div className="bg-[#1F5D6A] rounded-[12px] p-3 py-4 mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={message} alt="message" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">5 نظر</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={reply} alt="reply" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">2 پاسخ</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <StoreCard />
              <div className="bg-[#1F5D6A] rounded-[12px] p-3 py-4 mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={message} alt="message" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">5 نظر</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={reply} alt="reply" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">2 پاسخ</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <StoreCard />
              <div className="bg-[#1F5D6A] rounded-[12px] p-3 py-4 mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={message} alt="message" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">5 نظر</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={reply} alt="reply" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">2 پاسخ</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <StoreCard />
              <div className="bg-[#1F5D6A] rounded-[12px] p-3 py-4 mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={message} alt="message" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">5 نظر</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={reply} alt="reply" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">2 پاسخ</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <StoreCard />
              <div className="bg-[#1F5D6A] rounded-[12px] p-3 py-4 mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={message} alt="message" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">5 نظر</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={reply} alt="reply" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">2 پاسخ</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <StoreCard />
              <div className="bg-[#1F5D6A] rounded-[12px] p-3 py-4 mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={message} alt="message" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">5 نظر</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={reply} alt="reply" />
                  <p className="text-[#FFFFFF] font-bold text-[14px]">2 پاسخ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
