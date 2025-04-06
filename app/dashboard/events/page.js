"use client";
import React, { useState } from "react";
import Image from "next/image";
import calendarsingle from "@/public/img/calendarsingle.png";
import calendar from "@/public/img/calendar.png";
import mapsingle from "@/public/img/mapsingle.png";
import event2 from "@/public/img/event2.png";
import alert from "@/public/img/alert.png";
import EventModal from "@/components/Modals/EventModal";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 w-[100%] lg:w-[100%] xl:w-[85%] m-auto my-20"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-between"
        style={{ direction: "rtl" }}
      >
        <p className="text-black text-[24px] font-bold">رویدادها</p>
        <div variants={itemVariants} className="flex items-center gap-2">
          <Image src={calendarsingle} alt="calendarsingle" />

          <p className="text-[#354259] text-[20px] font-fat">
            تاریخچه شرکت در رویدادها
          </p>
        </div>
      </motion.div>
      <div variants={itemVariants} className="flex gap-2 justify-end my-5">
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
        <div className="h-[3px] w-64 bg-[#A0C498]"></div>
      </div>
      <p className="text-black text-[16px] font-light text-right">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>

      <div variants={itemVariants} className="grid grid-cols-12 gap-3 my-5">
        <div
          variants={itemVariants}
          className="col-span-12 sm:col-span-6 lg:col-span-4"
        >
          <div
            variants={itemVariants}
            className="relative bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 hover:border-[#A0C498] hover:border-[2px] cursor-pointer"
          >
            <Image
              src={event2}
              alt="event2"
              className="rounded-[8px] h-[200px] object-cover"
            />
            <div
              variants={itemVariants}
              className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
              style={{ direction: "rtl" }}
            >
              <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
                135 قسمت
              </button>
            </div>

            <div
              variants={itemVariants}
              className="flex flex-wrap justify-between items-center my-2"
              style={{ direction: "rtl" }}
            >
              <div variants={itemVariants} className="flex items-center gap-1">
                <Image src={mapsingle} alt="mapsingle" />

                <p className="text-[#354259] font-regular text-[16px]">
                  تهران، دولت آباد
                </p>
              </div>

              <div variants={itemVariants} className="flex items-center gap-1">
                <p className="text-[#354259] font-regular text-[16px]">
                  1403/05/21
                </p>
                <Image src={calendar} alt="calendar" />
              </div>
            </div>

            <div className="h-[1px] w-full bg-[#00000017]"></div>

            <p className="text-[20px] font-bold text-black text-right my-2">
              رویداد کتاب خوانی
            </p>

            <p
              className="text-[14px] font-light text-[#1E1E1E] text-justify leading-[28px]"
              dir="rtl"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>

            <div
              variants={itemVariants}
              className="border-[1px] border-[#EBDFBE] p-3 rounded-[8px] flex flex-wrap justify-between items-center mt-2"
              dir="rtl"
            >
              <div variants={itemVariants} className="flex gap-1 items-center">
                <p className="text-[#1E1E1E] text-[16px] font-regular">
                  هزینه ورودی:
                </p>
                <p className="text-[#1E1E1E] text-[16px] font-bold">250,000</p>
                <p className="text-[#1E1E1E] text-[14px] font-regular">تومان</p>
              </div>
              <div variants={itemVariants} className="flex gap-1 items-center">
                <p className="text-[#1E1E1E] text-[16px] font-regular">
                  ظرفیت:
                </p>
                <p className="text-[#1E1E1E] text-[16px] font-bold">20</p>
                <p className="text-[#1E1E1E] text-[14px] font-regular">نفر</p>
              </div>
            </div>

            <div
              variants={itemVariants}
              className="flex items-center gap-2 mt-2"
              dir="rtl"
            >
              <Image src={alert} alt="alert" />
              <p className="font-medium text-[#354259] text-[14px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>

            <button
              variants={itemVariants}
              onClick={openModal}
              className="bg-[#354259] rounded-[8px] p-3 text-[white] text-center text-[16px] font-bold mt-2 w-full"
            >
              ثبت نام در رویداد
            </button>

            <EventModal isModalOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
