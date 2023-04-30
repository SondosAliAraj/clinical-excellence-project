import React from "react";

import "./style.css";

const FeatureCard = ({id,title,subtitle}) => {
  return (
    <>
      <div class="card border-0 featureCard" style={{ width: "18rem" }}>
        <div class="card-body">
          <div className="circleContainer">
            <h6>{id}</h6>
          </div>
          <h5 class="card-title FeatureCardHeader">
           {title}
          </h5>
          <img
            src="../../assets/fixed-width fixed-height.png"
            className="lineStyle"
            alt="line"
          />
          <p class="card-subtitle mb-2 text-muted FeatureCardSubtitle">
           {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
