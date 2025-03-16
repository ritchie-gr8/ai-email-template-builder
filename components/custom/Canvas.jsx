"use client";

import { cn } from "@/lib/utils";
import {
  useDragElementLayout,
  useEmailTemplate,
  useScreenSize,
} from "@/provider/Provider";
import React, { useEffect, useRef, useState } from "react";
import ColumnLayout from "/components/custom/layout-elements/ColumnLayout";
import ViewHTMLDialog from "/components/custom/ViewHTMLDialog";

const Canvas = ({ viewHTMLCode, closeDialog }) => {
  const htmlRef = useRef();

  const { screenSize, setScreenSize } = useScreenSize();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [isDragOver, setIsDragOver] = useState(false);
  const [htmlCode, setHtmlCode] = useState();

  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (dragElementLayout && "dragElement" in dragElementLayout) return;

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

  const getHTMLCode = () => {
    if (htmlRef.current) {
      const htmlContent = htmlRef.current.innerHTML;
      console.log("test html", htmlContent);
      setHtmlCode(htmlContent);
    }
  };

  useEffect(() => {
    viewHTMLCode && getHTMLCode();
  }, [viewHTMLCode]);

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
        ref={htmlRef}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate?.map((layout, idx) => (
            <div key={idx}>{getLayoutComponent(layout)}</div>
          ))
        ) : (
          <h2 className="p-4 text-center">Add Layout Here</h2>
        )}
      </div>
      <ViewHTMLDialog openDialog={viewHTMLCode} htmlCode={htmlCode}  closeDialog={closeDialog}/>
    </div>
  );
};

export default Canvas;
