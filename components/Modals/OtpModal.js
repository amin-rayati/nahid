import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { commonAnimations } from "@/utils/animations";
import Portal from "./Portal";

const InvoceModal = ({ isModalOpen, closeModal, nextStep }) => {
  const { containerVariants, itemVariants } = commonAnimations;

  const sendOtp = () => {
    console.log("ok");
    closeModal();
    nextStep();
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
            className="bg-[#FEFCED] p-6 rounded-[16px] w-[95%] sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-[25%] relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={closeModal}>
                <IoMdClose size={20} color="#1E1E1E99" />
              </button>

              <p className="text-[#1E1E1E] text-[24px] font-bold">
                تایید شماره تلفن
              </p>
              <div></div>
            </div>
            <div className="flex items-center justify-between mt-5" dir="rtl">
              <p className="text-[#1E1E1E] text-[16px] font-regular">
                کد تایید
              </p>
              <p className="text-[#354259] text-[16px] font-bold">ارسال مجدد</p>
            </div>
            <input
              placeholder="کد تایید را وارد کنید"
              className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] p-3 my-2 rounded-[8px] text-right text-[#1E1E1E] text-[16px] font-regular placeholder:text-[#1e1e1ea8] placeholder:text-[16px] placeholder:font-ligth outline-none w-full"
            />
            <button
              onClick={sendOtp}
              className="mt-5 w-[100%] m-auto justify-center flex items-center gap-2 bg-[#354259] font-bold text-[white] rounded-[8px] p-3 border-[2px] border-[#354259] text-[13px] sm:text-[16px]"
            >
              تایید
            </button>
          </div>
        </motion.div>
      )}
    </Portal>
  );
};

export default InvoceModal;
