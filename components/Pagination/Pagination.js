"use client";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const range = [];
    const maxPagesToShow = 5;

    if (currentPage <= maxPagesToShow) {
      for (let i = 1; i <= maxPagesToShow; i++) {
        range.push(i);
      }
      range.push("...");
      range.push(totalPages);
    } else if (currentPage >= totalPages - maxPagesToShow) {
      range.push(1);
      range.push("...");
      for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      range.push(1);
      range.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        range.push(i);
      }
      range.push("...");
      range.push(totalPages);
    }

    return range;
  };

  return (
    <>
      <div className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-1">
        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`${
            currentPage === totalPages
              ? "bg-[#FEFCED] text-[#706D8F]"
              : "bg-[#FAF1D7] text-[#FFE76C]"
          } rounded-[8px] p-4 border-[1px] border-[#EBDFBE] hidden sm:block`}
          disabled={currentPage === totalPages}
        >
          <FaAngleLeft color="black" />
        </button>

        {/* Page Numbers */}
        <div className="flex gap-1 items-center flex-wrap justify-center">
          {getPageNumbers()
            .reverse()
            .map((item, index) => (
              <button
                key={index}
                onClick={() => item !== "..." && handlePageChange(item)}
                className={`py-3 px-5 rounded-[8px] ${
                  item === currentPage
                    ? "bg-[#354259] text-white"
                    : item === "..."
                    ? "bg-[#FAF1D7] text-black cursor-default  border-[1px] border-[#EBDFBE]"
                    : "bg-[#FAF1D7] text-black  border-[1px] border-[#EBDFBE]"
                }`}
                disabled={item === "..." || item === currentPage}
              >
                {item}
              </button>
            ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`${
            currentPage === 1
              ? "bg-[#FEFCED] text-[#706D8F]"
              : "bg-[#FAF1D7] text-[#FFE76C]"
          } rounded-[8px] p-4 border-[1px] border-[#EBDFBE] hidden sm:block`}
          disabled={currentPage === 1}
        >
          <FaAngleRight color="black" />
        </button>
      </div>
      <div className="flex gap-1 items-center justify-center my-5">
        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`${
            currentPage === totalPages
              ? "bg-[#FEFCED] text-[#706D8F]"
              : "bg-[#FAF1D7] text-[#FFE76C]"
          } rounded-[8px] p-4 border-[1px] border-[#EBDFBE] block sm:hidden`}
          disabled={currentPage === totalPages}
        >
          <FaAngleLeft color="black" />
        </button>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`${
            currentPage === 1
              ? "bg-[#FEFCED] text-[#706D8F]"
              : "bg-[#FAF1D7] text-[#FFE76C]"
          } rounded-[8px] p-4 border-[1px] border-[#EBDFBE] block sm:hidden`}
          disabled={currentPage === 1}
        >
          <FaAngleRight color="black" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
