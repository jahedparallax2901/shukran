import React from "react";
import { BsChevronRight } from "react-icons/bs";

const NextArrow = (props) => {
  const { className, onClick, icon } = props;
  return (
    <a className={`slick-arrow slick-next ${className}`} onClick={onClick}>
      {icon ? (
        <i>
            {icon}
        </i>
      ) : (
        <i>
          <BsChevronRight />
        </i>
      )}
    </a>
  );
};

export default NextArrow;
