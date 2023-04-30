import React from "react";
import "./style.css";
import Navbar from "../Navbar";
import SectionHeader from "../Common/SectionHeader";
import ButtonFill from "../Common/ButtonFill";
import SectionSubHeader from "../SectionSubHeader";
import OutlineButton from "../Common/OutlineButton";

const HomeSection = () => {
  return (
    <>
      <section id="home">
        <div className="container-fluid imageContainer">
          <img
            src="../../../assets/hero-2-bg-shape-cover-dark.png"
            alt="cover image"
            className="coverImage img-fluid"
          />
          <div className="overlay">
            <Navbar />
            <div className="container customContainer">
              <div className="row">
                <div className="col-lg-12 align-items-flex-start">
                  <div>
                    <SectionHeader header="Clinical Excellence" />
                  </div>
                  <div className="mt-4">
                    <SectionSubHeader subHeader="We know how large objects will act, but things on a small scale" />
                  </div>
                  <div className="mt-4 btnsContainer">
                    <ButtonFill btnText="Get Quote Now" />
                    <OutlineButton btnText="Learn More"/>
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
