import React from "react";
import "./style.css";
import Navbar from "../Navbar";
import HomeSection from "../HomeSection";

const HomeNavSection = () => {
  return (
    <>
      <div className="heroSectionContainer">
        {/* <div className="navbarAppContainer">
          <Navbar />
        </div> */}
        <HomeSection />
      </div>
    </>
  );
};

export default HomeNavSection;
