"use client";
import React from "react";
import Menu from "@/components/CreatorDashboard/Menu";
import Cats from "@/components/CreatorDashboard/Cats";
import LatestWorks from "@/components/CreatorDashboard/LatestWorks";
import AddWork from "@/components/CreatorDashboard/AddWork";
import Comments from "@/components/CreatorDashboard/Comments";
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
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Menu active="dashboard" />
        </div>

        {/* dashboard */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          {/* cats */}
          <div className="grid grid-cols-12 gap-4">
            <Cats />
          </div>

          {/* content */}
          <div className="grid grid-cols-12 my-5 gap-4">
            {/* membership */}
            <div className="col-span-12 lg:col-span-7">
              <LatestWorks />
              <AddWork />
            </div>

            {/* notifs */}
            <div className="col-span-12 lg:col-span-5">
              <Comments />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
