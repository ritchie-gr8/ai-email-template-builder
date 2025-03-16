import React from "react";

const ButtonComponent = ({ style, outerStyle, content, url }) => {
  return (
      <a href={url} style={outerStyle}>
        <button style={style}>{content}</button>
      </a>
  );
};

export default ButtonComponent;
