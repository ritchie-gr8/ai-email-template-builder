import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputStyleField = ({
  label,
  value,
  onHandleStyleChange,
  type = "px",
}) => {
  const getFormattedValue = (value) => value.replace(type, "");

  return (
    <div>
      <Label>{label}</Label>
      <div className="relative">
        <Input
          type="text"
          value={getFormattedValue(value)}
          onChange={(e) => onHandleStyleChange(e.target.value + type)}
        />
        <span className="absolute top-[7px] right-4 font-extralight italic text-sm">{type}</span>
      </div>
    </div>
  );
};

export default InputStyleField;
