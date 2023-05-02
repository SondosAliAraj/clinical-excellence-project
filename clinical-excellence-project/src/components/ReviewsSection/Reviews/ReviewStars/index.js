import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewStars = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <FaStar
          key={i}
          className="star"
          style={{
            color: "#ffc107",
            fontSize: "1.5rem",
            marginRight: "1rem",
          }}
        />
      );
    } else {
      stars.push(
        <FaRegStar
          key={i}
          className="star"
          style={{
            color: "#ffc107",
            fontSize: "1.5rem",
            marginRight: "1rem",
          }}
        />
      );
    }
  }

  return <div className="starsContainer d-flex flex-row">{stars}</div>;
};

export default ReviewStars;
