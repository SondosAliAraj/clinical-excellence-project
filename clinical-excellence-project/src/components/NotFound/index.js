import React from "react";
import "./style.css";

const PageNotFound = () => {
  return (
    <>
      <div className="container d-flex flex-column ">
        <section class="error-container">
          <span>
            <span>4</span>
          </span>
          <span>0</span>
          <span>
            <span>4</span>
          </span>
        </section>
        <div class="link-container">
          <a target="_blank" href="/" class="more-link">
            Go Home
          </a>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
