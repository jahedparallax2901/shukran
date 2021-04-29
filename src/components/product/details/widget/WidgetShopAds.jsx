import React from 'react';
import { Link } from 'react-router-dom';

const WidgetShopAds = () => {
    return (
        <aside className="widget widget_ads">
            <Link to="/shop">
                <a>
                    <img src="/static/img/ads/product-ads.png" alt="shukran" />
                </a>
            </Link>
        </aside>
    );
};

export default WidgetShopAds;
