import React from "react";
import Image from "next/image";
import eshterak from "@/public/img/eshterak.png";
import checkicon from "@/public/img/checkicon.png";
import closeicon from "@/public/img/closeicon.png";
const MemberShip = () => {
  return (
    <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-4 rounded-[16px]">
      {/* status */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
          <Image src={eshterak} alt="eshterak" />
          <p className="text-[#1E1E1E] text-[20px] font-regular">
            وضعیت اشتراک
          </p>
        </div>
        <button className="border-[2px] border-[#354259] rounded-[8px] text-[#354259] text-[16px] font-bold p-2">
          تمدید اشتراک
        </button>
      </div>
      {/* time */}
      <div className="flex items-center justify-between my-5">
        <div className="flex gap-1 items-center">
          <p className="text-[#1E1E1E] text-[16px] font-bold">21</p>
          <p className="text-[#1E1E1E] text-[16px] font-regular">
            روز باقی مانده
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-[#1E1E1E] text-[16px] font-bold">9</p>
          <p className="text-[#1E1E1E] text-[16px] font-regular">روز گذشته</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 rounded-full bg-[#FAF1D7] overflow-hidden rounded-[8px]">
        <div
          className="h-full bg-[#A0C498] transition-all duration-300 rounded-[8px]"
          style={{ width: `${(9 / 30) * 100}%` }}
        ></div>
      </div>

      {/* expireDate */}
      <div className="flex flex-wrap justify-between my-5">
        <div>
          <div className="flex items-center gap-2">
            <Image src={checkicon} alt="checkicon" className="object-contain" />
            <p className="text-[#1e1e1e94] text-[16px] font-regular">
              فعالسازی:
            </p>
          </div>
          <p className="text-[#1E1E1E] text-[16px] font-bold my-2">
            یک شنبه 12 اسفند 1403
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Image src={closeicon} alt="closeicon" className="object-contain" />
            <p className="text-[#1e1e1e94] text-[16px] font-regular">انقضا:</p>
          </div>
          <p className="text-[#1E1E1E] text-[16px] font-bold my-2">
            یک شنبه 12 اسفند 1403
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
