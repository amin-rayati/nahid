"use client";
import React, { useState } from "react";

import Menu from "@/components/Dashboard/Menu";

const Page = () => {
  return (
    <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl my-20 p-4">
      <div className="grid grid-cols-12 gap-2 sm:gap-5" dir="rtl">
        {/* menu */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="purchase" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <p className="text-[#1E1E1E] text-[24px] font-bold">خریدهای من</p>

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
                    پذیرنده
                  </p>
                  <p className="w-[15%] text-right text-[#0F1419] text-[14px] font-medium">
                    تاریخ و ساعت
                  </p>
                  <p className="w-[15%] text-right text-[#0F1419] text-[14px] font-medium">
                    درصد تخفیف
                  </p>
                  <p className="w-[15%] text-right text-[#0F1419] text-[14px] font-medium">
                    مبلغ خریداری شده
                  </p>
                  <p className="w-[20%] text-right text-[#0F1419] text-[14px] font-medium">
                    مبلغ تخفیف گرفته شده
                  </p>
                </div>
                {/* Table Rows */}
                <div className="flex items-center justify-between py-5  shadowTemp px-5 bg-[white]">
                  <div className="w-[10%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">1</p>
                  </div>

                  <div className="w-[15%] flex items-center right gap-2">
                    <p className="text-[14px] text-[#1F5D6A] font-bold">
                      فروشگاه حسینی راد
                    </p>
                  </div>

                  <div className="w-[15%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      1403/05/21 - 22:14
                    </p>
                  </div>

                  <div className="w-[15%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      %50
                    </p>
                  </div>
                  <div className="w-[15%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      3،520،000 تومان
                    </p>
                  </div>

                  <div className="w-[20%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      520،000 تومان
                    </p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-[#EDF3F6]" />
                <div className="flex items-center justify-between py-5  shadowTemp px-5 bg-[white]">
                  <div className="w-[10%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">1</p>
                  </div>

                  <div className="w-[15%] flex items-center right gap-2">
                    <p className="text-[14px] text-[#1F5D6A] font-bold">
                      فروشگاه حسینی راد
                    </p>
                  </div>

                  <div className="w-[15%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      1403/05/21 - 22:14
                    </p>
                  </div>

                  <div className="w-[15%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      %50
                    </p>
                  </div>
                  <div className="w-[15%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      3،520،000 تومان
                    </p>
                  </div>

                  <div className="w-[20%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      520،000 تومان
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EDF3F6] border border-white mt-5 p-4 flex flex-wrap gap-3 items-center justify-between rounded-xl">
            <div className="flex flex-wrap gap-3 items-center gap-2 justify-around lg:w-[40%]">
              <p className="text-[14px] font-bold text-[#1E1E1E]">
                مجموع مبلغ خریداری شده:
              </p>
              <p className="text-[14px] font-normal text-[#1E1E1E]">
                ۳,۵۲۰,۰۰۰ تومان
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center gap-2 justify-around lg:w-[40%]">
              <p className="text-[14px] font-bold text-[#1E1E1E]">
                مجموع تخفیف گرفته شده
              </p>
              <p className="text-[14px] font-normal text-[#1E1E1E]">
                ۳,۵۲۰,۰۰۰ تومان
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
