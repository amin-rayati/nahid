"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  LuLayoutGrid,
  LuSquareUser,
  LuLogOut,
  LuMessageSquare,
} from "react-icons/lu";
import { IoMdBook } from "react-icons/io";
import { BiWalletAlt } from "react-icons/bi";

import dashboard from "@/public/img/dashboard.png";

const Menu = ({ active }) => {
  const menuItems = [
    {
      id: "dashboard",
      icon: <LuLayoutGrid size={20} />,
      text: "داشبورد",
      href: "/creator-dashboard",
    },
    {
      id: "content",
      icon: <IoMdBook size={20} />,
      text: "مدیریت محتوا",
      href: "/creator-dashboard/content",
    },
    {
      id: "income",
      icon: <BiWalletAlt size={20} />,
      text: "مدیریت درآمد",
      href: "/creator-dashboard/income",
    },
    {
      id: "comments",
      icon: <LuMessageSquare size={20} />,
      text: "مدیریت نظرات",
      href: "/creator-dashboard/comments",
    },
    {
      id: "profile",
      icon: <LuSquareUser size={20} />,
      text: "ویرایش پروفایل",
      href: "/creator-dashboard/profile",
    },
  ];

  const [activeItem, setActiveItem] = useState(active);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="bg-[#1E1E1E] rounded-[16px] p-5" dir="rtl">
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
        <Image src={dashboard} alt="dashboard" width={35} height={35} />
        <div className="flex flex-col justify-between gap-3">
          <Link href="/dashboard" passHref>
            <p className="text-[16px] font-bold text-[#FFFFFF] cursor-pointer">
              داشبورد کاربری
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
