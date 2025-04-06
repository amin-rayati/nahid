"use client";
import React, { useState } from "react";
import Image from "next/image";
import event2 from "@/public/img/event2.png";
import CharityModal from "@/components/Modals/CharityModal";
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
      <div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-between"
        style={{ direction: "rtl" }}
      >
        <p className="text-black text-[24px] font-bold">نیکوکاری</p>
      </div>
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
            className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 hover:border-[#A0C498] hover:border-[2px] cursor-pointer"
          >
            <Image
              src={event2}
              alt="event2"
              className="rounded-[8px] h-[200px] object-cover"
            />

            <p className="text-[20px] font-bold text-black text-right my-2">
              پویش همدلی
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

            <button
              onClick={openModal}
              className="bg-[#354259] rounded-[8px] p-3 text-[white] text-center text-[16px] font-bold mt-2 w-full"
            >
              کمک به خیریه
            </button>

            <CharityModal isModalOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
