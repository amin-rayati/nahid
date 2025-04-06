"use client";
import React, { useState } from "react";

import PoemModal from "@/components/Modals/PoemModal";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

import Image from "next/image";
import single1 from "@/public/img/single1.png";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants } = commonAnimations;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto my-20"
    >
      <motion.div variants={itemVariants}>
        <BreadCrumb />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-between gap-3 bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 sm:my-5 rounded-[16px]"
        dir="rtl"
      >
        <Image
          src={single1}
          alt="single1"
          className="border-[2px] border-[#EBDFBE] rounded-[16px] w-48 h-48"
        />
        <section className="flex-1">
          <div className="flex justify-between items-center">
            <p className="text-[#000000] font-bold text-[24px]">مولانا</p>

            <div className="flex  gap-2">
              <button className="bg-[#A0C49833] rounded-[8px] px-3 py-2 text-[#354259] text-[16px] font-regular">
                تست
              </button>
              <button className="bg-[#A0C49833] rounded-[8px] px-3 py-2 text-[#354259] text-[16px] font-regular">
                تست
              </button>
            </div>
          </div>
          <p
            className="text-[#000000] font-light text-[16px] leading-[28px] text-justify mt-5"
            dir="rtl"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها.
          </p>
        </section>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-12 gap-3 my-5"
        dir="rtl"
      >
        <div
          onClick={openModal}
          className="col-span-12 sm:col-span-3 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center"
        >
          <p className="text-[#1E1E1E] text-[20px] font-bold">دیوان شمس</p>
          <p className="my-2 text-[#1E1E1E] text-[16px] font-regular" dir="rtl">
            4 بخش
          </p>

          <PoemModal isModalOpen={isModalOpen} closeModal={closeModal} />
        </div>
        <div className="col-span-12 sm:col-span-3 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[20px] font-bold">گلستان سعدی</p>
          <p className="my-2 text-[#1E1E1E] text-[16px] font-regular" dir="rtl">
            4 بخش
          </p>
        </div>
        <div className="col-span-12 sm:col-span-3 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[20px] font-bold">گلستان سعدی</p>
          <p className="my-2 text-[#1E1E1E] text-[16px] font-regular" dir="rtl">
            4 بخش
          </p>
        </div>
        <div className="col-span-12 sm:col-span-3 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[20px] font-bold">گلستان سعدی</p>
          <p className="my-2 text-[#1E1E1E] text-[16px] font-regular" dir="rtl">
            4 بخش
          </p>
        </div>
        <div className="col-span-12 sm:col-span-3 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[20px] font-bold">گلستان سعدی</p>
          <p className="my-2 text-[#1E1E1E] text-[16px] font-regular" dir="rtl">
            4 بخش
          </p>
        </div>
        <div className="col-span-12 sm:col-span-3 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[20px] font-bold">گلستان سعدی</p>
          <p className="my-2 text-[#1E1E1E] text-[16px] font-regular" dir="rtl">
            4 بخش
          </p>
        </div>
        <div className="col-span-12 sm:col-span-3 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[20px] font-bold">گلستان سعدی</p>
          <p className="my-2 text-[#1E1E1E] text-[16px] font-regular" dir="rtl">
            4 بخش
          </p>
        </div>
        <div className="col-span-12 sm:col-span-3 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[20px] font-bold">گلستان سعدی</p>
          <p className="my-2 text-[#1E1E1E] text-[16px] font-regular" dir="rtl">
            4 بخش
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
