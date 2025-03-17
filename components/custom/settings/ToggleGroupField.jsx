import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";

const ToggleGroupField = ({ label, value, options, onHandleStyleChange }) => {
  return (
    <div>
      <Label>{label}</Label>
      <ToggleGroup
        type="single"
        defaultValue={value}
        onValueChange={(v) => onHandleStyleChange(v)}
      >
        {options.map((option, idx) => (
          <ToggleGroupItem key={idx} value={option.value} className="w-full">
            <option.icon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default ToggleGroupField;
