import React from "react";
import Image from "next/image";

import calendar from "@/public/img/calendar.png";
import amin from "@/public/img/amin.jpg";

import comment from "@/public/img/comment.png";

const Comments = () => {
  return (
    <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 rounded-[16px]">
      {/* status */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
          <Image src={comment} alt="comment" />
          <p className="text-[#1E1E1E] text-[20px] font-regular">نظرات جدید</p>
        </div>
        <button className="border-[2px] border-[#354259] rounded-[8px] text-[#354259] text-[16px] font-bold p-2">
          همه نظرات
        </button>
      </div>
      <div className="border-[1px] border-[#EBDFBE] p-3 my-5 rounded-[8px]">
        <div className="flex justify-between items-center">
          <p className="text-[#1E1E1E] text-[16px] font-bold">نقره</p>
          <p className="text-[#1E1E1E] text-[16px] font-regular">قسمت 2</p>
        </div>
        <p className="text-[#1E1E1E] text-[14px] font-light my-5">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
        <div className="h-[1px] w-full bg-[#EBDFBE] my-3"></div>

        <div className="flex flex-wrap justify-between items-center">
          <div
            className="flex flex-wrap items-center gap-2 my-1"
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
          <div className="flex justify-end items-center gap-2 my-1">
            <div className="flex gap-1 items-center">
              <p className="text-[14px] text-[#1E1E1E] font-regular">12:22</p>
              <div className="w-[1px] h-4 mx-1 bg-[#1E1E1E]"></div>
              <p className="text-[14px] text-[#1E1E1E] font-regular">
                1403/05/23
              </p>
            </div>
            <Image src={calendar} alt="calendar" className="mb-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
