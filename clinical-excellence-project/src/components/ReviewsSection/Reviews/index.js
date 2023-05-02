import React from "react";
import "./style.css";
import ReviewStars from "./ReviewStars";
import ReviewerDetails from "./ReviewerDetails";

const Reviews = ({ id, rating, review, image, name, role }) => {
  console.log({ id, rating, review, image, name, role });

  return (
    <>
      <div className="reviewContainer">
        <div className="cardItem">
          <div className="cardContent">
            <ReviewStars rating={rating} />
            <div className="reviewDescription">
              <h6>{review}</h6>
              <ReviewerDetails image={image} name={name} role={role} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
