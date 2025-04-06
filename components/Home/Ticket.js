import React from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import ticket from "@/public/img/ticket.png";
import { MdOutlineMailOutline } from "react-icons/md";

const Ticket = () => {
  return (
    <div className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto">
      <div className="grid grid-cols-12 bg-[#FAF1D7] rounded-[16px] border-[1px] border-[#EBDFBE] px-3 sm:px-10 py-10 w-[100%] md:w-[75%] m-auto sm:gap-5">
        <div className="col-span-12 sm:col-span-5 flex items-center justify-center">
          <Image src={ticket} alt="ticket" />
        </div>
        <div className="col-span-12 sm:col-span-7">
          <p className="text-[black] text-[24px] font-bold text-right">
            به خبرنامه ناهید بپیوندید
          </p>
          <p className="text-[black] text-[16px] font-light my-5 text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،.
          </p>
          <div className="relative w-full">
            <input
              placeholder="آدرس ایمیل شما"
              className="w-full rounded-[8px] border-[1px] bg-[#FEFCED] border-[#EBDFBE] outline-none py-4 pr-12 text-right placeholder:text-black placeholder:sm:text-[16px] placeholder:sm:font-light placeholder:text-[10px]"
              style={{ direction: "rtl", paddingLeft: "100px" }}
            />

            <MdOutlineMailOutline
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              size={25}
              color="#354259"
            />

            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#354259] px-4 py-2 text-white text-[16px] font-bold rounded-[8px]">
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
