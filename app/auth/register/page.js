"use client";
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import loginBack1 from "@/public/img/loginBack1.jpg";
import { motion, AnimatePresence } from "framer-motion";
import back2 from "@/public/img/back2.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [step, setStep] = useState(1);

  const fadeVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="grid grid-cols-12 mt-20" dir="rtl">
      <div
        className="block md:hidden absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: `url(${back2.src})`,
          opacity: 0.05,
        }}
      />
      <div className="absolute col-span-12 sm:col-span-6 sm:min-h-[100vh] my-10 sm:my-0 relative">
        <div
          className="hidden md:block  absolute inset-0 bg-center bg-cover z-0"
          style={{
            backgroundImage: `url(${back2.src})`,
            opacity: 0.05,
          }}
        />

        <div className="relative z-10 flex justify-center sm:items-center sm:min-h-[100vh]">
          <div className="col-span-12 sm:col-span-6 w-[95%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-[32px] text-right text-[#1E1E1E]"
            >
              تکمیل ثبت نام
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="flex gap-2 justify-left my-5"
            >
              <div className="h-[1.5px] w-64 bg-[#1F5D6A]"></div>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key="step1"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <p className="font-regular text-[14px] text-right text-[#1E1E1E]">
                  یک رمز عبور برای حساب کاربری خود انتخاب کنید.
                </p>
                <div className="my-5 flex flex-col justify-center">
                  <div className="flex justify-between items-center">
                    <p className="text-[#1E1E1E] text-[14px] font-regular text-center">
                      رمز عبور
                    </p>
                  </div>
                  <div className="relative my-3 w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                      placeholder="رمز عبور خود را وارد کنید"
                    />
                    <div
                      className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <IoEyeOffOutline className="w-5 h-5 text-[#1E1E1E]" />
                      ) : (
                        <IoEyeOutline className="w-5 h-5 text-[#1E1E1E]" />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <p className="text-[#1E1E1E] text-[12px] font-bold text-center">
                      رمز عبور باید شامل حداقل 8 کارکتر باشد.
                    </p>
                  </div>
                </div>
                <div className="my-5 flex flex-col justify-center">
                  <div className="flex justify-between items-center">
                    <p className="text-[#1E1E1E] text-[14px] font-regular text-center">
                      تکرار رمز عبور
                    </p>
                  </div>
                  <div className="relative my-3 w-full">
                    <input
                      type={showPassword1 ? "text" : "password"}
                      className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                      placeholder="رمز عبور خود را وارد کنید"
                    />
                    <div
                      className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword1((prev) => !prev)}
                    >
                      {showPassword1 ? (
                        <IoEyeOffOutline className="w-5 h-5 text-[#1E1E1E]" />
                      ) : (
                        <IoEyeOutline className="w-5 h-5 text-[#1E1E1E]" />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <p className="text-[#1E1E1E] text-[12px] font-bold text-center">
                      هر دو رمز باید یکسان باشند.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 sm:gap-5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-[100%] justify-center flex items-center gap-2 bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-4 text-[14px]"
                  onClick={() => setStep(2)}
                >
                  ورود
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative sm:col-span-6 min-h-[100vh] hidden sm:block">
        <Image
          src={loginBack1}
          alt="loginBack1"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
    </div>
  );
};

export default Page;
