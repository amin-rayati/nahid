"use client";

import React from "react";
import BreadCrumb from "@/components/BreadCrumb/index";
import SingleStoryInfo from "@/components/SingleStory/SingleStoryInfo";
import Image from "next/image";
import typeo from "@/public/img/type.png";
import amin from "@/public/img/amin.jpg";
import basket from "@/public/img/basket.png";
import { FaPlus, FaAngleDown, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";

const page = () => {
  const { containerVariants, itemVariants } = commonAnimations;
  return (
    <motion.div
      className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto my-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <BreadCrumb />
      </motion.div>
      <div className="grid grid-cols-12 gap-3" style={{ direction: "rtl" }}>
        {/* rightSide */}
        <motion.div
          className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3 rightSide"
          variants={itemVariants}
        >
          <SingleStoryInfo isStore={"yes"} />
        </motion.div>

        {/* leftSide */}
        <motion.div
          className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-9 leftSide"
          variants={itemVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-[#354259] text-[32px] font-bold my-2 text-center"
          >
            خلاصه داستان
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-[#000000] text-[16px] font-light text-justify leading-[28px]"
            style={{ direction: "rtl" }}
          >
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
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
            از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
            گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
            طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
            توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
            تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
            جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
            گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
            از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
            فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
            گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
            و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
          </motion.p>

          {/* <motion.div variants={itemVariants}>
            <button
              className="flex  gap-2 bg-[#354259] rounded-[8px] py-3 px-4 justify-end text-center my-5"
              style={{ justifyContent: "center" }}
            >
              <Image src={basket} alt="basket" />
              <p className="text-white text-[16px] font-bold">
                افزودن به سبد خرید
              </p>
            </button>
          </motion.div> */}

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-between items-center my-5 gap-2"
          >
            <div className="flex items-center gap-3">
              <button className="flex border-[2px] border-[#354259] rounded-[8px] py-3 px-4 justify-center text-[#354259]">
                <FaMinus size={20} />
              </button>
              <p className="text-[#1E1E1E] text-[16px] font-bold">2</p>
              <button className="flex border-[2px] bg-[#354259] rounded-[8px] py-3 px-4 justify-center text-white">
                <FaPlus size={20} />
              </button>
            </div>
            <button
              className="flex gap-2 bg-[#354259] rounded-[8px] py-3 px-4 justify-center text-center"
              style={{ justifyContent: "center" }}
            >
              <Image src={basket} alt="basket" />
              <p className="text-white text-[16px] font-bold">
                مشاهده سبد خرید
              </p>
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between text-center gap-2 mt-10 mb-5"
          >
            {/* Comments header section */}
            <div className="flex items-center gap-2">
              <p className="text-[#1E1E1E] text-[24px] font-bold">نظرات</p>
              <p className="text-[#1E1E1E] text-[16px] font-bold">(125)</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPlus color="#354259" />
              <p className="text-[#354259] text-[16px] font-bold">افزودن نظر</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-3"
          >
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
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 my-3"
          >
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
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-2 justify-center items-center my-10"
          >
            <FaAngleDown color="#354259" />
            <p className="text-[#354259] text-[16px] font-bold">همه نظرات</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default page;
