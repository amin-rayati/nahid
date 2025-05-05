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
      <div
        className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-1"
        dir="ltr"
      >
        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`${
            currentPage === totalPages ? " text-[#706D8F]" : "text-[#FFE76C]"
          } p-4 hidden sm:block`}
          disabled={currentPage === totalPages}
        >
          <FaAngleLeft
            color={currentPage === totalPages ? "#706D8F" : "#000000"}
          />
        </button>

        {/* Page Numbers */}
        <div className="flex gap-1 items-center flex-wrap justify-center">
          {getPageNumbers()
            .reverse()
            .map((item, index) => (
              <button
                key={index}
                onClick={() => item !== "..." && handlePageChange(item)}
                className={`py-3 px-5 rounded-full ${
                  item === currentPage
                    ? "bg-[#1F5D6A] text-white"
                    : item === "..."
                    ? "bg-[#E2E8EB] text-black cursor-default "
                    : "bg-[#E2E8EB] text-black "
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
          className="p-4 hidden sm:block"
          disabled={currentPage === 1}
        >
          <FaAngleRight color={currentPage === 1 ? "#706D8F" : "#000000"} />
        </button>
      </div>

      <div className="flex gap-1 items-center justify-center my-5">
        {/* Next Button */}
        <button
          onClick={handlePrev}
          className={`${
            currentPage === 1 ? " text-[#706D8F]" : "text-[#FFE76C]"
          } rounded-[8px] p-4 block sm:hidden`}
          disabled={currentPage === 1}
        >
          <FaAngleRight color={currentPage === 1 ? "#706D8F" : "#000000"} />
        </button>
        {/*  Previous Button */}
        <button
          onClick={handleNext}
          className={`${
            currentPage === totalPages ? " text-[#706D8F]" : "text-[#FFE76C]"
          } rounded-[8px] p-4 block sm:hidden`}
          disabled={currentPage === totalPages}
        >
          <FaAngleLeft
            color={currentPage === totalPages ? "#706D8F" : "#000000"}
          />
        </button>
      </div>
    </>
  );
};

export default Pagination;
