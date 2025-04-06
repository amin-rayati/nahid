import React from "react";
import Image from "next/image";
import midBanner from "@/public/img/midBanner.png";

const WhyUs = () => {
  return (
    <div className="sm:my-12 bg-[#FAF1D7] grid grid-cols-12">
      <div className="col-span-12 md:col-span-7">
        <Image src={midBanner} alt="midBanner" />
      </div>
      <div className="col-span-12 md:col-span-5 flex flex-col justify-center items-center text-center p-5 md:py-0 md:pr-20">
        <div>
          <p className="text-black text-[24px] text-right font-bold">
            چرا ناهید؟
          </p>
          <div className="flex gap-2 justify-end my-2">
            <div className="h-[3px] w-5 sm:w-10 bg-[#A0C498]"></div>
            <div className="h-[3px] w-32 sm:w-64 bg-[#A0C498]"></div>
          </div>
          <p
            className="text-[black] text-[16px] font-light leading-[28px] text-justify"
            style={{ direction: "rtl" }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
