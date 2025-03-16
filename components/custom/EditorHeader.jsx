"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Code, Monitor, Smartphone } from "lucide-react";
import { useScreenSize, useSelectedElement } from "@/provider/Provider";

const EditorHeader = ({ viewHTMLCode }) => {
  const { screenSize, setScreenSize } = useScreenSize();
  const { selectedElement, setSelectedElement } = useSelectedElement();

  const handleOpenViewHTMLDialog = () => {
    setSelectedElement(null);
    viewHTMLCode(true);
  };

  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Image src={"/logo.svg"} width={180} height={140} alt="logo" />

      <div className="flex gap-3">
        <Button
          variant={"ghost"}
          className={`${screenSize === "desktop" && "bg-accent text-accent-foreground"}`}
          onClick={() => setScreenSize("desktop")}
        >
          <Monitor /> Desktop
        </Button>
        <Button
          variant={"ghost"}
          className={`${screenSize === "mobile" && "bg-accent text-accent-foreground"}`}
          onClick={() => setScreenSize("mobile")}
        >
          <Smartphone /> Mobile
        </Button>
      </div>

      <div className="flex gap-3">
        <Button
          variant={"ghost"}
          className="hover:text-primary hover:bg-primary-foreground/80"
          onClick={() => handleOpenViewHTMLDialog()}
        >
          <Code />
        </Button>
        <Button variant={"outline"}>Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  );
};

export default EditorHeader;
