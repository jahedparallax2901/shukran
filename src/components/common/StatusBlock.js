import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/status-block.scss'

const StatusBlock = ({icon, title, redirectUrl, content, urlText, isColored = true}) => {
    return (
        <div className="main-content status-block">
          <div className={isColored ? "status-block--container colored" : "status-block--container"}>
            <span className="icon">{icon}</span>
            <h3 className="title">{title}</h3>
            <p>{content}</p>
            <Link to={redirectUrl} className="btn btn-status-block">{urlText}</Link>
          </div>
        </div>
    )
}

export default StatusBlock
