"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";
import AIInputBox from "@/components/custom/AIInputBox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const CreatePage = () => {
  const AI = "AI";
  const SCRATCH = "SCRATCH";

  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleCreateFromScratch = () => {
    const templateId = uuidv4()

    router.push(`/editor/${templateId}`)
  }

  return (
    <div className="mt-20 px-10 md:px-28 lg:px-44 xl:px-56">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-primary">
          Create new email template
        </h2>
        <p className="text-lg text-gray-900">
          customize email template from scrath or create it with the help of AI
        </p>
        <Tabs
          defaultValue={AI}
          className="max-w-[500px] mt-10 flex flex-col items-center"
        >
          <TabsList>
            <TabsTrigger value={AI} disabled={loading}>
              Create with AI <Sparkles className="size-5 ml-2" />
            </TabsTrigger>
            <TabsTrigger value={SCRATCH} disabled={loading}>Start from Scratch</TabsTrigger>
          </TabsList>
          <TabsContent value={AI}>
            <AIInputBox loading={loading} setLoading={setLoading} />
          </TabsContent>
          <TabsContent value={SCRATCH}>
            <Button className="mt-6" onClick={handleCreateFromScratch}>Go to create page</Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CreatePage;
