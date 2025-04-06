import React from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import creator1 from "@/public/img/creator1.png";
import { IoEyeOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";

const Creators = () => {
  return (
    <div className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto sm:my-12">
      <div
        className="flex flex-wrap items-center justify-between"
        style={{ direction: "rtl" }}
      >
        <p className="text-black text-[24px] font-bold">برترین خالقین اثر</p>
        <div className="flex items-center gap-2">
          <p className="text-[#354259] text-[20px] font-fat">همه خالقین</p>
          <FaArrowLeft color="#354259" size={20} />
        </div>
      </div>
      <div className="flex gap-2 justify-end my-5">
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
        <div className="h-[3px] w-64 bg-[#A0C498]"></div>
      </div>
      <p className="text-black text-[16px] font-light text-right">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>

      <div className="grid grid-cols-12 gap-3 my-5">
        <div
          className="col-span-12 sm:col-span-6 md:col-span-3 flex gap-2 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px]
        p-3"
          style={{ direction: "rtl" }}
        >
          <Image src={creator1} alt="creator1" className="rounde-[8px]" />
          <section className="flex flex-col justify-between">
            <p className="text-[#1E1E1E] text-[20px] font-bold">امین رعیتی</p>
            <div className="flex gap-1 items-center">
              <IoEyeOutline color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">
                  2,500,000
                </p>
                <p className="text-[#354259] font-regular text-[12px]">
                  بازدید
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LuBook color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">253</p>
                <p className="text-[#354259] font-regular text-[12px]">اثر</p>
              </div>
            </div>
          </section>
        </div>
        <div
          className="col-span-12 sm:col-span-6 md:col-span-3 flex gap-2 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px]
        p-3"
          style={{ direction: "rtl" }}
        >
          <Image src={creator1} alt="creator1" className="rounde-[8px]" />
          <section className="flex flex-col justify-between">
            <p className="text-[#1E1E1E] text-[20px] font-bold">امین رعیتی</p>
            <div className="flex gap-1 items-center">
              <IoEyeOutline color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">
                  2,500,000
                </p>
                <p className="text-[#354259] font-regular text-[12px]">
                  بازدید
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LuBook color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">253</p>
                <p className="text-[#354259] font-regular text-[12px]">اثر</p>
              </div>
            </div>
          </section>
        </div>
        <div
          className="col-span-12 sm:col-span-6 md:col-span-3 flex gap-2 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px]
        p-3"
          style={{ direction: "rtl" }}
        >
          <Image src={creator1} alt="creator1" className="rounde-[8px]" />
          <section className="flex flex-col justify-between">
            <p className="text-[#1E1E1E] text-[20px] font-bold">امین رعیتی</p>
            <div className="flex gap-1 items-center">
              <IoEyeOutline color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">
                  2,500,000
                </p>
                <p className="text-[#354259] font-regular text-[12px]">
                  بازدید
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LuBook color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">253</p>
                <p className="text-[#354259] font-regular text-[12px]">اثر</p>
              </div>
            </div>
          </section>
        </div>
        <div
          className="col-span-12 sm:col-span-6 md:col-span-3 flex gap-2 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px]
        p-3"
          style={{ direction: "rtl" }}
        >
          <Image src={creator1} alt="creator1" className="rounde-[8px]" />
          <section className="flex flex-col justify-between">
            <p className="text-[#1E1E1E] text-[20px] font-bold">امین رعیتی</p>
            <div className="flex gap-1 items-center">
              <IoEyeOutline color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">
                  2,500,000
                </p>
                <p className="text-[#354259] font-regular text-[12px]">
                  بازدید
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LuBook color="#A0C498" />
              <div className="flex gap-1 items-center">
                <p className="text-[#354259] font-bold text-[16px]">253</p>
                <p className="text-[#354259] font-regular text-[12px]">اثر</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Creators;
