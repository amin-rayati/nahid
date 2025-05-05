import React from "react";
import Image from "next/image";
import Link from "next/link";
import store1 from "@/public/img/store1.png";
import location from "@/public/img/icons/location.png";
import grid from "@/public/img/icons/grid.png";

import { FaStar } from "react-icons/fa";

const StoreCard = () => {
  return (
    <Link href="/shop/id">
      <div className="relative bg-[#EDF3F6] border-[2px] border-white rounded-[16px] p-[1px] cursor-pointer">
        <Image
          src={store1}
          alt="store1"
          className="rounded-t-[16px] w-full h-[200px] object-cover"
        />

        <div
          className="absolute top-4 right-5 left-5 flex flex-wrap justify-between gap-2"
          style={{ direction: "rtl" }}
        >
          <button className="flex items-center gap-1 bg-[#FFD14E]  px-3 py-2 rounded-[5px]">
            <p className="text-[#1F5D6A] text-[12px] font-fat">4.5</p>
            <FaStar color="#1F5D6A" size={10} />
          </button>
        </div>

        <div
          className="absolute top-0 left-5 z-10"
          style={{ direction: "rtl" }}
        >
          <div className="relative w-12">
            <div className="bg-[#E24343] text-white text-lg font-bold text-center py-4 clip-ribbon">
              ٪۱۰
            </div>
          </div>
        </div>

        <div className="px-2">
          <div
            className="flex flex-wrap justify-between items-center my-2"
            style={{ direction: "rtl" }}
          >
            <div className="flex items-center gap-1">
              <Image src={location} alt="location" />

              <p className="text-[#1E1E1E] font-regular text-[12px]">
                سعادت آباد
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Image src={grid} alt="grid" />

              <p className="text-[#1E1E1E] font-regular text-[12px]">
                فروش لباس
              </p>
            </div>
          </div>
          <p className="text-[16px] font-bold text-[#1E1E1E] text-right my-3">
            فروشگاه کیف و کفش محسن
          </p>

          <div className="h-[1.5px] w-full bg-white"></div>
          <div className="flex justify-center  my-2">
            <p className="text-[#1F5D6A] text-[16px] font-fat">
              مشاهده فروشگاه
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
