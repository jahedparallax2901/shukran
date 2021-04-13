import React from 'react';
import { product_categories } from '../../../../../temp-data/menuData';

import Menu from '../../../../elements/menu/Menu';

const MenuCategories = () => (
    <Menu source={product_categories.product_categories} className="menu--dropdown" />
);

export default MenuCategories;
