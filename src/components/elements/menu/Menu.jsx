import React from 'react';
import MenuDropdown from './MenuDropdown';
import MegaMenu from './MegaMenu';
import {Link} from 'react-router-dom';

const Menu = ({ source, className }) => {
    // Views
    let menuView;
    if (source) {
        menuView = source.map((item) => {
            if (item.subMenu) {
                return <MenuDropdown source={item} key={item.text} />;
            } else if (item.megaContent) {
                return <MegaMenu source={item} key={item.text} />;
            } else {
                return (
                    <li key={item?.id}>
                            <Link to={`/search?category_id=${item.id}`}>
                                {item?.icon && <i className={item.icon}></i>}
                                {item.name}
                            </Link>
                    </li>
                );
            }
        });
    } else {
        menuView = (
            <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    No menu item.
                </a>
            </li>
        );
    }
    return <ul className={className}>{menuView}</ul>;
};

export default Menu;
