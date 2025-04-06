import React from "react";
import Image from "next/image";

import contractor from "@/public/img/contractor.png";
import event from "@/public/img/event.png";
import charity from "@/public/img/charity.png";

import { FaAngleLeft } from "react-icons/fa";

const Cats = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-4 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] py-7 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={contractor} alt="contractor" />
          <p className="text-[#1E1E1E] text-[15px] sm:text-[20px] font-bold">
            خالقین اثر دنبال شده
          </p>
        </div>
        <FaAngleLeft color="#354259" />
      </div>
      <div className="col-span-12 lg:col-span-4 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] py-7 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={charity} alt="charity" />
          <p className="text-[#1E1E1E] text-[15px] sm:text-[20px] font-bold">
            نیکوکاری
          </p>
        </div>
        <FaAngleLeft color="#354259" />
      </div>
      <div className="col-span-12 lg:col-span-4 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] py-7 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={event} alt="event" />
          <p className="text-[#1E1E1E] text-[15px] sm:text-[20px] font-bold">
            رویدادها
          </p>
        </div>
        <FaAngleLeft color="#354259" />
      </div>
    </>
  );
};

export default Cats;
