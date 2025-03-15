import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ImagePreviewField = ({ label, value, onHandleInputChange }) => {
  return (
    <div>
      <Label>{label}</Label>
      <img
        src={value}
        alt="image"
        className="w-full h-[150px] object-cover border rounded-xl"
      />
      <Input
        className="mt-2"
        value={value}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
};

export default ImagePreviewField;
