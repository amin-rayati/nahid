"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { LuPhoneCall, LuMessageSquareText, LuLogOut } from "react-icons/lu";

import { FiUser } from "react-icons/fi";
import { BiWalletAlt } from "react-icons/bi";
import { BsHandbagFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Menu = ({ active }) => {
  const menuItems = [
    {
      id: "profile",
      icon: <FiUser size={20} />,
      text: "حساب کاربری",
      href: "/dashboard/profile",
    },
    {
      id: "income",
      icon: <BiWalletAlt size={20} />,
      text: "کیف پول",
      href: "/dashboard/income",
    },
    {
      id: "comment",
      icon: <LuMessageSquareText size={20} />,
      text: "دیدگاه‌های من",
      href: "/dashboard/comment",
    },
    {
      id: "purchase",
      icon: <HiOutlineShoppingBag size={20} />,
      text: "خریدهای من",
      href: "/dashboard/purchase",
    },
    {
      id: "ticket",
      icon: <LuPhoneCall size={20} />,
      text: "تیکت‌ها",
      href: "/dashboard/ticket",
    },
  ];

  const [activeItem, setActiveItem] = useState(active);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="bg-[#1F5D6A] rounded-[16px] p-5" dir="rtl">
      {menuItems.map((item) => (
        <Link key={item.id} href={item.href} passHref>
          <div
            className={`flex items-center gap-4 p-4 my-3 cursor-pointer rounded-[8px] ${
              activeItem === item.id
                ? "bg-[#FFFFFF] text-[#1F5D6A]"
                : "text-white"
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            {React.cloneElement(item.icon, {
              color: activeItem === item.id ? "#1F5D6A" : "white",
            })}
            <p className="font-bold text-[16px]">{item.text}</p>
          </div>
        </Link>
      ))}

      <div
        className="flex items-center gap-4 p-4 my-3 cursor-pointer rounded-[8px] text-white hover:bg-[#FFD14E] transition"
        onClick={handleLogout}
      >
        <LuLogOut size={20} color="white" />
        <p className="font-bold text-[16px]">خروج از حساب</p>
      </div>
    </div>
  );
};

export default Menu;
