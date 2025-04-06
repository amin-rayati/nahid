import React from "react";
import Image from "next/image";

import followers from "@/public/img/followers.png";
import likes from "@/public/img/likes.png";
import views from "@/public/img/views.png";

import { FaAngleLeft } from "react-icons/fa";

const Cats = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-4 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] py-7 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={followers} alt="followers" />
          <p className="text-[#1E1E1E] text-[15px] sm:text-[18px] font-regular">
            <strong className="text-[#1E1E1E] text-[15px] sm:text-[18px] font-bold">
              25،050
            </strong>{" "}
            دنبال کننده
          </p>
        </div>
        <FaAngleLeft color="#354259" />
      </div>
      <div className="col-span-12 lg:col-span-4 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] py-7 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={likes} alt="likes" />
          <p className="text-[#1E1E1E] text-[15px] sm:text-[18px] font-regular">
            <strong className="text-[#1E1E1E] text-[15px] sm:text-[18px] font-bold">
              25،050
            </strong>{" "}
            پسند
          </p>
        </div>
        <FaAngleLeft color="#354259" />
      </div>
      <div className="col-span-12 lg:col-span-4 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] py-7 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={views} alt="views" />
          <p className="text-[#1E1E1E] text-[15px] sm:text-[18px] font-regular">
            <strong className="text-[#1E1E1E] text-[15px] sm:text-[18px] font-bold">
              25،050
            </strong>{" "}
            بازدید
          </p>
        </div>
        <FaAngleLeft color="#354259" />
      </div>
    </>
  );
};

export default Cats;
