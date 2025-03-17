import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCheck, Copy } from "lucide-react";

const ViewHTMLDialog = ({ openDialog, htmlCode, closeDialog }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Dialog className="w-fit" open={openDialog} onOpenChange={closeDialog} asChild>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <div className="flex items-center justify-between gap-6 mt-4">
              <h2>HTML Email Template</h2>
              <div className="relative">
                {copied ? (
                  <div className="absolute top-1 -left-16 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    Copied!
                  </div>
                ) : null}
                {copied ? (
                  <CheckCheck
                    className="p-2 bg-green-600 rounded-full size-8 text-white cursor-pointer transition-all duration-200"
                    onClick={copyCode}
                  />
                ) : (
                  <Copy
                    className="p-2 bg-accent hover:bg-accent/80 rounded-full size-8 text-accent-foreground cursor-pointer transition-all duration-200"
                    onClick={copyCode}
                  />
                )}
              </div>
            </div>
          </DialogTitle>
          <DialogDescription asChild>
            <div className="max-w-full max-h-[400px] overflow-auto bg-[#282a36] rounded-lg p-5">
              <pre className="whitespace-pre-wrap break-all text-[#f8f8f2] font-mono">
                <code>{htmlCode}</code>
              </pre>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ViewHTMLDialog;
