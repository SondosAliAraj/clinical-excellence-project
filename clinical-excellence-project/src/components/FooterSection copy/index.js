import React from "react";
import "./style.css";
import List from "./List";


const companyInfo = ["About Us", "Carrier", "We are hiring", "Blog"];
const features = [
  "Business Marketing",
  "User Analytic",
  "Live Chat",
  "Unlimited Support",
];

const FooterSection = () => {
  return (
    <>
 
      <div className="container-fluid  footerBackgroundStyle">
        <div className="container footerContainer">
          <div className="footerContainer">
          <div className="row footerRow">
            <div className="col-md-3" style={{ width: "100%" }}>
            <div class="getInTouch">
              <h5>Get In Touch</h5>
              <p>the quick fox jumps over the lazy dog</p>
              <img src="./assets/social media.png" alt="social media icons" />
            </div>
            </div>
            <div className="col-md-3" style={{ width: "100%" }}>
            <div className="companyInfo">
              <List title="Company info" arrayList={companyInfo} />
            </div>
            </div>

            <div className="col-md-3" style={{ width: "100%" }}>
            <div className="features">
              <List title="Features" arrayList={features} />
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
