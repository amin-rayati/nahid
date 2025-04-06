"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logoImg from "@/public/img/nahidLogo.png";
import back from "@/public/img/back.png";
import bell from "@/public/img/bell.png";

const AuthHeader = () => {
  const router = useRouter();

  return (
    <header className="bg-[#FEFCED] fixed top-0 left-0 w-full z-20">
      <div
        className="flex items-center justify-between sm:justify-between p-4 w-[100%]"
        dir="rtl"
      >
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.back()}
        >
          <Image src={back} alt="back" />
          <p>بازگشت</p>
        </div>
        <Image src={logoImg} alt="logoImg" />
        <Link href="/notifications">
          <Image src={bell} alt="bell" />
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;
