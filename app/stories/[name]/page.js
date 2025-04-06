"use client";
import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import SingleStoryInfo from "@/components/SingleStory/SingleStoryInfo";
import EpisodeList from "@/components/SingleStory/EpisodeList";
import EpisodeSort from "@/components/SingleStory/EpisodeSort";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const Page = () => {
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto my-20"
    >
      <motion.div variants={itemVariants}>
        <BreadCrumb />
      </motion.div>
      <div className="grid grid-cols-12 gap-3" style={{ direction: "rtl" }}>
        {/* rightSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3 rightSide"
        >
          <SingleStoryInfo />
        </motion.div>

        {/* leftSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-9 leftSide"
        >
          <EpisodeSort />
          <EpisodeList />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page;
