import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";

import android from "@/public/img/android.png";
import apple from "@/public/img/apple.png";
import meli from "@/public/img/meli.png";
import enamad from "@/public/img/enamad.png";
import social from "@/public/img/social.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1F5D6A] mt-20">
        <div
          className="px-2 sm:px-4 py-4 w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl"
          style={{ direction: "rtl" }}
        >
          <div className="grid grid-cols-12 md:gap-10 lg:gap-20">
            <div className="grid grid-cols-12 col-span-12 md:col-span-8">
              <section className="col-span-12 sm:col-span-4 md:col-span-4 sm:m-auto md:m-0 mt-4">
                <p className="text-[white] text-[16px] font-medium">
                  درباره آنیکارت
                </p>
                <div className="my-2">
                  <Link href="/aboutUs" className="flex gap-2 items-center">
                    <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                    <p className="text-white text-[14px] font-regular mt-2">
                      درباره ما
                    </p>
                  </Link>
                  <Link href="/contactUs" className="flex gap-2 items-center">
                    <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                    <p className="text-white text-[14px] font-regular mt-2">
                      تماس با ما
                    </p>
                  </Link>
                  <Link href="/rules" className="flex gap-2 items-center">
                    <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                    <p className="text-white text-[14px] font-regular mt-2">
                      قوانین و مقررات
                    </p>
                  </Link>
                </div>
              </section>

              <section className="col-span-12 sm:col-span-4 md:col-span-4 sm:m-auto md:m-0 mt-4">
                <p className="text-[white] text-[16px] font-medium">
                  بیشتر بخوانید
                </p>
                <div className="my-2">
                  <Link href="/anikart" className="flex gap-2 items-center">
                    <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                    <p className="text-white text-[14px] font-regular mt-2">
                      آنیکارت چگونه کار می‌کند؟
                    </p>
                  </Link>
                  <Link href="/job" className="flex gap-2 items-center">
                    <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                    <p className="text-white text-[14px] font-regular mt-2">
                      فرصت‌های شغلی
                    </p>
                  </Link>
                  <Link href="/blog" className="flex gap-2 items-center">
                    <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                    <p className="text-white text-[14px] font-regular mt-2">
                      وبلاگ
                    </p>
                  </Link>
                </div>
              </section>

              <section className="col-span-12 sm:col-span-4 md:col-span-4 sm:m-auto md:m-0 mt-4">
                <p className="text-[white] text-[16px] font-medium">
                  دریافت اپلیکیشن
                </p>
                <div className="my-2">
                  <button className="my-2 flex items-center justify-center gap-2 border-[2px] rounded-[8px] border-[#FFFFFF] text-white p-2 text-[14px] font-bold w-[170px] ">
                    <Image className="w-6 h-6" src={android} alt="android" />
                    <p className="text-[14px] font-medium text-white">
                      دانلود نسخه اندروید
                    </p>
                  </button>
                  <button className="my-2 flex items-center justify-center gap-2 border-[2px] rounded-[8px] border-[#FFFFFF] text-white p-2 text-[14px] font-bold w-[170px] ">
                    <Image className="w-6 h-6" src={apple} alt="apple" />
                    <p className="text-[14px] font-medium text-white">
                      دانلود نسخه IOS
                    </p>
                  </button>
                </div>
              </section>
            </div>

            <section className="col-span-12 md:col-span-4 sm:mx-auto md:mx-0">
              <div className="flex items-center gap-2 justify-end">
                <p className="text-white text-[14px] font-medium">
                  021 - 2255 6366
                </p>
                <LuPhoneCall color="white" />
              </div>
              <div className="flex items-center gap-2 justify-end mt-3">
                <p className="text-white text-[14px] font-medium">
                  support@anikart.com
                </p>
                <FaRegEnvelope color="white" />
              </div>
              <div className="flex items-center gap-2 justify-end mt-3">
                <div className="border-[1px] border-[white] w-8 h-8 flex items-center justify-center rounded-[8px]">
                  <RiLinkedinFill color="#FFD14E" />
                </div>
                <div className="border-[1px] border-[white] w-8 h-8 flex items-center justify-center rounded-[8px]">
                  <FaTwitter color="#FFD14E" />
                </div>
                <div className="border-[1px] border-[white] w-8 h-8 flex items-center justify-center rounded-[8px]">
                  <FaFacebookF color="#FFD14E" />
                </div>
                <div className="border-[1px] border-[white] w-8 h-8 flex items-center justify-center rounded-[8px]">
                  <RiTelegram2Fill color="#FFD14E" />
                </div>
                <div className="border-[1px] border-[white] w-8 h-8 flex items-center justify-center rounded-[8px]">
                  <FaInstagram color="#FFD14E" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </footer>
      <div
        className="px-2 sm:px-4 py-4 w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl"
        style={{ direction: "rtl" }}
      >
        <div className="grid grid-cols-12 md:gap-10 lg:gap-20">
          <div className="col-span-12 md:col-span-7 mt-4">
            <p className="text-[#1E1E1E] text-[16px] font-medium">
              حس خوب هیجان، با تخفیف های روزانه
            </p>
            <p className="text-[#1E1E1E] text-[14px] font-regular leading-[28px] mt-3">
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
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است،
            </p>
          </div>

          <section className="col-span-12 md:col-span-5 mt-4">
            <p className="text-[#1E1E1E] text-[16px] font-medium">
              از آخرین تخفیف‌ها مطلع باشید
            </p>
            <div className="relative flex-grow mt-3">
              <input
                placeholder="جستجوی فروشگاه"
                className="w-full rounded-[8px] border-[1px] bg-white border-[#C9D9DB] outline-none py-4 pr-36 text-right placeholder:text-[#1E1E1E] placeholder:text-[14px] placeholder:font-regular"
                style={{ direction: "rtl", paddingLeft: "80px" }}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center gap-2">
                <div className="flex items-center gap-1">
                  <GrLocation color="#1E1E1E" size={25} />

                  <p className="text-[#1E1E1E] text-[14px] font-medium">
                    آدرس ایمیل
                  </p>
                </div>
                <FaAngleDown color="#1E1E1E" size={20} />
                <div className="h-6 w-[1px] bg-[#0000001A]" />
              </div>

              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1F5D6A] py-2 px-3 rounded-[8px]">
                <CiSearch size={25} color="white" />
              </button>
            </div>
            <div
              className="flex items-center gap-2 justify-end mt-5 md:mt-10"
              dir="ltr"
            >
              <div className="bg-[#EDF3F6] border-[1px] border-[white] w-24 h-24 flex items-center justify-center rounded-[8px]">
                <Image src={meli} alt="meli" />
              </div>
              <div className="bg-[#EDF3F6] border-[1px] border-[white] w-24 h-24 flex items-center justify-center rounded-[8px]">
                <Image src={enamad} alt="enamad" />
              </div>
              <div className="bg-[#EDF3F6] border-[1px] border-[white] w-24 h-24 flex items-center justify-center rounded-[8px]">
                <Image src={social} alt="social" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
