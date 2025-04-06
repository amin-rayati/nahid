"use client";
import React, { useState } from "react";

import Image from "next/image";

import star from "@/public/img/star.png";
import RewardModal from "@/components/Modals/RewardModal";

const Reward = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="bg-[#FF7F5B] border-[1px] border-[#EBDFBE] rounded-[16px] p-4 flex flex-wrap items-center justify-between my-5">
      <div className="flex items-center gap-2 my-2">
        <Image src={star} alt="star" />
        <p className="text-[20px] font-bold text-[#FFFFFF]">
          امتیاز شما در ناهید
        </p>
      </div>

      <div
        onClick={openModal}
        className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[8px] px-5 py-2 text-center my-2 cursor-pointer"
      >
        <p className="text-[20px] font-bold text-[#1E1E1E]">25،652</p>
      </div>
      <RewardModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Reward;
