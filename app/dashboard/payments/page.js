"use client";
import React, { useState } from "react";
import Menu from "@/components/Dashboard/Menu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Image from "next/image";
import eshterak from "@/public/img/eshterak.png";
import calendar from "@/public/img/calendar1.png";
import clock from "@/public/img/clock.png";
import copy from "@/public/img/copy.png";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";

const orders = [
  {
    id: 1,
    price: "69،000",
    status: "ناموفق",
    statusColor: "#a025251a",
    borderColor: "#A02525",
  },
  {
    id: 2,
    price: "69،000",
    status: "موفق",
    statusColor: "#34a02512",
    borderColor: "#34A025",
  },
];

const Page = () => {
  const { containerVariants, itemVariants } = commonAnimations;

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 w-[100%] lg:w-[100%] xl:w-[85%] m-auto my-20"
    >
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-12 gap-2 sm:gap-5"
        dir="rtl"
      >
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <Menu active="payments" />
        </div>
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-8 lg:col-span-9"
        >
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[8px] p-3 my-2"
              dir="rtl"
            >
              <div
                variants={itemVariants}
                className="flex flex-wrap justify-between"
              >
                <div className="flex items-center gap-2 my-2">
                  <Image src={eshterak} alt="eshterak" />
                  <p className="text-[#1E1E1E] text-[20px] font-bold">
                    خرید اشتراک
                  </p>
                </div>
                <div className="flex items-center gap-2 my-2">
                  <p className="text-[#1E1E1E] text-[20px] font-bold">
                    {order.price}
                  </p>
                  <p className="text-[#1E1E1E] text-[16px] font-regular">
                    تومان
                  </p>
                </div>
                <div className="flex items-center gap-2 my-2">
                  <div className="flex items-center gap-2">
                    <Image src={clock} alt="clock" className="mb-1" />
                    <p className="text-[#1E1E1E] text-[16px] font-regular">
                      14:23
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={calendar} alt="calendar" className="mb-1" />
                    <p className="text-[#1E1E1E] text-[16px] font-regular">
                      1403/05/30
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 my-2">
                  <button
                    className="text-center rounded-[8px] p-2 text-[16px] font-bold"
                    style={{
                      backgroundColor: order.statusColor,
                      border: `1px solid ${order.borderColor}`,
                      color: order.borderColor,
                    }}
                  >
                    {order.status}
                  </button>
                  <button onClick={() => toggleItem(order.id)}>
                    {openItems[order.id] ? (
                      <FaAngleUp color="#354259" />
                    ) : (
                      <FaAngleDown color="#354259" />
                    )}
                  </button>
                </div>
              </div>
              {openItems[order.id] && (
                <div className="mt-3 p-3 border-t border-[#EBDFBE]">
                  <div className="flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                      <p className="text-[#1E1E1E] text-[16px] font-regular">
                        نحوه انتقال:
                      </p>
                      <p className="text-[#1E1E1E] text-[16px] font-bold">
                        درگاه زرین پال
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[#1E1E1E] text-[16px] font-regular">
                        شماره تراکنش:
                      </p>
                      <div className="bg-[#FAF1D7] border-[1px] border-[#EBDFBE] rounded-[8px] p-3 flex flex-wrap justify-between items-center gap-5">
                        <Image src={copy} alt="copy" />
                        <p className="text-[#1E1E1E] font-bold text-[16px]">
                          000000000045044024001265561
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
