import React from "react";
import Image from "next/image";
import upload from "@/public/img/icons/upload.png";
import info from "@/public/img/icons/info.png";

const page = () => {
  return (
    <div
      className="my-20 flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl p-4"
      dir="rtl"
    >
      <div className="w-[100%] md:w-[70%] mx-auto px-2">
        <p className="text-[#1E1E1E] text-[24px] font-bold">
          احراز هویت آنیکارت
        </p>

        <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>

        <div className="grid grid-cols-12 gap-4 my-3">
          <div className="col-span-12 sm:col-span-6">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              نام <small className="text-[#E24343]">*</small>
            </p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="نام خود را وارد کنید"
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              نام خانوادگی <small className="text-[#E24343]">*</small>
            </p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="نام خانوادگی خود را وارد کنید"
              />
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              کد ملی<small className="text-[#E24343]">*</small>
            </p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="کد ملی خود را وارد کنید"
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              تاریخ تولد<small className="text-[#E24343]">*</small>
            </p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="تاریخ تولد خود را وارد کنید"
              />
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              شماره تماس<small className="text-[#E24343]">*</small>
            </p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="شماره تماس  خود را وارد کنید"
              />
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <p className="text-[#1E1E1E] text-[14px] font-regular">ایمیل</p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="    ایمیل  خود را وارد کنید"
              />
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <p className="text-[#1E1E1E] text-[14px] font-regular">شماره شبا</p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="شماره شبای  خود را وارد کنید"
              />
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              کد پستی<small className="text-[#E24343]">*</small>
            </p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="کد پستی  خود را وارد کنید"
              />
            </div>
          </div>

          <div className="col-span-12 ">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              آدرس<small className="text-[#E24343]">*</small>
            </p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="آدرس خود را وارد کنید"
              />
            </div>
          </div>
          <div className="col-span-12">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              تصویر<small className="text-[#E24343]">*</small>
            </p>
            <div className="w-full bg-[#FFFFFF]  px-5 py-3  rounded-[8px]  flex items-center justify-center gap-2 mt-4">
              <Image src={upload} alt="upload" />
              <p className="text-[#1E1E1E] text-[14px] font-medium">
                آپلود فایل عکس
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Image src={info} alt="info" />
              <p className="text-[#1E1E1E] text-[12px] font-regular">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                و با استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم
                است.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px] w-[100%] sm:w-[20%] px-5 py-4">
            ارسال درخواست
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
