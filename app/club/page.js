"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import back2 from "@/public/img/back2.png";
import coin from "@/public/img/icons/coin.png";
import coin1 from "@/public/img/icons/coin1.png";
import coin2 from "@/public/img/icons/coin2.png";
import user3 from "@/public/img/icons/user3.png";
import stars1 from "@/public/img/icons/stars1.png";
import list from "@/public/img/icons/list.png";
import { FaChevronLeft } from "react-icons/fa6";
import ClubSlider from "@/components/Slider/Clubslider";

const Page = () => {
  const [rewards, setRewards] = useState([]);
  const [todayIndex, setTodayIndex] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("dailyRewards");
    const lastCollected = localStorage.getItem("lastCollectedDate");

    let newRewards = Array.from({ length: 7 }, (_, i) => ({
      day: i + 1,
      collected: false,
    }));

    if (stored) {
      newRewards = JSON.parse(stored);
    }

    let today = 0;
    if (lastCollected) {
      const diff = Math.floor(
        (Date.now() - new Date(lastCollected).getTime()) / (1000 * 60 * 60 * 24)
      );
      today = Math.min(diff, 6);
    }

    setRewards(newRewards);
    setTodayIndex(today);
  }, []);

  const handleCollect = (index) => {
    if (index !== todayIndex || rewards[index].collected) return;

    const updated = [...rewards];
    updated[index].collected = true;
    setRewards(updated);
    localStorage.setItem("dailyRewards", JSON.stringify(updated));
    localStorage.setItem("lastCollectedDate", new Date().toISOString());
  };
  return (
    <>
      <div className="px-2 sm:px-4 py-4 mt-[120px] sm:mt-[200px] md:mt-[190px] relative">
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{
            backgroundImage: `url(${back2.src})`,
            opacity: 0.05,
          }}
        ></div>

        <div className="relative z-10">
          <div className="flex justify-center items-center">
            <div
              className="bg-[#1F5D6A] rounded-[16px] p-3 flex items-center justify-around gap-2 sm:w-[500px] sm:h-[170px]"
              dir="rtl"
            >
              <p className="text-[#FFFFFF] text-[20px] sm:text-[26px] md:text-[32px] font-bold">
                امتیاز شما :
              </p>
              <div className="bg-[#1e1e1e3d] rounded-[12px] flex items-center justify-between gap-2 p-3 sm:px-8 sm:py-6">
                <p className="text-[#FFD14E] text-[22px] sm:text-[30px] md:text-[40px] font-bold">
                  550
                </p>
                <Image src={coin} alt="coin" />
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-12 gap-5 sm:gap-10 my-5 sm:my-20"
            dir="rtl"
          >
            <div className="col-span-12 md:col-span-8">
              <div className="bg-[#EDF3F6] border-[2px] border-[#FFFFFF] p-4 rounded-[16px]">
                <p className="text-[#1F5D6A] text-[20px] font-bold text-center">
                  امتیاز روزانه
                </p>
                <div className="flex flex-wrap items-center justify-around gap-2 my-5">
                  {rewards.map((reward, index) => (
                    <section
                      key={index}
                      onClick={() => handleCollect(index)}
                      className="cursor-pointer"
                    >
                      <div
                        className={`rounded-[5px] gap-2 p-4 text-center min-h-[50px] min-w-[90px] flex items-center justify-center transition-all duration-300 ${
                          reward.collected
                            ? "bg-gray-400"
                            : index === todayIndex
                            ? "bg-[#FFD14E]"
                            : "bg-white"
                        }`}
                      >
                        <Image
                          src={index === todayIndex ? coin2 : coin1}
                          alt="coin"
                          width={24}
                          height={24}
                        />
                        <p className="text-[#1E1E1E] font-bold text-[16px]">
                          +1
                        </p>
                      </div>
                      <p className="text-[#1E1E1E] font-regular text-[16px] text-center mt-2">
                        {index === todayIndex ? "امروز" : `روز ${index + 1}`}
                      </p>
                    </section>
                  ))}
                </div>
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <p className="text-[#000000] text-[14px] font-medium">
                    برای دریافت امتیاز بیشتر 7 روز متوالی سر بزنید.
                  </p>
                  <button
                    className={`${
                      rewards[todayIndex]?.collected
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#1F5D6A] cursor-pointer"
                    } text-[#FFFFFF] text-[14px] font-bold p-3 text-center rounded-[8px] w-[100%] sm:w-[40%] transition-all duration-300`}
                    onClick={() => {
                      if (!rewards[todayIndex]?.collected) {
                        handleCollect(todayIndex);
                      }
                    }}
                    disabled={rewards[todayIndex]?.collected}
                  >
                    دریافت امتیاز امروز
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col justify-between gap-5">
              <div className="bg-[#EDF3F6] border-[2px] border-[#FFFFFF] p-4 rounded-[16px] flex items-center justify-between flex-wrap">
                <div className="flex items-center gap-2">
                  <Image src={user3} alt="user3" />
                  <p className="text-[#1E1E1E] text-[14px] font-bold">
                    برندگان قرعه کشی
                  </p>
                </div>

                <FaChevronLeft color="#1F5D6A" />
              </div>
              <div className="bg-[#EDF3F6] border-[2px] border-[#FFFFFF] p-4 rounded-[16px] flex items-center justify-between flex-wrap">
                <div className="flex items-center gap-2">
                  <Image src={stars1} alt="stars1" />
                  <p className="text-[#1E1E1E] text-[14px] font-bold">
                    باشگاه جوایز
                  </p>
                </div>

                <FaChevronLeft color="#1F5D6A" />
              </div>
              <div className="bg-[#EDF3F6] border-[2px] border-[#FFFFFF] p-4 rounded-[16px] flex items-center justify-between flex-wrap">
                <div className="flex items-center gap-2">
                  <Image src={list} alt="list" />
                  <p className="text-[#1E1E1E] text-[14px] font-bold">
                    تاریخچه امتیازات
                  </p>
                </div>

                <FaChevronLeft color="#1F5D6A" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 sm:px-4 py-4">
        <div className="my-5 sm:my-10">
          <ClubSlider title={"ماموریت‌ها"} />
        </div>

        <div className="my-5 sm:my-10">
          <ClubSlider title={"ماموریت‌های انجام شده"} />
        </div>
      </div>
    </>
  );
};

export default Page;
