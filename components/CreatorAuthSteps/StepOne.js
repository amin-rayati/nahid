"use client";
import React, { useState } from "react";
import OtpModal from "@/components/Modals/OtpModal";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
const StepOne = ({ nextStep }) => {
  const { containerVariants, itemVariants, imageHover } = commonAnimations;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <motion.section initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <p className="text-[#1E1E1E] text-[16px] font-regular">نام</p>
        <input
          placeholder="نام خود را وارد کنید"
          className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 my-2 rounded-[8px] text-right text-[#1E1E1E] text-[16px] font-regular placeholder:text-[#1e1e1ea8] placeholder:text-[16px] placeholder:font-ligth outline-none w-full"
        />
      </motion.div>
      <motion.div variants={itemVariants} className="my-5">
        <p className="text-[#1E1E1E] text-[16px] font-regular">نام خانوادگی</p>
        <input
          placeholder="نام خانوادگی خود را وارد کنید"
          className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 my-2 rounded-[8px] text-right text-[#1E1E1E] text-[16px] font-regular placeholder:text-[#1e1e1ea8] placeholder:text-[16px] placeholder:font-ligth outline-none w-full"
        />
      </motion.div>

      <motion.span
        variants={itemVariants}
        className="text-[#1E1E1E] text-[16px] font-regular text-right"
      >
        شماره موبایل
      </motion.span>

      <PhoneInput
        className="my-3"
        country={"ir"}
        value={phoneNumber}
        onChange={setPhoneNumber}
        inputProps={{
          dir: "ltr",
          placeholder: "شماره خود را وارد کنید",
        }}
        containerStyle={{
          width: "100%",
          direction: "ltr",
        }}
        inputStyle={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FEFCED",
          border: "1px solid #EBDFBE",
          borderRadius: "8px",
          padding: "15px",
          textAlign: "left",
          fontSize: "16px",
          fontWeight: "light",
          paddingLeft: "50px",
        }}
        buttonStyle={{
          border: "none",
          borderRadius: "8px 0 0 8px",
          objectFit: "contain",
          background: "none",
          left: "0",
          right: "auto",
        }}
        dropdownStyle={{
          width: "fit-content",
          minWidth: "200px",
          backgroundColor: "#FEFCED",
        }}
        buttonClass="flag-button-with-divider"
      />
      <motion.button
        variants={itemVariants}
        onClick={openModal}
        className="my-5 w-[60%] m-auto justify-center flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px]"
      >
        مرحله بعد
      </motion.button>
      <OtpModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        nextStep={nextStep}
      />
    </motion.section>
  );
};

export default StepOne;
