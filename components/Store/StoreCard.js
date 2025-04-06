import React from "react";
import Image from "next/image";
import fav1 from "@/public/img/fav.png";
import basket from "@/public/img/basket.png";
import bank from "@/public/img/bank.png";
import page from "@/public/img/page.png";

const StoreCard = () => {
  return (
    <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3   hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
      <Image src={fav1} alt="fav1" className="rounded-[8px]" />

      <div
        className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
        style={{ direction: "rtl" }}
      >
        <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
          موجود
        </button>
      </div>

      <p className="text-[20px] font-bold text-black text-right my-5">
        گندم زارهای طلایی
      </p>

      <div
        className="flex flex-wrap justify-between items-center my-2"
        style={{ direction: "rtl" }}
      >
        <div className="flex items-center gap-1">
          <Image src={bank} alt="bank" />
          <div className="flex gap-1 items-center">
            <p className="text-[#354259] font-bold text-[16px]">250،000</p>
            <p className="text-[#354259] font-regular text-[12px]">تومان</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Image src={page} alt="page" />
          <div className="flex gap-1 items-center">
            <p className="text-[#354259] font-bold text-[16px]">252</p>
            <p className="text-[#354259] font-regular text-[12px]">صفحه</p>
          </div>
        </div>
      </div>

      <button className="flex bg-[#354259] rounded-[8px] w-full  p-3 text-[white] text-[16px] font-bold items-center justify-center gap-2">
        افزودن به سبد خرید
        <Image src={basket} alt="basket" />
      </button>
    </div>
  );
};

export default StoreCard;
