"use client";
import Link from "next/link";
import { useState } from "react";

const AuthFooter = () => {
  const [selectedNav, setSelectedNav] = useState("");

  const handleNavClick = (nav) => {
    setSelectedNav(nav);
    setSidebarOpen(false);
  };

  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/stories", label: "آثار" },
    { href: "/store", label: "فروشگاه" },
    { href: "/blog", label: "وبلاگ" },
    { href: "/aboutUs", label: "درباره ما" },
    { href: "/contactUs", label: "تماس با ما" },
  ];
  return (
    <footer className="bg-[#354259]">
      <div className="p-4 w-[100%] m-auto" style={{ direction: "rtl" }}>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap">
            {navLinks.map(({ href, label }) => (
              <div
                key={href}
                className={`flex items-center p-2 cursor-pointer rounded-md transition duration-300 ${
                  selectedNav === label ? "font-bold" : "font-regular"
                }`}
              >
                <Link href={href} onClick={() => handleNavClick(label)}>
                  <p className="text-white hover:text-white text-[16px]">
                    {label}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-white text-[14px] font-light text-center my-5">
            تمام حقوق محقوظ و متعلق به شرکت{" "}
            <strong className="font-bold">لکسا پلاس</strong> می باشد
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
