import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";
import AIInputBox from "@/components/custom/AIInputBox";

const CreatePage = () => {
  const AI = "AI";
  const SCRATCH = "SCRATCH";


  return (
    <div className="mt-20 px-10 md:px-28 lg:px-44 xl:px-56">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-primary">Create new email template</h2>
        <p className="text-lg text-gray-900">
          customize email template from scrath or create it with the help of AI
        </p>
        <Tabs defaultValue={AI} className="max-w-[500px] mt-10 flex flex-col items-center">
          <TabsList>
            <TabsTrigger value={AI}>
              Create with AI <Sparkles className="size-5 ml-2" />
            </TabsTrigger>
            <TabsTrigger value={SCRATCH}>Start from Scratch</TabsTrigger>
          </TabsList>
          <TabsContent value={AI}>
            <AIInputBox />
          </TabsContent>
          <TabsContent value={SCRATCH}>Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CreatePage;
