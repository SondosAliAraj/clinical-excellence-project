import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewStars = ({ rating }) => {
  const stars = [];

  const fullStars = Math.floor(rating);
  for (let i = 0; i < fullStars; i++) {
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
  }
  const hasHalfStar = rating - fullStars >= 0.5;
  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt
        className="star"
        style={{
          color: "#ffc107",
          fontSize: "1.5rem",
          marginRight: "1rem",
        }}
      />
    );
  }
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
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

  // for (let i = 0; i < 5; i++) {
  //   if (i < rating) {
  //     stars.push(
  //       <FaStar
  //         key={i}
  //         className="star"
  //         style={{
  //           color: "#ffc107",
  //           fontSize: "1.5rem",
  //           marginRight: "1rem",
  //         }}
  //       />
  //     );
  //   } else {
  //     stars.push(
  //       <FaRegStar
  //         key={i}
  //         className="star"
  //         style={{
  //           color: "#ffc107",
  //           fontSize: "1.5rem",
  //           marginRight: "1rem",
  //         }}
  //       />
  //     );
  //   }
  // }

  return <div className="starsContainer d-flex flex-row">{stars}</div>;
};

export default ReviewStars;
