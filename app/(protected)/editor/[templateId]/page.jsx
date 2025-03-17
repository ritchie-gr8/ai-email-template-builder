"use client";

import React, { useEffect, useState } from "react";
import EditorHeader from "../../../../components/custom/EditorHeader";
import ElementsSidebar from "@/components/custom/ElementsSidebar";
import Canvas from "@/components/custom/Canvas";
import Setting from "@/components/custom/Setting";
import { useParams } from "next/navigation";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEmailTemplate, useUserDetail } from "../../../../provider/Provider";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const EditorPage = () => {
  const [viewHTMLCode, setViewHTMLCode] = useState();
  const { userDetail } = useUserDetail();
  const { templateId } = useParams();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [loading, setLoading] = useState(true);

  const convex = useConvex();

  const getTemplateData = async () => {
    setLoading(true);
    const result = await convex.query(api.emailTemplate.getTemplateDesign, {
      templateId: templateId,
      email: userDetail?.email,
    });

    if (result) {
      setEmailTemplate(result.templateJson);
    } else {
      setEmailTemplate([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (userDetail) {
      getTemplateData();
    }
  }, [userDetail]);

  return (
    <div>
      <EditorHeader viewHTMLCode={(val) => setViewHTMLCode(val)} />

      {loading ? (
        <div className="flex justify-center items-center w-full h-screen bg-gray-200">
          <div className="bg-white p-24">
            <div className="flex flex-col space-y-3 w-[448px] ">
              <Skeleton className="h-[225px] bg-primary rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 bg-primary" />
                <Skeleton className="h-4 bg-primary" />
              </div>
              <div className="flex items-center justify-center gap-4">
                <Skeleton className="h-14 bg-primary flex-1" />
                <Skeleton className="h-14 bg-primary flex-1" />
                <Skeleton className="h-14 bg-primary flex-1" />
              </div>
              <Skeleton className="h-[80px] bg-primary rounded-xl" />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-5 relative">
          <ElementsSidebar />

          <div className="col-span-3 bg-gray-200">
            <Link className="absolute top-2 ml-4" href={"/dashboard"}>
              <Button>
                <ArrowLeft /> back to Dashboard
              </Button>
            </Link>
            <Canvas
              viewHTMLCode={viewHTMLCode}
              closeDialog={() => setViewHTMLCode(false)}
            />
          </div>

          <Setting />
        </div>
      )}
    </div>
  );
};

export default EditorPage;
