"use client";

import React, { useState } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeSlider = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const handleChange = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،");
  };

  return (
    <>
      <p className="text-[#1E1E1E] text-[18px] font-bold mt-5 mb-2 px-4">
        بازه قیمتی
      </p>
      <div className="flex flex-col items-center px-4 my-5">
        <div className="w-full max-w-[500px] space-y-4">
          <div className="flex flex-wrap justify-between">
            <p className="text-[#1E1E1E] text-[16px] font-thin" dir="rtl">
              0 تومان
            </p>
            <p className="text-[#1E1E1E] text-[16px] font-thin" dir="rtl">
              1،000،000 تومان
            </p>
          </div>
          <Slider
            range
            reverse={true}
            min={0}
            max={1000000}
            step={50000}
            value={[minPrice, maxPrice]}
            onChange={handleChange}
            railStyle={{
              backgroundColor: "#FAF1D7",
              height: 10,
              backgroundImage:
                "linear-gradient(to right, #1E1E1E 2px, transparent 0px)",
              backgroundSize: "12px 1px", // عرض و ارتفاع هر خط چین
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
            }}
            trackStyle={[
              {
                backgroundColor: "#A0C498",
                height: 10,
                backgroundSize: "100px 100%",
                backgroundPosition: "center",
              },
            ]}
            handleStyle={[
              {
                backgroundColor: "#A0C498",
                border: "2px solid #A0C498",
                height: 18,
                width: 18,
                marginTop: -4,
                boxShadow: "none",
                outline: "none",
              },
              {
                backgroundColor: "#A0C498",
                border: "2px solid #A0C498",
                height: 18,
                width: 18,
                marginTop: -4,
                boxShadow: "none",
                outline: "none",
              },
            ]}
            dots={false}
          />
          <div className="flex flex-wrap justify-between">
            <p
              className="flex gap-1 text-[#1E1E1E] text-[16px] font-thin"
              dir="rtl"
            >
              از <span className="font-bold">{formatPrice(minPrice)}</span>{" "}
              تومان
            </p>
            <p
              className="flex gap-1 text-[#1E1E1E] text-[16px] font-thin"
              dir="rtl"
            >
              تا <span className="font-bold">{formatPrice(maxPrice)}</span>{" "}
              تومان
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceRangeSlider;
