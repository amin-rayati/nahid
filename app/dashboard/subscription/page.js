"use client";
import React from "react";
import Image from "next/image";
import Menu from "@/components/Dashboard/Menu";
import medal from "@/public/img/medal.png";
import SubscriptionCard from "@/components/Dashboard/SubscriptionCard";

import MemberShip from "@/components/Dashboard/MemberShip";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 w-[100%] lg:w-[100%] xl:w-[85%] m-auto my-20"
    >
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-12 gap-2 sm:gap-5"
        dir="rtl"
      >
        {/* menu */}
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <Menu active="subscription" />
        </div>

        {/* dashboard */}
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-8 lg:col-span-9"
        >
          <div
            variants={itemVariants}
            className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-4 flex flex-wrap items-center justify-between"
          >
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 w-[100%] sm:w-[50%] my-2">
              <Image src={medal} alt="medal" className="m-auto" />
              <div>
                <p className="text-[#FF7F5B] text-[36px] font-heavy">
                  خرید اشتراک ویژه
                </p>
                <p className="text-[#1E1E1E] font-regular text-[20px]">
                  با اشتراک ویژه ناهید، دنیایی از داستان‌ها تجربه کنید!
                </p>
              </div>
            </div>
            <div className="w-[100%] sm:w-[45%] my-2">
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-[10%]">
                    <div className="w-2 h-2 bg-black rounded-[100%]"></div>
                  </div>
                  <p className="text-[16px] font-light">
                    <strong className="font-bold">
                      دسترسی به محتوای اختصاصی:
                    </strong>{" "}
                    تنها با اشتراک ویژه به مجموعه‌ای از داستان‌ها، پادکست‌ها و
                    آثار خاص دسترسی خواهید داشت.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-[10%]">
                    <div className="w-2 h-2 bg-black rounded-[100%]"></div>
                  </div>
                  <p className="text-[16px] font-light">
                    <strong className="font-bold">بدون تبلیغات:</strong> تنها با
                    تجربه‌ای بی وقفه و بدون مزاحمت تبلیغات برای لذت بیشتر از
                    محتوای ناهید.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-[10%]">
                    <div className="w-2 h-2 bg-black rounded-[100%]"></div>
                  </div>
                  <p className="text-[16px] font-light">
                    <strong className="font-bold">کیفیت محتوای بالاتر:</strong>{" "}
                    دریافت نسخه‌های با کیفیت‌تر صوتی و تصویری برای تجربه‌ای
                    دلپذیرتر
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            variants={itemVariants}
            className="my-5 w-[100%] md:w-[80%] lg:w-[60%] m-auto"
          >
            <MemberShip />
          </div>

          <div
            variants={itemVariants}
            className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-4 rounded-[16px] "
          >
            <SubscriptionCard />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
