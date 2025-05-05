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
    { href: "/rules", label: "قوانین و مقررات" },
    { href: "/job", label: "فرصت‌های شغلی" },
    { href: "/blog", label: "وبلاگ" },
    { href: "/aboutUs", label: "درباره ما" },
    { href: "/contactUs", label: "تماس با ما" },
  ];
  return (
    <footer className="bg-[#1F5D6A]">
      <div className="p-4" style={{ direction: "rtl" }}>
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center  sm:gap-5">
            {navLinks.map(({ href, label }) => (
              <div
                key={href}
                className={`flex items-center p-2 cursor-pointer rounded-md transition duration-300 ${
                  selectedNav === label ? "font-bold" : "font-regular"
                }`}
              >
                <Link href={href} onClick={() => handleNavClick(label)}>
                  <p className="text-white hover:text-white text-[14px] font-medium">
                    {label}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-white text-[14px] font-light text-center">
            تمام حقوق محقوظ و متعلق به{" "}
            <strong className="font-bold">آنیکارت</strong> می باشد
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
