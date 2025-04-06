"use client";
import React, { useState } from "react";
import StepOne from "@/components/CreatorAuthSteps/StepOne";
import StepTwo from "@/components/CreatorAuthSteps/StepTwo";
import StepThree from "@/components/CreatorAuthSteps/StepThree";
import StepFour from "@/components/CreatorAuthSteps/StepFour";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import loginBack1 from "@/public/img/loginBack1.png";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const steps = [
    { title: "درخواست" },
    { title: "اطلاعات" },
    { title: "احراز هویت" },
    { title: "اتمام" },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const stepContents = [
    <StepOne nextStep={nextStep} />,
    <StepTwo nextStep={nextStep} />,
    <StepThree nextStep={nextStep} />,
    <StepFour nextStep={nextStep} />,
  ];

  return (
    <div className="grid grid-cols-12 mt-20" dir="rtl">
      <motion.div
        initial="hidden"
        animate="visible"
        className="col-span-12 sm:col-span-6 sm:min-h-[100vh] my-10 sm:my-0"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center sm:items-center sm:min-h-[100vh]"
        >
          <div className="col-span-12 sm:col-span-6 w-[95%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
            <motion.p
              variants={itemVariants}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-[32px] text-right"
            >
              ثبت نام همکار
            </motion.p>

            <motion.div
              variants={itemVariants}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="flex gap-2 justify-left my-5"
            >
              <div className="h-[3px] w-64 bg-[#A0C498]"></div>
              <div className="h-[3px] w-10 bg-[#A0C498]"></div>
            </motion.div>

            {/* Steps Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center my-10 w-full"
            >
              {steps.map((step, index) => (
                <div key={index} className="w-full">
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-black text-[16px] ${
                        currentStep === index
                          ? "bg-[#A0C498] font-bold"
                          : currentStep > index
                          ? "border-[1px] border-[#A0C498] font-regular cursor-pointer hover:bg-[#A0C49833]"
                          : "border-[1px] border-[#EBDFBE] font-regular"
                      }`}
                      onClick={() => {
                        if (currentStep > index) {
                          setCurrentStep(index);
                        }
                      }}
                      role={currentStep > index ? "button" : "presentation"}
                      tabIndex={currentStep > index ? 0 : -1}
                      aria-label={
                        currentStep > index
                          ? `Go back to step ${index + 1}`
                          : undefined
                      }
                    >
                      {index + 1}
                    </div>

                    {index !== steps.length - 1 && (
                      <div
                        className={`flex-grow border-t-[1px] border-dashed ${
                          currentStep <= index
                            ? "border-[#EBDFBE]"
                            : "border-[#A0C498]"
                        }`}
                      ></div>
                    )}
                  </div>

                  <span
                    className={`text-[16px] font-regular text-center ${
                      currentStep >= index
                        ? "text-[#1E1E1E]"
                        : "text-[#1e1e1ea8]"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Step Content */}
            {stepContents[currentStep]}
          </div>
        </motion.div>
      </motion.div>

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
