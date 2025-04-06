import React from "react";
import Image from "next/image";
import works from "@/public/img/works.png";
import book1 from "@/public/img/book1.png";
import eye from "@/public/img/eye.png";
import message from "@/public/img/message.png";
import heart1 from "@/public/img/heart1.png";

const LatestWorks = () => {
  return (
    <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-4 rounded-[16px]">
      {/* status */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
          <Image src={works} alt="works" />
          <p className="text-[#1E1E1E] text-[20px] font-regular">آخرین آثار</p>
        </div>
        <button className="border-[2px] border-[#354259] rounded-[8px] text-[#354259] text-[16px] font-bold p-2">
          مشاهده همه
        </button>
      </div>

      <div
        className="mt-5 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-2 flex sm:gap-10 gap-2 items-center"
        dir="rtl"
      >
        <Image
          src={book1}
          alt="book1"
          className="rounded-[8px] w-[75px] h-[75px] object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <p className="text-[#1E1E1E] font-bold text-[16px]">نقره</p>
            <div className="bg-[#A0C49833] p-2 rounded-[8px] text-center text-[#354259] text-[14px] font-regular">
              داستان
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between items-center my-2 w-full sm:w-3/4"
            style={{ direction: "rtl" }}
          >
            <div className="flex items-center gap-2">
              <p className="text-[#1E1E1E] font-bold text-[16px]">2,350</p>
              <Image
                className="mb-1"
                src={eye}
                alt="eye"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#1E1E1E] font-bold text-[16px]">235</p>
              <Image
                className="mb-1"
                src={heart1}
                alt="heart1"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#1E1E1E] font-bold text-[16px]">850</p>
              <Image
                className="mb-1"
                src={message}
                alt="message"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-5 bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] p-2 flex sm:gap-10 gap-2 items-center"
        dir="rtl"
      >
        <Image
          src={book1}
          alt="book1"
          className="rounded-[8px] w-[75px] h-[75px] object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <p className="text-[#1E1E1E] font-bold text-[16px]">نقره</p>
            <div className="bg-[#A0C49833] p-2 rounded-[8px] text-center text-[#354259] text-[14px] font-regular">
              داستان
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between items-center my-2 w-full sm:w-3/4"
            style={{ direction: "rtl" }}
          >
            <div className="flex items-center gap-2">
              <p className="text-[#1E1E1E] font-bold text-[16px]">2,350</p>
              <Image
                className="mb-1"
                src={eye}
                alt="eye"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#1E1E1E] font-bold text-[16px]">235</p>
              <Image
                className="mb-1"
                src={heart1}
                alt="heart1"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#1E1E1E] font-bold text-[16px]">850</p>
              <Image
                className="mb-1"
                src={message}
                alt="message"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWorks;
