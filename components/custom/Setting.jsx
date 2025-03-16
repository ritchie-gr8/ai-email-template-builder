"use client";

import { useSelectedElement } from "@/provider/Provider";
import React, { useEffect, useState } from "react";
import InputField from "./settings/InputField";
import ColorPickerField from "./settings/ColorPickerField";
import InputStyleField from "./settings/InputStyleField";
import SliderField from "./settings/SliderField";
import TextAreaField from "./settings/TextAreaField";
import ToggleGroupField from "./settings/ToggleGroupField";
import DropDownField from "./settings/DropDownField";
import ImagePreviewField from "./settings/ImagePreviewField";
import {
  TextAlignOptions,
  TextTransformOptions,
} from "@/constants/element-list";

const Setting = () => {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();

  const onHandleInputChange = (fieldName, value) => {
    const updatedData = { ...selectedElement };

    updatedData.layout[selectedElement.index][fieldName] = value ?? "";

    setSelectedElement(updatedData);
  };

  const onHandleStyleChange = (fieldName, value) => {
    const updatedData = {
      ...selectedElement,
      layout: {
        ...selectedElement.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          style: {
            ...selectedElement?.layout[selectedElement?.index].style,
            [fieldName]: value,
          },
        },
      },
    };

    setSelectedElement(updatedData);
  };

  const onHandleOuterStyleChange = (fieldName, value) => {
    const updatedData = {
      ...selectedElement,
      layout: {
        ...selectedElement.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          outerStyle: {
            ...selectedElement?.layout[selectedElement?.index].outerStyle,
            [fieldName]: value,
          },
        },
      },
    };

    setSelectedElement(updatedData);
  };

  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);
  return (
    <div className="p-5">
      <h2 className="font-bold text-xl">Settings</h2>

      {element?.imageUrl && (
        <ImagePreviewField
          label={"Image Preview"}
          value={element?.imageUrl}
          onHandleInputChange={(value) =>
            onHandleInputChange("imageUrl", value)
          }
        />
      )}

      {element?.content !== undefined && (
        <TextAreaField
          label={"Content"}
          value={element?.content}
          onHandleInputChange={(value) => onHandleInputChange("content", value)}
        />
      )}

      {/* {element?.textarea && (
        <TextAreaField
          label={"Text Area"}
          value={element?.textarea}
          onHandleInputChange={(value) =>
            onHandleInputChange("textarea", value)
          }
        />
      )} */}

      {element?.style?.textAlign && (
        <ToggleGroupField
          label="Text Align"
          value={element?.style?.textAlign}
          options={TextAlignOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textAlign", value)
          }
        />
      )}

      {element?.style?.textTransform && (
        <ToggleGroupField
          label="Text Transform"
          value={element?.style?.textTransform}
          options={TextTransformOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textTransform", value)
          }
        />
      )}

      {element?.url && (
        <InputField
          label={"URL"}
          value={element?.url}
          onHandleInputChange={(value) => onHandleInputChange("url", value)}
        />
      )}

      {element?.style?.backgroundColor && (
        <ColorPickerField
          label="Background Color"
          value={element?.style?.backgroundColor}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("backgroundColor", value)
          }
        />
      )}

      {element?.style?.color && (
        <ColorPickerField
          label="Text Color"
          value={element?.style?.color}
          onHandleStyleChange={(value) => onHandleStyleChange("color", value)}
        />
      )}

      {element?.style.fontSize && (
        <InputStyleField
          label="Font Size"
          value={element?.style?.fontSize}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("fontSize", value)
          }
        />
      )}

      {element?.style?.fontWeight && (
        <DropDownField
          label="Font Weight"
          value={element?.style?.fontWeight}
          options={["normal", "bold"]}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("fontWeight", value)
          }
        />
      )}

      {element?.style?.padding && (
        <InputStyleField
          label="Padding"
          value={element?.style?.padding}
          onHandleStyleChange={(value) => onHandleStyleChange("padding", value)}
        />
      )}

      {element?.style?.margin && (
        <InputStyleField
          label="Margin"
          value={element?.style?.margin}
          onHandleStyleChange={(value) => onHandleStyleChange("margin", value)}
        />
      )}

      {element?.style?.borderRadius && (
        <SliderField
          label="Border Radius"
          value={element?.style?.borderRadius}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("borderRadius", value)
          }
        />
      )}

      {element?.style?.width && (
        <SliderField
          label="Width"
          value={element?.style?.width}
          type="%"
          onHandleStyleChange={(value) => onHandleStyleChange("width", value)}
        />
      )}

      <div>
        <h2 className="font-bold mb-2">Outer Style</h2>
        {element?.outerStyle?.backgroundColor && (
          <ColorPickerField
            label="Background Color"
            value={element?.outerStyle?.backgroundColor}
            onHandleStyleChange={(value) =>
              onHandleOuterStyleChange("backgroundColor", value)
            }
          />
        )}

        {element?.outerStyle?.justifyContent && (
          <ToggleGroupField
            label="Align"
            options={TextAlignOptions}
            value={element?.outerStyle?.justifyContent}
            onHandleStyleChange={(value) =>
              onHandleOuterStyleChange("justifyContent", value)
            }
          />
        )}
      </div>
    </div>
  );
};

export default Setting;
