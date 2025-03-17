"use client";

import React from "react";
import { useState } from "react";
import {
  useDragElementLayout,
  useEmailTemplate,
  useSelectedElement,
} from "../../../provider/Provider";
import ButtonComponent from "../element-components/ButtonComponent";
import TextComponent from "../element-components/TextComponent";
import ImageComponent from "../element-components/ImageComponent";
import LogoComponent from "../element-components/LogoComponent";
import DividerComponent from "../element-components/DividerComponent";
import LogoHeaderComponent from "../element-components/LogoHeaderComponent";
import SocialIconsComponent from "../element-components/SocialIconsComponent";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";

const ColumnLayout = ({ layout }) => {
  const [dragOver, setDragOver] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { selectedElement, setSelectedElement } = useSelectedElement();

  const onDragOverHandler = (e, idx) => {
    e.preventDefault();
    setDragOver({
      index: idx,
      columnId: layout?.id,
      isElement: dragElementLayout ? "dragElement" in dragElementLayout : false,
    });
  };

  const onDragLeaveHandler = () => setDragOver(null);

  const onDropHandler = () => {
    if (!dragElementLayout?.dragElement) return;

    delete dragElementLayout?.dragElement.icon

    const idx = dragOver.index;
    setEmailTemplate((prev) =>
      prev.map((col) =>
        col?.id === layout?.id
          ? { ...col, [idx]: dragElementLayout?.dragElement }
          : col
      )
    );
    setDragOver(null);
  };

  const deleteLayout = (layoutId) => {
    const updatedEmailTemplate = emailTemplate?.filter(
      (item) => item?.id !== layoutId
    );
    setEmailTemplate(updatedEmailTemplate);
    setSelectedElement(null);
  };

  const moveColumn = (layoutId, direction) => {
    const idx = emailTemplate.findIndex((item) => item?.id === layoutId);
    if (idx === -1) return;

    const shouldMoveUp = direction === "up";

    setEmailTemplate((prev) => {
      const updatedData = [...prev];

      if (
        (shouldMoveUp && idx === 0) ||
        (!shouldMoveUp && idx === updatedData.length - 1)
      )
        return updatedData;

      const temp = updatedData[idx];
      updatedData[idx] = updatedData[shouldMoveUp ? idx - 1 : idx + 1];
      updatedData[shouldMoveUp ? idx - 1 : idx + 1] = temp;

      return updatedData;
    });
  };

  const getElementComponent = (element) => {
    switch (element?.type) {
      case "Button":
        return <ButtonComponent {...element} />;
      case "Text":
        return <TextComponent {...element} />;
      case "Image":
        return <ImageComponent {...element} />;
      case "Logo":
        return <LogoComponent {...element} />;
      case "Divider":
        return <DividerComponent {...element} />;
      case "LogoHeader":
        return <LogoHeaderComponent {...element} />;
      case "SocialIcons":
        return <SocialIconsComponent {...element} />;
    }

    return element?.type;
  };

  return (
    <div className="relative">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
          gap: 0,
        }}
        className={`
        ${selectedElement?.layout?.id === layout?.id && "border border-dashed border-destructive"}
          `}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, idx) => (
          <div
            key={idx}
            className={`p-0 flex items-center justify-center cursor-pointer
                    ${!layout?.[idx]?.type && "bg-gray-100 border border-dashed"}
                    ${idx === dragOver?.index && dragOver?.columnId && dragOver?.isElement && "bg-green-100"} 
                    ${selectedElement?.layout?.id === layout?.id && selectedElement?.index === idx && "border-4 border-accent"}
                `}
            onDragOver={(e) => onDragOverHandler(e, idx)}
            onDrop={onDropHandler}
            onDragLeave={onDragLeaveHandler}
            onClick={() => setSelectedElement({ layout, index: idx })}
          >
            {getElementComponent(layout?.[idx]) ?? "Drag element here"}
          </div>
        ))}
        {selectedElement?.layout?.id === layout?.id && (
          <div className="absolute -right-10 flex flex-col gap-2">
            <div
              className="cursor-pointer bg-destructive text-destructive-foreground 
              p-2 rounded-full hover:scale-105 transition-all hover:shadow-md"
              onClick={() => deleteLayout(layout?.id)}
            >
              <Trash size={15} />
            </div>

            <div
              className="cursor-pointer bg-popover text-popover-foreground
              p-2 rounded-full hover:scale-105 transition-all hover:shadow-md"
              onClick={() => moveColumn(layout?.id, "up")}
            >
              <ArrowUp size={15} />
            </div>

            <div
              className="cursor-pointer bg-popover text-popover-foreground
              p-2 rounded-full hover:scale-105 transition-all hover:shadow-md"
              onClick={() => moveColumn(layout?.id, "down")}
            >
              <ArrowDown size={15} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColumnLayout;
