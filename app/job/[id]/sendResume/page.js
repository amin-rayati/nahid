import React from "react";
import Image from "next/image";
import upload from "@/public/img/icons/upload.png";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

const page = () => {
  return (
    <div
      className="px-2 sm:px-4 py-4 mt-[110px] sm:mt-[175px] md:mt-[190px]"
      dir="rtl"
    >
      <div dir="ltr">
        <BreadCrumb />
      </div>
      <div className="w-[100%] md:w-[70%] mx-auto">
        <p className="text-[#1E1E1E] text-[24px] font-bold">
          فرم درخواست فرصت شغلی
        </p>

        <div className="h-[2px] w-full bg-[#FFFFFF] my-3"></div>

        <div className="grid grid-cols-12 gap-4 my-3">
          <div className="col-span-12 sm:col-span-6">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              نام و نام خانوادگی <small className="text-[#E24343]">*</small>
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
              شماره تماس <small className="text-[#E24343]">*</small>
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
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              نوع همکاری<small className="text-[#E24343]">*</small>
            </p>
            <div className="relative mt-4">
              <select className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular appearance-none">
                <option className="text-[#1E1E1E] text-[14px] font-regular text-right">
                  نوع همکاری شما
                </option>
                <option className="text-[#1E1E1E] text-[14px] font-regular text-right">
                  تمام وقت
                </option>
                <option className="text-[#1E1E1E] text-[14px] font-regular text-right">
                  پاره وقت
                </option>
              </select>

              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#1F5D6A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-12 ">
            <p className="text-[#1E1E1E] text-[14px] font-regular">پیام</p>
            <div className="relative mt-4">
              <textarea
                rows={4}
                type="text"
                className="resize-none w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="    پیام  خود را وارد کنید"
              />
            </div>
          </div>
          <div className="col-span-12">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              فایل رزومه<small className="text-[#E24343]">*</small>
            </p>
            <div className="w-full bg-[#FFFFFF]  px-5 py-3  rounded-[8px]  flex items-center justify-center gap-2 mt-4">
              <Image src={upload} alt="upload" />
              <p className="text-[#1E1E1E] text-[14px] font-medium">
                آپلود فایل رزومه
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
