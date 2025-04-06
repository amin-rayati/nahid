"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";
import Link from "next/link";

import { Edit } from "lucide-react";
import views from "@/public/img/views.png";
import likes from "@/public/img/likes.png";
import mark from "@/public/img/mark.png";
import comments from "@/public/img/comments.png";
const ContentManagment = ({ isModalOpen, closeModal }) => {
  const { containerVariants, itemVariants } = commonAnimations;

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
            <div className="flex flex-wrap items-center justify-between ">
              <div className="flex items-center gap-2">
                <button onClick={closeModal}>
                  <IoMdClose size={20} color="#1E1E1E99" />
                </button>

                <p className="text-[#1E1E1E] text-[24px] font-bold">
                  مدیریت قسمت
                </p>
              </div>
              <button className="flex items-center justify-center gap-1 bg-[#354259] border-[2px] border-[#354259] rounded-[8px] p-3 gap-2">
                <Edit color="white" size={20} />
                <p className="text-white text-[16px] font-bold">ویرایش</p>
              </button>
            </div>

            <div
              className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[8px] p-2 flex flex-wrap sm:flex-nowrap gap-2 items-center justify-between my-5"
              dir="rtl"
            >
              <div className="flex sm:flex-nowrap flex-wrap gap-2">
                <div className="px-8 py-5 bg-[#A0C498] rounded-[8px] flex items-center justify-center">
                  <p className="text-[20px] font-bold text-[#354259]">1</p>
                </div>

                <p className="text-[#1E1E1E] text-[14px] font-light leading-[28px]">
                  دیدگاه‌ها، بازدیدها، پسندها نشانه‌های گذاشته شده در مورد این
                  قسمت را بخوانید و آن را مدیریت کنید.
                </p>
              </div>

              <div className="sm:w-[20%] bg-[#A0C49833] p-2 rounded-[8px] text-center text-[#354259] text-[14px] font-regular">
                منتشر شده
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-4 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 flex flex-col justify-center items-center gap-3">
                <Image src={views} alt="views" />
                <p className="text-[#1E1E1E] text-[17px] font-regular">
                  <strong className="text-[#1E1E1E] text-[17px] font-bold">
                    {" "}
                    62،124
                  </strong>
                  بازدید
                </p>
              </div>
              <div className="col-span-12 sm:col-span-4 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 flex flex-col justify-center items-center gap-3">
                <Image src={likes} alt="likes" />
                <p className="text-[#1E1E1E] text-[17px] font-regular">
                  <strong className="text-[#1E1E1E] text-[17px] font-bold">
                    250
                  </strong>
                  پسند
                </p>
              </div>
              <div className="col-span-12 sm:col-span-4 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-3 flex flex-col justify-center items-center gap-3">
                <Image src={mark} alt="mark" />
                <p className="text-[#1E1E1E] text-[17px] font-regular">
                  <strong className="text-[#1E1E1E] text-[17px] font-bold">
                    152
                  </strong>
                  نشان شده
                </p>
              </div>
            </div>

            <div className="mt-5 bg-[#FEFCED] border-[1px] border-[#EBDFBE] py-5 px-3 rounded-[16px] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Image src={comments} alt="comments" />
                <div className="flex items-center gap-2">
                  <p className="text-[#1E1E1E] text-[20px] font-bold">14,500</p>
                  <p className="text-[#1E1E1E] text-[20px] font-regular">
                    دیدگاه
                  </p>
                </div>
              </div>
              <Link
                href="/creator-dashboard/comments"
                className="text-white text-center text-[16px] font-bold p-3 bg-[#354259] rounded-[8px]"
              >
                مشاهده نظرها
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default ContentManagment;
