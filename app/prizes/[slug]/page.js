"use client";
import React, { useState } from "react";
import Image from "next/image";

import coin2 from "@/public/img/icons/coin2.png";
import prizebanner from "@/public/img/prizebanner.png";

const Page = () => {
  return (
    <div
      className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl my-20 p-4"
      dir="rtl"
    >
      <div>
        <Image
          src={prizebanner}
          alt="prizebanner"
          className="rounded-[16px] my-5 h-[250px] object-cover"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[24px] font-bold text-[#000000]">
          10 روز اشتراک ویژه
        </p>

        <div className="w-[400px] flex flex-wrap items-center justify-between bg-[#EDF3F6] border-[2px] border-[#FFFFFF] p-3 rounded-[16px]">
          <div className="flex flex-wrap items-center justify-between gap-2 my-3">
            <div className="flex items-center gap-2">
              <Image src={coin2} alt="coin2" />
              <p className="text-[#1E1E1E] font-regular text-[14px]">
                امتیاز لازم:
              </p>
            </div>
            <div className="border-[#1F5D6A] border-[1px] rounded-[4px] px-4">
              <p className="text-[#1E1E1E] text-[14px] font-bold">25</p>
            </div>
          </div>
          <button className="w-full sm:w-[50%] bg-[#1F5D6A] text-center text-[#FFFFFF] text-[14px] font-bold rounded-[8px] p-3">
            دریافت جایزه
          </button>
        </div>
      </div>

      <section className="my-3">
        <p className="text-[16px] text-[#1E1E1E] font-regular my-3 leading-[30px] text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان فارسی ایجاد کرد، در این صورت می توان امید داشت که
          تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
          زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
          اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ که لازم است، و برای شرایط
          فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
          شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
          بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
          در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
          دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
          مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
          دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </section>
    </div>
  );
};

export default Page;
