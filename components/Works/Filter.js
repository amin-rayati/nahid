"use client";

import React, { useState } from "react";

import Image from "next/image";
import PriceRangeSlider from "./PriceRangeSlider";

import filterFunnel from "@/public/img/filterFunnel.png";
import trash from "@/public/img/trash.png";

const Filter = ({ isStore }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const [selected, setSelected] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat().format(price);
  };

  const handleSelect = (index) => {
    setSelected(index);
  };
  const handleSelectTag = (index) => {
    setSelectedTag(index);
  };

  const authors = [
    { name: "امین رعیتی", works: 125 },
    { name: "شخصیت دیگر", works: 98 },
    { name: "شخصیت سوم", works: 56 },
    { name: "شخصیت چهارم", works: 85 },
    { name: "امین رعیتی", works: 125 },
    { name: "امین رعیتی", works: 125 },
    { name: "شخصیت دیگر", works: 98 },
    { name: "شخصیت سوم", works: 56 },
    { name: "شخصیت چهارم", works: 85 },
    { name: "امین رعیتی", works: 125 },
    { name: "امین رعیتی", works: 125 },
    { name: "شخصیت دیگر", works: 98 },
    { name: "شخصیت سوم", works: 56 },
    { name: "شخصیت چهارم", works: 85 },
    { name: "امین رعیتی", works: 125 },
  ];

  const tags = [
    { title: "عاشقانه" },
    { title: "خانوادگی" },
    { title: "حماسی" },
    { title: "هیجانی" },
    { title: "عاشقانه" },
    { title: "خانوادگی" },
    { title: "حماسی" },
    { title: "هیجانی" },
    { title: "عاشقانه" },
    { title: "خانوادگی" },
    { title: "حماسی" },
    { title: "هیجانی" },
    { title: "عاشقانه" },
    { title: "خانوادگی" },
    { title: "حماسی" },
    { title: "هیجانی" },
    { title: "عاشقانه" },
    { title: "خانوادگی" },
    { title: "حماسی" },
    { title: "هیجانی" },
  ];
  return (
    <div
      className={`bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-5 ${
        isStore == "yes" ? "" : "my-5"
      }`}
    >
      <p className="text-[#1E1E1E] text-[18px] font-bold my-2 px-4">
        خالقین اثر
      </p>

      <div
        className="max-h-[200px] overflow-y-auto scrollbar-custom px-4"
        style={{ direction: "ltr" }}
      >
        {authors.map((author, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center my-3 cursor-pointer"
              style={{ direction: "rtl" }}
              onClick={() => handleSelect(index)}
            >
              <div className="flex items-center gap-2">
                <div className="border-[1px] border-[#354259] w-6 h-6 rounded-full flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      selected === index ? "bg-[#354259]" : ""
                    }`}
                  ></div>
                </div>
                <p
                  className={`text-[#1E1E1E] text-[16px] ${
                    selected === index ? "font-bold" : "font-regular"
                  }`}
                >
                  {author.name}
                </p>
              </div>
              <p className="text-[#1E1E1E] text-[14px] font-regular">
                {author.works} اثر
              </p>
            </div>
            <div className="h-[1px] w-full bg-[#00000017]"></div>
          </div>
        ))}
      </div>

      <p className="text-[#1E1E1E] text-[18px] font-bold mt-5 mb-2 px-4">
        برچسب ها
      </p>

      <div
        className="max-h-[200px] overflow-y-auto scrollbar-custom px-4"
        style={{ direction: "ltr" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
          {tags.map((tag, index) => (
            <div key={index}>
              <div
                className="cursor-pointer"
                style={{ direction: "rtl" }}
                onClick={() => handleSelectTag(index)}
              >
                <div
                  className={` border-[1px] rounded-[8px] px-2 py-3 ${
                    selectedTag === index
                      ? "border-[#354259]"
                      : "border-[#0000000D]"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div
                      className={`border-[1px] border-[#354259] w-6 h-6 rounded-full flex items-center justify-center ${
                        selectedTag === index ? "bg-[#354259]" : ""
                      }`}
                    ></div>
                    <p
                      className={`text-[#1E1E1E] text-[16px] ${
                        selectedTag === index ? "font-bold" : "font-regular"
                      }`}
                    >
                      {tag.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isStore ? (
        <>
          <PriceRangeSlider
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        </>
      ) : null}

      <div className="flex  items-center justify-center text-center gap-2 my-5">
        <button className="flex items-center gap-2 font-bold text-[#354259] rounded-[8px] p-3 border-[2px] border-[#354259] text-[14px] font-bold">
          <Image src={trash} alt="trash" />
          <p className="hidden sm:block">حذف فیلترها</p>
        </button>
        <button className="flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[14px] font-bold">
          <Image src={filterFunnel} alt="filterFunnel" />
          <p className="hidden sm:block">اعمال فیلترها</p>
        </button>
      </div>
    </div>
  );
};

export default Filter;
