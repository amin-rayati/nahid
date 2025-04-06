"use client";
import React from "react";
import Menu from "@/components/Dashboard/Menu";
import Notifs from "@/components/Dashboard/Notifs";
import MemberShip from "@/components/Dashboard/MemberShip";
import Reward from "@/components/Dashboard/Reward";
import LatestEvents from "@/components/Dashboard/LatestEvents";
import Cats from "@/components/Dashboard/Cats";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

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
        {/* menu */}
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <Menu active="dashboard" />
        </div>

        {/* dashboard */}
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-8 lg:col-span-9"
        >
          {/* cats */}
          <div variants={itemVariants} className="grid grid-cols-12 gap-4">
            <Cats />
          </div>

          {/* content */}
          <div variants={itemVariants} className="grid grid-cols-12 my-5 gap-4">
            {/* membership */}
            <div variants={itemVariants} className="col-span-12 lg:col-span-7">
              <MemberShip />
              <Reward />
              <LatestEvents />
            </div>

            {/* notifs */}
            <div variants={itemVariants} className="col-span-12 lg:col-span-5">
              <Notifs />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
