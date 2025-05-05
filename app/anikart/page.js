"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ClubCodeModal from "@/components/Modals/ClubCodeModal";
import { motion, AnimatePresence } from "framer-motion";

import back2 from "@/public/img/back2.png";
import no from "@/public/img/no.png";
import yes from "@/public/img/yes.png";

const Page = () => {
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
      <div className="grid grid-cols-12 mt-20" dir="rtl">
        <div className="col-span-12 sm:col-span-6 min-h-[100vh] bg-[#1F5D6A] relative">
          <div
            className="absolute inset-0 bg-center bg-cover z-0"
            style={{
              backgroundImage: `url(${back2.src})`,
              opacity: 0.05,
            }}
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="col-span-12 sm:col-span-6 w-[95%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#FFD14E] text-[32px] font-bold"
              >
                {" "}
                به آنیکارت خوش آمدید
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="flex gap-2 justify-left my-5"
              >
                <div className="h-[1.5px] w-96 bg-[#FFFFFF]"></div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#ffffff] text-[14px] font-regular leading-[30px] text-justify"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 sm:min-h-[100vh] my-10 sm:my-0 relative">
          <div
            className="hidden sm:block absolute inset-0 bg-center bg-cover z-0"
            style={{
              backgroundImage: `url(${back2.src})`,
              opacity: 0.05,
            }}
          />

          <div className="relative z-10 flex items-center justify-center h-full text-white text-2xl px-2">
            <div className="grid grid-cols-12 gap-2">
              <AnimatePresence>
                <motion.div
                  key="card1"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center col-span-12 sm:col-span-12 md:col-span-6 bg-[#EDF3F6] rounded-[16px] border-[2px] border-white p-4"
                >
                  <div className="bg-white rounded-[8px] p-5">
                    <Image src={no} alt="no" />
                  </div>
                  <p className="text-[#000000] text-[16px] font-medium my-5">
                    آنیکارت ندارم
                  </p>

                  <Link
                    href="/anikart/buy"
                    className="w-[100%] justify-center flex items-center gap-2 bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-2 text-[14px]"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      مرحله بعد
                    </motion.button>
                  </Link>
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
                  <div className="bg-white rounded-[8px] p-5">
                    <Image src={yes} alt="yes" />
                  </div>
                  <p className="text-[#000000] text-[16px] font-medium my-5">
                    آنیکارت دارم
                  </p>

                  <motion.button
                    onClick={openModal}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-[100%] justify-center flex items-center gap-2 bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-2 text-[14px]"
                  >
                    واردن کردن کد
                  </motion.button>
                  <ClubCodeModal
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
