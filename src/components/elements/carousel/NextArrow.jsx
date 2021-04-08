import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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
          <FontAwesomeIcon icon={faChevronRight} />
        </i>
      )}
    </a>
  );
};

export default NextArrow;
