"use client";

import React from "react";

const ColumnLayout = ({ layout }) => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
          gap: 0,
        }}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, idx) => (
          <div
            key={idx}
            className="p-2 flex items-center bg-gray-100 border border-dashed justify-center"
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnLayout;
