import React from "react";
import "./style.css";
import SearchBox from "../../Common/SearchBox";

const RightIcons = () => {
  return (
    <>
      <div className="iconsContainer">
        <i class="bi bi-search"></i>
        {/* <SearchBox /> */}
        <span>
          <i class="bi bi-cart"></i>
          <span className="number">1</span>
        </span>
        <span>
          <i class="bi bi-heart d-none d-lg-inline"></i>
          <span className="number d-none d-lg-inline">1</span>
        </span>
      </div>
    </>
  );
};

export default RightIcons;
