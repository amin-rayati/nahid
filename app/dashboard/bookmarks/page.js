"use client";
import React from "react";
import Menu from "@/components/Dashboard/Menu";
import StoryList from "@/components/Stories/StoryList";
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
          <Menu active="bookmarks" />
        </div>

        {/* dashboard */}
        <div
          variants={itemVariants}
          className="col-span-12 md:col-span-8 lg:col-span-9"
        >
          <StoryList />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
