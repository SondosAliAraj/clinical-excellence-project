import React from "react";
import "./style.css";

const OutlineButton = ({ btnText }) => {
  return (
    <>
      <button className="btn-md outlineBtn">{btnText} </button>
    </>
  );
};

export default OutlineButton;
