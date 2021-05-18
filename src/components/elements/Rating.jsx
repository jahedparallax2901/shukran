import React from "react";
import { BsStar } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const Rating = ({ count }) => (
  <span className="ps-rating">
    {[1, 2, 3, 4, 5].map((item, index) => (
      <i>{index >= count ? <FiStar /> : <FaStar />}</i>
      // <i className={`fa fa-star-o ${index> count && "open"}`}></i>
    ))}
  </span>
);

export default Rating;
