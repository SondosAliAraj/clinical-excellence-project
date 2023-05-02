import React from "react";
import "./style.css";
import SimpleTabs from "../SimpleTabs";

const BlogCard = ({ image, date, text, tabs }) => {
  return (
    <>
      <div className="blogCard">
        <div class="card border-0 blogCard" style={{ width: "100%" }}>
          <div className="cardImageContainer">
            <img src={image} class="card-img-top cardImage" alt="..." />
            <div className="tag">
              <img src="../../assets/tag.png" alt="new tag" />
            </div>
          </div>
          <div class="card-body">
            <SimpleTabs tabs={tabs} />

            <div className="detailsContainer">
              <div className="dateFrame">
                <img src="../../clock icon.png" alt="clock icon" />
                <small>{date}</small>
              </div>
              <div className="dateFrame">
                <img src="../../image icon.png" alt="image icon" />
                <small>{text}</small>
              </div>
            </div>

            <a href="#" class="learnMoreBlogBtn">
              Learn More{" "}
              <i class="customArrowRight bi bi-chevron-compact-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
