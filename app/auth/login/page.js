"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import loginBack1 from "@/public/img/loginBack1.jpg";
import edit from "@/public/img/edit.png";
import { motion, AnimatePresence } from "framer-motion";
import back2 from "@/public/img/back2.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index > 0) {
      const nextInput = document.getElementById(`otp-${index - 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index < 4) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

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
              ورود / ثبت نام
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="flex gap-2 justify-left my-5"
            >
              <div className="h-[1.5px] w-64 bg-[#1F5D6A]"></div>
            </motion.div>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-regular text-[14px] text-right text-[#1E1E1E]">
                    شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود.
                  </p>
                  <div className="my-10">
                    <span className="text-[#1E1E1E] text-[14px] font-regular text-right">
                      شماره موبایل
                    </span>
                    <PhoneInput
                      className="my-3"
                      country={"ir"}
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      inputProps={{
                        dir: "ltr",
                        placeholder: "شماره موبایل خود را وارد کنید",
                      }}
                      containerStyle={{
                        width: "100%",
                        direction: "ltr",
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#FFFFFF",

                        borderRadius: "8px",
                        padding: "15px",
                        textAlign: "left",
                        fontSize: "16px",
                        fontWeight: "light",
                        paddingLeft: "50px",
                      }}
                      buttonStyle={{
                        border: "none",
                        borderRadius: "8px 0 0 8px",
                        objectFit: "contain",
                        background: "none",
                        left: "0",
                        right: "auto",
                      }}
                      dropdownStyle={{
                        width: "fit-content",
                        minWidth: "200px",
                        backgroundColor: "#FFFFFF",
                      }}
                      buttonClass="flag-button-with-divider"
                    />
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-light text-[16px] text-right text-[#1E1E1E]">
                    کد تایید ارسال شده به شماره نلفن خود را وارد کنید.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setStep(1)}
                    className="w-[80%] sm:w-[50%] my-5 m-auto flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Image src={edit} alt="edit" className="w-4 h-4 mb-1" />
                    <p className="text-[#1E1E1E] text-[16px] font-bold">
                      {phoneNumber ? phoneNumber : "09362625488"}
                    </p>
                  </motion.div>

                  <div className="my-5 flex flex-col justify-center">
                    <div className="flex justify-between items-center">
                      <p className="text-[#1E1E1E] text-[14px] font-regular text-center">
                        کد تایید
                      </p>
                      <p className="text-[#1F5D6A] text-[14px] font-bold text-center">
                        ارسال مجدد
                      </p>
                    </div>

                    <div className="flex justify-between my-3 w-[80%] sm:w-[95%] md:w-[85%] 2xl:w-[75%] 3xl:w-[65%] m-auto">
                      {otp.map((digit, index) => (
                        <motion.input
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          value={digit}
                          maxLength={1}
                          dir="ltr"
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          className="w-8 h-8 sm:w-12 sm:h-11 text-center text-[20px] bg-[#ffffff] rounded-[8px] outline-none"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-light text-[16px] text-right text-[#1E1E1E]">
                    رمز عبور مربوط به حساب خود را وارد کنید.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setStep(1)}
                    className="w-[80%] sm:w-[50%] my-5 m-auto flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Image src={edit} alt="edit" className="w-4 h-4 mb-1" />
                    <p className="text-[#1E1E1E] text-[16px] font-bold">
                      {phoneNumber ? phoneNumber : "09362625488"}
                    </p>
                  </motion.div>

                  <div className="my-5 flex flex-col justify-center">
                    <div className="flex justify-between items-center">
                      <p className="text-[#1E1E1E] text-[14px] font-regular text-center">
                        رمز عبور
                      </p>
                      <p className="text-[#1F5D6A] text-[14px] font-bold text-center">
                        فراموشی رمز عبور
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
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {step === 1 && (
                <div className="flex items-center gap-2 sm:gap-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-[100%] justify-center flex items-center gap-2 bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-4 text-[14px]"
                    onClick={() => setStep(2)}
                  >
                    مرحله بعد
                  </motion.button>
                </div>
              )}
              {step === 2 && (
                <div className="flex items-center gap-2 sm:gap-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-[100%] justify-center flex items-center gap-2 bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-4 text-[14px]"
                    onClick={() => setStep(3)}
                  >
                    مرحله بعد
                  </motion.button>
                </div>
              )}
              {step === 3 && (
                <div className="flex items-center gap-2 sm:gap-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-[100%] justify-center flex items-center gap-2 bg-[#1F5D6A] font-bold text-[white] rounded-[8px] py-4 text-[14px]"
                    onClick={() => setStep(1)}
                  >
                    ورود
                  </motion.button>
                </div>
              )}
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
