import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropDownField = ({ label, value, options, onHandleStyleChange }) => {
  return (
    <div>
      <Label>{label}</Label>

      <Select
        onValueChange={(val) => onHandleStyleChange(val)}
        defaultValue={value}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={value} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {options.map((option, idx) => (
            <SelectItem value={option} key={idx}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDownField;
