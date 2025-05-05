import React from "react";
import Image from "next/image";

import blog1 from "@/public/img/blog1.png";
import location from "@/public/img/icons/location.png";
import grid from "@/public/img/icons/grid.png";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href="/blog/id">
      <div className="bg-[#EDF3F6] border-[2px] border-white rounded-[16px] p-[1px] cursor-pointer">
        <Image
          src={blog1}
          alt="blog1"
          className="rounded-t-[16px] w-full h-[200px] object-cover"
        />

        <div className="px-2">
          <div
            className="flex flex-wrap justify-between items-center my-2"
            style={{ direction: "rtl" }}
          >
            <div className="flex items-center gap-1">
              <Image src={location} alt="location" />

              <p className="text-[#1E1E1E] font-regular text-[12px]">
                25 اردیبهشت 1404
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Image src={grid} alt="grid" />

              <p className="text-[#1E1E1E] font-regular text-[12px]">
                آموزش و یادگیری
              </p>
            </div>
          </div>
          <p className="text-[16px] font-bold text-[#1E1E1E] text-right my-3">
            اهمیت کش بک در خرید از فروشگاه
          </p>

          <div className="h-[1.5px] w-full bg-white"></div>

          <p className="text-[14px] font-regular text-[#1E1E1E] text-right my-3 leading-[28px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
