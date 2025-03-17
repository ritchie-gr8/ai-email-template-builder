import React from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const SliderField = ({ label, value, onHandleStyleChange, type = "px" }) => {
  const getFormattedValue = (value) => value?.replace(type, "");

  return (
    <div>
      <Label>
        {label} ({value})
      </Label>
      <Slider
        defaultValue={[getFormattedValue(value)]}
        max={100}
        step={1}
        onValueChange={(val) => onHandleStyleChange(val + type)}
      />
    </div>
  );
};

export default SliderField;
