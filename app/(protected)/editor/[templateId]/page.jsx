import React from "react";
import EditorHeader from "../../../../components/custom/EditorHeader";
import ElementsSidebar from "@/components/custom/ElementsSidebar";
import Canvas from "@/components/custom/Canvas";
import Setting from "@/components/custom/Setting";

const EditorPage = () => {
  return (
    <div>
      <EditorHeader />

      <div className="grid grid-cols-5">
        <ElementsSidebar />

        <div className="col-span-3 bg-secondary">
          <Canvas />
        </div>

        <Setting />
      </div>
    </div>
  );
};

export default EditorPage;
