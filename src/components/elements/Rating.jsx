import React from "react";

const Rating = ({ count }) => (
  <span className="ps-rating">
    {[1, 2, 3, 4, 5].map((item, index) => (
      <i className={`fa fa-star-o ${index> count && "open"}`}></i>
    ))}
  </span>
);

export default Rating;
