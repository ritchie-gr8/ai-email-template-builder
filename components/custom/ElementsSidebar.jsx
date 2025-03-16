"use client";

import { LAYOUTS } from "@/constants/layout";
import { ELEMENTS } from "@/constants/element-list";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";
import { useDragElementLayout } from "@/provider/Provider";

const ElementsSidebar = () => {
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();

  const onDragLayoutStart = (layout) => {
    setDragElementLayout({
      dragLayout: {
        ...layout,
        id: Date.now(),
      },
    });
  };

  const onDragElementStart = (element) => {
    setDragElementLayout({
      dragElement: {
        ...element,
        id: Date.now(),
      },
    });
  };

  return (
    <div className="p-5 h-screen shadow-sm">
      <h2 className="font-bold text-lg">Layouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {LAYOUTS.map((layout, idx) => (
          <div
            key={idx}
            draggable
            onDragStart={() => onDragLayoutStart(layout)}
          >
            <ElementLayoutCard layout={layout} />
          </div>
        ))}
      </div>

      <h2 className="font-bold text-lg mt-3">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {ELEMENTS.map((element, idx) => (
          <div
            key={idx}
            draggable
            onDragStart={() => onDragElementStart(element)}
          >
            <ElementLayoutCard layout={element} key={idx} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementsSidebar;
