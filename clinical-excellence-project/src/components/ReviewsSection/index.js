import React from "react";
import "./style.css";
import Reviews from "./Reviews";
import { Carousel } from "react-bootstrap";
import SubscriptionForm from "./SubscriptionForm";

const ReviewsInfo = [
  {
    id: 1,
    rating: 4,
    review:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
    image: "./assets/user1.jpg",
    name: "Regina Miles",
    role: "Designer",
  },
  {
    id: 2,
    rating: 3,
    review: "I don't know how I lived without this product!",
    image: "./assets/user1.jpg",
    name: "Mike Robinson",
    role: "UI/UX",
  },
  {
    id: 3,
    rating: 4.5,
    review: " This is the best product I've ever used!",
    image: "./assets/user1.jpg",
    name: "Sondos Araj",
    role: "Front-End Developer",
  },
];

const ReviewsSection = () => {
  return (
    <>
      <div className="container-fluid backgroundStyle">
        <div className="container">
          <div className="reviewsContainer">
            <div className="row">
              <div className="col-md-5">
                <Carousel>
                  {ReviewsInfo.map(
                    ({ id, rating, review, image, name, role }) => (
                      <Carousel.Item key={id}>
                        <Reviews
                          id={id}
                          rating={rating}
                          review={review}
                          image={image}
                          name={name}
                          role={role}
                        />
                      </Carousel.Item>
                    )
                  )}
                </Carousel>
              </div>
              <div className="col-md-1">
                <img
                  src="./assets/Line 1.png"
                  className="reviewLine d-md-block d-none"
                  alt="line"
                />
                <img
                  src="./assets/Line 2.png"
                  className="mobileLine d-block d-md-none"
                  alt="line"
                />
              </div>

              <div className="col-md-6">
                <SubscriptionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
