"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import SearchBar from "../SearchBar/SearchBar";

import { CiSearch } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";

import logo from "@/public/img/logo.png";
import download from "@/public/img/icons/download.png";
import credit from "@/public/img/icons/credit.png";
import menu from "@/public/img/icons/menu.png";
import close from "@/public/img/icons/close.png";
import user from "@/public/img/icons/user.png";
import mobile from "@/public/img/cats/mobile.png";
import digital from "@/public/img/cats/digital.png";
import medical from "@/public/img/cats/medical.png";
import gold from "@/public/img/cats/gold.png";
import book from "@/public/img/cats/book.png";
import sofa from "@/public/img/cats/sofa.png";
import toy from "@/public/img/cats/toy.png";
import clothes from "@/public/img/cats/clothes.png";
import car from "@/public/img/cats/car.png";
import cosmetic from "@/public/img/cats/cosmetic.png";
import ball from "@/public/img/cats/ball.png";
import tool from "@/public/img/cats/tool.png";
import backwhite from "@/public/img/icons/backwhite.png";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#E9EFF0] fixed top-0 left-0 w-full z-30">
        {/* desktop */}
        <div className="hidden sm:block">
          {/* firstNav */}
          <div className="flex items-center justify-between px-2 sm:px-4 py-4 flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl">
            {/* loginBtn */}
            <div className="flex items-center">
              <Link
                href="/auth/login"
                className="flex items-center gap-2 text-[#1F5D6A] text-[14px] font-bold"
              >
                ورود / ثبت نام
                <Image src={user} alt="user" />
              </Link>
            </div>

            {/* logo & searchBar */}
            <nav className="flex items-center sm:w-[80%] md:w-[70%] lg:w-[50%] justify-end">
              <SearchBar />
              <Link
                href="/"
                className="flex items-center gap-2 ml-5 flex-shrink-0"
              >
                <p className="text-[20px]">
                  <span className="text-[#1F5D6A] font-morabba">آنیکا</span>
                  <span className="text-black font-morabba">رت</span>
                </p>

                <motion.img
                  src={logo.src}
                  alt="logo"
                  className="rounded-lg object-contain w-10 h-10"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Link>
            </nav>

            {/* btns */}
          </div>
          {/* secondNav */}
          <div className="bg-[#1F5D6A]">
            <div className="flex items-center justify-between px-2 sm:px-4 py-4 flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl">
              {/*btns*/}
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 border-[2px] rounded-[8px] border-[#FFFFFF] text-white p-2 text-[14px] font-bold">
                  دانلود اپلیکیشن
                  <Image src={download} alt="download" />
                </button>
                <Link
                  href="/anikart/buy"
                  className="flex items-center gap-2 bg-white border-[2px] rounded-[8px] border-[#FFFFFF] text-[#1F5D6A] p-2 text-[14px] font-bold"
                >
                  خرید اینترنتی آنیکارت
                  <Image src={credit} alt="credit" />
                </Link>
              </div>

              {/*sort*/}
              <div
                className="flex flex-wrap items-center justify-between my-5"
                style={{ direction: "rtl" }}
              >
                {/* {pathname !== "/" && (
                  <Link
                    href="/"
                    className="flex items-center gap-2 cursor-pointer w-[130px]"
                  >
                    <Image src={backwhite} alt="backwhite" />
                    <p className="text-white text-[14px] font-bold">
                      بازگشت به خانه
                    </p>
                  </Link>
                )} */}

                <div className="relative">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 cursor-pointer w-[130px]"
                  >
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={close}
                            alt="close"
                            width={24}
                            height={24}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ opacity: 0, rotate: 90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image src={menu} alt="menu" width={24} height={24} />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <p className="text-white text-[14px] font-bold">
                      همه دسته بندی‌ها
                    </p>
                  </div>

                  {isOpen && (
                    <div className="absolute right-0 z-10 bg-[#EDF3F6] border-[2px] border-white rounded-[12px] w-[300px] mt-10 px-2 py-4">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={mobile} alt="mobile" />
                          <p className="text-[#1E1E1E] text-[14px] font-medium">
                            موبایل
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={toy} alt="toy" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            اسباب بازی
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={digital} alt="digital" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            لوازم دیجیتال
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={clothes} alt="clothes" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            لباس و پوشاک
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={medical} alt="medical" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            تجهیزات پزشکی
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={car} alt="car" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            ماشین و موتور
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={gold} alt="gold" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            طلا و نقره
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={cosmetic} alt="cosmetic" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            آرایشی بهداشتی
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={book} alt="book" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            لوازم تحریر
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={ball} alt="toy" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            ورزشی و سفر
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={sofa} alt="sofa" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            لوازم خانگی
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={tool} alt="tool" />
                          <p className="p-1 text-[#1E1E1E] text-[14px] font-medium">
                            ابزار و تجهیزات
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="block sm:hidden">
          {/* firstNav */}
          <div className="flex items-center justify-between px-2 sm:px-4 py-1">
            {/* loginBtn */}
            <div className="flex items-center">
              <Link
                href="/auth/login"
                className="flex items-center gap-2 text-[#1F5D6A] text-[12px] font-bold"
              >
                ورود / ثبت نام
                <Image src={user} alt="user" />
              </Link>
            </div>

            {/* logo & searchBar */}
            <nav className="flex items-center">
              <Link
                href="/"
                className="flex items-center gap-2 ml-5 flex-shrink-0"
              >
                <p className="text-[15px]">
                  <span className="text-[#1F5D6A] font-morabba">آنیکا</span>
                  <span className="text-black font-morabba">رت</span>
                </p>
                <motion.img
                  src={logo.src}
                  alt="logo"
                  className="rounded-lg object-contain w-10 h-10"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Link>
            </nav>
          </div>
          {/* secondNav  */}
          <div className="bg-[#1F5D6A]">
            <div className="flex gap-5 items-center justify-between px-2 sm:px-4 py-1 flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl">
              {/* SearchBar */}
              <div className="relative flex-grow">
                <input
                  placeholder="جستجو"
                  className="w-full rounded-[8px] border-[1px] bg-white border-[#C9D9DB] outline-none py-3 pr-12 text-right placeholder:text-[#1E1E1E] placeholder:text-[12px] placeholder:font-regular"
                  style={{ direction: "rtl", paddingLeft: "80px" }}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center gap-2">
                  <div className="h-6 w-[1px] bg-[#0000001A]" />
                  <CiSearch size={20} color="#1E1E1E" />
                </div>

                <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1F5D6A] py-2 px-3 rounded-[8px] flex items-center gap-1 justify-center">
                  <p className="text-[white] text-[12px] font-medium">تهران</p>
                  <GrLocation color="white" size={20} />
                </button>
              </div>

              {/*sort*/}
              <div
                className="flex flex-wrap items-center justify-between my-5"
                style={{ direction: "rtl" }}
              >
                <div className="relative">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={close}
                            alt="close"
                            width={24}
                            height={24}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ opacity: 0, rotate: 90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image src={menu} alt="menu" width={24} height={24} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {isOpen && (
                    <div className="absolute right-0 z-10 bg-[#EDF3F6] border-[2px] border-white rounded-[12px] w-[220px] mt-6 px-2 py-4">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={mobile} alt="mobile" />
                          <p className="text-[#1E1E1E] text-[10px] font-medium">
                            موبایل
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={toy} alt="toy" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            اسباب بازی
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={digital} alt="digital" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            لوازم دیجیتال
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={clothes} alt="clothes" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            لباس و پوشاک
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={medical} alt="medical" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            تجهیزات پزشکی
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={car} alt="car" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            ماشین و موتور
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={gold} alt="gold" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            طلا و نقره
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={cosmetic} alt="cosmetic" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            آرایشی بهداشتی
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={book} alt="book" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            لوازم تحریر
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={ball} alt="toy" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            ورزشی و سفر
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={sofa} alt="sofa" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            لوازم خانگی
                          </p>
                        </div>
                        <div className="col-span-6 flex items-center cursor-pointer  hover:bg-[#C9D9DB] transition py-1 rounded-[8px]">
                          <Image src={tool} alt="tool" />
                          <p className="p-1 text-[#1E1E1E] text-[10px] font-medium">
                            ابزار و تجهیزات
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
