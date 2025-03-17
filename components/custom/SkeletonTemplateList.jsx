import React from "react";

const SkeletonTemplateItem = () => (
  <div className="p-5 rounded-lg shadow-md border flex flex-col justify-between gap-2 animate-pulse">
    <div className="w-full h-48 bg-gray-200 rounded" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mt-2" />
    <div className="h-8 bg-gray-200 rounded w-full mt-2" />
  </div>
);

const SkeletonTemplateList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
      {[...Array(8)].map((_, idx) => (
        <SkeletonTemplateItem key={idx} />
      ))}
    </div>
  );
};

export default SkeletonTemplateList;
