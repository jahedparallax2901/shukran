import React from 'react';
import {Link} from 'react-router-dom';

const MenuDropdown = ({ source }) => {
    return (
        <li className="menu-item-has-children dropdown">
            {
                <Link to={source.url}>
                    {source.text}
                </Link>
            }
            {source.subMenu && (
                <ul className={source.subClass}>
                    {source.subMenu.map((subMenuItem, index) => (
                        <MenuDropdown source={subMenuItem} key={index} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuDropdown;