"use client";
import { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";
import info from "@/public/img/info.png";
import fav1 from "@/public/img/fav.png";
import basket from "@/public/img/basket.png";
import bank from "@/public/img/bank.png";
import page from "@/public/img/page.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const InvoceModal = ({ isModalOpen, closeModal }) => {
  const { containerVariants, itemVariants } = commonAnimations;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const summaryData = [
    { label: "مجموع قیمت", value: "50،000" },
    { label: "تخفیف", value: "10،000" },
    { label: "هزینه ارسال", value: "30،000" },
    { label: "مجموع قابل پرداخت", value: "70،000" },
  ];

  return (
    <Portal>
      {isModalOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
          onClick={closeModal}
          dir="rtl"
        >
          <div
            className="bg-[#FEFCED] p-6 rounded-[16px] w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={closeModal}>
                <IoMdClose size={20} color="#1E1E1E99" />
              </button>

              <p className="text-[#1E1E1E] text-[24px] font-bold">
                فاکتور سفارش
              </p>
              <div></div>
            </div>

            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] flex flex-wrap items-center justify-between py-4 px-3 rounded-[8px] my-5">
              <p className="text-[16px] font-regular">شماره سفارش:</p>
              <div className="flex items-center gap-2">
                <p className="text-[16px] font-bold text-[#1E1E1E]">3265244</p>
              </div>
            </div>
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] flex flex-wrap items-center justify-between py-4 px-3 rounded-[8px] my-5">
              <p className="text-[16px] font-regular">تاریخ سفارش:</p>
              <div className="flex items-center gap-2">
                <p className="text-[16px] font-bold text-[#1E1E1E]">
                  1403/11/25 - 14:53
                </p>
              </div>
            </div>
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] flex flex-wrap items-center justify-between py-4 px-3 rounded-[8px] my-5">
              <p className="text-[16px] font-regular">وضعیت سفارش:</p>
              <div className="flex items-center gap-2">
                <p className="text-[16px] font-bold text-[#1E1E1E]">
                  ارسال شده
                </p>
              </div>
            </div>
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] flex flex-wrap items-center justify-between py-4 px-3 rounded-[8px] my-5">
              <p className="text-[16px] font-regular">آدرس</p>
              <div className="flex items-center gap-2">
                <p className="text-[16px] font-bold text-[#1E1E1E]">
                  کرج، گلشهر، خیابان برزنت، کوچه شیخی، پلاک 26
                </p>
              </div>
            </div>
            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] flex flex-wrap items-center justify-between py-4 px-3 rounded-[8px] my-5 relative">
              <div className="flex gap-1 items-center relative">
                <p className="text-[16px] font-regular">مبلغ سفارش:</p>
                <button
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  className="relative inline-flex items-center"
                  aria-label="نمایش جزئیات سفارش"
                >
                  <Image
                    src={info}
                    alt="info"
                    className="object-cover cursor-pointer"
                  />
                </button>

                {isPopoverOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-4 rounded-[16px] z-[9999] shadow-lg w-[200px] sm:w-[280px] md:w-[320px]">
                    <section>
                      <button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                        <IoMdClose size={20} color="#1E1E1E99" />
                      </button>
                      {summaryData.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-wrap justify-between items-center w-full my-3"
                        >
                          <p className="text-[#1E1E1E] text-[14px] font-regular">
                            {item.label}
                          </p>
                          <div className="flex items-center gap-2 flex-1 mr-2">
                            <span className="border-t border-dashed border-[#1E1E1E] flex-1"></span>
                            <p className="text-[16px] font-bold text-[#1E1E1E] whitespace-nowrap">
                              {item.value}
                            </p>
                            <p className="text-[14px] font-regular text-[#1E1E1E]">
                              تومان
                            </p>
                          </div>
                        </div>
                      ))}
                    </section>
                  </div>
                )}
              </div>

              <p className="text-[16px] font-bold text-[#1E1E1E]">
                250،000 تومان
              </p>
            </div>
            <p className="text-[#1E1E1E] text-[16px] font-regular text-center">
              اقلام سفارش
            </p>

            <Swiper
              className="mt-5"
              spaceBetween={20}
              slidesPerView={2.5}
              breakpoints={{
                150: { slidesPerView: 1, spaceBetween: 8 }, // Mobilesm
                320: { slidesPerView: 1, spaceBetween: 8 }, // Mobile
                480: { slidesPerView: 2.2, spaceBetween: 12 }, // Small tablets
                768: { slidesPerView: 2.5, spaceBetween: 12 }, // Tablets
                824: { slidesPerView: 2.5, spaceBetween: 17 }, // Small desktops
                1280: { slidesPerView: 2.5, spaceBetween: 17 }, // Large screens
              }}
            >
              <SwiperSlide>
                <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3   hover:border-[#A0C498] hover:border-[2px] cursor-pointer">
                  <Image src={fav1} alt="fav1" className="rounded-[8px]" />

                  <div
                    className="absolute top-5 right-5 left-5 flex flex-wrap justify-between gap-2"
                    style={{ direction: "rtl" }}
                  >
                    <button className="bg-[#354259] border-[1px] border-[#A0C498] text-white text-[14px] font-regular px-3 py-1 rounded-[8px]">
                      4 عدد
                    </button>
                  </div>

                  <p className="text-[20px] font-bold text-black text-right my-3">
                    گندم زارهای طلایی
                  </p>

                  <div
                    className="flex flex-wrap justify-between items-center my-1"
                    style={{ direction: "rtl" }}
                  >
                    <div className="flex items-center gap-1">
                      <Image src={bank} alt="bank" />
                      <div className="flex gap-1 items-center">
                        <p className="text-[#354259] font-bold text-[16px]">
                          250،000
                        </p>
                        <p className="text-[#354259] font-regular text-[12px]">
                          تومان
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default InvoceModal;
