import React from "react";
import Image from "next/image";
import about from "@/public/img/about.png";
import stars from "@/public/img/icons/stars.png";

const About = () => {
  return (
    <div className="mt-5 sm:mt-20 px-2 sm:px-4 py-4">
      <div className="grid grid-cols-12 gap-2" dir="rtl">
        <div className="col-span-12 m-auto  md:col-span-5 md:m-0">
          <Image src={about} alt="about" />
        </div>
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
          <p className="text-[#1E1E1E] text-[20px] font-bold">
            خرید با تخفیفش میچسبه!
          </p>

          <div className="flex gap-2 justify-left mt-2">
            <div className="h-[1.5px] w-64 bg-[#1F5D6A]"></div>
          </div>

          <p className="text-[#1E1E1E] text-[14px] font-regular leading-[35px] text-justify mt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای است.
          </p>

          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-[#1F5D6A] rounded-[8px] p-4 mt-2">
              <Image src={stars} alt="stars" />
              <p className="text-[14px] text-white font-regular">خرید اشتراک</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
