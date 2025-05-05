"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import GetCash from "@/components/Modals/GetCash";
import ConvertPoint from "@/components/Modals/ConvertPoint";
import Menu from "@/components/Dashboard/Menu";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalPointOpen, setIsModalPointOpen] = useState(false);
  const openModalPoint = () => setIsModalPointOpen(true);
  const closeModalPoint = () => setIsModalPointOpen(false);

  return (
    <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl my-20 p-4">
      <div className="grid grid-cols-12 gap-2 sm:gap-5" dir="rtl">
        {/* menu */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="income" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <p className="text-[#1E1E1E] text-[24px] font-bold">
            کیف پول و امتیاز
          </p>

          <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-6 bg-[#EDF3F6] border-[1px] border-[#FFFFFF] p-3 rounded-[16px]">
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <p className="text-[#1E1E1E] text-[20px] font-bold">
                  امتیازهای شما:
                </p>
                <div className="bg-[#FFFFFF] flex items-center gap-1 p-3 rounded-[8px] w-[70%] sm:w-[50%] justify-center">
                  <p className="text-[#1F5D6A] text-[20px] font-bold">
                    525،500
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                <button
                  onClick={openModalPoint}
                  className="text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px]  py-4 w-[100%] sm:w-[50%]"
                >
                  تبدیل امتیاز به اعتبار کیف پول
                </button>
              </div>

              <ConvertPoint
                isModalPointOpen={isModalPointOpen}
                closeModalPoint={closeModalPoint}
              />
            </div>

            <div className="col-span-12 lg:col-span-6 bg-[#EDF3F6] border-[1px] border-[#FFFFFF] p-3 rounded-[16px]">
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <p className="text-[#1E1E1E] text-[20px] font-bold">
                  موجودی کیف پول:
                </p>
                <div className="bg-[#FFFFFF] flex items-center gap-1 p-3 rounded-[8px] w-[70%] sm:w-[50%] justify-center">
                  <p className="text-[#1F5D6A] text-[20px] font-bold">
                    525،500
                  </p>
                  <p className="text-[#1F5D6A] text-[14px] font-قثلعمشق">
                    تومان
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                <button
                  onClick={openModal}
                  className="text-[#1F5D6A] text-[14px] font-bold border-[2px] border-[#1F5D6A] rounded-[8px]  py-4 w-[100%] sm:w-[50%]"
                >
                  دریافت وجه نقد
                </button>
              </div>
              <GetCash isModalOpen={isModalOpen} closeModal={closeModal} />
            </div>
          </div>

          <p className="text-[#1E1E1E] text-[24px] font-bold  mt-10">
            سوابق دریافت امتیاز و اعتبار
          </p>

          <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>
          <div className="w-full overflow-x-auto" dir="rtl">
            <div className="min-w-[768px]">
              <div className="min-w-[768px] rounded-[16px] overflow-hidden border border-[#EDF3F6]">
                {/* Table Header */}
                <div className="flex items-center justify-between px-5 py-3 bg-[#EDF3F6] border-[1px] border-[#FFFFFF]">
                  <p className="w-[10%] text-right text-[#0F1419] text-[14px] font-medium">
                    ردیف
                  </p>
                  <p className="w-[20%] text-right text-[#0F1419] text-[14px] font-medium">
                    هدیه دریافتی
                  </p>
                  <p className="w-[20%] text-right text-[#0F1419] text-[14px] font-medium">
                    زمان
                  </p>
                  <p className="w-[50%] text-right text-[#0F1419] text-[14px] font-medium">
                    علت
                  </p>
                </div>
                {/* Table Rows */}
                <div className="flex items-center justify-between py-5  shadowTemp px-5 bg-[white]">
                  <div className="w-[10%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] fnt-regular">1</p>
                  </div>

                  <div className="w-[20%] flex items-center right gap-2">
                    <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                      100 امتیاز
                    </p>
                  </div>

                  <div className="w-[20%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                      1403/05/21 - 22:14
                    </p>
                  </div>

                  <div className="w-[50%] flex right">
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

                  <div className="w-[20%] flex items-center right gap-2">
                    <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                      100 امتیاز
                    </p>
                  </div>

                  <div className="w-[20%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                      1403/05/21 - 22:14
                    </p>
                  </div>

                  <div className="w-[50%] flex right">
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

                  <div className="w-[20%] flex items-center right gap-2">
                    <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                      100 امتیاز
                    </p>
                  </div>

                  <div className="w-[20%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                      1403/05/21 - 22:14
                    </p>
                  </div>

                  <div className="w-[50%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] fnt-regular">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
                    </p>
                  </div>
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
