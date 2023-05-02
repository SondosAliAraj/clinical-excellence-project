import React from "react";
import "./style.css";
import List from "./List";
import CopyrightSection from "../CopyrightSection";

const companyInfo = ["About Us", "Carrier", "We are hiring", "Blog"];
const features = [
  "Business Marketing",
  "User Analytic",
  "Live Chat",
  "Unlimited Support",
];

const ContactsSection = () => {
  return (
    <>
      <section id="contact">
        <footer className="footer">
          <div className="row" style={{ width: "100%" }}>
            <div className="columnContainer">
              <div className="col-md-4">
                <div class="getInTouch">
                  <h5>Get In Touch</h5>
                  <p>the quick fox jumps over the lazy dog</p>
                  <img
                    src="./assets/social media.png"
                    alt="social media icons"
                  />
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="companyInfo">
                  <List title="Company info" arrayList={companyInfo} />
                </div>
              </div>
              <div className="col-md-3">
                <div className="features">
                  <List title="Features" arrayList={features} />
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ width: "100%" }}>
            <div className="copyRight">
              <CopyrightSection />
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default ContactsSection;
