import React from "react";
import Image from "next/image";
import Link from "next/link";
import txtback from "@/public/img/txtback.png";
import location from "@/public/img/icons/location.png";
import fulltime from "@/public/img/icons/fulltime.png";
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
      <div className="flex justify-center">
        <p className="text-[20px] sm:text-[32px] font-bold text-[#1E1E1E] absolute z-10">
          فرصت‌های شغلی آنیکارت
        </p>
        <Image
          src={txtback}
          alt="txtback"
          className="relative top-3  sm:top-6 right-0  sm:w-[300px]"
        />
      </div>

      <div className="grid grid-cols-12 gap-2 my-10 sm:my-20">
        <div className="col-span-12 md:col-span-6">
          <div className="bg-[#EDF3F6] border-[2px] border-white p-4 rounded-[16px] flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[#1E1E1Es] text-[16px] font-bold">
                کارشناس طراحی گرافیک
              </p>
              <div
                className="flex flex-wrap justify-between items-center my-2 gap-5"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <Image src={location} alt="location" />

                  <p className="text-[#1E1E1E] font-regular text-[14px]">
                    تهران
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <Image src={fulltime} alt="fulltime" />
                  <p className="text-[#1E1E1E] font-regular text-[14px]">
                    تمام وقت
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/job/گرافیست"
              className="text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px] p-2 cursor-pointer"
            >
              مشاهده جزئیات
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="bg-[#EDF3F6] border-[2px] border-white p-4 rounded-[16px] flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[#1E1E1Es] text-[16px] font-bold">
                کارشناس طراحی گرافیک
              </p>
              <div
                className="flex flex-wrap justify-between items-center my-2 gap-5"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <Image src={location} alt="location" />

                  <p className="text-[#1E1E1E] font-regular text-[14px]">
                    تهران
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <Image src={fulltime} alt="fulltime" />
                  <p className="text-[#1E1E1E] font-regular text-[14px]">
                    تمام وقت
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/job/1"
              className="text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px] p-2 cursor-pointer"
            >
              مشاهده جزئیات
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="bg-[#EDF3F6] border-[2px] border-white p-4 rounded-[16px] flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[#1E1E1Es] text-[16px] font-bold">
                کارشناس طراحی گرافیک
              </p>
              <div
                className="flex flex-wrap justify-between items-center my-2 gap-5"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <Image src={location} alt="location" />

                  <p className="text-[#1E1E1E] font-regular text-[14px]">
                    تهران
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <Image src={fulltime} alt="fulltime" />
                  <p className="text-[#1E1E1E] font-regular text-[14px]">
                    تمام وقت
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/job/1"
              className="text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px] p-2 cursor-pointer"
            >
              مشاهده جزئیات
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="bg-[#EDF3F6] border-[2px] border-white p-4 rounded-[16px] flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[#1E1E1Es] text-[16px] font-bold">
                کارشناس طراحی گرافیک
              </p>
              <div
                className="flex flex-wrap justify-between items-center my-2 gap-5"
                style={{ direction: "rtl" }}
              >
                <div className="flex items-center gap-1">
                  <Image src={location} alt="location" />

                  <p className="text-[#1E1E1E] font-regular text-[14px]">
                    تهران
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <Image src={fulltime} alt="fulltime" />
                  <p className="text-[#1E1E1E] font-regular text-[14px]">
                    تمام وقت
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/job/1"
              className="text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px] p-2 cursor-pointer"
            >
              مشاهده جزئیات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
