"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoMdClose } from "react-icons/io";
import { LuImage } from "react-icons/lu";
import amin from "@/public/img/amin.jpg";
import eshterak from "@/public/img/icons/eshterak.png";
import noeshterak from "@/public/img/icons/noeshterak.png";
import grid from "@/public/img/icons/grid.png";
import location from "@/public/img/icons/location.png";
import copy from "@/public/img/icons/copy.png";

import Menu from "@/components/Dashboard/Menu";

const Page = () => {
  const [membership, setMembership] = useState(false);
  return (
    <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl my-20 p-4">
      <div className="grid grid-cols-12 gap-2 sm:gap-5" dir="rtl">
        {/* menu */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="profile" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <p className="text-[#1E1E1E] text-[24px] font-bold">حساب کابری</p>

          <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>

          {/* img */}
          <p className="text-[#1E1E1E] text-[14px] font-regular">
            تصویر<small className="text-[#E24343]">*</small>
          </p>
          <div className=" flex flex-col items-center justify-center">
            <div className="relative w-32 h-32 mt-3">
              <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden flex justify-center items-center">
                <Image
                  src={amin}
                  alt="Profile"
                  className="rounded-full object-cover"
                  layout="fixed"
                  width={150}
                  style={{ height: "140px" }}
                />
              </div>
              <div
                className="absolute transform translate-x-1/2 translate-y-1/2 rounded-full p-2"
                style={{
                  right: "17px",
                  bottom: "22px",
                  backgroundColor: "#1F5D6A",
                }}
              >
                <LuImage size={20} color="white" />
              </div>
              <div
                className="absolute transform translate-x-1/2 translate-y-1/2 rounded-full p-2 border-[1px] border-[#1F5D6A]"
                style={{
                  left: "-17px",
                  bottom: "20px",
                  backgroundColor: "#E9EFF0",
                }}
              >
                <IoMdClose size={18} color="#354259" />
              </div>
            </div>
          </div>
          {/* img */}

          {/* form */}
          <div className="grid grid-cols-12 gap-4 my-10">
            <div className="col-span-12 sm:col-span-6">
              <p className="text-[#1E1E1E] text-[14px] font-regular">نام</p>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                  placeholder="نام خود را وارد کنید"
                  value={"امین"}
                />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <p className="text-[#1E1E1E] text-[14px] font-regular">
                نام خانوادگی
              </p>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  value={"رعیتی"}
                />
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <p className="text-[#1E1E1E] text-[14px] font-regular">کد ملی</p>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                  placeholder="کد ملی خود را وارد کنید"
                  value={"002536254"}
                />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <p className="text-[#1E1E1E] text-[14px] font-regular">
                تاریخ تولد
              </p>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                  placeholder="تاریخ تولد خود را وارد کنید"
                  value={"1360/11/02"}
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
                  value={"09362625488"}
                />
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <p className="text-[#1E1E1E] text-[14px] font-regular">ایمیل</p>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                  placeholder="ایمیل  خود را وارد کنید"
                  value={"amin@gmail.com"}
                />
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <p className="text-[#1E1E1E] text-[14px] font-regular">
                شماره شبا
              </p>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                  placeholder="شماره شبای  خود را وارد کنید"
                  value={"112352632641654646346464"}
                />
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <p className="text-[#1E1E1E] text-[14px] font-regular">کد پستی</p>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                  placeholder="کد پستی  خود را وارد کنید"
                  value={"508096"}
                />
              </div>
            </div>

            <div className="col-span-12 ">
              <p className="text-[#1E1E1E] text-[14px] font-regular">آدرس</p>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                  placeholder="آدرس خود را وارد کنید"
                  value={"مشهد، بلوار وکیل آباد، خیابان عارف، عارف 8، پلاک 20"}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px] w-[100%] sm:w-[20%] px-5 py-4">
              ذخیره تغییرات
            </button>
          </div>
          {/* form */}

          <p className="text-[#1E1E1E] text-[24px] font-bold my-5">
            اشتراک و کد معرف
          </p>

          <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-5 bg-[#EDF3F6] border-[1px] border-[#FFFFFF] p-3 rounded-[16px]">
              {membership ? (
                <>
                  <div className="flex items-center justify-center">
                    <Image src={eshterak} alt="eshterak" />
                    <p className="text-[#1E1E1E] text-[20px] font-bold">
                      اشتراک دارید
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-between items-center w-full mt-5">
                    <div className="flex items-center gap-1">
                      <Image src={grid} alt="grid" />
                      <p className="text-[#1E1E1E] font-regular text-[14px]">
                        نوع اشتراک:
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-1 mr-2">
                      <span className="border-t border-dashed border-[#1E1E1E] flex-1 opacity-20"></span>
                      <p className="text-[14px] font-bold text-[#1E1E1E]">
                        یک ساله
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center w-full mt-5">
                    <div className="flex items-center gap-1">
                      <Image src={location} alt="location" />
                      <p className="text-[#1E1E1E] font-regular text-[14px]">
                        تاریخ پایان اشتراک:
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-1 mr-2">
                      <span className="border-t border-dashed border-[#1E1E1E] flex-1 opacity-20"></span>
                      <p className="text-[14px] font-bold text-[#1E1E1E]">
                        1404/06/25
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center">
                    <Image src={noeshterak} alt="noeshterak" />
                    <p className="text-[#1E1E1E] text-[20px] font-bold">
                      اشتراک ندارید
                    </p>
                    <button className="text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px] w-[100%]  px-5 py-3 mt-3">
                      خرید اشتراک آنیکارت
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="col-span-12 lg:col-span-7 bg-[#EDF3F6] border-[1px] border-[#FFFFFF] p-3 rounded-[16px]">
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-[#1E1E1E] text-[20px] font-bold">
                  کد معرف اختصاصی شما
                </p>
                <div className="bg-[#FFFFFF] flex items-center gap-1 p-3 rounded-[8px]">
                  <div className="flex items-center gap-1">
                    <Image src={copy} alt="copy" />
                    <p className="text-[#1F5D6A] text-[14px] font-medium">
                      کپی کردن
                    </p>
                  </div>
                  <p className="text-[#1F5D6A] text-[20px] font-bold">25632</p>
                </div>
                <p className="text-[#1e1e1ead] text-[14px] font-regular mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
