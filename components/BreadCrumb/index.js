"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

import Link from "next/link";
const categoryMapping = {
  stories: "داستان ها",
  poets: "اشعار",
  store: "فروشگاه",
  audio: "کتاب صوتی",
};

const Index = () => {
  const pathname = usePathname();
  const path = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-gray-600 text-sm">
      <ul className="flex flex-wrap items-center gap-2 justify-start flex-row-reverse">
        <li>
          <Link href="/" className="text-[#1E1E1ECC] font-regular text-[16px]">
            خانه
          </Link>
        </li>
        {path.map((name, index) => {
          const translatedName =
            categoryMapping[name] || decodeURIComponent(name);
          const routeTo = `/${path.slice(0, index + 1).join("/")}`;
          const isLast = index === path.length - 1;

          return (
            <React.Fragment key={index}>
              <FaChevronLeft size={12} className="text-[#1E1E1ECC]" />
              <li>
                <a
                  href={routeTo}
                  className={`text-[#1E1E1ECC] text-[16px] ${
                    isLast ? "font-heavy" : "font-regular"
                  }`}
                >
                  {translatedName}
                </a>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Index;
