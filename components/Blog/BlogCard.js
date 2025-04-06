import React from "react";
import Image from "next/image";

import blog1 from "@/public/img/blog1.png";
import calender from "@/public/img/calendar.png";

import { IoEyeOutline } from "react-icons/io5";
const BlogCard = () => {
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3">
        <Image src={blog1} alt="blog1" className="rounded-[8px]" />
        <div className="my-2 flex flex-wrap items-center justify-between">
          <p className="w-[100%] sm:w-[50%] text-[16px] font-bold text-[#000000]">
            هنری و ادبی
          </p>
          <div
            className="w-[100%] sm:w-[50%] flex flex-wrap justify-between items-center my-2"
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
        </div>
        <div className="h-[1px] w-full bg-[#EBDFBE] my-1"></div>
        <p className="text-[20px] text-[#1E1E1E] font-bold my-3">
          چگونه نویسندگی را شروع کنیم؟ راهنمایی برای نویسندگان تازه‌کار
        </p>
        <p className="text-[16px] text-[#1e1e1eb8] font-light my-3 leading-[25px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی است.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
