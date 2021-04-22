import React from 'react';
import { Link } from 'react-router-dom';

const WidgetSaleOnSite = () => {
    return (
        <aside className="widget widget_sell-on-site">
            <p>
                <i className="icon-store"></i> Sell on Martfury?
                <Link to="/account/register">
                    <a> Register Now !</a>
                </Link>
            </p>
        </aside>
    );
};

export default WidgetSaleOnSite;