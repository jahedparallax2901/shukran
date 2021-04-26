import React from 'react';
import { Link } from 'react-router-dom';
import vendor from '../../../assets/img/bg/vendor.jpg';

const VendorBanner = () => (
    <div
        className="ps-vendor-banner bg--cover"
        style={{ backgroundImage: `url('${vendor}')` }}
    >
        <div className="ps-vendor-banner">
            <div className="container">
                <h2>
                    Millions Of Shoppers Can’t Wait To See What You Have In
                    Store
                </h2>
                <Link to="/vendor/store-list">
                    <a className="ps-btn ps-btn--lg" href="#">
                        Start Selling
                    </a>
                </Link>
            </div>
        </div>
    </div>
);

export default VendorBanner;
