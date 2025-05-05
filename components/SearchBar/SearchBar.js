import React from "react";
import { CiSearch } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
const SearchBar = () => {
  return (
    <div className="relative flex-grow w-full">
      <input
        placeholder="جستجوی فروشگاه"
        className="w-full rounded-[8px] border-[1px] bg-white border-[#C9D9DB] outline-none py-4 pr-32 text-right placeholder:text-[#1E1E1E] placeholder:text-[14px] placeholder:font-regular"
        style={{ direction: "rtl", paddingLeft: "80px" }}
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center gap-2">
        <div className="h-6 w-[1px] bg-[#0000001A]" />

        <FaAngleDown color="#1E1E1E" size={20} />
        <div className="flex items-center gap-1">
          <p className="text-[#1E1E1E] text-[14px] font-medium">تهران</p>
          <GrLocation color="#1E1E1E" size={25} />
        </div>
      </div>

      <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1F5D6A] py-2 px-3 rounded-[8px]">
        <CiSearch size={25} color="white" />
      </button>
    </div>
  );
};

export default SearchBar;
