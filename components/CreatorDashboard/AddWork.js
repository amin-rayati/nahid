import React from "react";
import Image from "next/image";
import story1 from "@/public/img/story1.png";
import audio from "@/public/img/audio.png";
import { FaPlus } from "react-icons/fa6";

const AddWork = () => {
  return (
    <>
      <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-5 rounded-[16px] my-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            <Image src={story1} alt="story1" />
            <p className="text-[#1E1E1E] text-[20px] font-regular">
              <strong className="text-[#1E1E1E] text-[20px] font-bold">
                25
              </strong>{" "}
              داستان
            </p>
          </div>
          <button className="group flex items-center justify-center bg-[#354259] rounded-[8px] text-white text-[16px] font-bold py-2 px-3 transition-all duration-500 ease-in-out overflow-hidden">
            <FaPlus color="white" size={20} className="min-w-[16px]" />
            <span
              className="w-0 max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:w-auto group-hover:opacity-100 group-hover:mx-3 whitespace-nowrap transition-opacity duration-150 group-hover:transition-all group-hover:duration-500 ease-in-out origin-right"
              style={{
                transitionDelay: "100ms",
                transitionProperty: "opacity, max-width, margin",
              }}
            >
              داستان جدید
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-5 rounded-[16px] my-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            <Image src={audio} alt="audio" />
            <p className="text-[#1E1E1E] text-[20px] font-regular">
              <strong className="text-[#1E1E1E] text-[20px] font-bold">
                3
              </strong>{" "}
              کتاب صوتی
            </p>
          </div>
          <button className="group flex items-center justify-center bg-[#354259] rounded-[8px] text-white text-[16px] font-bold py-2 px-3 transition-all duration-500 ease-in-out overflow-hidden">
            <FaPlus color="white" size={20} className="min-w-[16px]" />
            <span
              className="w-0 max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:w-auto group-hover:opacity-100 group-hover:mx-3 whitespace-nowrap transition-opacity duration-150 group-hover:transition-all group-hover:duration-500 ease-in-out origin-right"
              style={{
                transitionDelay: "100ms",
                transitionProperty: "opacity, max-width, margin",
              }}
            >
              کتاب صوتی جدید
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddWork;
