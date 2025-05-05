import React from "react";
import Image from "next/image";
import user1 from "@/public/img/icons/user1.png";

const Statistic = () => {
  return (
    <div className="bg-[#1F5D6A] flex items-center justify-between px-2 sm:px-4 py-4">
      <div className="grid grid-cols-12 gap-2 sm:gap-10" dir="rtl">
        <div className="col-span-12 md:col-span-6">
          <p className="text-[18px] sm:text-[20px] text-white font-bold">
            آمار آنیکارت
          </p>
          <p
            className="text-[12px] sm:text-[14px] text-white font-regular leading-[28px] mt-2 text-justify"
            dir="rtl"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="grid grid-cols-12 col-span-12 md:col-span-6 gap-2">
          <div className="col-span-12 sm:col-span-6 flex flex-wrap items-center justify-around gap-2 rounded-[12px] bg-[#1e1e1e3d] p-3">
            <p className="text-[#FFD14E] text-[20px] sm:text-[40px] font-bold">
              25،540
            </p>
            <p className="text-[#FFD14E] text-[10px] sm:text-[20px] font-medium flex items-center gap-1">
              <Image src={user1} alt="user1" className="mb-1" />
              کاربر
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 flex flex-wrap items-center justify-around gap-2 rounded-[12px] bg-[#1e1e1e3d] p-3">
            <p className="text-[#FFD14E] text-[20px] sm:text-[40px] font-bold">
              25،540
            </p>
            <p className="text-[#FFD14E] text-[10px] sm:text-[20px] font-medium flex items-center gap-1">
              <Image src={user1} alt="user1" className="mb-1" />
              کاربر
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
