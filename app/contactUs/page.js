"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

import Image from "next/image";

import txtback from "@/public/img/txtback.png";
import contactus from "@/public/img/contactus.png";
import rahjo from "@/public/img/rahjo.png";
import samandehi from "@/public/img/samandehi.png";
import aparat from "@/public/img/icons/aparat.png";
import insta from "@/public/img/icons/insta.png";
import whatsapp from "@/public/img/icons/whatsapp.png";
import tel from "@/public/img/icons/tel.png";
import clock from "@/public/img/clock.png";
import profile from "@/public/img/profile.png";
import shape from "@/public/img/shape.svg";
import man from "@/public/img/man.png";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

import { BsDot } from "react-icons/bs";

const Page = () => {
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
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };
  return (
    <>
      <div
        className="px-2 sm:px-4 py-4 mt-[110px] sm:mt-[175px] md:mt-[190px]"
        dir="rtl"
      >
        <div dir="ltr">
          <BreadCrumb />
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <div>
              <p className="text-[32px] absolute z-10">
                <span className="text-[#1E1E1E] font-morabba">تماس با </span>
                <span className="text-[#1F5D6A] font-morabba">آنیکا</span>
                <span className="text-[#1E1E1E] font-morabba">رت</span>
              </p>

              <Image
                src={txtback}
                alt="txtback"
                className="relative top-8 right-0"
              />
            </div>
            <p className="text-[14px] font-regular text-[#1E1E1E] leading-[30px] mt-10">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است.
            </p>
            <div className="flex flex-wrap justify-between items-center w-full my-5">
              <p className="text-[#1E1E1E] text-[15] sm:text-[16px] font-regular">
                تماس مستقیم:
              </p>

              <div className="flex items-center gap-2 flex-1 mr-2">
                <span className="border-t border-dashed border-[#1E1E1E] flex-1 opacity-20"></span>
                <p className="text-[15] sm:text-[20px] font-fat text-[#1F5D6A]">
                  021 - 2253 5225
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 m-auto md:m-0 flex justify-end">
            <Image src={contactus} alt="contactus" />
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-4 py-4 mt-5 sm:mt-20">
        <div className="grid grid-cols-12 gap-2" dir="rtl">
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-[#EDF3F6] rounded-[16px] border-[2px] border-[#FFFFFF] p-5 flex flex-col items-center justify-center w-full h-full">
              <div className="flex items-center w-full gap-2 my-2  justify-flex-right">
                <Image src={rahjo} alt="rahjo" />

                <p className="text-[#000000] text-[14px] font-medium">
                  دارای مجوز رسمی از نظارم صنفی رایانه‌ای
                </p>
              </div>
              <div className="flex items-center w-full gap-2 my-2  justify-flex-right opacity-50">
                <Image src={samandehi} alt="samandehi" />

                <p className="text-[#000000] text-[14px] font-medium">
                  دارای نماد اعتماد الکترونیکی
                </p>
              </div>
              <div className="flex items-center w-full gap-2 my-2  justify-flex-right opacity-50">
                <Image src={rahjo} alt="rahjo" />

                <p className="text-[#000000] text-[14px] font-medium">
                  دارای مجوز رسمی از نظارم صنفی رایانه‌ای
                </p>
              </div>
            </div>
          </div>
          <div className="gap-2 col-span-12 lg:col-span-5">
            <div className="grid grid-cols-12 gap-2 h-full">
              <div className="col-span-12 sm:col-span-6 flex flex-col justify-between gap-2">
                <div className="bg-[#EDF3F6] rounded-[16px] border-[2px] border-[#FFFFFF] p-5 flex items-center justify-between w-full h-full">
                  <div className="bg-[#FFFFFF] rounded-[5px] p-2">
                    <Image src={aparat} alt="aparat" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[#000000] text-[14px] font-regular text-end">
                      whatch
                    </p>
                    <p className="text-[#000000] text-[16px] font-bold text-end">
                      Aparat
                    </p>
                  </div>
                </div>
                <div className="bg-[#EDF3F6] rounded-[16px] border-[2px] border-[#FFFFFF] p-5 flex items-center justify-between w-full h-full">
                  <div className="bg-[#FFFFFF] rounded-[5px] p-2">
                    <Image src={insta} alt="insta" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[#000000] text-[14px] font-regular text-end">
                      Follow
                    </p>
                    <p className="text-[#000000] text-[16px] font-bold text-end">
                      Telegram
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-6 flex flex-col justify-between gap-2">
                <div className="bg-[#EDF3F6] rounded-[16px] border-[2px] border-[#FFFFFF] p-5 flex items-center justify-between w-full h-full">
                  <div className="bg-[#FFFFFF] rounded-[5px] p-2">
                    <Image src={whatsapp} alt="whatsapp" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[#000000] text-[14px] font-regular text-end">
                      Message
                    </p>
                    <p className="text-[#000000] text-[16px] font-bold text-end">
                      Whatsapp
                    </p>
                  </div>
                </div>
                <div className="bg-[#EDF3F6] rounded-[16px] border-[2px] border-[#FFFFFF] p-5 flex items-center justify-between w-full h-full">
                  <div className="bg-[#FFFFFF] rounded-[5px] p-2">
                    <Image src={tel} alt="tel" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[#000000] text-[14px] font-regular text-end">
                      Message
                    </p>
                    <p className="text-[#000000] text-[16px] font-bold text-end">
                      Telegram
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-[#EDF3F6] rounded-[16px] border-[2px] border-[#FFFFFF] p-5 flex flex items-center justify-between w-full h-full">
              <div>
                <Image src={clock} alt="clock" />
              </div>

              <div className="flex flex-col items-right gap-2">
                <p className="text-[#1E1E1E] text-[14px] font-regular">
                  ساعت کاری تیم مشاوره و فروش:
                </p>
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-bold">
                    شنبه تا چهارشنبه
                  </p>
                </div>{" "}
                <div className="flex items-center gap-1 my-2">
                  <BsDot color="#1E1E1E" size={20} />

                  <p className="text-[#1E1E1E] text-[14px] font-bold">
                    9 صبح تا 5 بعد از ظهر
                  </p>
                </div>
                <p className="text-[15] sm:text-[20px] font-fat text-[#1F5D6A]">
                  021 - 2253 5225
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-4 py-4 mt-5 sm:mt-20  mb-5 sm:mb-20">
        <div
          className="bg-[#1F5D6A] rounded-[16px] p-2 md:p-10 grid grid-cols-12 mt-2 relative overflow-visible"
          dir="rtl"
        >
          {/* left */}
          <div className="col-span-12 md:col-span-5">
            <div>
              <Image src={profile} alt="profile" />
              <p className="text-[20px] sm:text-[32px] text-[#FFFFFF] font-fat mt-5">
                سوالات شما را با مهر پاسخگوییم
              </p>
              <p className="text-[13px] sm:text-[16px] text-[#FFFFFF] font-regular mt-5">
                درخواست‌های شما توسط همکاران ما در آنیکارت بررسی شده و در
                سریع‌ترین زمان ممکن پاسخ داده می‌شود.
              </p>
              <Image src={shape} alt="shape" className="mt-5" />
            </div>
          </div>

          {/* right-form */}
          <div className="col-span-12 md:col-span-7 relative z-10 -mb-24 md:-mb-40 mt-8 md:mt-16">
            <div className="flex items-center gap-4 justify-end px-4 mx-4">
              <div className="h-[4px]  sm:w-3 my-5  bg-[#FFFFFF]"></div>
              <div className="h-[4px]  sm:w-6 my-5  bg-[#FFFFFF]"></div>
              <div className="h-[4px]  sm:w-12 my-5  bg-[#FFFFFF]"></div>
              <div className="h-[4px]  sm:w-24 my-5  bg-[#FFFFFF]"></div>
              <div className="h-[4px]  sm:w-48 my-5  bg-[#FFFFFF]"></div>
            </div>

            <div className="bg-[#EDF3F6] border-[2px] border-[#FFFFFF] rounded-[12px] p-4  grid grid-cols-12 md:gap-4 m-auto">
              <div className="col-span-12 md:col-span-6 justify-center">
                <div className="flex justify-between items-center">
                  <p className="text-[#1E1E1E] text-[14px] font-regular text-center">
                    نام و نام خانوادگی
                  </p>
                </div>
                <div className="relative my-3 w-full">
                  <input
                    className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 justify-center">
                <div className="flex justify-between items-center">
                  <p className="text-[#1E1E1E] text-[14px] font-regular text-center">
                    شماره تماس
                  </p>
                </div>
                <div className="relative my-3 w-full">
                  <input
                    className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                    placeholder=" شماره تماس را وارد کنید"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 justify-center">
                <div className="flex justify-between items-center">
                  <p className="text-[#1E1E1E] text-[14px] font-regular text-center">
                    آدرس ایمیل
                  </p>
                </div>
                <div className="relative my-3 w-full">
                  <input
                    className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 justify-center">
                <div className="flex justify-between items-center">
                  <p className="text-[#1E1E1E] text-[14px] font-regular text-center">
                    موضوع پیام
                  </p>
                </div>
                <div className="relative my-3 w-full">
                  <select
                    className="w-full outline-none px-5 py-3 text-right rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] 
                  placeholder:font-regular "
                  >
                    <option className="text-[#1E1E1E] text-[14px] font-regular text-right">
                      انتخاب موضوع
                    </option>
                    <option className="text-[#1E1E1E] text-[14px] font-regular text-right">
                      موضوع ۱
                    </option>
                    <option className="text-[#1E1E1E] text-[14px] font-regular text-right">
                      موضوع ۲
                    </option>
                  </select>
                </div>
              </div>

              <div className="col-span-12 justify-center w-full">
                <div className="flex justify-between items-center">
                  <p className="text-[#1E1E1E] text-[14px] font-regular text-center">
                    متن پیام
                  </p>
                </div>
                <div className="relative my-3 w-full">
                  <textarea
                    rows={4}
                    placeholder="متن مورد نظر را وارد کنید"
                    className="w-full outline-none px-5 py-3 text-right pr-5 rounded-[8px] placeholder:text-[#1E1E1ECC] placeholder:text-[14px] placeholder:font-regular resize-none"
                  />
                </div>
              </div>

              <div className="col-span-12 flex justify-end w-full">
                <button className="rounded-[8px] bg-[#1F5D6A] p-3 text-center text-white text-[14px] font-bold cursot-poniter w-[100%] md:w-[35%]">
                  ارسال فرم
                </button>
              </div>
            </div>

            <div
              className="flex items-center gap-4 justify-end px-4 mx-4"
              dir="ltr"
            >
              <div className="h-[4px]  sm:w-3 my-5  bg-[#1F5D6A]"></div>
              <div className="h-[4px]  sm:w-6 my-5  bg-[#1F5D6A]"></div>
              <div className="h-[4px]  sm:w-12 my-5  bg-[#1F5D6A]"></div>
              <div className="h-[4px]  sm:w-24 my-5  bg-[#1F5D6A]"></div>
              <div className="h-[4px]  sm:w-48 my-5  bg-[#1F5D6A]"></div>
            </div>
          </div>

          {/* wave */}
          <div className="absolute bottom-0 left-0 right-0 w-full h-[200px] pointer-events-none z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                fill="#D3D3D3"
                fillOpacity="0.3"
                d="M5,280 C200,-40 510,-100 800,160 C1000,320 1200,320 1400,160 L1440,120 L1440,320 L0,320 Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-4 py-4 mt-20 sm:mt-40">
        <div className="grid grid-cols-12 gap-4 flex items-center" dir="rtl">
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="bg-[#1F5D6A] rounded-[12px] relative  h-[280px]">
              <Image
                src={man}
                alt="man"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[300px] object-contain"
              />
            </div>
            <p className="text-[#1E1E1E] text-[14px] font-medium text-center mt-5">
              لـورم ایپـسوم متن ساختـگـی با تـولیـد سـادگـی نامفهوم از صنعت چاپ
              است.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-9" dir="ltr">
            <p className="text-[#1E1E1E] text-[20px] font-bold text-right">
              سوالات پرتکرار
            </p>
            <div className="flex gap-2 justify-end ">
              <div className="h-[2px]  w-40 sm:w-80 my-5  bg-[#1F5D6A]"></div>
            </div>

            <div className="mt-5">
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
                          openQuestionIndex === index
                            ? "rotate-180"
                            : "rotate-0"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
