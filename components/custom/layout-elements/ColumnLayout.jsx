"use client";

import React from "react";
import { useState } from "react";
import {
  useDragElementLayout,
  useEmailTemplate,
} from "../../../provider/Provider";
import ButtonComponent from "../element-components/ButtonComponent";
import TextComponent from "../element-components/TextComponent";
import ImageComponent from "../element-components/ImageComponent";
import LogoComponent from "../element-components/LogoComponent";
import DividerComponent from "../element-components/DividerComponent";
import LogoHeaderComponent from "../element-components/LogoHeaderComponent";
import SocialIconsComponent from "../element-components/SocialIconsComponent";

const ColumnLayout = ({ layout }) => {
  const [dragOver, setDragOver] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();

  const onDragOverHandler = (e, idx) => {
    e.preventDefault();
    setDragOver({
      index: idx,
      columnId: layout?.id,
      isElement: "dragElement" in dragElementLayout ?? false,
    });
  };

  const onDragLeaveHandler = () => setDragOver(null);

  const onDropHandler = () => {
    if (!dragElementLayout?.dragElement) return;

    const idx = dragOver.index;
    setEmailTemplate((prev) =>
      prev.map((col) =>
        col.id === layout?.id
          ? { ...col, [idx]: dragElementLayout?.dragElement }
          : col
      )
    );
    console.log(emailTemplate);
    setDragOver(null);
  };

  const getElementComponent = (element) => {
    console.log('type', element?.type)
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

    console.log('test!!!!!!!!!')
    return element?.type;
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
          gap: 0,
        }}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, idx) => (
          <div
            key={idx}
            className={`p-2 flex items-center justify-center
                    ${!layout?.[idx]?.type && "bg-gray-100 border border-dashed"}
                    ${idx === dragOver?.index && dragOver?.columnId && dragOver?.isElement && "bg-green-100"} 
                `}
            onDragOver={(e) => onDragOverHandler(e, idx)}
            onDrop={onDropHandler}
            onDragLeave={onDragLeaveHandler}
          >
            {getElementComponent(layout?.[idx]) ?? "Drag element here"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnLayout;
