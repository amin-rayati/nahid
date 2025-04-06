import React from "react";
import Image from "next/image";

import face from "@/public/img/face.png";
import shield from "@/public/img/shield.png";
import heart from "@/public/img/heart.png";
const Genre = () => {
  return (
    <div className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto sm:my-12">
      <p className="text-black text-[24px] font-bold text-center">
        ژانرهای داستانی
      </p>
      <div className="flex gap-2 justify-center my-5">
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
        <div className="h-[3px] w-64 bg-[#A0C498]"></div>
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
      </div>
      <div
        className="flex flex-wrap gap-3 justify-center"
        style={{ direction: "rtl" }}
      >
        <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
          <div className="flex items-center gap-3">
            <Image src={face} alt="face" className="rounded-full" />
            <section className="text-right">
              <p className="font-bold text-lg">احساسی</p>
              <p className="font-light text-sm text-[#1E1E1E99]">140 داستان</p>
            </section>
          </div>
        </div>
        <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
          <div className="flex items-center gap-3">
            <Image src={face} alt="face" className="rounded-full" />
            <section className="text-right">
              <p className="font-bold text-lg">احساسی</p>
              <p className="font-light text-sm text-[#1E1E1E99]">140 داستان</p>
            </section>
          </div>
        </div>{" "}
        <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
          <div className="flex items-center gap-3">
            <Image src={face} alt="face" className="rounded-full" />
            <section className="text-right">
              <p className="font-bold text-lg">احساسی</p>
              <p className="font-light text-sm text-[#1E1E1E99]">140 داستان</p>
            </section>
          </div>
        </div>{" "}
        <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
          <div className="flex items-center gap-3">
            <Image src={face} alt="face" className="rounded-full" />
            <section className="text-right">
              <p className="font-bold text-lg">احساسی</p>
              <p className="font-light text-sm text-[#1E1E1E99]">140 داستان</p>
            </section>
          </div>
        </div>{" "}
        <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
          <div className="flex items-center gap-3">
            <Image src={heart} alt="heart" className="rounded-full" />
            <section className="text-right">
              <p className="font-bold text-lg">احساسی</p>
              <p className="font-light text-sm text-[#1E1E1E99]">140 داستان</p>
            </section>
          </div>
        </div>{" "}
        <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
          <div className="flex items-center gap-3">
            <Image src={heart} alt="heart" className="rounded-full" />
            <section className="text-right">
              <p className="font-bold text-lg">احساسی</p>
              <p className="font-light text-sm text-[#1E1E1E99]">140 داستان</p>
            </section>
          </div>
        </div>
        <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
          <div className="flex items-center gap-3">
            <Image src={heart} alt="heart" className="rounded-full" />
            <section className="text-right">
              <p className="font-bold text-lg">احساسی</p>
              <p className="font-light text-sm text-[#1E1E1E99]">140 داستان</p>
            </section>
          </div>
        </div>
        <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
          <div className="flex items-center gap-3">
            <Image src={shield} alt="shield" className="rounded-full" />
            <section className="text-right">
              <p className="font-bold text-lg">احساسی</p>
              <p className="font-light text-sm text-[#1E1E1E99]">140 داستان</p>
            </section>
          </div>
        </div>
        <div className="bg-[#FAF1D7] border border-[#EBDFBE] py-5 pl-10 pr-5 rounded-3xl text-center">
          <div className="flex items-center gap-3">
            <Image src={shield} alt="shield" className="rounded-full" />
            <section className="text-right">
              <p className="font-bold text-lg">احساسی</p>
              <p className="font-light text-sm text-[#1E1E1E99]">140 داستان</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
