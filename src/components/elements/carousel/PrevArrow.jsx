import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';

const PrevArrow = (props) => {
    const { className, onClick, icon } = props;
    return (
        <a className={`slick-arrow slick-prev ${className}`} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <BsChevronLeft/>
            )}
        </a>
    );
};

export default PrevArrow;
