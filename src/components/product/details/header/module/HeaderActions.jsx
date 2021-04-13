import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AccountQuickLinks from './AccountQuickLinks';
// import { connect } from 'react-redux';
// import MiniCart from '~/components/shared/headers/modules/MiniCart';
// import AccountQuickLinks from '~/components/shared/headers/modules/AccountQuickLinks';

const HeaderActions = (props) => {
    const { compare, wishlist, auth } = props;
    // views
    let headerAuthView;
    if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
        headerAuthView = <AccountQuickLinks isLoggedIn={true} />;
    } else {
        headerAuthView = <AccountQuickLinks isLoggedIn={false} />;
    }
    return (
        <div className="header__actions">
            <Link to="/account/compare">
                <a className="header__extra">
                    <i className="icon-chart-bars"></i>
                    <span>
                        <i>{compare ? compare.compareTotal : 0}</i>
                    </span>
                </a>
            </Link>
            <Link to="/account/wishlist">
                <a className="header__extra">
                    <i>
                        <FaHeart/>
                    </i>
                    <span>
                        <i>{wishlist ? wishlist.wishlistTotal : 0}</i>
                    </span>
                </a>
            </Link>
            {/* <MiniCart /> */}
            {headerAuthView}
        </div>
    );
};

// export default connect((state) => state)(HeaderActions);
export default HeaderActions;
