import React from "react";

const TextComponent = ({ style, content }) => {
  return (
    <div className="w-full">
      {content ? (
        <h2 style={style}>{content}</h2>
      ) : (
        <p className="text-center text-sm text-gray-500">Please enter a text</p>
      )}
    </div>
  );
};

export default TextComponent;
