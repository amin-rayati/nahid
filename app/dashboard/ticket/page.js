"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import TicketModal from "@/components/Modals/TicketModal";
import Menu from "@/components/Dashboard/Menu";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl my-20 p-4">
      <div className="grid grid-cols-12 gap-2 sm:gap-5" dir="rtl">
        {/* menu */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="ticket" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <p className="text-[#1E1E1E] text-[24px] font-bold">ثبت تیکت</p>

          <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>

          <div className="bg-[#EDF3F6] border-[2px] border-white rounded-[12px] p-4">
            <div className="grid grid-cols-12 gap-4 my-3">
              <div className="col-span-12 sm:col-span-6">
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  نام و نام خانوادگی
                </p>
                <div className="relative mt-4">
                  <input
                    type="text"
                    className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  شماره تماس
                </p>
                <div className="relative mt-4">
                  <input
                    type="text"
                    className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                    placeholder="شماره تماس  خود را وارد کنید"
                  />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  آدرس ایمیل
                </p>
                <div className="relative mt-4">
                  <input
                    type="text"
                    className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                    placeholder="ایمیل  خود را وارد کنید"
                  />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  موضوع پیام
                </p>
                <div className="relative mt-4">
                  <select className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular appearance-none">
                    <option className="text-[#1E1E1E] text-[14px] font-regular text-right">
                      انتخاب موضوع
                    </option>
                    <option className="text-[#1E1E1E] text-[14px] font-regular text-right">
                      نقد
                    </option>
                    <option className="text-[#1E1E1E] text-[14px] font-regular text-right">
                      شکایت
                    </option>
                  </select>

                  <div className="absolute left-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="#1F5D6A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-span-12 ">
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  متن پیام
                </p>
                <div className="relative mt-4">
                  <textarea
                    rows={4}
                    type="text"
                    className="resize-none w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                    placeholder="متن پیام  خود را وارد کنید"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px] w-[100%] sm:w-[20%] px-5 py-4">
                ارسال فرم
              </button>
            </div>
          </div>

          <p className="text-[#1E1E1E] text-[24px] font-bold mt-10">
            تیکت‌های من
          </p>

          <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>

          <div className="w-full overflow-x-auto" dir="rtl">
            <div className="min-w-[768px]">
              <div className="min-w-[768px] rounded-[16px] overflow-hidden border border-[#EDF3F6]">
                {/* Table Header */}
                <div className="flex items-center justify-between px-5 py-3 bg-[#EDF3F6] border-[1px] border-[#FFFFFF]">
                  <p className="w-[5%] text-right text-[#0F1419] text-[14px] font-medium">
                    ردیف
                  </p>
                  <p className="w-[20%] text-right text-[#0F1419] text-[14px] font-medium">
                    موضوع تیکت
                  </p>
                  <p className="w-[20%] text-right text-[#0F1419] text-[14px] font-medium">
                    تاریخ و ساعت
                  </p>
                  <p className="w-[20%] text-right text-[#0F1419] text-[14px] font-medium">
                    وضعیت
                  </p>
                  <p className="w-[20%] text-right text-[#0F1419] text-[14px] font-medium">
                    متن تیکت
                  </p>
                </div>
                {/* Table Rows */}
                <div className="flex items-center justify-between py-5  shadowTemp px-5 bg-[white]">
                  <div className="w-[5%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">1</p>
                  </div>

                  <div className="w-[20%] flex items-center right gap-2">
                    <p className="text-[14px] text-[#1F5D6A] font-bold">
                      خرید از فروشگاه
                    </p>
                  </div>

                  <div className="w-[20%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      1403/05/21 - 22:14
                    </p>
                  </div>

                  <div className="w-[20%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-medium">
                      پاسخ داده شده
                    </p>
                  </div>
                  <div className="w-[20%] flex right">
                    <button
                      onClick={openModal}
                      className="text-[14px] text-[white] font-bold bg-[#1F5D6A] rounded-[8px] w-full py-3"
                    >
                      مشاهده پاسخ
                    </button>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-[#EDF3F6]" />
                <div className="flex items-center justify-between py-5  shadowTemp px-5 bg-[white]">
                  <div className="w-[5%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">1</p>
                  </div>

                  <div className="w-[20%] flex items-center right gap-2">
                    <p className="text-[14px] text-[#1F5D6A] font-bold">
                      خرید از فروشگاه
                    </p>
                  </div>

                  <div className="w-[20%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-regular">
                      1403/05/21 - 22:14
                    </p>
                  </div>

                  <div className="w-[20%] flex right">
                    <p className="text-[14px] text-[#1E1E1E] font-medium">
                      در انتظار پاسخ
                    </p>
                  </div>
                  <div className="w-[20%] flex right">
                    <button
                      onClick={openModal}
                      className="text-[14px] text-[#1F5D6A] font-bold border-[2px] border-[#1F5D6A] rounded-[8px] w-full py-3"
                    >
                      مشاهده پیام
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <TicketModal isModalOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
