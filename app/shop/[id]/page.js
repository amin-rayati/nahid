"use client";
import React, { useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Feature from "@/components/Shop/Tabs/Feature";
import Comment from "@/components/Shop/Tabs/Comment";
import Service from "@/components/Shop/Tabs/Service";
import TopSlider from "@/components/Slider/TopSlider";

import store1 from "@/public/img/store1.png";
import store2 from "@/public/img/store2.png";
import store3 from "@/public/img/store3.png";
import store4 from "@/public/img/store4.png";
import store5 from "@/public/img/store5.png";
import leftpart from "@/public/img/leftpart.png";
import uppart from "@/public/img/uppart.png";
import company3 from "@/public/img/company3.png";
import location from "@/public/img/icons/location.png";
import grid from "@/public/img/icons/grid.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

const tabs = [
  { id: "sent", label: "ویژگی‌ها و امکانات" },
  { id: "sending", label: "نظرات کاربران" },
  { id: "canceled", label: "زمان دهی و سرویس" },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("sent");

  const [selectedImage, setSelectedImage] = useState(store1);
  const images = [store1, store2, store3, store4, store5];

  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div
      className="px-2 sm:px-4 py-4 mt-[110px] sm:mt-[175px] md:mt-[190px]"
      dir="rtl"
    >
      <div dir="ltr">
        <BreadCrumb />
      </div>
      <div className="grid grid-cols-12 gap-2 sm:gap-5">
        {/* image */}
        <div className="col-span-12 md:col-span-5  lg:col-span-4">
          <div className="relative w-full">
            <div className="w-[92%] md:w-[93%] mx-auto relative">
              <div onClick={openFullScreen} className="cursor-pointer">
                <Image
                  src={selectedImage}
                  alt="Main Image"
                  className="w-full rounded-[16px] h-[350px] object-cover"
                />
              </div>

              {/* fullscreen */}
              {isFullScreen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                  onClick={closeFullScreen}
                >
                  <div className="relative max-w-[90vw] max-h-[90vh]">
                    <button
                      className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
                      onClick={closeFullScreen}
                    >
                      ×
                    </button>
                    <Image
                      src={selectedImage}
                      alt="Full Screen Image"
                      className="max-w-full max-h-[90vh] object-contain"
                      width={1200}
                      height={800}
                    />
                  </div>
                </div>
              )}

              {/* gallery */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 p-2 rounded-[8px]">
                <div className="flex flex-col gap-2">
                  {images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`small store ${index + 1}`}
                      className="w-11 h-11 object-cover rounded-[8px] cursor-pointer hover:opacity-80 transition-all"
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              </div>

              {/* star */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <Image src={uppart} alt="top part" />
                <div className="absolute ">
                  <button className="flex items-center gap-1 bg-[#FFD14E] p-1 sm:px-3 sm:py-2 rounded-[5px]">
                    <p className="text-[#1F5D6A] text-[12px] font-fat">4.5</p>
                    <FaStar color="#1F5D6A" size={10} />
                  </button>
                </div>
              </div>

              {/* discount */}
              <div className="hidden sm:block absolute top-1/2 -left-7 transform -translate-y-1/2">
                <Image src={leftpart} alt="left part" />
                <div className="absolute top-1/4 left-3 mt-5 sm:top-1/3 sm:left-2 sm:mt-2">
                  <p className="text-[15px] sm:text-[20px] font-bold text-[#E24343]">
                    %10
                  </p>
                  <p className="text-[10px] sm:text-[12px] font-regular text-[#E24343]">
                    تخفیف
                  </p>
                </div>
              </div>

              {/* discount mobile */}
              <div className="block sm:hidden absolute top-1/2 -left-4 transform -translate-y-1/2">
                <Image src={leftpart} alt="left part" className="w-8 h-50" />
                <div className="absolute top-1/3 left-0 sm:top-1/3 sm:left-2 sm:mt-2">
                  <p className="text-[15px] sm:text-[20px] font-bold text-[#E24343]">
                    %10
                  </p>
                  <p className="text-[10px] sm:text-[12px] font-regular text-[#E24343]">
                    تخفیف
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-[#EDF3F6] border-[2px] border-white rounded-[16px] p-4  md:w-[93%] mx-auto">
            <div className="flex gap-2 items-center">
              <Image
                src={company3}
                alt="company3"
                className="w-8 h-8 rounded-full"
              />
              <p className="text-[20px] font-bold tex-[#1E1E1E]">
                فروشگاه کیف و کفش محسن
              </p>
            </div>
            <div className="flex gap-2 items-center mt-5">
              <FaStar color="#FEB223" />
              <FaStar color="#FEB223" />
              <FaStar color="#FEB223" />
              <FaStar color="#FEB223" />
              <FaRegStar color="#FEB223" />
              <p className="text-[14px] font-medium tex-[#1E1E1E]">88 نظر</p>
            </div>
            <div className="h-[2px] w-full bg-white mt-5" />
            <div className="flex flex-wrap justify-between items-center w-full mt-5">
              <div className="flex items-center gap-1">
                <Image src={grid} alt="grid" />
                <p className="text-[#1E1E1E] font-regular text-[14px]">
                  دسته بندی:
                </p>
              </div>
              <div className="flex items-center gap-2 flex-1 mr-2">
                <span className="border-t border-dashed border-[#1E1E1E] flex-1 opacity-20"></span>
                <p className="text-[14px] font-bold text-[#1E1E1E]">
                  فروش لباس
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center w-full mt-5">
              <div className="flex items-center gap-1">
                <Image src={location} alt="location" />
                <p className="text-[#1E1E1E] font-regular text-[14px]">
                  محدوده:
                </p>
              </div>
              <div className="flex items-center gap-2 flex-1 mr-2">
                <span className="border-t border-dashed border-[#1E1E1E] flex-1 opacity-20"></span>
                <p className="text-[14px] font-bold text-[#1E1E1E]">
                  تهران، سعادت آباد
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          <div
            className="flex justify-start gap-4 overflow-x-auto whitespace-nowrap"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-2 sm:px-10 py-3 border-t-[2px] border-[#FFFFFF] rounded-t-[8px] flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-[#1F5D6A] border-[#FFFFFF] text-[#FFFFFF] font-bold text-[13px] sm:text-[16px]"
                    : "bg-[#EDF3F6] border-[#FFFFFF] text-[#000000] font-regular text-[13px] sm:text-[16px]"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-4 bg-[#EDF3F6] sm:rounded-tl-[16px] rounded-b-[16px] border-[#FFFFFF] border-[2px]">
            {activeTab === "sent" && <Feature />}
            {activeTab === "sending" && <Comment />}
            {activeTab === "canceled" && <Service />}
          </div>
        </div>
      </div>

      <div className="mt-5 sm:mt-20 px-2 sm:px-4 py-4">
        <TopSlider title={" مرتبط"} adjective={"فروشگاه‌های  "} />
      </div>
    </div>
  );
};

export default Page;
