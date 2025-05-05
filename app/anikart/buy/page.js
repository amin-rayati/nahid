"use client";
import React, { useState } from "react";
import Image from "next/image";
import WelcomeModal from "@/components/Modals/WelcomeModal";
import { motion, AnimatePresence } from "framer-motion";
import { BsDot } from "react-icons/bs";

import back2 from "@/public/img/back2.png";
import year from "@/public/img/year.png";
import month from "@/public/img/month.png";

const Page = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fadeVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <>
      <div
        className="mt-20 flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl p-4"
        dir="rtl"
      >
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{
            backgroundImage: `url(${back2.src})`,
            opacity: 0.05,
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <p className="text-[14px] sm:text-[32px] text-[#1E1E1E] font-bold">
            شما در حال خرید اشتراک هستید
          </p>
          <div className="flex gap-2 justify-center my-5">
            <div className="h-[1.5px] w-48 sm:w-[600px] bg-[#1F5D6A]"></div>
          </div>
          <p className="text-[11px] sm:text-[14px] text-[#1E1E1E] font-regular">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>

          <div className="grid grid-cols-12 gap-2 my-5 sm:my-10">
            <motion.div
              key="card1"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center col-span-12 sm:col-span-12 md:col-span-6 bg-[#EDF3F6] rounded-[16px] border-[2px] border-white p-4"
            >
              <Image src={month} alt="month" />

              <p className="text-[#1E1E1E] text-[20px] font-medium my-5">
                اشتراک شش ماهه
              </p>

              <section>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    تا ۵۰٪ تخفیف در بیش از ۲۰۰ مرکز درمانی و زیبایی
                  </p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    عضویت در کمتر از ۲ دقیقه بدون نیاز به تماس
                  </p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    قابل استفاده در باشگاه‌ها، رستوران‌ها، آتلیه، و...
                  </p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    اعتبار یک‌ساله بدون هزینه پنهان
                  </p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    پشتیبانی آنلاین و تلفنی حتی روزهای تعطیل
                  </p>
                </div>
              </section>
              <div
                className="flex items-center gap-2 cursor-pointer mt-5"
                onClick={() => setSelectedCard("month")}
              >
                <div
                  className={`w-6 h-6 border-[1px] border-[#1E1E1E] rounded-[6px] transition-all duration-200 ${
                    selectedCard === "month" ? "bg-[#1F5D6A]" : "bg-none"
                  }`}
                />
                <p
                  className={`text-[#1E1E1E] text-[16px]  transition-all duration-200 ${
                    selectedCard === "month" ? "font-medium" : "font-regular"
                  }`}
                >
                  انتخاب اشتراک
                </p>
              </div>
            </motion.div>
            <motion.div
              key="card2"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center col-span-12 sm:col-span-12 md:col-span-6 bg-[#EDF3F6] rounded-[16px] border-[2px] border-white p-4"
            >
              <Image src={year} alt="year" />

              <p className="text-[#1E1E1E] text-[20px] font-medium my-5">
                اشتراک یک ساله
              </p>

              <section>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    تا ۵۰٪ تخفیف در بیش از ۲۰۰ مرکز درمانی و زیبایی
                  </p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    عضویت در کمتر از ۲ دقیقه بدون نیاز به تماس
                  </p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    قابل استفاده در باشگاه‌ها، رستوران‌ها، آتلیه، و...
                  </p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    اعتبار یک‌ساله بدون هزینه پنهان
                  </p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-regular">
                    پشتیبانی آنلاین و تلفنی حتی روزهای تعطیل
                  </p>
                </div>
              </section>
              <div
                className="flex items-center gap-2 cursor-pointer mt-5"
                onClick={() => setSelectedCard("year")}
              >
                <div
                  className={`w-6 h-6 border-[1px] border-[#1E1E1E] rounded-[6px] transition-all duration-200 ${
                    selectedCard === "year" ? "bg-[#1F5D6A]" : "bg-none"
                  }`}
                />
                <p
                  className={`text-[#1E1E1E] text-[16px]  transition-all duration-200 ${
                    selectedCard === "year" ? "font-medium" : "font-regular"
                  }`}
                >
                  انتخاب اشتراک
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-12 gap-2 my-5 sm:my-10 md:w-[90%] mx-auto px-4">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              کد معرف (اختیاری)
            </p>

            <div className="relative w-full my-2">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="کد معرف را وارد کنید"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-[#1E1E1E] text-[14px] font-regular">
              کد تخفیف (اختیاری)
            </p>

            <div className="relative w-full my-2">
              <input
                type="text"
                className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                placeholder="کد تخفیف را وارد کنید"
                style={{ paddingLeft: "100px" }}
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-1 text-[#1F5D6A] text-[14px] font-bold rounded-[8px] bg-none border-[2px] border-[#1F5D6A]">
                بررسی کد
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="invisible text-[14px] font-regular">مخفی</p>

            <button
              onClick={openModal}
              className="w-[100%] cursor-pointer bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-3 text-[14px] my-2"
            >
              خرید اشتراک (500،000 تومان)
            </button>
            <WelcomeModal isModalOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
