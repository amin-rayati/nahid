"use client";

import React, { useState } from "react";

const Filter = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const authors = [
    { name: "شاعرین منتخب" },
    { name: "قرن اول" },
    { name: "قرن دوم" },
    { name: "قرن سوم" },
    { name: "قرن چهارم" },
    { name: "قرن پنجم" },
  ];

  return (
    <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] my-5 p-5">
      <p className="text-[#1E1E1E] text-[18px] font-bold my-2 px-4">
        دسته بندی شاعران
      </p>

      <div
        className="max-h-[400px] overflow-y-auto scrollbar-custom px-4"
        style={{ direction: "ltr" }}
      >
        {authors.map((author, index) => (
          <div key={index}>
            <div
              className="my-3 cursor-pointer"
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
            </div>
            <div className="h-[1px] w-full bg-[#00000017]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
