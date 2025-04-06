"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const BlogCatDropDown = ({ Cat }) => {
  const router = useRouter();
  const [isCatOpen, setIsCatOpen] = useState(false);

  const categoryMapping = {
    all: "همه مقالات",
    new: "مقالات جدید",
    crime: "جنایی",
    romance: "عاشقانه",
    epic: "حماسی",
  };

  const reverseCategoryMapping = {
    "همه مقالات": "all",
    "مقالات جدید": "new",
    جنایی: "crime",
    عاشقانه: "romance",
    حماسی: "epic",
  };

  const [selectedCat, setSelectedCat] = useState(categoryMapping[Cat] || Cat);

  const cat = [
    { name: "همه مقالات" },
    { name: "مقالات جدید" },
    { name: "جنایی" },
    { name: "عاشقانه" },
    { name: "حماسی" },
  ];

  useEffect(() => {
    setSelectedCat(categoryMapping[Cat] || Cat);
  }, [Cat, categoryMapping]);

  const handleSelectCat = (cat) => {
    setSelectedCat(cat);
    setIsCatOpen(false);
    const urlParam = reverseCategoryMapping[cat];
    router.push(`${urlParam}`);
  };

  return (
    <div className="w-full relative">
      <div
        onClick={() => setIsCatOpen(!isCatOpen)}
        className={`flex flex-col bg-[#FAF1D7] border-[1px] px-3 cursor-pointer transition-all duration-100 ease-in-out ${
          isCatOpen
            ? "bg-[#EBDFBE] border-[#EBDFBE] rounded-t-[8px] border-b-0"
            : "border-[#EBDFBE] rounded-[8px]"
        }`}
      >
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <p className="text-[#1E1E1E] font-bold text-[16px]">
              {selectedCat}
            </p>
          </div>
          {isCatOpen ? (
            <FaAngleUp color="#354259" />
          ) : (
            <FaAngleDown color="#354259" />
          )}
        </div>

        <div
          className={`absolute left-0 right-0 bg-[#FAF1D7] border-x-[1px] border-b-[1px] border-[#EBDFBE] rounded-b-[8px] px-3 z-10 overflow-hidden transition-all duration-1000 ease-in-out origin-top transform ${
            isCatOpen
              ? "max-h-[500px] scale-y-100 opacity-100"
              : "max-h-0 scale-y-0 opacity-0"
          }`}
          style={{ top: "100%", borderTop: "none" }}
        >
          {cat.map((option) => (
            <div
              key={option.name}
              onClick={() => handleSelectCat(option.name)}
              className="py-2 cursor-pointer text-[#1E1E1E] hover:bg-[#EBDFBE] rounded-lg transition my-3"
            >
              <div className="flex items-center gap-2">
                <span>{option.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCatDropDown;
