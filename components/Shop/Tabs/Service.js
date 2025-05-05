import React, { useState, useEffect } from "react";
import Image from "next/image";
import location from "@/public/img/icons/location.png";
import map from "@/public/img/map.png";

const Service = () => {
  const [currentDay, setCurrentDay] = useState(null);

  useEffect(() => {
    const today = new Date().getDay();

    const persianDayIndex = (today + 1) % 7;
    setCurrentDay(persianDayIndex);
  }, []);

  const days = [
    { name: "شنبه", hours: ["11:00 - 15:00"] },
    { name: "یک شنبه", hours: ["11:00 - 15:00"] },
    { name: "دو شنبه", hours: ["11:00 - 15:00"] },
    { name: "سه شنبه", hours: ["11:00 - 15:00", "17:00 - 21:00"] },
    { name: "چهار شنبه", hours: ["11:00 - 15:00"] },
    { name: "پنج شنبه", hours: ["11:00 - 15:00", "17:00 - 21:00"] },
    { name: "جمعه", hours: ["11:00 - 15:00"] },
  ];

  return (
    <div>
      <div className="flex items-center gap-2">
        <Image src={location} alt="location" />
        <p className="text-[14px] font-regular text-[#1E1E1E]">
          زمان سرویس دهی:
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4 mt-5">
        {days.map((day, index) => (
          <div
            key={index}
            className={`bg-white rounded-[8px] p-4 text-center min-h-[110px] flex flex-col justify-center ${
              currentDay === index ? "border-[1px] border-[#1F5D6A]" : ""
            }`}
          >
            <p className="text-[#252525] text-[14px] font-regular">
              {day.name}
            </p>
            {day.hours.map((hour, i) => (
              <p key={i} className="text-[#252525] text-[14px] font-bold mt-2">
                {hour}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-5">
        <div className="flex items-center gap-2">
          <Image src={location} alt="location" />
          <p className="text-[14px] font-regular text-[#1E1E1E]">
            زمان سرویس دهی:
          </p>
        </div>

        <p className="text-[14px] font-bold text-[#1E1E1E]">
          تهران، خیابان وحدت اسلامی، خیابان بهشت، بعد از ساختمان شهرداری تهران،
          درب 6 پارک شهر، فروشگاه کیف و کفش محسن
        </p>
      </div>
      <div className="mt-5">
        <Image
          src={map}
          alt="map"
          className="w-full h-[400px] object-cover rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default Service;
