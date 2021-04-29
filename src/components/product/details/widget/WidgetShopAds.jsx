import React from 'react';
import { Link } from 'react-router-dom';
import adds from '../../../../assets/img/ads/product-ads.png'

const WidgetShopAds = () => {
    return (
        <aside className="widget widget_ads">
            <Link to="/shop">
                <a>
                    <img src={adds} alt="shukran" />
                </a>
            </Link>
        </aside>
    );
};

export default WidgetShopAds;
