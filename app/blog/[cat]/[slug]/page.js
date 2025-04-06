"use client";
import React from "react";
import Image from "next/image";

import blogbanner from "@/public/img/blogbanner.png";
import calender from "@/public/img/calendar.png";
import amin from "@/public/img/amin.jpg";

import RelatedBlog from "@/components/Blog/RelatedBlog";

import { FaPlus, FaAngleDown } from "react-icons/fa6";
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
      className="sm:my-12"
    >
      <motion.div
        variants={containerVariants}
        className="singleBlog-bg flex flex-col items-center justify-center mt-10 sm:mb-2"
        style={{ backgroundImage: `url(${blogbanner.src})` }}
      ></motion.div>

      <motion.div
        variants={containerVariants}
        className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto sm:my-2"
        dir="rtl"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap items-center justify-between"
        >
          <p className="text-[16px] font-bold text-[#000000]">هنری و ادبی</p>
          <div
            className="flex flex-wrap justify-between items-center my-2 gap-5"
            style={{ direction: "rtl" }}
          >
            <div className="flex items-center gap-1">
              <p className="text-[#354259] font-regular text-[14px]">
                1403/05/23
              </p>
              <Image src={calender} alt="calender" />
            </div>

            <div className="flex items-center gap-1">
              <p className="text-[#354259] font-regular text-[14px]">2,350</p>
              <IoEyeOutline color="#A0C498" />
            </div>
          </div>
        </motion.div>
        <div className="h-[1px] w-full bg-[#EBDFBE] my-1"></div>

        <motion.section variants={containerVariants} className="my-3">
          <p className="text-[24px] font-bold text-[#1E1E1E]">
            چگونه نویسندگی را شروع کنیم؟ راهنمایی برای نویسندگان تازه‌کار
          </p>
          <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[30px] text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            ان جامعه و متخصصان را می
          </p>
          <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[30px] text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیا و
            برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </motion.section>

        <motion.div variants={containerVariants}>
          <Image
            src={blogbanner}
            alt="blogbanner"
            className="rounded-[16px] my-5 h-[310px] object-cover"
          />
        </motion.div>

        <motion.section variants={containerVariants} className="my-3">
          <p className="text-[24px] font-bold text-[#1E1E1E]">
            چگونه نویسندگی را شروع کنیم؟ راهنمایی برای نویسندگان تازه‌کار
          </p>
          <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[30px] text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            ان جامعه و متخصصان را می
          </p>
          <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[30px] text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیا و
            برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </motion.section>

        {/* comments */}
        <motion.div
          variants={containerVariants}
          className="w-[100%] sm:w-[80%] m-auto"
        >
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

          <div className="flex gap-2 justify-center  items-center my-10">
            <FaAngleDown color="#354259" />
            <p className="text-[#354259] text-[16px] font-bold">همه نظرات</p>
          </div>
        </motion.div>
        <motion.div variants={containerVariants}>
          <RelatedBlog />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default page;
