"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

import logoImg from "@/public/img/nahidLogo.png";
import download from "@/public/img/download.png";
import login from "@/public/img/login.png";
import user2 from "@/public/img/user2.png";
import close from "@/public/img/close.png";
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState("");
  const [userLogin, setUserLogin] = useState(true);
  const [isCretor, setIsCreator] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleNavClick = (nav) => {
    setSelectedNav(nav);
    setSidebarOpen(false);
  };
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/stories", label: "آثار" },
    { href: "/store", label: "فروشگاه" },
    { href: "/blog", label: "وبلاگ" },
    { href: "/contactUs", label: "تماس با ما" },
    { href: "/aboutUs", label: "درباره ما" },
  ];

  return (
    <>
      <header className="bg-[#FEFCED] fixed top-0 left-0 w-full z-20">
        <div className="2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl flex items-center justify-end sm:justify-between md:justify-between lg:justify-between p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto">
          <div
            className="hidden sm:flex items-center space-x-2"
            style={{ justifyContent: "space-between" }}
          >
            {userLogin ? (
              isCretor ? (
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={handleButtonClick}
                    className={`flex items-center gap-2 bg-[#354259] font-bold text-white p-3 border-[2px] border-[#354259] text-[16px] ${
                      isOpen ? "rounded-t-[8px]" : "rounded-[8px]"
                    }`}
                  >
                    امین رعیتی
                    <Image
                      src={isOpen ? close : user2}
                      alt="user2"
                      className="cursor-pointer"
                    />
                  </button>

                  <div
                    className={`absolute top-full right-0 mt-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-2 bg-[#354259] rounded-b-[8px] p-2">
                      <Link href="/dashboard">
                        <button className="w-full text-right py-2 px-3 bg-[#FAF1D7] text-[#354259] text-[14px] font-bold rounded-[8px] transition-colors">
                          داشبورد کاربری
                        </button>
                      </Link>
                      <Link href="/creator-dashboard">
                        <button className="w-full text-right py-2 px-3 bg-[#FAF1D7] text-[#354259] text-[14px] font-bold rounded-[8px] transition-colors">
                          داشبورد خالق اثر
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href="/dashboard">
                  <button className="flex items-center gap-2 bg-[#354259] font-bold text-white  p-3 border-[2px] border-[#354259] text-[16px] rounded-[8px]">
                    امین رعیتی
                    <Image src={user2} alt="user2" />
                  </button>
                </Link>
              )
            ) : (
              <Link href="/auth/login">
                <button className="flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px] font-bold">
                  ورود/ ثبت نام
                  <Image src={login} alt="login" />
                </button>
              </Link>
            )}

            <button className="flex items-center gap-2 font-bold text-[#354259] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px] font-bold">
              دانلود اپلیکیشن
              <Image src={download} alt="download" />
            </button>
          </div>

          <button
            className="block lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <GiHamburgerMenu color="#354259" size="35" />
          </button>

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-3/4 bg-[#FAF1D7] border-l-[5px] border-[#EBDFBE] transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-20 block lg:hidden rounded-tl-[15px] rounded-bl-[15px]`}
          >
            <button
              className="text-[#354259] text-5xl p-4"
              onClick={() => setSidebarOpen(false)}
            >
              &times;
            </button>
            <nav
              className="flex flex-col space-y-5 px-6"
              style={{ alignItems: "self-end" }}
            >
              <div className="flex items-center text-center justify-center bg-white border-[2px] border-[#354259]  w-24 h-24 rounded-full">
                <Image src={logoImg} alt="logoImg" />
              </div>

              {navLinks.map(({ href, label }) => (
                <div
                  key={href}
                  className={`flex items-center p-2  ${
                    selectedNav === label ? "font-bold" : "font-regular"
                  }`}
                >
                  <Link href={href} onClick={() => handleNavClick(label)}>
                    <p className="text-[#354259] hover:text-[#354259] text-[16px]">
                      {label}
                    </p>
                  </Link>
                </div>
              ))}

              {userLogin ? (
                isCretor ? (
                  <div className="relative" ref={menuRef}>
                    <button
                      onClick={handleButtonClick}
                      className={`flex items-center gap-2 bg-[#354259] font-bold text-white p-3 border-[2px] border-[#354259] text-[16px] ${
                        isOpen ? "rounded-t-[8px]" : "rounded-[8px]"
                      }`}
                    >
                      امین رعیتی
                      <Image
                        src={isOpen ? close : user2}
                        alt="user2"
                        className="cursor-pointer"
                      />
                    </button>

                    <div
                      className={`absolute top-full right-0 mt-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-2 bg-[#354259] rounded-b-[8px] p-2">
                        <Link href="/dashboard">
                          <button className="w-full text-right py-2 px-3 bg-[#FAF1D7] text-[#354259] text-[14px] font-bold rounded-[8px] transition-colors">
                            داشبورد کاربری
                          </button>
                        </Link>
                        <Link href="/creator-dashboard">
                          <button className="w-full text-right py-2 px-3 bg-[#FAF1D7] text-[#354259] text-[14px] font-bold rounded-[8px] transition-colors">
                            داشبورد خالق اثر
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href="/dashboard">
                    <button className="flex items-center gap-2 bg-[#354259] font-bold text-white  p-3 border-[2px] border-[#354259] text-[16px] rounded-[8px]">
                      امین رعیتی
                      <Image src={user2} alt="user2" />
                    </button>
                  </Link>
                )
              ) : (
                <Link href="/auth/login">
                  <button className="flex sm:hidden items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px] font-bold">
                    ورود/ ثبت نام
                    <Image src={login} alt="login" />
                  </button>
                </Link>
              )}

              <button className="flex sm:hidden items-center gap-2 font-bold text-[#354259] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px] font-bold">
                دانلود اپلیکیشن
                <Image src={download} alt="download" />
              </button>
            </nav>
          </div>

          <nav className="hidden lg:flex gap-4">
            {navLinks.reverse().map(({ href, label }) => (
              <div
                key={href}
                className={`flex items-center p-2 cursor-pointer rounded-md transition duration-300 ${
                  selectedNav === label ? "font-bold" : "font-regular"
                }`}
              >
                <Link href={href} onClick={() => handleNavClick(label)}>
                  <p className="text-[#354259] hover:text-[#354259] text-[16px]">
                    {label}
                  </p>
                </Link>
              </div>
            ))}
            <Image
              src={logoImg}
              alt="logoImg"
              className="rounded-lg object-contain"
            />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
