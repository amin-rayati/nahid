import React from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import basket from "@/public/img/basket.png";
const SearchBar = ({ isStore }) => {
  return (
    <div
      className={
        isStore == "yes"
          ? "flex flex-wrap justify-between items-center gap-2"
          : "flex flex-wrap justify-between items-center gap-2"
      }
    >
      <div
        className={`relative ${
          isStore == "yes" ? "w-[100%] md:w-[100%] lg:w-[78%]" : "w-full"
        }`}
      >
        <input
          placeholder="جستجوی داستان..."
          className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 pr-12 text-right placeholder:text-black placeholder:sm:text-[16px] placeholder:sm:font-light placeholder:text-[10px]"
          style={{ direction: "rtl", paddingLeft: "100px" }}
        />

        <CiSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          size={25}
          color="#354259"
        />

        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#354259] px-5 py-2 text-white text-[16px] font-bold rounded-[8px]">
          جستجو
        </button>
      </div>
      {isStore == "yes" ? (
        <button
          className="flex  w-[100%] md:w-[100%] lg:w-[20%] gap-2 bg-[#354259] rounded-[8px] py-3"
          style={{ justifyContent: "center" }}
        >
          <Image src={basket} alt="basket" />
          <p className="text-white text-[16px] font-bold">سبد خرید</p>
        </button>
      ) : null}
    </div>
  );
};

export default SearchBar;
