import React, { useState, useEffect } from "react";
import "./style.css";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch("https://64494fb9e7eb3378ca45df68.mockapi.io/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  console.log({ data });
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="d-flex align-items-center featureCardsContainer">
            <div className="row">
              {data.map(({ id, title, description }) => (
                <div className="col-md-3 g-6" key={id}>
                  <FeatureCard
                    id={id}
                    title={title}
                    subtitle={description}
                    isSelected={id === selectedCard}
                    onClick={() => handleCardClick(id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
