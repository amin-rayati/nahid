"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import CatsDropDown from "@/components/Works/CatsDropDown";
import SearchBar from "@/components/Works/SearchBar";
import Sort from "@/components/Works/Sort";
import Filter from "@/components/Works/Filter";
import StoryList from "@/components/Stories/StoryList";

const page = () => {
  const { containerVariants, itemVariants } = commonAnimations;

  const pathname = usePathname();
  const Cat = pathname.split("/").pop();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto my-20"
    >
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-12 gap-3"
        style={{ direction: "rtl" }}
      >
        {/* rightSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 md:col-span-6 lg:col-span-4 rightSide"
        >
          <CatsDropDown Cat={Cat} />
          <Filter />
        </motion.div>

        {/* leftSide */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 md:col-span-6 lg:col-span-8 leftSide"
        >
          <motion.div variants={itemVariants}>
            <SearchBar isStore={"no"} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Sort />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StoryList />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default page;
