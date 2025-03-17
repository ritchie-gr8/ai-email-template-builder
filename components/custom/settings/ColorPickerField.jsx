import { Label } from "@/components/ui/label";
import React from "react";

const ColorPickerField = ({ label, value, onHandleStyleChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={label}>{label}</Label>
      <input
        type="color"
        value={value}
        id={label}
        onChange={(e) => onHandleStyleChange(e.target.value)}
      />
    </div>
  );
};

export default ColorPickerField;
