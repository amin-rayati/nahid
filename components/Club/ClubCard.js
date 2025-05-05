import React from "react";
import Image from "next/image";
import Link from "next/link";
import club1 from "@/public/img/club1.png";
import location from "@/public/img/icons/location.png";
import grid from "@/public/img/icons/grid.png";
import { FaChevronLeft } from "react-icons/fa6";

import coin2 from "@/public/img/icons/coin2.png";

const ClubCard = ({ pic }) => {
  return (
    <Link href="/club/id">
      <div className=" bg-[#EDF3F6] border-[2px] border-white rounded-[16px] p-[1px] cursor-pointer">
        <Image
          src={pic}
          alt="pic"
          className="rounded-t-[16px] w-full h-[200px] object-cover"
        />

        <div className="px-2">
          <p className="text-[14px] font-bold text-[#1E1E1E] text-right my-3">
            احراز هویت
          </p>
          <p className="text-[12px] font-regular text-[#1E1E1E] text-right my-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            است.
          </p>

          <div className="h-[1.5px] w-full bg-white"></div>
          <div className="flex justify-between items-center gap-2 my-2">
            <div className="flex justify-between items-center gap-2 my-2">
              <Image src={coin2} alt="coin2" />
              <p className="text-[#1E1E1E] text-[12px] font-bold">25 امتیاز</p>
            </div>
            <div className="flex justify-between items-center gap-2 my-2">
              <p className="text-[#1F5D6A] text-[14px] font-fat">احراز هویت</p>
              <FaChevronLeft color="#1F5D6A" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClubCard;
