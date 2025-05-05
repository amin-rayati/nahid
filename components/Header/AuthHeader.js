"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import authlogo from "@/public/img/authlogo.png";
import back from "@/public/img/icons/back.png";

const AuthHeader = () => {
  const router = useRouter();

  return (
    <header className="bg-[#E9EFF0] fixed top-0 left-0 w-full z-20">
      <div
        className="flex items-center justify-between  px-4 w-[100%]"
        dir="rtl"
      >
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.back()}
        >
          <Image src={back} alt="back" />
          <p>بازگشت</p>
        </div>
        <Link href="/">
          <Image src={authlogo} alt="authlogo" className="h-20 object-cover" />
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;
