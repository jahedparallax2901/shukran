import React from 'react';
import Menu from './Menu';
import menuData from '../../../temp-data/menuData';

const MenuCategoriesDropdown = () => {
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span>Shop by Department</span>
            </div>
            <div className="menu__content">
                <Menu
                    source={menuData.product_categories}
                    className="menu--dropdown"
                />
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
