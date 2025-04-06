"use client";
import React from "react";
import BreadCrumb from "@/components/BreadCrumb/Index";
import SingleStoryInfo from "@/components/SingleStory/SingleStoryInfo";
import SingleEpisodeSort from "@/components/SingleEpisode/SingleEpisodeSort";
import Image from "next/image";
import AudioPlayer from "@/components/Audio/AudioPlayer";
import amin from "@/public/img/amin.jpg";

import {
  FaAngleRight,
  FaAngleLeft,
  FaPlus,
  FaAngleDown,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants } = commonAnimations;
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
      <div className="grid grid-cols-12 gap-3" style={{ direction: "rtl" }}>
        {/* rightSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3 rightSide"
        >
          <SingleStoryInfo />
        </motion.div>

        {/* leftSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-9 leftSide"
        >
          <SingleEpisodeSort />
          <AudioPlayer />

          <div className="flex  items-center justify-between text-center gap-2 my-5">
            <button className="flex items-center gap-2 font-bold text-[#354259] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px] font-bold">
              <FaAngleRight />
              قسمت قبل
            </button>
            <button className="flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px] font-bold">
              <FaAngleLeft />
              قسمت بعد
            </button>
          </div>
          <div className="flex  items-center justify-between text-center gap-2 mt-10 mb-5">
            <div className="flex items-center gap-2">
              <p className="text-[#1E1E1E] text-[24px] font-bold">نظرات</p>
              <p className="text-[#1E1E1E] text-[16px] font-bold">(125)</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPlus color="#354259" />
              <p className="text-[#354259] text-[16px] font-bold">افزودن نظر</p>
            </div>
          </div>

          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-3">
            <div
              className="flex flex-wrap items-center gap-2"
              style={{ direction: "rtl" }}
            >
              <Image
                src={amin}
                alt="amin"
                width={20}
                height={20}
                className="rounded-full"
              />
              <p className="text-[#1E1E1E] text-[16px] font-bold">امین رعیتی</p>
            </div>
            <p
              className="text-[#000000] font-light text-[14px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-3">
            <div
              className="flex flex-wrap items-center gap-2"
              style={{ direction: "rtl" }}
            >
              <Image
                src={amin}
                alt="amin"
                width={20}
                height={20}
                className="rounded-full"
              />
              <p className="text-[#1E1E1E] text-[16px] font-bold">امین رعیتی</p>
            </div>
            <p
              className="text-[#000000] font-light text-[14px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>

          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-3">
            <div
              className="flex flex-wrap items-center gap-2"
              style={{ direction: "rtl" }}
            >
              <Image
                src={amin}
                alt="amin"
                width={20}
                height={20}
                className="rounded-full"
              />
              <p className="text-[#1E1E1E] text-[16px] font-bold">امین رعیتی</p>
            </div>
            <p
              className="text-[#000000] font-light text-[14px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-3">
            <div
              className="flex flex-wrap items-center gap-2"
              style={{ direction: "rtl" }}
            >
              <Image
                src={amin}
                alt="amin"
                width={20}
                height={20}
                className="rounded-full"
              />
              <p className="text-[#1E1E1E] text-[16px] font-bold">امین رعیتی</p>
            </div>
            <p
              className="text-[#000000] font-light text-[14px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>

          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-3">
            <div
              className="flex flex-wrap items-center gap-2"
              style={{ direction: "rtl" }}
            >
              <Image
                src={amin}
                alt="amin"
                width={20}
                height={20}
                className="rounded-full"
              />
              <p className="text-[#1E1E1E] text-[16px] font-bold">امین رعیتی</p>
            </div>
            <p
              className="text-[#000000] font-light text-[14px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-3">
            <div
              className="flex flex-wrap items-center gap-2"
              style={{ direction: "rtl" }}
            >
              <Image
                src={amin}
                alt="amin"
                width={20}
                height={20}
                className="rounded-full"
              />
              <p className="text-[#1E1E1E] text-[16px] font-bold">امین رعیتی</p>
            </div>
            <p
              className="text-[#000000] font-light text-[14px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>

          <div className="flex gap-2 justify-center  items-center my-10">
            <FaAngleDown color="#354259" />
            <p className="text-[#354259] text-[16px] font-bold">همه نظرات</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page;
