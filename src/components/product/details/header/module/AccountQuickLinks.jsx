import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { connect, useDispatch } from 'react-redux';
// import { logOut } from '~/store/auth/action';

const AccountQuickLinks = (props) => {
    // const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        // dispatch(logOut());
    };
    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
        },
        {
            text: 'Notifications',
            url: '/account/notifications',
        },
        {
            text: 'Invoices',
            url: '/account/invoices',
        },
        {
            text: 'Address',
            url: '/account/addresses',
        },
        {
            text: 'Recent Viewed Product',
            url: '/account/recent-viewed-product',
        },
        {
            text: 'Wishlist',
            url: '/account/wishlist',
        },
    ];
    const { isLoggedIn } = props;

    // View
    const linksView = accountLinks.map((item) => (
        <li key={item.text}>
            <Link to={item.url}>
                <a>{item.text}</a>
            </Link>
        </li>
    ));

    if (isLoggedIn === true) {
        return (
            <div className="ps-block--user-account">
                <i className="icon-user"></i>
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {linksView}
                        <li className="ps-block__footer">
                            <a href="#" onClick={(e) => handleLogout(e)}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <i>
                        <FaUser/>
                    </i>
                </div>
                <div className="ps-block__right">
                    <Link to="/account/login">
                        <a>Login</a>
                    </Link>
                    <Link to="/account/register">
                        <a>Register</a>
                    </Link>
                </div>
            </div>
        );
    }
};

// export default connect((state) => state)(AccountQuickLinks);
export default AccountQuickLinks;