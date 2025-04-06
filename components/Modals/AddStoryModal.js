"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";
import Image from "next/image";

import pic from "@/public/img/pic.png";
import cloud from "@/public/img/cloud.png";
import alert1 from "@/public/img/alert1.png";

const tagsList = ["عاشقانه", "خانوادگی", "ماجراجویی", "قدیمی", "ادبیات"];

const AddStoryModal = ({ isModalOpen, closeModal }) => {
  const { containerVariants, itemVariants } = commonAnimations;
  const [status, setStatus] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const addTag = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

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
                انتشار داستان
              </p>
              <div></div>
            </div>

            <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] p-3 flex flex-col items-center my-5 rounded-[8px]">
              <Image src={pic} alt="pic" />
              <p className="text-[#1E1E1E] text-[16px] font-bold mt-5">
                انتخاب تصویر داستان
              </p>
            </div>

            <div className="my-5">
              <p className="text-[#1E1E1E] text-[16px] font-regular">عنوان</p>
              <div className="flex gap-2 items-center my-3">
                <Image src={alert1} alt="alert1" />
                <p className="text-[#1E1E1E] text-[12px] font-light">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              <input
                placeholder="متن ورودی را بنویسید"
                className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-2 px-4  text-right placeholder:text-[#1E1E1ECC] placeholder:font-light placeholder:text-[14px] placeholder:sm:text-[16px]"
                style={{ direction: "rtl" }}
              />
              <p className="text-[#1E1E1E] text-[14px] font-light text-left mt-3">
                0/40
              </p>
            </div>
            <div className="my-5">
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                خلاصه داستان
              </p>
              <div className="flex gap-2 items-center my-3">
                <Image src={alert1} alt="alert1" />
                <p className="text-[#1E1E1E] text-[12px] font-light">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              <textarea
                rows={4}
                placeholder="متن ورودی را بنویسید"
                className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-2 px-4  text-right placeholder:text-[#1E1E1ECC] placeholder:font-light placeholder:text-[14px] placeholder:sm:text-[16px] resize-none"
                style={{ direction: "rtl" }}
              />
              <p className="text-[#1E1E1E] text-[14px] font-light text-left mt-3">
                0/40
              </p>
            </div>
            <div className="my-5">
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                برچسب‌ها
              </p>

              <div className="flex gap-2 items-center my-3">
                <Image src={alert1} alt="alert1" />
                <p className="text-[#1E1E1E] text-[12px] font-light">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>

              <div className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-2 px-4 text-right flex flex-wrap gap-2 min-h-[44px]">
                {selectedTags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1 bg-[#A0C49833] px-2 py-1 rounded-[8px] text-[#354259] text-[14px]"
                  >
                    <IoMdClose
                      size={14}
                      className="cursor-pointer"
                      onClick={() => removeTag(tag)}
                    />
                    {tag}
                  </div>
                ))}
                <input
                  className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[#1E1E1ECC] placeholder:font-light"
                  style={{ direction: "rtl" }}
                  placeholder={
                    selectedTags.length === 0 ? "متن ورودی را بنویسید" : ""
                  }
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                {tagsList.map((tag) => (
                  <div
                    key={tag}
                    className="cursor-pointer bg-[#A0C49833] p-2 rounded-[8px] text-center text-[#354259] text-[14px] font-regular"
                    onClick={() => addTag(tag)}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="my-5">
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                وضعیت داستان
              </p>

              <div className="flex gap-2 items-center my-3">
                <Image src={alert1} alt="alert1" />
                <p className="text-[#1E1E1E] text-[12px] font-light">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>

              <div className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-2 px-4 text-right placeholder:text-[#1E1E1ECC] placeholder:font-light placeholder:text-[14px] placeholder:sm:text-[16px] flex flex-wrap items-center justify-center gap-5">
                <div
                  onClick={() => setStatus("done")}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <div
                    className={`w-4 h-4 rounded-full ${
                      status === "done" ? "bg-[#A0C498]" : "bg-[#1E1E1E1A]"
                    }`}
                  ></div>
                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    تکمیل شده
                  </p>
                </div>

                <div
                  onClick={() => setStatus("ongoing")}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <div
                    className={`w-4 h-4 rounded-full ${
                      status === "ongoing" ? "bg-[#A0C498]" : "bg-[#1E1E1E1A]"
                    }`}
                  ></div>
                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    در حال ادامه
                  </p>
                </div>
              </div>
            </div>

            <button className=" w-full sm:w-[50%] flex items-center justify-center m-auto gap-2 bg-[#354259] rounded-[8px] px-5 py-3">
              <Image src={cloud} alt="cloud" />
              <p className="text-white text-[13px] sm:text-[16px] font-bold">
                ارسال برای بررسی
              </p>
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default AddStoryModal;
