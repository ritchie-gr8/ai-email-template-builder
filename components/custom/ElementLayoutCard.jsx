import { LAYOUT_ICONS } from "@/constants/layout";
import React from "react";
import { RectangleVertical } from "lucide-react";

const ElementLayoutCard = ({ layout }) => {
  // Get the icon component with fallback
  const IconComponent =
    LAYOUT_ICONS[layout.icon] || layout.icon || RectangleVertical;

  return (
    <div
      className="flex flex-col items-center justify-center
            border rounded-xl p-3 group hover:shadow-md
            hover:border-primary cursor-pointer hover:bg-primary"
    >
      <IconComponent className="size-6" />
      <h2 className="text-sm text-center group-hover:text-primary-foreground">
        {layout.label}
      </h2>
    </div>
  );
};

export default ElementLayoutCard;
