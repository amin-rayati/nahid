"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import book2 from "@/public/img/book2.png";
import ContentManagment from "@/components/Modals/ContentManagment";
import AddAudioEpisodeModal from "@/components/Modals/AddAudioEpisodeModal";

import { IoEyeOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoMdBook } from "react-icons/io";

const Published = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isAddAduioModalOpen, setIsAddAduioModalOpen] = useState(false);
  const openAddAduioModal = () => setIsAddAduioModalOpen(true);
  const closeAddAduioModal = () => setIsAddAduioModalOpen(false);

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
          <Link href="/creator-dashboard/content/1" className="cursor-pointer">
            <Image
              src={book2}
              alt="book2"
              className="rounded-[8px] h-[290px] w-[100%] sm:w-[290px] object-cover"
            />
          </Link>

          <div
            className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
            style={{ direction: "rtl" }}
          >
            <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
              135 قسمت
            </button>
          </div>

          <div
            className="flex flex-wrap justify-between items-center my-2"
            style={{ direction: "rtl" }}
          >
            <div className="flex items-center gap-1">
              <p className="text-[#1E1E1E] font-bold text-[16px]">2,350</p>
              <IoEyeOutline color="#1E1E1E" />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[#1E1E1E] font-bold text-[16px]">235</p>
              <LuMessageSquareText color="#1E1E1E" />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[#1E1E1E] font-bold text-[16px]">850</p>
              <FaRegHeart color="#1E1E1E" />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#00000017]"></div>

          <p className="text-[20px] font-bold text-black text-right my-2">
            نقره
          </p>

          <div className="flex  items-center justify-between gap-2">
            <button
              onClick={openModal}
              className="w-[50%] flex items-center justify-center gap-1 border-[2px] border-[#354259] rounded-[8px] p-3"
            >
              <IoMdBook color="#354259" />
              <p className="text-[#354259] text-[12px] sm:text-[13px] font-bold">
                مدیریت
              </p>
            </button>
            <button
              onClick={openAddAduioModal}
              className="w-[50%] flex items-center justify-center gap-1 bg-[#354259] border-[2px] border-[#354259] rounded-[8px] p-3"
            >
              <FaPlus color="white" />
              <p className="text-white text-[12px] sm:text-[13px] font-bold">
                قسمت جدید
              </p>
            </button>
          </div>
          <ContentManagment isModalOpen={isModalOpen} closeModal={closeModal} />
          <AddAudioEpisodeModal
            isAddAduioModalOpen={isAddAduioModalOpen}
            closeAddAduioModal={closeAddAduioModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Published;
