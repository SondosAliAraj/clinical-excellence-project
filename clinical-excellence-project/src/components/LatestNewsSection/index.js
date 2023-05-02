import React from "react";
import "./style.css";
import SimpleTabs from "./SimpleTabs";
import BlogCard from "./BlogCard";

const LatestNewsSection = () => {
  const tabs = [
    {
      id: 1,
      label: "Google",
      content: {
        title: "Loudest à la Madison #1 (L'integral)",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      },
    },
    {
      id: 2,
      label: "Trending",
      content: {
        title: "Loudest à la Madison #2 Trending!",
        description: "We focus on ergonomics and meeting you where you work.",
      },
    },
    {
      id: 3,
      label: "New",
      content: {
        title: "Loudest à la Madison #3 New!",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.It's only a keystroke away.",
      },
    },
  ];
  const blogCards = [
    {
      id: 1,
      image: "../../assets/blog1.png",
      date: "22 April ..",
      text: "10 com...",
    },
    {
      id: 1,
      image: "../../assets/blog2.png",
      date: "22 April ..",
      text: "10 com...",
    },
    {
      id: 1,
      image: "../../assets/blog3.png",
      date: "22 April ..",
      text: "10 com...",
    },
    {
      id: 1,
      image: "../../assets/blog4.png",
      date: "22 April ..",
      text: "10 com...",
    },
  ];
  return (
    <>
      <section id="blog">
        <div className="container centerContainer d-flex flex-column">
          <div className="latestNewsContainer  d-flex flex-column">
            <div className="row latestNewsHeaderRow">
              <h2 className="blogHeading">Our Latest News</h2>
              <p className="blogDescription">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            <div className="row latestNewsCardsRow">
              {blogCards.map((blog) => (
                <div className="col-md-3" key={blog.id}>
                  <BlogCard
                    image={blog.image}
                    date={blog.date}
                    text={blog.text}
                    tabs={tabs}
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

export default LatestNewsSection;
