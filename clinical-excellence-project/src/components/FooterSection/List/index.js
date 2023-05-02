import React from "react";
import "./style.css";

const List = ({ title, arrayList }) => {
  return (
    <>
      <div class="ListContainer">
        <h5>{title}</h5>
        {arrayList.map((item, index) => {
          console.log("itemmmmmm", item);
          return <p key={index}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default List;
