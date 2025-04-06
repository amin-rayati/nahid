import React from "react";
import StoryCard from "./StoryCard";

const StoryList = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoryCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoryCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoryCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoryCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoryCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <StoryCard />
      </div>
    </div>
  );
};

export default StoryList;
