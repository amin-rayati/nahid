"use client";
import React, { useState } from "react";
import Menu from "@/components/Dashboard/Menu";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Sent from "@/components/Dashboard/Orders/Sent";
import Sending from "@/components/Dashboard/Orders/Sending";
import Cancelled from "@/components/Dashboard/Orders/Cancelled";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const tabs = [
  { id: "sent", label: "ارسال شده" },
  { id: "sending", label: "درحال ارسال" },
  { id: "canceled", label: "لغو شده" },
];

const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const [activeTab, setActiveTab] = useState("sent");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 w-[100%] lg:w-[100%] xl:w-[85%] m-auto my-20"
    >
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-12 gap-2 sm:gap-5"
        dir="rtl"
      >
        {/* menu */}
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <Menu active="orders" />
        </div>

        {/* Tabs */}
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-8 lg:col-span-9"
        >
          <div
            variants={itemVariants}
            className="flex justify-start gap-4 overflow-x-auto"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-2 sm:px-10 py-3 border-b-2 bg-[#FAF1D7] rounded-t-[8px] ${
                  activeTab === tab.id
                    ? "border-black text-[#354259] font-bold text-[13px] sm:text-[16px]"
                    : "border-[#1e1e1e0a] text-[#1e1e1eb5] font-regular text-[13px] sm:text-[16px]"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div variants={itemVariants} className="my-2">
            {activeTab === "sent" && <Sent />}
            {activeTab === "sending" && <Sending />}
            {activeTab === "canceled" && <Cancelled />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
