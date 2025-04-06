import React from "react";

import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#354259]">
        <div
          className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl"
          style={{ direction: "rtl" }}
        >
          <div className="grid grid-cols-12 md:gap-10 lg:gap-20">
            <section className="col-span-12 md:col-span-5 ">
              <p className="text-[white] text-[18px] font-bold">درباره ما</p>
              <div>
                <div className="h-[2px]  bg-[#A0C498] my-5 w-[100%]"></div>
                <p className="text-[18px] font-bold text-white">
                  مـــرجـــــع تخـصــصـی فرهــنــگی هــنــری بـــرای داسـتـان و
                  کـتـاب‌هــای صــوتــی
                </p>

                <p className="text-[14px] font-thin text-white leading-[25px] my-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                </p>
              </div>
            </section>

            <section className="col-span-12 md:col-span-3 ">
              <p className="text-[white] text-[18px] font-bold">دسترسی سریع</p>
              <div>
                <div className="h-[2px]  bg-[#A0C498] my-5 w-[100%]"></div>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-white text-[16px] font-regular my-2">
                    داستان‌ها
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-white text-[16px] font-regular my-2">
                    کتاب‌های صوتی
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-white text-[16px] font-regular my-2">
                    کتاب‌ها
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-white text-[16px] font-regular my-2">
                    اشعار
                  </p>
                </div>
              </div>
            </section>

            <section className="col-span-12 md:col-span-4 ">
              <p className="text-[white] text-[18px] font-bold">تماس با ما</p>
              <div>
                <div className="h-[2px]  bg-[#A0C498] my-5 w-[100%]"></div>

                <p className="text-[14px] font-thin text-white leading-[25px] my-3">
                  آدرس: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ و با استفاده از طراحان گرافیک است.
                </p>

                <div className="flex items-center justify-between flex-wrap md:my-10">
                  <div className="flex items-center gap-3 my-2">
                    <FaPhone size={20} color="white" />
                    <p className="text-white text-[20px] font-bold">
                      021-24714719
                    </p>
                  </div>
                  <div className="flex items-center gap-2 my-2">
                    <FaInstagram size={20} color="white" />
                    <PiTelegramLogoBold size={20} color="white" />
                    <FaLinkedinIn size={20} color="white" />
                    <CiYoutube size={20} color="white" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <p className="text-white text-[14px] font-light text-center my-5">
          تمام حقوق محقوظ و متعلق به شرکت{" "}
          <strong className="font-bold">لکسا پلاس</strong> می باشد
        </p>
      </footer>
    </>
  );
};

export default Footer;
