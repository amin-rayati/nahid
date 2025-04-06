"use client";
import React, { useState } from "react";
import { FaPercent } from "react-icons/fa";

const SubscriptionCard = () => {
  const [selected, setSelected] = useState(null);

  const plans = [
    { id: 1, duration: "3", price: "99،000", discount: "30" },
    { id: 2, duration: "6", price: "199،000", discount: "40" },
    { id: 3, duration: "12", price: "299،000", discount: "50" },
    { id: 4, duration: "24", price: "499،000", discount: "60" },
  ];
  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 
              border-[1px] rounded-[16px] p-3 cursor-pointer 
              transition-all duration-200
              ${
                selected === plan.id
                  ? "bg-[#A0C49833] border-[#A0C498]"
                  : "bg-[#FAF1D7] border-[#EBDFBE]"
              }`}
            onClick={() => setSelected(plan.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <p className="text-[16px] font-bold">{plan.duration}</p>
                <p className="text-[16px] font-regular">ماه</p>
              </div>
              <button className="bg-[#354259] border-[1px] border-[#A0C498] p-2 rounded-[8px] text-center flex items-center gap-1">
                <p className="text-[14px] font-regular text-white">
                  {plan.discount}
                </p>
                <FaPercent color="white" size={12} />
              </button>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-4">
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-[16px] font-bold">{plan.price}</p>
                    <p className="text-[16px] font-regular">تومان</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-[16px] font-bold">{plan.price}</p>
                    <p className="text-[16px] font-regular">تومان</p>
                  </div>
                </div>

                <div className="w-[1px] h-10 bg-[#EBDFBE]"></div>
              </div>

              <p className="text-[16px] font-regular">ماهانه</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <button className="text-white text-[16px] font-bold rounded-[8px] p-3 bg-[#354259]">
          خرید اشتراک /{" "}
          {selected ? plans.find((p) => p.id === selected).price : "69،000"}{" "}
          تومان
        </button>
      </div>
    </>
  );
};

export default SubscriptionCard;
