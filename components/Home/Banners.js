import React from "react";
import Image from "next/image";
import banner1 from "@/public/img/banner1.png";
import banner2 from "@/public/img/banner2.png";
import banner3 from "@/public/img/banner3.png";

const Banners = () => {
  return (
    <div className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto sm:my-12">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-12  sm:col-span-4 md:col-span-4 lg:col-span-4 m-auto">
          <Image src={banner1} alt="banner1" className="rounded-[16px]" />
        </div>
        <div className="col-span-12  sm:col-span-4 md:col-span-4 lg:col-span-4 m-auto">
          <Image src={banner2} alt="banner2" className="rounded-[16px]" />
        </div>
        <div className="col-span-12 sm:col-span-4  md:col-span-4 lg:col-span-4 m-auto">
          <Image src={banner3} alt="banner3" className="rounded-[16px]" />
        </div>
      </div>
    </div>
  );
};

export default Banners;
