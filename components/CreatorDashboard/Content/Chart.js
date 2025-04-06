import React from "react";
import Image from "next/image";
import chart from "@/public/img/chart.png";
import { GoDotFill } from "react-icons/go";

const Chart = ({ viewsData, likesData }) => {
  const maxValue = Math.max(
    ...viewsData.map((item) => item.value),
    ...likesData.map((item) => item.value),
    600
  );

  const days = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ];

  return (
    <div
      className="p-4 bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px]"
      dir="rtl"
    >
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={chart} alt="chart" />
          <p className="text-[#1E1E1E] text-[20px] font-regular">
            آمار و اطلاعات
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#1E1E1ECC] text-[16px] font-regular">امروز</p>{" "}
          <p className="text-[#354259] text-[16px] font-bold border-x-[1px] border-[#354259] px-2">
            هفته
          </p>
          <p className="text-[#1E1E1ECC] text-[16px] font-regular">ماه</p>
        </div>
      </div>
      <div className="relative bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[16px] mt-5 p-3">
        <div className="flex items-center gap-2 mr-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-[2px] bg-[#FF7F5B]"></div>
            <p className="text-[#1E1E1E] text-[16px] font-regular">بازدید</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-[2px] bg-[#354259]"></div>
            <p className="text-[#1E1E1E] text-[16px] font-regular">پسند</p>
          </div>
        </div>

        <div className="mt-4 w-full overflow-x-auto">
          <div className="min-w-[600px] h-[350px] relative">
            {/* Y-axis labels and grid lines */}
            <div className="absolute top-0 right-0  w-full flex flex-col justify-between">
              {[600, 500, 400, 300, 200, 100, 0].map((value, index) => (
                <div
                  key={`label-${index}`}
                  className="flex items-center h-[calc(300px/6)] relative"
                >
                  <span className="text-[14px] font-regular text-[#1E1E1E] w-8 text-left z-10">
                    {value}
                  </span>
                  {/* Horizontal grid line that spans the entire width */}
                  <div className="absolute right-0 left-0 h-[1px] bg-[#EBDFBE] ml-5 mr-10"></div>
                </div>
              ))}
            </div>

            {/* Bars and X-axis */}
            <div className="absolute bottom-0 right-12 left-4 flex items-end">
              <div className="relative h-full w-full flex justify-between items-end">
                {days.map((day, index) => (
                  <div
                    key={`day-${index}`}
                    className="flex flex-col items-center"
                  >
                    <div className="flex items-end mb-6">
                      {/* Views Bar */}
                      <div
                        className="w-4 rounded-[4px] bg-[#FF7F5B] mx-1 relative group"
                        style={{
                          height: `${(viewsData[index]?.value / 600) * 300}px`,
                        }}
                      >
                        {/* Tooltip */}
                        <div className="flex items-center gap-1 absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded shadow text-[14px] font-regular opacity-0 group-hover:opacity-100 transition-opacity">
                          <GoDotFill color="white" size={10} />
                          {viewsData[index]?.value}
                          <p>بازدید</p>
                        </div>
                      </div>

                      {/* Likes Bar */}
                      <div
                        className="w-4 rounded-[4px] bg-[#354259] mx-1 relative group"
                        style={{
                          height: `${(likesData[index]?.value / 600) * 300}px`,
                        }}
                      >
                        {/* Tooltip */}
                        <div className="flex items-center gap-1 absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded shadow text-[14px] font-regular opacity-0 group-hover:opacity-100 transition-opacity">
                          <GoDotFill color="white" size={10} />
                          {likesData[index]?.value}
                          <p>پسند</p>
                        </div>
                      </div>
                    </div>

                    {/* Day Label */}
                    <div className="text-[14px] text-[#1E1E1E] font-regular absolute bottom-0">
                      {day}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
