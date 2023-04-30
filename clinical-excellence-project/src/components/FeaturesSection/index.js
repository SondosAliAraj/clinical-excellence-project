import React, { useState, useEffect } from "react";
import "./style.css";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://64494fb9e7eb3378ca45df68.mockapi.io/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  console.log({ data });
  return (
    <>
      <section id="about">
        <div className="container d-flex align-items-center featureCardsContainer">
          <div className="row">
            {data.map(({ id, title, description }) => (
              <div className="col-md-3" key={id}>
                <FeatureCard id={id} title={title} subtitle={description} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
