"use client";
import React, { useState } from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import TextSettingModal from "@/components/Modals/TextSettingModal";

import typeo from "@/public/img/type.png";
import amin from "@/public/img/amin.jpg";

import Image from "next/image";
import share from "@/public/img/share.png";
import bookmark from "@/public/img/bookmark.png";

import {
  FaAngleRight,
  FaAngleLeft,
  FaPlus,
  FaAngleDown,
} from "react-icons/fa6";

import single1 from "@/public/img/single1.png";
import user from "@/public/img/user.png";
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
      <div
        className="grid grid-cols-12 gap-3 my-2"
        style={{ direction: "rtl" }}
      >
        {/* rightSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3 rightSide"
        >
          {/* poemInfo */}
          <div className="my-2 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3">
            <Image
              src={single1}
              alt="single1"
              className="border-[2px] border-[#EBDFBE] rounded-full"
            />
            <p className="text-[#1E1E1E] text-[24px] font-bold">نقره</p>

            <div className="flex gap-1 items-center my-5">
              <Image src={user} alt="user" />
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                شاعر قرن چهارم
              </p>
            </div>

            <div className="flex flex-wrap justify-end my-2 gap-2">
              <button className="bg-[#A0C49833] rounded-[8px] px-3 py-2 text-[#354259] text-[16px] font-regular">
                قرن 4
              </button>
              <button className="bg-[#A0C49833] rounded-[8px] px-3 py-2 text-[#354259] text-[16px] font-regular">
                قرن 5
              </button>
            </div>
          </div>

          {/* txtModal */}
          <div
            onClick={openModal}
            className="flex gap-1 items-center justify-center bg-[#FF7F5B] rounded-[8px] py-4 w-full my-3"
          >
            <Image src={typeo} alt="typo" />
            <p className="font-bold text-[16px] text-white">تنظیمات متن</p>
          </div>

          <TextSettingModal isModalOpen={isModalOpen} closeModal={closeModal} />
        </motion.div>

        {/* leftSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-9 leftSide"
        >
          {/* info */}
          <div
            className="flex flex-wrap items-center justify-between"
            style={{ direction: "rtl" }}
          >
            <p className="text-[#354259] text-[32px] font-bold ">
              غزل شماره یک
            </p>

            <div className=" flex items-center gap-5">
              <Image src={bookmark} alt="bookmark" />
              <Image src={share} alt="share" />
            </div>
          </div>

          {/* poem */}
          <section className="flex flex-col items-center">
            {/* item1 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">1</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                در سینه‌ها برخاسته، اندیشه را آراسته
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                خورشید را حاجب تویی، اومید را واجب تویی
              </p>
            </div>
            {/* item21 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">2</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                امروز خندان آمدی، مفتاح زندان آمدی
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای رستخیز ناگهان وی رحمت بی‌منتها
              </p>
            </div>
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>
            {/* item1 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">1</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                در سینه‌ها برخاسته، اندیشه را آراسته
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                خورشید را حاجب تویی، اومید را واجب تویی
              </p>
            </div>
            {/* item21 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">2</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                امروز خندان آمدی، مفتاح زندان آمدی
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای رستخیز ناگهان وی رحمت بی‌منتها
              </p>
            </div>
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>
            {/* item1 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">1</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                در سینه‌ها برخاسته، اندیشه را آراسته
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                خورشید را حاجب تویی، اومید را واجب تویی
              </p>
            </div>
            {/* item21 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">2</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                امروز خندان آمدی، مفتاح زندان آمدی
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای رستخیز ناگهان وی رحمت بی‌منتها
              </p>
            </div>
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>{" "}
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>{" "}
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>
            {/* item3 */}
            <div className="flex justify-center items-center bg-[#FEFCED] border-[1px] border-[#EBDFBE] w-6 h-6 rounded-full">
              <p className="text-[#1E1E1E] text-[14px] font-regular">3</p>
            </div>
            <div
              className="grid grid-cols-12 my-5 w-full"
              dir="rtl"
              style={{ justifyContent: "space-evenly" }}
            >
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ما زان دغل کژبین شده، با بی‌گنه در کین شده
              </p>
              <p className="col-span-12 sm:col-span-6 text-[#1E1E1E] text-[16px] font-light text-center">
                ای روح‌بخش بی‌بدل، وی لذّت علم و عمل
              </p>
            </div>
          </section>

          {/* buttons */}
          <div className="flex  items-center justify-between text-center gap-2 my-5">
            <button className="flex items-center gap-2 font-bold text-[#354259] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px] font-bold">
              <FaAngleRight />
              شعر قبل
            </button>
            <button className="flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px] font-bold">
              <FaAngleLeft />
              شعر بعد
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page;
