import React from "react";
import "./style.css";

const PostCard = ({ title, subtitle, btnText }) => {
  return (
    <>
      <div class="card border-0 postCard">
        <div class="card-body">
          <div className="postCardIcon">
            <img src="../../assets/fixed-width.png" alt="post card icon" />
          </div>
          <h5 class="card-title postCardHeader">{title}</h5>
          <img
            src="../../assets/fixed-width fixed-height (1).png"
            className="postlineStyle"
            alt="line"
          />
          <p class="card-subtitle mb-2  postCardSubtitle">{subtitle}</p>
          {btnText && (
            <button className="btn-sm learnMoreBtn">
              {btnText}
              <i className="bi bi-chevron-compact-right rightArrow"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PostCard;
