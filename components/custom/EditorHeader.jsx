"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Code, Loader2, Monitor, Smartphone } from "lucide-react";
import {
  useEmailTemplate,
  useScreenSize,
  useSelectedElement,
} from "@/provider/Provider";
import { useParams } from "next/navigation";
import { updateTemplate } from "@/actions/convex";
import { toast } from "sonner";
import Link from "next/link";

const EditorHeader = ({ viewHTMLCode }) => {
  const { screenSize, setScreenSize } = useScreenSize();
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const { emailTemplate } = useEmailTemplate();
  const { templateId } = useParams();
  const [loading, setLoading] = useState(false);

  const handleOpenViewHTMLDialog = () => {
    setSelectedElement(null);
    viewHTMLCode(true);
  };

  const handleSaveTemplate = async () => {
    setLoading(true);
    const res = await updateTemplate(templateId, emailTemplate);
    if (res.status !== 200 || !res.data) {
      toast.error("Error", {
        description: "Failed to save template. please try again.",
      });
    }

    toast.success("Success", {
      description: "Template updated successfully.",
    });
    setLoading(false);
  };

  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Link href={"/dashboard"} className="cursor-pointer">
        <Image src={"/logo.svg"} alt="logo" width={180} height={140} />
      </Link>

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
        <Button onClick={handleSaveTemplate} disabled={loading}>
          Save Template {loading && <Loader2 className="animate-spin" />}
        </Button>
      </div>
    </div>
  );
};

export default EditorHeader;
