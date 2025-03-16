"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { generateEmailTemplateWithAI } from "@/actions/gemini";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useUserDetail } from "@/provider/Provider";
import { useRouter } from "next/navigation";

const AIInputBox = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { userDetail } = useUserDetail();
  const router = useRouter()

  const handleGenerate = async () => {
    if (userInput.trim() === "") {
      toast.error("Error", {
        description: "Please enter a prompt to generate a template.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await generateEmailTemplateWithAI(
        userInput.trim(),
        userDetail?.email
      );
      if (res.status !== 200 || !res.data)
        throw new Error("Unable to generate email template");

      console.log('test generate', res)
      toast.success("Success", {
        description: "Email template generated successfully.",
      });
      router.push(`/editor/${res.data.templateId}`)
    } catch (error) {
      toast.error("Error", {
        description: "Failed to generate an email template. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <Label className="mb-2">
        Provide details about the email template you'd like to create
      </Label>
      <Textarea
        placeholder="Start writing here..."
        rows={5}
        onChange={(e) => setUserInput(e.target.value)}
        disabled={loading}
      />
      <Button
        className="mt-7 w-full"
        disabled={userInput?.length === 0 || loading}
        onClick={handleGenerate}
      >
        Generate
        {loading && <Loader2 className="animate-spin" />}
      </Button>
    </div>
  );
};

export default AIInputBox;
