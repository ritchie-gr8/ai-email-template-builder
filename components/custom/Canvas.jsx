"use client";

import { cn } from "@/lib/utils";
import {
  useDragElementLayout,
  useEmailTemplate,
  useScreenSize,
} from "@/provider/Provider";
import React, { useState } from "react";
import ColumnLayout from "/components/custom/layout-elements/ColumnLayout";

const Canvas = () => {
  const { screenSize, setScreenSize } = useScreenSize();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [isDragOver, setIsDragOver] = useState(false);

  const onDragOverHandler = (e) => {
    e.preventDefault();
    if ("dragElement" in dragElementLayout) return;

    setIsDragOver(true);
    console.log("Over...");
  };

  const onDragLeaveHandler = () => {
    setIsDragOver(false);
    console.log("Left...");
  };

  const onDropHandler = () => {
    setIsDragOver(false);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate((prev) => {
        console.log("prev", prev);
        return [...prev, dragElementLayout?.dragLayout];
      });
    }
  };

  const getLayoutComponent = (layout) => {
    if (layout?.type === "column") {
      return <ColumnLayout layout={layout} />;
    }
  };

  return (
    <div className="mt-20 flex justify-center">
      <div
        className={cn(
          `bg-white p-6 w-full`,
          screenSize === "desktop" ? "max-w-2xl" : "max-w-md",
          isDragOver && "bg-purple-200"
        )}
        onDragOver={onDragOverHandler}
        onDrop={() => onDropHandler()}
        onDragLeave={onDragLeaveHandler}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate?.map((layout, idx) => (
            <div key={idx}>{getLayoutComponent(layout)}</div>
          ))
        ) : (
          <h2 className="p-4 text-center">Add Layout Here</h2>
        )}
      </div>
    </div>
  );
};

export default Canvas;
