"use client";
import { motion } from "framer-motion";
import MainSearch from "@/components/Home/MainSearch";
import Cats from "@/components/Home/Cats";
import BestBooks from "@/components/Home/BestBooks";
import Banners from "@/components/Home/Banners";
import BestAudio from "@/components/Home/BestAudio";
import Creators from "@/components/Home/Creators";
import Favourites from "@/components/Home/Favourites";
import WhyUs from "@/components/Home/WhyUs";
import Ticket from "@/components/Home/Ticket";
import Genre from "@/components/Home/Genre";
import Faq from "@/components/Home/Faq";
import News from "@/components/Home/News";
import { commonAnimations } from "@/utils/animations";

export default function Home() {
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="my-10"
    >
      <motion.div variants={itemVariants}>
        <MainSearch />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Cats />
      </motion.div>

      <motion.div variants={itemVariants}>
        <BestBooks />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Banners />
      </motion.div>

      <motion.div variants={itemVariants}>
        <BestAudio />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Creators />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Favourites />
      </motion.div>

      <motion.div variants={itemVariants}>
        <WhyUs />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Ticket />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Genre />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Faq />
      </motion.div>

      <motion.div variants={itemVariants}>
        <News />
      </motion.div>
    </motion.div>
  );
}
