"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  LuLayoutGrid,
  LuCreditCard,
  LuSquareUser,
  LuLogOut,
} from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { FiGift, FiAward } from "react-icons/fi";
import { CgShoppingBag } from "react-icons/cg";
import copywriter from "@/public/img/copywriter.png";

const Menu = ({ active }) => {
  const menuItems = [
    {
      id: "dashboard",
      icon: <LuLayoutGrid size={20} />,
      text: "داشبورد",
      href: "/dashboard",
    },
    {
      id: "bookmarks",
      icon: <FaRegBookmark size={20} />,
      text: "نشان شده‌ها",
      href: "/dashboard/bookmarks",
    },
    {
      id: "rewards",
      icon: <FiGift size={20} />,
      text: "امتیازها و جوایز",
      href: "/dashboard/rewards",
    },
    {
      id: "subscription",
      icon: <FiAward size={20} />,
      text: "خرید اشتراک",
      href: "/dashboard/subscription",
    },
    {
      id: "orders",
      icon: <CgShoppingBag size={20} />,
      text: "سفارشات",
      href: "/dashboard/orders",
    },
    {
      id: "payments",
      icon: <LuCreditCard size={20} />,
      text: "سوابق پرداخت",
      href: "/dashboard/payments",
    },
    {
      id: "profile",
      icon: <LuSquareUser size={20} />,
      text: "ویرایش پروفایل",
      href: "/dashboard/profile",
    },
  ];

  const [activeItem, setActiveItem] = useState(active);
  const [creatorAuth, setCreatorAuth] = useState(true);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="bg-[#354259] rounded-[16px] p-5" dir="rtl">
      {menuItems.map((item) => (
        <Link key={item.id} href={item.href} passHref>
          <div
            className={`flex items-center gap-4 p-4 my-3 cursor-pointer rounded-[8px] ${
              activeItem === item.id
                ? "bg-[#FAF1D7] text-[#354259]"
                : "text-white"
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            {React.cloneElement(item.icon, {
              color: activeItem === item.id ? "#354259" : "white",
            })}
            <p className="font-bold text-[16px]">{item.text}</p>
          </div>
        </Link>
      ))}

      <div
        className="flex items-center gap-4 p-4 my-3 cursor-pointer rounded-[8px] text-white hover:bg-[#FF7F5B] transition"
        onClick={handleLogout}
      >
        <LuLogOut size={20} color="white" />
        <p className="font-bold text-[16px]">خروج از حساب</p>
      </div>

      <div
        className="bg-[#FF7F5B] rounded-[8px] gap-2 flex flex-wrap items-center justify-center py-5 px-2"
        dir="rtl"
      >
        <Image src={copywriter} alt="copywriter" width={35} height={35} />
        <div className="flex flex-col justify-between gap-3">
          {creatorAuth ? (
            <Link href="/creator-dashboard" passHref>
              <p className="text-[16px] font-bold text-[#FFFFFF] cursor-pointer">
                داشبورد خالق اثر
              </p>
            </Link>
          ) : (
            <>
              <p className="text-[16px] font-regular text-[#FFFFFF]">
                از ناهید کسب درآمد کن!
              </p>
              <Link href="/creator-auth/login" passHref>
                <p className="text-[16px] font-bold text-[#FFFFFF] cursor-pointer">
                  ثبت نام خالق اثر
                </p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
