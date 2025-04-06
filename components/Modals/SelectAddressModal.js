"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Image from "next/image";
import questionMark from "@/public/img/questionMark.png";
import trash1 from "@/public/img/trash1.png";
import edit from "@/public/img/edit.png";
import AddAddressModal from "./AddAddressModal";
import Portal from "./Portal";
const SelectAddressModal = ({ isModalOpen, closeModal }) => {
  const [addressList, setAddressList] = useState([
    {
      title: "خانه",
      address: "سعادت آباد، بلوار دریا، رو به روی مسجد قدس، پلاک 57، واحد 5",
    },
    {
      title: "شرکت",
      address: "سعادت آباد، بلوار دریا، رو به روی مسجد قدس، پلاک 57، واحد 5",
    },
    {
      title: "تفریح",
      address: "سعادت آباد، بلوار دریا، رو به روی مسجد قدس، پلاک 57، واحد 5",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const { containerVariants, itemVariants } = commonAnimations;

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const openAddressModal = () => setIsAddressModalOpen(true);
  const closeAddressModal = () => setIsAddressModalOpen(false);

  const handleModal = () => {
    openAddressModal();
  };

  return (
    <Portal>
      {isModalOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
          onClick={closeModal}
          dir="rtl"
        >
          <div
            className="bg-[#FEFCED] p-6 rounded-[16px] w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={closeModal}>
                <IoMdClose size={20} color="#1E1E1E99" />
              </button>

              <p className="text-[#1E1E1E] text-[24px] font-bold">
                انتخاب آدرس
              </p>
              <div></div>
            </div>

            {addressList.length === 0 ? (
              <div
                className="flex items-center gap-5 my-5 justify-center"
                dir="rtl"
              >
                <Image
                  src={questionMark}
                  alt="questionMark"
                  className="w-12 h-12 sm:w-24 sm:h-24"
                />
                <p className="text-[16px] sm:text-[32px] font-bold text-[#1E1E1E]">
                  شما آدرسی ندارید!
                </p>
              </div>
            ) : (
              <section>
                {addressList.map((e, index) => (
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    key={`${e.title}-${index}`}
                    className="flex flex-wrap justify-between my-5 border-[1px] border-[#EBDFBE] rounded-[16px] p-3 cursor-pointer transition-all bg-[#FAF1D7]"
                    dir="rtl"
                    onClick={() => setSelectedAddress(e.title)}
                  >
                    <div className="flex flex-wrap items-center gap-5">
                      <div
                        className={`w-6 h-6 rounded-[8px] border-[1px] border-[#1E1E1E] flex items-center justify-center ${
                          selectedAddress === e.title ? "bg-[#354259]" : ""
                        }`}
                      ></div>
                      <div className="flex flex-col justify-around">
                        <p className="text-[#1E1E1E] text-[12px] sm:text-[18px] font-bold my-1">
                          {e.title}
                        </p>
                        <p className="text-[#1E1E1E] text-[12px] sm:text-[16px] font-regular my-1">
                          {e.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 my-1">
                      <Image src={edit} alt="edit" />
                      <Image src={trash1} alt="trash1" />
                    </div>
                  </motion.div>
                ))}
              </section>
            )}

            <button
              onClick={handleModal}
              className="w-[100%] sm:w-[50%] flex justify-center m-auto items-center gap-2 font-bold text-[#354259] rounded-[8px] p-3 border-[2px] border-[#354259] text-[16px] font-bold"
            >
              <FaPlus color="#354259" />
              افزودن آدرس
            </button>

            <AddAddressModal
              isAddressModalOpen={isAddressModalOpen}
              closeAddressModal={closeAddressModal}
            />
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default SelectAddressModal;
