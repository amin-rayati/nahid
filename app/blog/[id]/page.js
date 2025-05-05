"use client";
import React from "react";
import Image from "next/image";

import blogbanner from "@/public/img/blogbanner.png";
import calendar from "@/public/img/icons/calendar.png";
import eye from "@/public/img/icons/eye.png";
import amin from "@/public/img/amin.jpg";

import RelatedBlogSlider from "@/components/Slider/RelatedBlogSlider";

import { FaPlus, FaAngleDown } from "react-icons/fa6";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

const Page = () => {
  return (
    <div className="mt-[110px] sm:mt-[175px] md:mt-[180px]" dir="rtl">
      <div
        className="singleBlog-bg flex flex-col items-center justify-center  sm:mb-2"
        style={{ backgroundImage: `url(${blogbanner.src})` }}
      ></div>

      <div
        className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto sm:my-2"
        dir="rtl"
      >
        <div dir="ltr">
          <BreadCrumb />
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-[16px] font-bold text-[#000000]">هنری و ادبی</p>
          <div
            className="flex flex-wrap justify-between items-center my-2 gap-5"
            style={{ direction: "rtl" }}
          >
            <div className="flex items-center gap-1">
              <p className="text-[#354259] font-regular text-[14px]">
                1403/05/23
              </p>
              <Image src={calendar} alt="calendar" />
            </div>

            <div className="flex items-center gap-1">
              <p className="text-[#354259] font-regular text-[14px]">2,350</p>
              <Image src={eye} alt="eye" />
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-[#FFFFFF] my-1"></div>
        <section className="my-3">
          <p className="text-[24px] font-bold text-[#1E1E1E]">
            اهمیت کش بک در خرید از فروشگاه
          </p>
          <p className="text-[16px] text-[#1E1E1E] font-regular my-3 leading-[30px] text-justify">
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
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <p className="text-[16px] text-[#1E1E1E] font-regular my-3 leading-[30px] text-justify">
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
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </section>
        <div>
          <Image
            src={blogbanner}
            alt="blogbanner"
            className="rounded-[16px] my-5 h-[310px] object-cover"
          />
        </div>
        <section className="my-3">
          <p className="text-[24px] font-bold text-[#1E1E1E]">
            اهمیت کش بک در خرید از فروشگاه
          </p>
          <p className="text-[16px] text-[#1E1E1E] font-regular my-3 leading-[30px] text-justify">
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
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <p className="text-[16px] text-[#1E1E1E] font-regular my-3 leading-[30px] text-justify">
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
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </section>

        {/* comment */}
        <div className="w-[100%] md:w-[60%] mx-auto my-10">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex gap-2">
              <p className="text-[#1E1E1E] text-[16px] font-bold">
                نـــــظـــرات
              </p>
              <p className="text-[#1E1E1E] text-[16px] font-bold">(125)</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#1F5D6A] rounded-[8px] py-2 px-3">
              <FaPlus color="white" />
              <p className="text-[#FFFFFF] text-[14px] font-bold">افزودن نظر</p>
            </button>
          </div>

          <div className="bg-[#FFFFFF80]  rounded-[12px] p-3 my-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
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
                <p className="text-[#1E1E1E] text-[14px] font-bold">
                  امین رعیتی
                </p>
              </div>
              <div className="bg-[#EDF3F6] p-1 rounded-[5px]">
                <p className="text-[#1F5D6A] text-[14px] font-bold">4.5</p>
              </div>
            </div>

            <p
              className="text-[#1E1E1E] font-regular text-[12px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="bg-[#FFFFFF80]  rounded-[12px] p-3 my-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
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
                <p className="text-[#1E1E1E] text-[14px] font-bold">
                  امین رعیتی
                </p>
              </div>
              <div className="bg-[#EDF3F6] p-1 rounded-[5px]">
                <p className="text-[#1F5D6A] text-[14px] font-bold">4.5</p>
              </div>
            </div>

            <p
              className="text-[#1E1E1E] font-regular text-[12px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="bg-[#FFFFFF80]  rounded-[12px] p-3 my-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
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
                <p className="text-[#1E1E1E] text-[14px] font-bold">
                  امین رعیتی
                </p>
              </div>
              <div className="bg-[#EDF3F6] p-1 rounded-[5px]">
                <p className="text-[#1F5D6A] text-[14px] font-bold">4.5</p>
              </div>
            </div>

            <p
              className="text-[#1E1E1E] font-regular text-[12px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="bg-[#FFFFFF80]  rounded-[12px] p-3 my-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
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
                <p className="text-[#1E1E1E] text-[14px] font-bold">
                  امین رعیتی
                </p>
              </div>
              <div className="bg-[#EDF3F6] p-1 rounded-[5px]">
                <p className="text-[#1F5D6A] text-[14px] font-bold">4.5</p>
              </div>
            </div>

            <p
              className="text-[#1E1E1E] font-regular text-[12px] text-justify leading-[25px] my-3"
              style={{ direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و
              با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
            </p>
          </div>

          <div className="flex gap-2 justify-center items-center my-5">
            <FaAngleDown color="#1F5D6A" />
            <p className="text-[#1F5D6A] text-[16px] font-bold">همه نظرات</p>
          </div>
        </div>
        {/* slider */}
        <RelatedBlogSlider title={"مرتبط"} adjective={"بلاگ های"} />
      </div>
    </div>
  );
};

export default Page;
