import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";
import "../../assets/css/success.css"

const Success = ({title, message, link, button_text ,link2 , button_text_2}) => {


    return(
        <div className="main-content order-placed">
            <div className="order-placed-container">
                <span className="icon"><svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <h3 className="success-title">{title}</h3>
                <p>{message}</p>
                <a className="btn btn-primary" href={link}>{button_text}</a>
                <a style={{marginLeft: '5px'}} className="btn btn-primary" href={link2}>{button_text_2}</a>
            </div>
        </div>

    )
}

export default Success;