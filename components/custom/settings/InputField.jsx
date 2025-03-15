import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputField = ({ label, value, onHandleInputChange }) => {
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <Input
        value={value}
        id={label}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
