import React from "react";
import "./style.css";
import ButtonFill from "../Common/ButtonFill";
import OutlineButton from "../Common/OutlineButton";

const ResearchSection = () => {
  return (
    <>
      <section id="blog">
        <div className="container mainContainer">
          <div className="row">
            <div className="col-md-6">
              <div className="leftContainer">
                <div>
                  <h4 className="h4Styles">ON ALL GOLD RINGS</h4>
                  <h2 className="h2Styles">Our Research Laboratory</h2>
                  <p className="pStyles">
                    Problems trying to resolve the conflict between the two
                    major realms of Classical physics: Newtonian mechanics.
                  </p>
                </div>
                <div className="leftBtnContainer">
                  <div className="btn1">
                    <ButtonFill btnText="Shop Now" btnColor="#23856D" />
                  </div>
                  <div className="btn1">
                  <OutlineButton
                    btnText="View More"
                    borderColor="#23856D"
                    textColor="#23856D"
                  />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rightContainer">
                <img
                  src="../assets/hero-cover-212a.png"
                  alt="doctor and patient image"
                  className="researchImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchSection;
