"use client";
import React, { useState } from "react";
import Image from "next/image";
import Faq from "@/components/About/Faq";
import txtback from "@/public/img/txtback.png";
import left from "@/public/img/left.png";
import googlemap from "@/public/img/googlemap.png";
import azadi from "@/public/img/azadi.png";
import sadi from "@/public/img/sadi.png";
import about1 from "@/public/img/about1.png";
import creative from "@/public/img/creative.png";
import client from "@/public/img/client.png";
import energy from "@/public/img/energy.png";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
const Page = () => {
  return (
    <>
      <div
        className="px-2 sm:px-4 py-4 mt-[110px] sm:mt-[175px] md:mt-[190px]"
        dir="rtl"
      >
        <div dir="ltr">
          <BreadCrumb />
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <div>
              <p className="text-[32px] absolute z-10">
                <span className="text-[#1E1E1E] font-morabba"> درباره </span>
                <span className="text-[#1F5D6A] font-morabba">آنیکا</span>
                <span className="text-[#1E1E1E] font-morabba">رت</span>
              </p>

              <Image
                src={txtback}
                alt="txtback"
                className="relative top-8 right-0"
              />
            </div>
            <p className="text-[14px] font-regular text-[#1E1E1E] leading-[30px] mt-10">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای است.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 m-auto md:m-0 flex justify-end">
            <Image src={left} alt="left" />
          </div>
        </div>
      </div>
      <div className="bg-[#1F5D6A] flex items-center justify-between px-2 sm:px-4 pt-10 mt-5 sm:mt-20">
        <div className="flex flex-col items-center justify-center m-auto">
          <p className="text-[20px] font-bold text-[#FFFFFF]">
            در همه جای ایران
          </p>
          <div className="bg-[#FFD14E] h-[2px] w-40 sm:w-80 my-5" />
          <p className="text-[14px] font-regular text-[#FFFFFF] text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <div className="flex gap-5">
            <Image src={azadi} alt="azadi" className="mt-5 hidden md:block" />
            <Image src={googlemap} alt="googlemap" className="my-10" />
            <Image src={sadi} alt="sadi" className="mt-5 hidden md:block" />
          </div>
        </div>
      </div>
      <div className="px-2 sm:px-4 py-4 mt-5 sm:mt-20">
        <Faq />
      </div>
      <div className="bg-[#1F5D6A] flex items-center justify-between px-2 sm:px-4 py-10 mt-5 sm:mt-20">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-end">
            <div className="relative text-right">
              <p className="text-[32px] absolute right-0 z-10">
                <span className="text-[#1E1E1E] font-morabba">درباره </span>
                <span className="text-[#FFFFFF] font-morabba">آنیکا</span>
                <span className="text-[#1E1E1E] font-morabba">رت</span>
              </p>

              <Image
                src={txtback}
                alt="txtback"
                className="relative top-8 right-0"
              />
            </div>

            <p
              className="text-[14px] font-regular text-[#FFFFFF] leading-[30px] mt-10 text-justify"
              dir="rtl"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای است.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 m-auto md:m-0 flex justify-end">
            <Image src={about1} alt="about1" className="objcet-contain" />
          </div>
        </div>
      </div>
      <div className="px-2 sm:px-4 py-4 mt-5 sm:mt-20">
        <p className="text-[#1E1E1E] text-[20px] font-bold text-center">
          چرا آنیکارت؟
        </p>
        <div className="flex gap-2 justify-center">
          <div className="h-[2px]  w-40 sm:w-80 my-5  bg-[#1F5D6A]"></div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-5">
          <div className="col-span-12 md:col-span-4 bg-[#EDF3F6] border-[2px] border-[white] rounded-[16px] px-5 py-4 flex flex-col items-center justify-center">
            <Image src={client} alt="client" />
            <p className="text-[#1E1E1E] text-[20px] font-medium my-5">
              مشتری مداری
            </p>
            <p
              className="text-[#1E1E1E] text-[14px] font-regular leading-[25px] text-justify"
              dir="rtl"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 bg-[#EDF3F6] border-[2px] border-[white] rounded-[16px] px-5 py-4 flex flex-col items-center justify-center">
            <Image src={creative} alt="creative" />
            <p className="text-[#1E1E1E] text-[20px] font-medium my-5">
              افراد با ذوق، خلاق و متفکر
            </p>
            <p
              className="text-[#1E1E1E] text-[14px] font-regular leading-[25px] text-justify"
              dir="rtl"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 bg-[#EDF3F6] border-[2px] border-[white] rounded-[16px] px-5 py-4 flex flex-col items-center justify-center">
            <Image src={energy} alt="energy" />
            <p className="text-[#1E1E1E] text-[20px] font-medium my-5">
              از بین بردن روزمرگی و تزریق هیجان
            </p>
            <p
              className="text-[#1E1E1E] text-[14px] font-regular leading-[25px] text-justify"
              dir="rtl"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
