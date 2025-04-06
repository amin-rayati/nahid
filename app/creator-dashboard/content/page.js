"use client";
import React, { useState } from "react";
import Menu from "@/components/CreatorDashboard/Menu";
import Published from "@/components/CreatorDashboard/Content/Published";
import Pending from "@/components/CreatorDashboard/Content/pending";
import ContentFilter from "@/components/CreatorDashboard/Content/ContentFilter";
import AddStoryModal from "@/components/Modals/AddStoryModal";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import { FaPlus } from "react-icons/fa6";
const tabs = [
  { id: "published", label: "منتشر شده", count: "20" },
  { id: "pending", label: "در صف انتشار", count: "36" },
];
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [activeTab, setActiveTab] = useState("published");

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
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="content" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex justify-start gap-2 overflow-x-auto ">
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
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
            <button
              onClick={openModal}
              className="flex items-center justify-center gap-2 bg-[#354259] rounded-[8px] px-5 py-3"
            >
              <FaPlus color="white" />
              <p className="text-white text-[13px] sm:text-[16px] font-bold">
                داستان جدید
              </p>
            </button>
            <AddStoryModal isModalOpen={isModalOpen} closeModal={closeModal} />
          </div>
          <ContentFilter />
          <div className="my-2">
            {activeTab === "published" && <Published />}
            {activeTab === "pending" && <Pending />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
