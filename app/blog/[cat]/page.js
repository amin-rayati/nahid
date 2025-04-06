"use client";
import { usePathname } from "next/navigation";
import React from "react";
import back from "@/public/img/back.jpg";

import BlogSearchBar from "@/components/Blog/BlogSearchBar";
import BlogCatDropDown from "@/components/Blog/BlogCatDropDown";
import BlogSort from "@/components/Blog/BlogSort";
import BlogList from "@/components/Blog/BlogList";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const page = () => {
  const { containerVariants, itemVariants } = commonAnimations;
  const pathname = usePathname();
  const Cat = pathname.split("/").pop();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 w-[100%] lg:w-[90%] xl:w-[75%] m-auto my-10 sm:my-20"
    >
      <motion.div
        variants={containerVariants}
        className="flex flex-col sm:sticky sm:top-20"
        style={{ backgroundImage: `url(${back.src})` }}
      >
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-12 gap-3 py-4"
          style={{ direction: "rtl" }}
        >
          <motion.div
            variants={containerVariants}
            className="col-span-12 order-2 md:col-span-6 md:order-1 lg:col-span-4"
          >
            <BlogCatDropDown Cat={Cat} />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="col-span-12 order-1 md:col-span-6 md:order-2 lg:col-span-8"
          >
            <BlogSearchBar />
          </motion.div>
        </motion.div>
      </motion.div>

      <BlogSort />
      <BlogList />
    </motion.div>
  );
};

export default page;
