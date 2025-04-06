"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const questions = [
    {
      title: "چرا اپلیکیشن نوشته‌های ناهید رو داشته باشم؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "چرا اپلیکیشن نوشته‌های ناهید رو داشته باشم؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "چرا اپلیکیشن نوشته‌های ناهید رو داشته باشم؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  return (
    <div className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto sm:my-12">
      <p className="text-black text-[24px] font-bold text-center">
        سوالات متداول
      </p>
      <div className="flex gap-2 justify-center my-5">
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
        <div className="h-[3px] w-64 bg-[#A0C498]"></div>
        <div className="h-[3px] w-10 bg-[#A0C498]"></div>
      </div>

      <div className="w-[100%] md:w-[65%] m-auto">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-[#FAF1D7] rounded-[8px] border-[1px] border-[#EBDFBE] mt-5"
          >
            <div>
              <button
                className="w-full flex justify-between text-end items-center p-4 text-left text-gray-800"
                onClick={() => toggleQuestion(index)}
              >
                <span
                  className={`transform transition-transform duration-200 ${
                    openQuestionIndex === index ? "rotate-180" : "rotate-0"
                  } `}
                >
                  <div className="flex items-center justify-center ">
                    {openQuestionIndex === index ? (
                      <IoCloseSharp color="#354259" size={22} />
                    ) : (
                      <FaPlus color="#354259" size={20} />
                    )}
                  </div>
                </span>

                <span
                  className="text-[14px] lg:text-[16px] font-bold text-[#354259] text-right leading-[25px]"
                  style={{ direction: "rtl" }}
                >
                  {index + 1}.{question.title}
                </span>
              </button>

              {openQuestionIndex === index && (
                <>
                  <div className="px-4">
                    <div className="h-[1px] w-full bg-[#EBDFBE] mt-1"></div>
                  </div>

                  <div className="px-4 pb-4 text-[12px] lg:text-[14px] text-[#1E1E1E] text-right mt-2 font-light leading-[25px]">
                    {question.answer}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
