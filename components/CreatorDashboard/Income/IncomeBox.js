"use client";
import React, { useState } from "react";
import Menu from "@/components/Dashboard/Menu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Image from "next/image";
import eshterak from "@/public/img/eshterak.png";
import calendar from "@/public/img/calendar1.png";
import clock from "@/public/img/clock.png";
import copy from "@/public/img/copy.png";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";

const orders = [
  {
    id: 1,
    price: "69،000",
    status: "ناموفق",
    statusColor: "#a025251a",
    borderColor: "#A02525",
  },
  {
    id: 2,
    price: "69،000",
    status: "موفق",
    statusColor: "#34a02512",
    borderColor: "#34A025",
  },
];

const IncomeBox = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div className="mt-5">
      <div
        className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[8px] p-3 "
        dir="rtl"
      >
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center gap-2 my-2">
            <p className="text-[#1E1E1E] text-[20px] font-bold">شناسه 254523</p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <p className="text-[#1E1E1E] text-[20px] font-bold">12،500،000</p>
            <p className="text-[#1E1E1E] text-[16px] font-regular">تومان</p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <div className="flex items-center gap-2">
              <Image src={clock} alt="clock" className="mb-1" />
              <p className="text-[#1E1E1E] text-[16px] font-regular">14:23</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={calendar} alt="calendar" className="mb-1" />
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                1403/05/30
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[#1E1E1ECC] font-regular text-[16px]">شبا:</p>
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[8px] p-3 flex flex-wrap justify-between items-center  sm:gap-5">
              <Image src={copy} alt="copy" />
              <p className="text-[#1E1E1E] font-bold text-[16px]">
                12655610000000000451
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeBox;
