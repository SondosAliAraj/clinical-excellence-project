import React from "react";
import "./style.css";

const ReviewerDetails = ({ image, name, role }) => {
  return (
    <>
      <div className="frameContainer">
        <div className="frame">
          <div className="reviewerImage">
            <img src={image} alt="user" />
          </div>
          <div className="userName">
            <div>
              <a href="#" className="name d-block">
                {name}
              </a>
            </div>

            <h6>{role}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewerDetails;
