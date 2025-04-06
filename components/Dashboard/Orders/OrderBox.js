"use client";
import React, { useState } from "react";
import Image from "next/image";
import page from "@/public/img/page.png";
import calendar from "@/public/img/calendar.png";
import bank from "@/public/img/bank.png";
import receipt from "@/public/img/receipt.png";
import InvoceModal from "@/components/Modals/InvoiceModal";
const OrderBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div
      className="flex flex-wrap items-center justify-between bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 mt-2"
      dir="rtl"
    >
      <p className="text-[#1E1E1E] text-[20px] font-bold my-1">
        سفارش کد 3265244
      </p>
      <div className="flex flex-wrap items-center gap-5 my-1">
        <div className="flex gap-2">
          <Image src={page} alt="page" />
          <p className="text-[#1E1E1E] text-[16px] font-regular">4 کتاب</p>
        </div>
        <div className="flex gap-2">
          <Image src={bank} alt="bank" />
          <p className="text-[#1E1E1E] text-[16px] font-regular">
            250،000 تومان
          </p>
        </div>
        <div className="flex gap-2">
          <Image src={calendar} alt="calendar" />
          <p className="text-[#1E1E1E] text-[16px] font-regular">1403/05/30</p>
        </div>
      </div>
      <button
        onClick={openModal}
        className="flex items-center gap-1 bg-[#354259] rounded-[8px] p-3 my-1"
      >
        <Image src={receipt} alt="receipt" className="mb-1" />
        <p className="text-[#FFFFFF] text-[16px] font-bold">مشاهده فاکتور</p>
      </button>
      <InvoceModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default OrderBox;
