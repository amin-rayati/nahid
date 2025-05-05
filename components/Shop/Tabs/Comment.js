import React from "react";
import { FaPlus, FaAngleDown } from "react-icons/fa";
import Image from "next/image";

import amin from "@/public/img/amin.jpg";

const Comment = () => {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-2">
          <p className="text-[#1E1E1E] text-[16px] font-bold">نـــــظـــرات</p>
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
            <p className="text-[#1E1E1E] text-[14px] font-bold">امین رعیتی</p>
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
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و با
          استفاده از طراحان گرافیک است، در ستون و سطرآنچنان که لازم است.
        </p>
      </div>

      <div className="flex gap-2 justify-center items-center my-5">
        <FaAngleDown color="#1F5D6A" />
        <p className="text-[#1F5D6A] text-[16px] font-bold">همه نظرات</p>
      </div>
    </div>
  );
};

export default Comment;
