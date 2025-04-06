"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import SelectAddressModal from "@/components/Modals/SelectAddressModal";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import single1 from "@/public/img/single1.png";
import map from "@/public/img/map.png";
import cube from "@/public/img/cube.png";
import discount from "@/public/img/discount.png";
const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto my-20"
    >
      <div
        variants={containerVariants}
        className="grid grid-cols-12 gap-3"
        style={{ direction: "rtl" }}
      >
        {/* rightSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 md:col-span-6 lg:col-span-4 rightSide"
        >
          <div
            className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-5"
            dir="rtl"
          >
            {/* address */}
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Image src={map} alt="map" />
                <p className="text-[16px] font-regular text-[#1E1E1E]">آدرس</p>
              </div>

              <button
                onClick={openModal}
                className="border-[2px] border-[#354259] p-2 rounded-[8px] text-center text-[#354259]"
              >
                تغییر آدرس
              </button>
            </div>
            <div className="flex gap-2 my-5">
              <p className="text-[#1E1E1E] text-[16px] font-bold">خانه</p>
              <p className="text-[#1E1E1E] text-[14px] font-regular">
                کرج، گلشهر، خیابان برزنت، کوچه شیخی، پلاک 26
              </p>
            </div>
            <div className="h-[1px] w-full bg-[#00000017] my-3"></div>

            {/* fee */}
            <div className="flex justify-between my-5">
              <div className="flex items-center gap-2">
                <Image src={cube} alt="cube" />
                <p className="text-[16px] font-regular text-[#1E1E1E]">
                  هزینه ارسال
                </p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-[16px] font-bold text-[#1E1E1E]">50،000</p>
                <p className="text-[14px] font-regular text-[#1E1E1E]">تومان</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#00000017] my-3"></div>

            {/* discount */}
            <div className="flex justify-between my-5">
              <div className="flex items-center gap-2">
                <Image src={discount} alt="discount" />
                <p className="text-[16px] font-regular text-[#1E1E1E]">
                  کد تخفیف
                </p>
              </div>
            </div>
            <div className="relative w-full mb-5">
              <input
                placeholder="کد تخفیف را وارد کنید"
                className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 px-2 text-right placeholder:text-black placeholder:sm:text-[16px] placeholder:sm:font-light placeholder:text-[10px]"
                style={{ direction: "rtl", paddingLeft: "100px" }}
              />

              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 border-[2px] border-[#354259] p-2 rounded-[8px] text-center text-[#354259]">
                بررسی
              </button>
            </div>
            <div className="h-[1px] w-full bg-[#00000017] my-3"></div>

            {/* total */}
            <section>
              <div className="flex flex-wrap justify-between items-center w-full my-5">
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  مجموع قیمت
                </p>

                <div className="flex items-center gap-2 flex-1 mr-2">
                  <span className="border-t border-dashed border-[#1E1E1E] flex-1"></span>

                  <p className="text-[16px] font-bold text-[#1E1E1E]">50،000</p>
                  <p className="text-[14px] font-regular text-[#1E1E1E]">
                    تومان
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center w-full my-5">
                <p className="text-[#1E1E1E] text-[14px] font-regular">تخفیف</p>

                <div className="flex items-center gap-2 flex-1 mr-2">
                  <span className="border-t border-dashed border-[#1E1E1E] flex-1"></span>

                  <p className="text-[16px] font-bold text-[#1E1E1E]">10،000</p>
                  <p className="text-[14px] font-regular text-[#1E1E1E]">
                    تومان
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center w-full my-5">
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  هزینه ارسال
                </p>

                <div className="flex items-center gap-2 flex-1 mr-2">
                  <span className="border-t border-dashed border-[#1E1E1E] flex-1"></span>

                  <p className="text-[16px] font-bold text-[#1E1E1E]">30،000</p>
                  <p className="text-[14px] font-regular text-[#1E1E1E]">
                    تومان
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center w-full my-5">
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  مجموع قابل پرداخت
                </p>

                <div className="flex items-center gap-2 flex-1 mr-2">
                  <span className="border-t border-dashed border-[#1E1E1E] flex-1"></span>

                  <p className="text-[16px] font-bold text-[#1E1E1E]">70،000</p>
                  <p className="text-[14px] font-regular text-[#1E1E1E]">
                    تومان
                  </p>
                </div>
              </div>
            </section>

            {/* button */}
            <button className="bg-[#354259] rounded-[8px] p-3 text-center w-full text-white text-[16px] font-bold">
              تایید و تکمیل سفارش
            </button>
          </div>
        </motion.div>

        {/* leftSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 md:col-span-6 lg:col-span-8 leftSide"
        >
          <motion.p
            variants={itemVariants}
            className="text-[#354259] text-[16px] font-regular"
          >
            8 محصول در سبد خرید
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-between my-5 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-3"
            dir="rtl"
          >
            <div className="flex flex-wrap gap-5">
              <Image
                src={single1}
                alt="single1"
                className="rounded-[8px] w-24  h-24 object-contain"
              />
              <div className="flex flex-col justify-around">
                <p className="text-[#1E1E1E] text-[18px] font-bold my-2">
                  گندم زارهای طلایی
                </p>
                <div className="flex justify-between flex-wrap gap-3 sm:gap-5">
                  <div className="flex gap-1 items-center">
                    <p className="text-[#354259] font-regular text-[12px]">
                      قیمت کتاب:
                    </p>
                    <p className="text-[#1E1E1E] font-bold text-[16px]">
                      250,0000
                    </p>
                    <p className="text-[#354259] font-regular text-[12px]">
                      تومان
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="text-[#354259] font-regular text-[12px]">
                      قیمت کل:
                    </p>
                    <p className="text-[#1E1E1E] font-bold text-[16px]">
                      250,0000
                    </p>
                    <p className="text-[#354259] font-regular text-[12px]">
                      تومان
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 my-2">
              <button className="flex border-[2px] border-[#354259] rounded-[8px] py-3 px-4 justify-center text-[#354259]">
                <FaMinus size={20} />
              </button>
              <p className="text-[#1E1E1E] text-[16px] font-bold">2</p>
              <button className="flex border-[2px] bg-[#354259] rounded-[8px] py-3 px-4 justify-center text-white">
                <FaPlus size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>

        <SelectAddressModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </motion.div>
  );
};

export default page;
