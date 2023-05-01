import React from "react";
import "./style.css";

const OutlineButton = ({ btnText,borderColor,textColor }) => {
  return (
    <>
      <button className="btn-md outlineBtn" style={{border:`1px solid ${borderColor}`,color:`${textColor}`}}>{btnText} </button>
    </>
  );
};

export default OutlineButton;
