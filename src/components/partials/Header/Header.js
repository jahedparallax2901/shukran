import React, { Component } from 'react';
import { menuContents, navigationList } from '../../../temp-data/homeData';
import shukranLogo from "../../../assets/img/shukran.png";
import clothing7 from "../../../assets/img/products/clothing/7.jpg";
import downloadBodyspray from "../../../assets/img/downloads/bodyspray.JPG";
import HeaderPromotion from './HeaderPromotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';
import HeaderMobile from './HeaderMobile';
import HeaderStandard from './HeaderStandard';

class Header extends Component {
    render() {
        return (
            <>
                {/* <div
          className="modal fade"
          id="login-modal-center"
          tabindex="-1"
          role="dialog"
          aria-labelledby="login-modal-centerTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered login-modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title h4">Login</div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body login-modal-body">
                <div className="login-form">
                  <div className="login-form-group">
                    <label for="userID" className="sr-only">
                      User ID
                    </label>
                    <div className="input-group">
                      <select
                        name="country_code"
                        className="form-control"
                        style={{
                          flex: "0 0 80px",
                          padding: "0px 10px 0px 5px",
                        }}
                      >
                        <option value="+880">+880</option>
                        <option value="+1">+1</option>
                        <option value="1234">1234</option>
                      </select>
                      <input
                        type="text"
                        name="phone_number"
                        placeholder="Enter your phone number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div>
                    <button type="button" className="btn btn-block btn-sign">
                      Sign In / SIgn Up
                    </button>
                    <button type="button" className="btn btn-block btn-sign">
                      Forgot Password
                    </button>
                  </div>
                  <span className="or-seperator">
                    <div className="separator-outer">
                      <span>or</span>
                    </div>
                  </span>
                  <div className="login-buttons">
                    <button className="btn-auth btn-google mb-3">
                      <span className="icon">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 488 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                      </span>
                      <span className="text">Sign in with Google</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <HeaderPromotion/>

        <HeaderStandard/>

        <HeaderMobile/>

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
                  <a className="ps-btn" href="checkout.html">
                    Checkout
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>

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
         {/* changed-end */}

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
                <a href="index.html">Home</a>
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
        
        
            </>
        );
    }
}

export default Header;