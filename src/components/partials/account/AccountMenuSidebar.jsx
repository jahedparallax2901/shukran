import React from "react";
import { Link } from "react-router-dom";
import { GiAlarmClock } from "react-icons/gi";
import { AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import user from "../../../assets/img/users/3.jpg";
import { FiUser } from "react-icons/fi";
import { RiCouponLine, RiSignalWifiErrorLine } from "react-icons/ri";
import { FaRegAddressCard, FaRegMoneyBillAlt } from "react-icons/fa";
import {FiX, MdEdit} from "react-icons/all";

const AccountMenuSidebar = ({ selectedTab }) => {
  const accountLinks = [
    {
      text: "My Account",
      url: "/account/my-account",
      icon: <FiUser />,
    },
    {
      text: "My Orders",
      url: "/account/my-orders",
      icon: <GiAlarmClock />,
    },
    {
      text: "My Coupons",
      url: "/account/coupons",
      icon: <RiCouponLine />,
    },
    {
      text: "My Wishlist",
      url: "/account/wishlist",
      icon: <AiOutlineHeart />,
    },
    {
      text: "Disputes",
      url: "/account/disputes",
      icon: <RiSignalWifiErrorLine />,
    },
    {
      text: "Shipping Address",
      url: "/account/shipping-address",
      icon: <FaRegAddressCard />,
    },
    {
      text: "My Contacts",
      url: "/account/contacts",
      icon: <FaRegMoneyBillAlt />,
    },
  ];


  return (
    <aside className="ps-widget--account-dashboard">
      <div className="ps-widget__header">
        <img src={``} />
        <figure>
          <figcaption>Michel Schofiled</figcaption>
          <p>
            <a href="#">+8801688523240</a>
          </p>
          <p>
            <a href="#">username@gmail.com</a>
          </p>
          <a class="btn btn-secondary mr-2" href="">
            Edit
          </a>
          <a class="btn btn-secondary" href="">
            Change Password
          </a>
        </figure>
      </div>
      <div className="ps-widget__content">
        <ul className="nav nav-pills d-block mb-3">
          {accountLinks.map((link) => (
            <li
              key={link.text}
              className={
                link.text === selectedTab ? "nav-item active" : "nav-item"
              }
            >
              <Link to={link.url}>
                <i>{link.icon}</i>
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <Link href="/account/my-account">
              <i>
                <AiOutlineLogout />
              </i>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AccountMenuSidebar;
