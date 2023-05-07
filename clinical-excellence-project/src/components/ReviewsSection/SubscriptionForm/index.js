import React from "react";
import "./style.css";

const SubscriptionForm = () => {
  return (
    <>
      <div className="subscriptionContainer">
        <p className="blueText">Problems trying to resolve the conflict </p>
        <h3>Join Us And Get 20% OFF</h3>
        <div className="emailInputContainer">
          <input type="email" placeholder="Your Email" />
          <button className="btn btn-primary rounded-0 rounded-end">Subscribe</button>
        </div>
        <p className="greyText">Problems trying to resolve the conflict </p>
      </div>
    </>
  );
};

export default SubscriptionForm;
