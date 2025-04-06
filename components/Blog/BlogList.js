import React from "react";
import BlogCard from "./BlogCard";
const BlogList = () => {
  return (
    <div className="grid grid-cols-12 gap-2" dir="rtl">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogList;
