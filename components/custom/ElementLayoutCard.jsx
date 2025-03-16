import React from "react";

const ElementLayoutCard = ({layout}) => {
  return (
    <div
      className="flex flex-col items-center justify-center
            border rounded-xl p-3 group hover:shadow-md
            hover:border-primary cursor-pointer hover:bg-primary"
    >
      <layout.icon className="size-6" />
      <h2 className="text-sm text-center group-hover:text-primary-foreground">
        {layout.label}
      </h2>
    </div>
  );
};

export default ElementLayoutCard;
