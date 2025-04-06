import React from "react";
import { CiSearch } from "react-icons/ci";
const BlogSearchBar = () => {
  return (
    <div className="relative w-full ">
      <input
        placeholder="جستجوی مقاله..."
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
  );
};

export default BlogSearchBar;
