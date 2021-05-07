import React, { Component } from "react";
import { menuContents, navigationList } from "../../../temp-data/homeData";
import shukranLogo from "../../../assets/img/shukran.png";
import clothing7 from "../../../assets/img/products/clothing/7.jpg";
import downloadBodyspray from "../../../assets/img/downloads/bodyspray.JPG";
import HeaderPromotion from "./HeaderPromotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import HeaderMobile from "./HeaderMobile";
import HeaderStandard from "./HeaderStandard";
import { Link } from "react-router-dom";
import HeaderStandardProduct from "./HeaderStandardProduct";

class Header extends Component {
  render() {
    const { categories, all_category, isProduct, product } = this.props;

    return (
      <>
        <HeaderPromotion />
        {isProduct ? (
          <HeaderStandardProduct product={product} />
        ) : (
          <HeaderStandard />
        )}

        <HeaderMobile />

        <div className="ps-panel--sidebar" id="cart-mobile">
          <div className="ps-panel__header">
            <h3>Shopping Cart</h3>
          </div>
          <div className="navigation__content">
            <div className="ps-cart--mobile">
              <div className="ps-cart__content">
                <div className="ps-product--cart-mobile">
                  <div className="ps-product__thumbnail">
                    <a href="#">
                      <img src={clothing7} alt="" />
                    </a>
                  </div>
                  <div className="ps-product__content">
                    <a className="ps-product__remove" href="#">
                      <i className="icon-cross"></i>
                    </a>
                    <a href="product-default.html">
                      MVMTH classNameical Leather Watch In Black
                    </a>
                    <p>
                      <strong>Sold by:</strong> YOUNG SHOP
                    </p>
                    <small>1 x ৳59.99</small>
                  </div>
                </div>
              </div>
              <div className="ps-cart__footer">
                <h3>
                  Sub Total:<strong>৳59.99</strong>
                </h3>
                <figure>
                  <a className="ps-btn" href="#">
                    View Cart
                  </a>
                  <Link className={`ps-btn`} to={`/checkout`} >
                    Checkout
                  </Link>
                </figure>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className="ps-panel--sidebar" id="navigation-mobile">
          <div className="ps-panel__header">
            <h3>Categories</h3>
          </div>
          <div className="ps-panel__content">
            <ul className="menu--mobile">
              <li>
                <a href="#">
                  <i className="las la-laptop"></i> Computer and accessories
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="las la-camera"></i> Cameras
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="las la-medkit"></i> Health & Beauty
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="las la-baby"></i> Mother & Baby
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="las la-mobile"></i> Mobile & Accessories
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="las la-universal-access"></i> Men’s Fashion
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="las la-female"></i> Women’s Fashion
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="las la-motorcycle"></i>
                  Automotive and Motorbike
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* changed */}
{/* 
        <div className="navigation--list">
          <div className="navigation__content">
            {navigationList.map((item) => (
              <a
                key={item.id}
                className="navigation__item ps-toggle--sidebar"
                href={item.link}
              >
                {item.icon}
                <span> {item.title}</span>
              </a>
            ))}
          </div>
        </div>
         */}
        {/* changed-end */}
{/* 
        <div className="ps-panel--sidebar" id="search-sidebar">
          <div className="ps-panel__header">
            <form
              className="ps-form--search-mobile"
              action="index.html"
              method="get"
            >
              <div className="form-group--nest">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search something..."
                />
                <button>
                  <i className="icon-magnifier"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="navigation__content"></div>
        </div>
        <div className="ps-panel--sidebar" id="menu-mobile">
          <div className="ps-panel__header">
            <h3>Menu</h3>
          </div>
          <div className="ps-panel__content">
            <ul className="menu--mobile">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="campaign.html">Campaign</a>
              </li>
              <li>
                <a href="vendor-store.html">Vendor Stores</a>
              </li>
              <li>
                <a href="become-a-vendor.html">Become a Vendor</a>
              </li>
              <li>
                <a href="invoices.html">Order Tracking</a>
              </li>
            </ul>
          </div>
        </div>
        */}
      </>
    );
  }
}

export default Header;
