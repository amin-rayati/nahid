import React from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Map from "../Cart/Map";
import Portal from "./Portal";

const AddAddressModal = ({ isAddressModalOpen, closeAddressModal }) => {
  const { containerVariants, itemVariants } = commonAnimations;

  return (
    <Portal>
      {isAddressModalOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
          onClick={closeAddressModal}
          dir="rtl"
        >
          <div
            className="bg-[#FEFCED] p-6 rounded-[16px] w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={closeAddressModal}>
                <IoMdClose size={20} color="#1E1E1E99" />
              </button>

              <p className="text-[#1E1E1E] text-[24px] font-bold">
                افزودن آدرس
              </p>
              <div></div>
            </div>

            <div variants={itemVariants} className="my-5">
              {/* title */}
              <span className="text-[#1E1E1E] text-[16px] font-regular text-right">
                عنوان آدرس
              </span>
              <input
                placeholder="متن ورودی را بنویسید"
                className="w-[100%] bg-[#FEFCED] border-[1px] border-[#EBDFBE] text-[16px] font-light rounded-[8px] p-3 my-3 outline-none placeholder:text-[16px] placeholder:text-[#1E1E1ECC] font-light"
              />

              <div className="my-3">
                <Map />
              </div>

              {/* exactAddress */}
              <span className="text-[#1E1E1E] text-[16px] font-regular text-right">
                آدرس دقیق
              </span>
              <input
                placeholder="متن ورودی را بنویسید"
                className="w-[100%] bg-[#FEFCED] border-[1px] border-[#EBDFBE] text-[16px] font-light rounded-[8px] p-3 my-3 outline-none placeholder:text-[16px] placeholder:text-[#1E1E1ECC] font-light"
              />
              {/* plak */}
              <span className="text-[#1E1E1E] text-[16px] font-regular text-right">
                پلاک و واحد
              </span>
              <input
                placeholder="متن ورودی را بنویسید"
                className="w-[100%] bg-[#FEFCED] border-[1px] border-[#EBDFBE] text-[16px] font-light rounded-[8px] p-3 my-3 outline-none placeholder:text-[16px] placeholder:text-[#1E1E1ECC] font-light"
              />
              {/* codePosti */}
              <span className="text-[#1E1E1E] text-[16px] font-regular text-right">
                کد پستی
              </span>
              <input
                placeholder="متن ورودی را بنویسید"
                className="w-[100%] bg-[#FEFCED] border-[1px] border-[#EBDFBE] text-[16px] font-light rounded-[8px] p-3 my-3 outline-none placeholder:text-[16px] placeholder:text-[#1E1E1ECC] font-light"
              />

              {/* button */}
              <button className="w-[100%] sm:w-[50%] flex justify-center m-auto my-5 bg-[#354259] rounded-[8px] p-3 text-center w-full text-white text-[16px] font-bold">
                تایید آدرس
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default AddAddressModal;
