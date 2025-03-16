"use client";

import React, { useState } from "react";
import EditorHeader from "../../../../components/custom/EditorHeader";
import ElementsSidebar from "@/components/custom/ElementsSidebar";
import Canvas from "@/components/custom/Canvas";
import Setting from "@/components/custom/Setting";

const EditorPage = () => {
  const [viewHTMLCode, setViewHTMLCode] = useState();

  return (
    <div>
      <EditorHeader viewHTMLCode={(val) => setViewHTMLCode(val)} />

      <div className="grid grid-cols-5">
        <ElementsSidebar />

        <div className="col-span-3 bg-gray-200">
          <Canvas viewHTMLCode={viewHTMLCode} closeDialog={() => setViewHTMLCode(false)} />
        </div>

        <Setting />
      </div>
    </div>
  );
};

export default EditorPage;
