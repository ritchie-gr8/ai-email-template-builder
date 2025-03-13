import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Code, Monitor, Smartphone } from "lucide-react";

const EditorHeader = () => {
  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Image src={"/logo.svg"} width={180} height={140} alt="logo" />

      <div className="flex gap-3">
        <Button variant={"ghost"}>
          <Monitor /> Desktop
        </Button>
        <Button variant={"ghost"}>
          <Smartphone /> Mobile
        </Button>
      </div>

      <div className="flex gap-3">
        <Button
          variant={"ghost"}
          className="hover:text-primary hover:bg-primary-foreground/80"
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
