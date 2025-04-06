"use client";
import React from "react";
import Image from "next/image";

import blogbanner from "@/public/img/blogbanner.png";
import blog1 from "@/public/img/blog1.png";
import calender from "@/public/img/calendar.png";
import face from "@/public/img/face.png";
import shield from "@/public/img/shield.png";
import heart from "@/public/img/heart.png";

import Ticket from "@/components/Home/Ticket";
import BlogCard from "@/components/Blog/BlogCard";

import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";

const page = () => {
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sm:my-12 relative"
    >
      <motion.div
        variants={containerVariants}
        className="blog-bg flex flex-col items-center justify-center mt-10 sm:mb-10 relative"
        style={{ backgroundImage: `url(${blogbanner.src})` }}
      >
        <div className="absolute inset-0 bg-[#1E1E1E] opacity-80"></div>
        <div className="absolute w-[95%] md:w-[55%] m-auto inset-0 flex flex-col items-center justify-center text-white text-center">
          <p className="text-[22px] md:text-[32px] text-white font-bold">
            جستحو در بین هزاران مقاله معتبر و آموزنده
          </p>
          <p className="text-[10px] md:text-[16px] text-[#FEFCED] font-light my-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <div className="flex w-full flex-wrap justify-between items-center gap-2">
            <div className="relative w-full">
              <input
                placeholder="جستجوی داستان..."
                className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 pr-12 text-right text-black placeholder:text-black placeholder:sm:text-[16px] placeholder:sm:font-light placeholder:text-[10px]"
                style={{ direction: "rtl", paddingLeft: "100px" }}
              />

              <CiSearch
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                size={25}
                color="#354259"
              />

              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#354259] px-5 py-2 text-white text-[16px] font-bold rounded-[8px]">
                جستجو
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto sm:my-12"
      >
        {/* topBlogs */}
        <div
          className="flex flex-wrap items-center justify-between"
          style={{ direction: "rtl" }}
        >
          <p className="text-black text-[24px] font-bold">مقالات برتر</p>
          <div className="flex items-center gap-2">
            <p className="text-[#354259] text-[20px] font-fat">مشاهده همه</p>
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
        <div className="grid grid-cols-12 gap-2 my-10" dir="rtl">
          <div className="col-span-12 md:col-span-6">
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-2">
              <Image src={blog1} alt="blog1" className="rounded-[8px]" />
              <div className="my-2 flex flex-wrap items-center justify-between">
                <p className="w-[100%] sm:w-[50%] text-[16px] font-bold text-[#000000]">
                  هنری و ادبی
                </p>
                <div
                  className="w-[100%] sm:w-[50%] flex flex-wrap justify-between items-center my-2"
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
              </div>
              <div className="h-[1px] w-full bg-[#EBDFBE] my-1"></div>
              <p className="text-[20px] text-[#1E1E1E] font-bold my-3">
                چگونه نویسندگی را شروع کنیم؟ راهنمایی برای نویسندگان تازه‌کار
              </p>
              <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[30px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده است.
              </p>

              <div className="flex justify-end">
                <button className="flex items-center gap-2 bg-[#354259] rounded-[8px] p-3 text-[white] text-[16px] font-bold">
                  <FaArrowLeft color="white" size={18} />
                  ورود/ ثبت نام
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-2 my-2">
              <div className="my-2 flex flex-wrap items-center justify-between">
                <p className="w-[100%] sm:w-[50%] text-[16px] font-bold text-[#000000]">
                  هنری و ادبی
                </p>
                <div
                  className="w-[100%] sm:w-[50%] flex flex-wrap justify-between items-center my-2"
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
              </div>
              <div className="h-[1px] w-full bg-[#EBDFBE] my-1"></div>
              <p className="text-[20px] text-[#1E1E1E] font-bold my-3">
                ۱۰ روش برای افزایش خلاقیت در داستان‌نویسی
              </p>
              <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[25px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع است.
              </p>
            </div>
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-2 my-2">
              <div className="my-2 flex flex-wrap items-center justify-between">
                <p className="w-[100%] sm:w-[50%] text-[16px] font-bold text-[#000000]">
                  هنری و ادبی
                </p>
                <div
                  className="w-[100%] sm:w-[50%] flex flex-wrap justify-between items-center my-2"
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
              </div>
              <div className="h-[1px] w-full bg-[#EBDFBE] my-1"></div>
              <p className="text-[20px] text-[#1E1E1E] font-bold my-3">
                ۱۰ روش برای افزایش خلاقیت در داستان‌نویسی
              </p>
              <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[25px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع است.
              </p>
            </div>
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-2 my-2">
              <div className="my-2 flex flex-wrap items-center justify-between">
                <p className="w-[100%] sm:w-[50%] text-[16px] font-bold text-[#000000]">
                  هنری و ادبی
                </p>
                <div
                  className="w-[100%] sm:w-[50%] flex flex-wrap justify-between items-center my-2"
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
              </div>
              <div className="h-[1px] w-full bg-[#EBDFBE] my-1"></div>
              <p className="text-[20px] text-[#1E1E1E] font-bold my-3">
                ۱۰ روش برای افزایش خلاقیت در داستان‌نویسی
              </p>
              <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[25px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع است.
              </p>
            </div>
          </div>
        </div>
        {/* blogCats */}
        <p className="text-black text-[24px] font-bold text-center">
          دسته بندی مقالات
        </p>
        <div className="flex gap-2 justify-center my-5">
          <div className="h-[3px] w-10 bg-[#A0C498]"></div>
          <div className="h-[3px] w-64 bg-[#A0C498]"></div>
          <div className="h-[3px] w-10 bg-[#A0C498]"></div>
        </div>
        <div
          className="flex flex-wrap gap-3 justify-center"
          style={{ direction: "rtl" }}
        >
          <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
            <div className="flex items-center gap-3">
              <Image src={face} alt="face" className="rounded-full" />
              <section className="text-right">
                <p className="font-bold text-lg">احساسی</p>
                <p className="font-light text-sm text-[#1E1E1E99]">
                  140 داستان
                </p>
              </section>
            </div>
          </div>
          <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
            <div className="flex items-center gap-3">
              <Image src={face} alt="face" className="rounded-full" />
              <section className="text-right">
                <p className="font-bold text-lg">احساسی</p>
                <p className="font-light text-sm text-[#1E1E1E99]">
                  140 داستان
                </p>
              </section>
            </div>
          </div>
          <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
            <div className="flex items-center gap-3">
              <Image src={face} alt="face" className="rounded-full" />
              <section className="text-right">
                <p className="font-bold text-lg">احساسی</p>
                <p className="font-light text-sm text-[#1E1E1E99]">
                  140 داستان
                </p>
              </section>
            </div>
          </div>
          <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
            <div className="flex items-center gap-3">
              <Image src={face} alt="face" className="rounded-full" />
              <section className="text-right">
                <p className="font-bold text-lg">احساسی</p>
                <p className="font-light text-sm text-[#1E1E1E99]">
                  140 داستان
                </p>
              </section>
            </div>
          </div>
          <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
            <div className="flex items-center gap-3">
              <Image src={heart} alt="heart" className="rounded-full" />
              <section className="text-right">
                <p className="font-bold text-lg">احساسی</p>
                <p className="font-light text-sm text-[#1E1E1E99]">
                  140 داستان
                </p>
              </section>
            </div>
          </div>
          <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
            <div className="flex items-center gap-3">
              <Image src={heart} alt="heart" className="rounded-full" />
              <section className="text-right">
                <p className="font-bold text-lg">احساسی</p>
                <p className="font-light text-sm text-[#1E1E1E99]">
                  140 داستان
                </p>
              </section>
            </div>
          </div>
          <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
            <div className="flex items-center gap-3">
              <Image src={heart} alt="heart" className="rounded-full" />
              <section className="text-right">
                <p className="font-bold text-lg">احساسی</p>
                <p className="font-light text-sm text-[#1E1E1E99]">
                  140 داستان
                </p>
              </section>
            </div>
          </div>
          <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
            <div className="flex items-center gap-3">
              <Image src={shield} alt="shield" className="rounded-full" />
              <section className="text-right">
                <p className="font-bold text-lg">احساسی</p>
                <p className="font-light text-sm text-[#1E1E1E99]">
                  140 داستان
                </p>
              </section>
            </div>
          </div>
          <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
            <div className="flex items-center gap-3">
              <Image src={shield} alt="shield" className="rounded-full" />
              <section className="text-right">
                <p className="font-bold text-lg">احساسی</p>
                <p className="font-light text-sm text-[#1E1E1E99]">
                  140 داستان
                </p>
              </section>
            </div>
          </div>
        </div>
        {/* newBlogs */}
        <div
          className="flex flex-wrap items-center justify-between mt-10"
          style={{ direction: "rtl" }}
        >
          <p className="text-black text-[24px] font-bold">جدیدترین مقالات</p>
          <div className="flex items-center gap-2">
            <p className="text-[#354259] text-[20px] font-fat">مشاهده همه</p>
            <FaArrowLeft color="#354259" size={20} />
          </div>
        </div>
        <div className="flex gap-2 justify-end my-5">
          <div className="h-[3px] w-10 bg-[#A0C498]"></div>
          <div className="h-[3px] w-64 bg-[#A0C498]"></div>
        </div>
        <p className="text-black text-[16px] font-light text-right mb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>
        <div className="grid grid-cols-12 gap-2" dir="rtl">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="grid grid-cols-12 gap-2 my-1" dir="rtl">
          <div className="col-span-12 sm:col-span-6 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-2 my-1">
            <div className="my-2 flex flex-wrap items-center justify-between">
              <p className="w-[100%] sm:w-[50%] text-[16px] font-bold text-[#000000]">
                هنری و ادبی
              </p>
              <div
                className="w-[100%] sm:w-[50%] flex flex-wrap justify-between items-center my-2"
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
            </div>
            <div className="h-[1px] w-full bg-[#EBDFBE] my-1"></div>
            <p className="text-[20px] text-[#1E1E1E] font-bold my-3">
              ۱۰ روش برای افزایش خلاقیت در داستان‌نویسی
            </p>
            <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[25px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع است.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-2 my-1">
            <div className="my-2 flex flex-wrap items-center justify-between">
              <p className="w-[100%] sm:w-[50%] text-[16px] font-bold text-[#000000]">
                هنری و ادبی
              </p>
              <div
                className="w-[100%] sm:w-[50%] flex flex-wrap justify-between items-center my-2"
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
            </div>
            <div className="h-[1px] w-full bg-[#EBDFBE] my-1"></div>
            <p className="text-[20px] text-[#1E1E1E] font-bold my-3">
              ۱۰ روش برای افزایش خلاقیت در داستان‌نویسی
            </p>
            <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[25px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع است.
            </p>
          </div>
        </div>

        {/* news */}
        <Ticket />
      </motion.div>
    </motion.div>
  );
};

export default page;
