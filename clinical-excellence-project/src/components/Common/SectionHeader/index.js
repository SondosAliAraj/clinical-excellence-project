import React from "react";
import "./style.css";

const SectionHeader = ({ header }) => {
  return (
    <>
      <div className="headerContainer">
        <h1>{header}</h1>
      </div>
    </>
  );
};

export default SectionHeader;
