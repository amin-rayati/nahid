"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import dash1 from "@/public/img/dash1.png";
import dash2 from "@/public/img/dash2.png";
import Menu from "@/components/Dashboard/Menu";

const Page = () => {
  const [auth, setAuth] = useState("no");
  return (
    <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl my-20 p-4">
      <div className="grid grid-cols-12 gap-2 sm:gap-5" dir="rtl">
        {/* menu */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="dashboard" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          {auth === "yes" && (
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#FFFFFF] w-full text-center rounded-[16px] p-4">
                <p className="text-[#000000] text-[20px] font-regular my-5">
                  به داشبورد خود در سایت آنیکارت خوش آمدید
                </p>
              </div>
            </div>
          )}
          {auth === "no" && (
            <div className="flex flex-col items-center justify-center">
              <Image src={dash1} alt="dash1" />
              <p className="text-[#000000] text-[20px] font-regular my-5">
                برای دسترسی به اطلاعات حساب کاربری و برخورداری از خدمات احراز
                هویت کنید.
              </p>
              <Link
                href="/anikart/auth"
                className="w-[100%] sm:w-[20%] text-[#FFFFFF] text-[14px] font-bold bg-[#1F5D6A] rounded-[8px] px-5 py-4 text-center"
              >
                احراز هویت
              </Link>
            </div>
          )}

          {auth === "pending" && (
            <div className="flex flex-col items-center justify-center">
              <Image src={dash2} alt="dash2" />
              <p className="text-[#000000] text-[20px] font-regular my-5">
                اطلاعات شما در حال بررسی می‌باشد؛ پس از تایید اطلاعات شما به
                حساب خود دسترسی خواهید داشت.
              </p>
              <Link
                href="/anikart/auth"
                className="w-[100%] sm:w-[20%] text-[#1F5D6A] text-[14px] font-bold border-[2px] border-[#1F5D6A] rounded-[8px] px-5 py-4 text-center"
              >
                ویرایش اطلاعات
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
