import React from "react";
import "./style.css";
import Navbar from "../Navbar";
import SectionHeader from "../Common/SectionHeader";
import ButtonFill from "../Common/ButtonFill";
import SectionSubHeader from "../Common/SectionSubHeader";
import OutlineButton from "../Common/OutlineButton";

const HomeSection = () => {
  return (
    <>
      <section id="home">
        <div className="container-fluid imageContainer">
          <img
            src="../../../assets/hero-2-bg-shape-cover-dark.png"
            alt="cover image"
            className="coverImage img-fluid d-md-block d-none"
          />
          <img
            src="../../../assets/hero-1-bg-shape-cover.png"
            alt="cover image"
            className="coverImage img-fluid d-block d-md-none"
          />
          <div className="overlay">
            {/* <Navbar /> */}
            <div className="container customContainer">
              <div className="row">
                <div className="col-lg-12 align-items-flex-start">
                  <div>
                    <SectionHeader header="Clinical Excellence" />
                  </div>
                  <div className="mt-4 homeSubheader">
                    <SectionSubHeader subHeader="We know how large objects will act, but things on a small scale" />
                  </div>
                  <div className=" btnsContainer">
                    <div className="btn1">
                      <ButtonFill btnText="Get Quote Now" btnColor="#23a6f0" />
                    </div>
                    <div className="btn1">
                      <OutlineButton
                        btnText="Learn More"
                        borderColor="#ffffff"
                        textColor="#ffffff"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
