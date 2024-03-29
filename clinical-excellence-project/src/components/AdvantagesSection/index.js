import React from "react";
import "./style.css";
import PostCard from "./PostCard";

const advantages = [
  {
    title: "Work at the speed",
    subtitle: "The gradual accumulation of information about",
    btnText: "Learn More",
  },
  {
    title: "Work at the speed",
    subtitle: "The gradual accumulation of information about",
    btnText: "Learn More",
  },
  {
    title: "Work at the speed",
    subtitle: "The gradual accumulation of information about",
    btnText: "",
  },
  {
    title: "Work at the speed",
    subtitle: "The gradual accumulation of information about",
    btnText: "",
  },
];

const AdvantagesSection = () => {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="advantagesContainer ">
            <div className="row headerRow">
              <h6 className="heading6">Practice Advice</h6>
              <h2 className="heading2">Our Main Advantages</h2>
              <p className="description">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <div className="row bodyRow">
              <div className="col-md-5">
                <img
                  src="../assets/advatagesSectionImage.png"
                  className="advantagesSectionImage"
                  alt="doctor"
                />
              </div>

              <div className="col-md-6 postsCardsContainer">
                <div className="row ">
                  {advantages.map((item) => {
                    return (
                      <div className="col-md-6 col-sm-12">
                        <PostCard
                          title={item.title}
                          subtitle={item.subtitle}
                          btnText={item.btnText}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvantagesSection;
