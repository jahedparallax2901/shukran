import { faSearch, faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clothing7 from "../../../assets/img/products/clothing/7.jpg";
import downloadBodyspray from "../../../assets/img/downloads/bodyspray.JPG";
import shukranLogo from "../../../assets/img/shukran.png";
import React, { Component } from 'react';

class HeaderMobile extends Component {
    render() {
        return (
            <header className="header header--mobile" data-sticky="true">
          <div className="navigation--mobile">
            <div className="navigation__left">
              <a className="ps-logo" href="index.html">
                <img src={shukranLogo} alt="" />
              </a>
            </div>
            <div className="navigation__right">
              <div className="header__actions">
                <div className="ps-cart--mini">
                  <a className="header__extra" href="#">
                    <FontAwesomeIcon icon={faShoppingBag}/>
                    <span>
                      <i>5</i>
                    </span>
                  </a>
                  <div className="ps-cart__content">
                    <div className="ps-cart__items">
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail">
                          <a href="#">
                            <img src={clothing7} alt="" />
                          </a>
                        </div>
                        <div className="ps-product__content">
                          <a className="ps-product__remove" href="#">
                            <FontAwesomeIcon icon={faTimes}/>
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
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail">
                          <a href="#">
                            <img src={downloadBodyspray} alt="" />
                          </a>
                        </div>
                        <div className="ps-product__content">
                          <a className="ps-product__remove" href="#">
                            <FontAwesomeIcon icon={faTimes}/>
                          </a>
                          <a href="product-default.html">
                            Sleeve Linen Blend Caro Pane Shirt
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
                <div className="ps-block--user-header">
                  <div className="ps-block__left">
                    <i className="icon-user"></i>
                  </div>
                  <div className="ps-block__right">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#login-modal-center"
                    >
                      Login
                    </a>
                    <a href="my-account.html">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-search--mobile">
            <h1>I am here</h1>
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
                  <FontAwesomeIcon icon={faSearch}/>
                </button>
              </div>
            </form>
          </div>
        </header>
        );
    }
}

export default HeaderMobile;