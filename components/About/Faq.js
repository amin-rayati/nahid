"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const questions = [
    {
      title: "دیجی خدمات در کدام کشورها فروش ملک انجام میدهد؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "دیجی خدمات در کدام کشورها فروش ملک انجام میدهد؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "دیجی خدمات در کدام کشورها فروش ملک انجام میدهد؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "دیجی خدمات در کدام کشورها فروش ملک انجام میدهد؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "دیجی خدمات در کدام کشورها فروش ملک انجام میدهد؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "دیجی خدمات در کدام کشورها فروش ملک انجام میدهد؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  return (
    <>
      <p className="text-[#1E1E1E] text-[20px] font-bold text-center">
        سوالات متداول
      </p>
      <div className="flex gap-2 justify-center ">
        <div className="h-[2px]  w-40 sm:w-80 my-5  bg-[#1F5D6A]"></div>
      </div>

      <div className="w-[100%] md:w-[65%] m-auto mt-10">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-[#EDF3F6] rounded-[12px] border-[2px] border-[#FFFFFF] mt-5"
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
                      <FaMinus color="#1F5D6A" size={22} />
                    ) : (
                      <FaPlus color="#1F5D6A" size={20} />
                    )}
                  </div>
                </span>

                <span
                  className={`text-[14px] lg:text-[16px] font-medium  text-right leading-[25px] transform transition-transform duration-200 ${
                    openQuestionIndex === index
                      ? "text-[#1F5D6A]"
                      : "text-[#1E1E1E]"
                  } `}
                  style={{ direction: "rtl" }}
                >
                  {index + 1}.{question.title}
                </span>
              </button>

              {openQuestionIndex === index && (
                <>
                  <div className="px-4">
                    <div className="h-[3px] w-full bg-[#FFFFFF] my-2"></div>
                  </div>

                  <div className="px-4  text-[12px] lg:text-[14px] text-[#1E1E1E] text-right my-4 font-regular leading-[25px]">
                    {question.answer}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
