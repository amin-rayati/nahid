"use client";
import React from "react";
import Pagination from "@/components/Pagination/Pagination";
import { CiSearch } from "react-icons/ci";

import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const page = () => {
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto my-20"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center items-center gap-2"
      >
        <div className="relative w-[100%] md:w-[80%] lg:w-[70%]">
          <input
            placeholder="جستجوی داستان..."
            className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 pr-12 text-right placeholder:text-black placeholder:sm:text-[16px] placeholder:sm:font-light placeholder:text-[10px]"
            style={{ direction: "rtl", paddingLeft: "100px" }}
          />

          <CiSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            size={25}
            color="#354259"
          />

          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#354259] px-5 py-2 text-white text-[16px] font-bold rounded-[8px]">
            جستجو
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-12 gap-3 my-5"
        dir="rtl"
      >
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
        <div className="col-span-12  sm:col-span-4 py-8 px-12 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] text-center">
          <p className="text-[#1E1E1E] text-[18px] font-bold">غزل شماره یک</p>
          <p
            className="mt-5 text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان شاهم هر شبی برخوان احسان و وفا
          </p>
          <p
            className="text-right text-[#1E1E1E] text-[16px] font-regular"
            dir="rtl"
          >
            مهمان صاحب دولتم که دولتش پاینده با
          </p>
        </div>
      </motion.div>

      <Pagination />
    </motion.div>
  );
};

export default page;
