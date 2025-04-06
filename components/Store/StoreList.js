import React from "react";
import StoreCard from "./StoreCard";

const StoreList = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoreCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoreCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoreCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoreCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoreCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoreCard />
      </div>
    </div>
  );
};

export default StoreList;
