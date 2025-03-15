import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TextAreaField = ({ label, value, onHandleInputChange }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Textarea
        value={value}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
};

export default TextAreaField;
