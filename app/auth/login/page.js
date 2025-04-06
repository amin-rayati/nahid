"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import loginBack1 from "@/public/img/loginBack1.png";
import pen from "@/public/img/pen.png";
import edit from "@/public/img/edit.png";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));

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
    if (e.key === "Backspace" && !otp[index] && index < 3) {
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
      <div className="col-span-12 sm:col-span-6 sm:min-h-[100vh] my-10 sm:my-0">
        <div className="flex justify-center sm:items-center sm:min-h-[100vh]">
          <div className="col-span-12 sm:col-span-6 w-[95%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-[32px] text-right"
            >
              ورود / ثبت نام
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="flex gap-2 justify-left my-5"
            >
              <div className="h-[3px] w-64 bg-[#A0C498]"></div>
              <div className="h-[3px] w-10 bg-[#A0C498]"></div>
            </motion.div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-light text-[16px] text-right text-[#1E1E1E]">
                    شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود
                    و وارد وبسایت شوید.
                  </p>

                  <div className="my-10">
                    <span className="text-[#1E1E1E] text-[16px] font-regular text-right">
                      شماره موبایل
                    </span>

                    <PhoneInput
                      className="my-3"
                      country={"ir"}
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      inputProps={{
                        dir: "ltr",
                        placeholder: "شماره خود را وارد کنید",
                      }}
                      containerStyle={{
                        width: "100%",
                        direction: "ltr",
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#FEFCED",
                        border: "1px solid #EBDFBE",
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
                        backgroundColor: "#FEFCED",
                      }}
                      buttonClass="flag-button-with-divider"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-light text-[16px] text-right text-[#1E1E1E]">
                    کد تایید ارسال شده را وارد کنید تا کد تایید برای شما ارسال
                    شود و وارد وبسایت شوید.
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setStep(1)}
                    className="w-[80%] sm:w-[50%] my-10 m-auto flex items-center justify-center gap-2 bg-[#FAF1D7] border-[#EBDFBE] border-[1px] rounded-[8px] p-4 cursor-pointer"
                  >
                    <Image src={edit} alt="edit" />
                    <p className="text-[#000000] text-[16px] font-bold">
                      {phoneNumber ? phoneNumber : "09362625488"}
                    </p>
                  </motion.div>

                  <div className="my-10 flex flex-col justify-center w-[80%] m-auto">
                    <p className="text-[#1E1E1E] text-[16px] font-regular text-center">
                      کد تایید
                    </p>
                    <div className="flex justify-between my-3">
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
                          className="w-12 h-12 sm:w-16 sm:h-14 text-center text-[20px] bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[8px] outline-none"
                        />
                      ))}
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
              {step === 1 ? (
                <div className="flex items-center gap-2 sm:gap-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-[40%] justify-center flex items-center gap-2 font-bold text-[#354259] rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px]"
                  >
                    حساب مهمان
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-[60%] justify-center flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px]"
                    onClick={() => setStep(2)}
                  >
                    مرحله بعد
                  </motion.button>
                </div>
              ) : (
                <div className="flex items-center gap-2 sm:gap-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-[40%] justify-center flex items-center gap-2 font-bold text-[#354259] rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px]"
                  >
                    حساب مهمان
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-[60%] justify-center flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px]"
                    onClick={() => setStep(1)}
                  >
                    ورود
                  </motion.button>
                </div>
              )}

              <div className="flex items-center justify-center my-10">
                <div className="w-[100%] h-[1px] bg-[#1E1E1E33]"></div>
                <span className="mx-2 text-[#000000] text-[16px] font-regular">
                  یا
                </span>
                <div className="w-[100%] h-[1px] bg-[#1E1E1E33]"></div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex justify-center items-center gap-2 font-bold text-[#354259] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px]"
              >
                <Image src={pen} alt="pen" />
                ثبت نام خالق اثر | کسب درآمد
              </motion.button>
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
