"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cat1 from "@/public/img/cat1.png";
import cat2 from "@/public/img/cat2.png";
import cat3 from "@/public/img/cat3.png";
import cat4 from "@/public/img/cat4.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const CatsDropDown = ({ Cat }) => {
  const router = useRouter();
  const [isCatOpen, setIsCatOpen] = useState(false);

  const categoryMapping = {
    stories: "داستان ها",
    poets: "اشعار",

    audio: "کتاب صوتی",
    store: "کتاب ها",
  };

  const reverseCategoryMapping = {
    "داستان ها": "stories",
    اشعار: "poets",
    "کتاب صوتی": "audio",
    "کتاب ها": "store",
  };

  const [selectedCat, setSelectedCat] = useState(categoryMapping[Cat] || Cat);

  const cat = [
    { name: "داستان ها", img: cat4 },
    { name: "اشعار", img: cat1 },
    { name: "کتاب صوتی", img: cat3 },
    { name: "کتاب ها", img: cat2 },
  ];

  useEffect(() => {
    setSelectedCat(categoryMapping[Cat] || Cat);
  }, [Cat]);

  const handleSelectCat = (cat) => {
    setSelectedCat(cat);
    setIsCatOpen(false);
    const urlParam = reverseCategoryMapping[cat];
    router.push(`/${urlParam}`);
  };

  const selectedCatData = cat.find((option) => option.name === selectedCat);
  return (
    <div className="w-full">
      <div
        onClick={() => setIsCatOpen(!isCatOpen)}
        className={`flex flex-col bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[8px] px-3 cursor-pointer transition-all duration-100 ease-in-out ${
          isCatOpen ? "bg-[#EBDFBE]" : ""
        }`}
      >
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            {selectedCatData && (
              <Image
                src={selectedCatData.img}
                alt={selectedCatData.name}
                width={20}
                height={20}
              />
            )}
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
          className={`overflow-hidden transition-all duration-1000 ease-in-out origin-top transform ${
            isCatOpen
              ? "max-h-[500px] scale-y-100 opacity-100"
              : "max-h-0 scale-y-0 opacity-0"
          }`}
        >
          {cat.map((option) => (
            <div
              key={option.name}
              onClick={() => handleSelectCat(option.name)}
              className="py-2 cursor-pointer text-[#1E1E1E] hover:bg-[#EBDFBE] rounded-lg transition my-3"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={option.img}
                  alt={option.name}
                  width={20}
                  height={20}
                />
                <span>{option.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatsDropDown;
