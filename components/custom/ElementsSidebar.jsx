import { LAYOUTS } from "@/constants/layout";
import { ELEMENTS } from "@/constants/element-list";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";

const ElementsSidebar = () => {
  return (
    <div className="p-5 h-screen shadow-sm">
      <h2 className="font-bold text-lg">Layouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {LAYOUTS.map((layout, idx) => (
          <ElementLayoutCard layout={layout} key={idx} />
        ))}
      </div>

      <h2 className="font-bold text-lg mt-3">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {ELEMENTS.map((layout, idx) => (
          <ElementLayoutCard layout={layout} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ElementsSidebar;
