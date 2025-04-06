"use client";
import React from "react";
import Faq from "@/components/Home/Faq";
import Image from "next/image";
import about1 from "@/public/img/about1.png";
import about2 from "@/public/img/about2.png";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto my-20"
    >
      <motion.p
        variants={itemVariants}
        className="text-black text-[24px] font-bold text-center"
      >
        داستان ما
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex gap-2 justify-center my-5"
      >
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
        <div className="h-[3px] w-64 bg-[#A0C498]"></div>
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-[#1E1E1E] text-[16px] font-light text-center"
      >
        لورم ایپسوم متن ساختگی...
      </motion.p>

      <motion.div variants={itemVariants} whileHover={imageHover}>
        <Image
          src={about1}
          alt="about1"
          className="rounded-[16px] my-5 h-[410px] object-cover"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-12 my-20 sm:gap-10"
        dir="rtl"
      >
        <motion.div
          variants={itemVariants}
          className="col-span-12 sm:col-span-12 md:col-span-5"
        >
          <p className="text-[#354259] text-[30px] sm:text-[48px] font-bold leading-[70px]">
            گروه فرهنگی ناهید بزرگترین مرجع تخصصی هنری و ادبی ایران
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-12 sm:col-span-12 md:col-span-7"
        >
          <p
            className="text-[#0F172A] text-[16px] font-light leading-[30px] text-justify"
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
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده است.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-12 my-20 sm:gap-10"
        dir="rtl"
      >
        <motion.div
          variants={itemVariants}
          className="col-span-12 sm:col-span-12 md:col-span-7"
        >
          <p className="text-[24px] font-bold text-[#1E1E1E] text-right">
            ما برآن شدیم که بهترین خدمات فرهنگی و ادبی را ارائه کنیم.
          </p>
          <p
            className="text-[#0F172A] text-[16px] font-light leading-[30px] my-5 text-justify"
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
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={imageHover}
          className="col-span-12 sm:col-span-12 md:col-span-5 m-auto"
        >
          <Image src={about2} alt="about2" />
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Faq />
      </motion.div>
    </motion.div>
  );
};

export default Page;
