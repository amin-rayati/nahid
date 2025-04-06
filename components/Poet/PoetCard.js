import React from "react";
import Image from "next/image";
const PoetCard = ({ img, name }) => {
  return (
    <div className="text-center m-auto">
      <Image
        src={img}
        alt="poet1"
        className="rounded-full w-40 h-40 object-cover"
      />
      <p className="text-[#1E1E1E] text-[20px] font-bold mt-4">{name}</p>
    </div>
  );
};

export default PoetCard;
