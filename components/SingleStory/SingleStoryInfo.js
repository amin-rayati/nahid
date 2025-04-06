import React from "react";
import Image from "next/image";
import single1 from "@/public/img/single1.png";
import calendar from "@/public/img/calendarsingle.png";
import bookPages from "@/public/img/bookPages.png";
import user from "@/public/img/user.png";
import amin from "@/public/img/amin.jpg";
import creator1 from "@/public/img/creator1.png";
import { IoEyeOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";

const SingleStoryInfo = ({ isStore }) => {
  return (
    <div className="sm:my-5">
      <div className="my-2 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3">
        <Image
          src={single1}
          alt="single1"
          className="border-[2px] border-[#EBDFBE] rounded-[16px]"
        />
        <div className="flex justify-between items-center my-5">
          <p className="text-[#1E1E1E] text-[24px] font-bold">نقره</p>

          <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[16px] font-regular px-2 py-1 rounded-[8px]">
            در جریان
          </button>
        </div>

        {isStore === "yes" && (
          <div className="flex gap-1 items-center my-5">
            <Image src={bookPages} alt="bookPages" />
            <p className="text-[#000000] text-[16px] font-regular">
              صفحات: 254
            </p>
          </div>
        )}

        <div className="flex gap-1 items-center my-5">
          <Image src={calendar} alt="calendar" />
          <p className="text-[#000000] text-[16px] font-regular">
            تاریخ شروع: 1403/11/23
          </p>
        </div>

        {isStore === "yes" && (
          <div className="flex flex-wrap gap-5">
            <div className="flex gap-1 items-center">
              <Image src={user} alt="user" />
              <p className="text-[#000000] text-[16px] font-regular">
                نویسنده:
              </p>
            </div>
            <div
              className="flex flex-wrap items-center gap-2"
              style={{ direction: "rtl" }}
            >
              <Image
                src={amin}
                alt="amin"
                width={20}
                height={20}
                className="rounded-[8px]"
              />
              <p className="text-[#1E1E1E] text-[16px] font-bold">امین رعیتی</p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-end my-2 gap-2">
          <button className="bg-[#A0C49833] rounded-[8px] px-3 py-2 text-[#354259] text-[16px] font-regular">
            عاشقانه
          </button>
          <button className="bg-[#A0C49833] rounded-[8px] px-3 py-2 text-[#354259] text-[16px] font-regular">
            حماسی
          </button>
          <button className="bg-[#A0C49833] rounded-[8px] px-3 py-2 text-[#354259] text-[16px] font-regular">
            خانوادگی
          </button>
        </div>
      </div>
      {isStore !== "yes" && (
        <div
          className="col-span-12 sm:col-span-6 md:col-span-3 flex gap-2 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px]
              p-3"
          style={{ direction: "rtl" }}
        >
          <Image src={creator1} alt="creator1" className="rounde-[8px]" />
          <section className="flex flex-col justify-between">
            <p className="text-[#1E1E1E] text-[20px] font-bold">امین رعیتی</p>
            <div className="flex gap-1 items-center">
              <IoEyeOutline color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">
                  2,500,000
                </p>
                <p className="text-[#354259] font-regular text-[12px]">
                  بازدید
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LuBook color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">253</p>
                <p className="text-[#354259] font-regular text-[12px]">اثر</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default SingleStoryInfo;
