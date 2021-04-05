import React, { Component } from 'react';
import '../assets/css/style.css';
import '../assets/css/change.css';
import '../assets/css/market-place-1.css';
import '../assets/css/market-place-3.css';
// import '../assets/css/select2.min.css';
import shukranLogo from '../assets/img/shukran.png';
import clothing7 from '../assets/img/products/clothing/7.jpg';
import banner1 from '../assets/img/downloads/banner-1.jpg';
import home52 from '../assets/img/slider/home-5/2.jpg';
import home53 from '../assets/img/slider/home-5/3.jpg';
import promotion7 from '../assets/img/downloads/promotion7.jpg';
import promotion1 from '../assets/img/slider/home-5/promotion-1.jpg';
import promotion2 from '../assets/img/downloads/promotion-2.webp';
import promotion3 from '../assets/img/slider/home-5/promotion-3.jpg';
import beauty1 from '../assets/img/downloads/beauty-1.jpg';
import technology2 from '../assets/img/downloads/technology-2.jpg';
import categoriesHome51 from '../assets/img/categories/home-5/1.jpg';
import clothing5 from '../assets/img/products/clothing/5.jpg';
import endFlag from '../assets/img/flag/en.png';
import germanyFlag from '../assets/img/flag/germany.png';
import franceFlag from '../assets/img/flag/fr.png';
import categoriesHome52 from '../assets/img/categories/home-5/2.jpg';
import categoriesHome53 from '../assets/img/categories/home-5/3.jpg';
import categoriesHome54 from '../assets/img/categories/home-5/4.jpg';
import categoriesHome55 from '../assets/img/categories/home-5/5.jpg';
import categoriesHome56 from '../assets/img/categories/home-5/6.jpg';
import categoriesHome57 from '../assets/img/categories/home-5/7.jpg';
import categoriesHome58 from '../assets/img/categories/home-5/8.jpg';
import categoriesHome59 from '../assets/img/categories/home-5/9.jpg';
import categoriesHome510 from '../assets/img/categories/home-5/10.jpg';
import categoriesHome511 from '../assets/img/categories/home-5/11.jpg';
import categoriesHome512 from '../assets/img/categories/home-5/12.jpg';
import categoriesHome513 from '../assets/img/categories/home-5/13.jpg';
import categoriesHome514 from '../assets/img/categories/home-5/14.jpg';
import categoriesHome515 from '../assets/img/categories/home-5/15.jpg';
import categoriesHome516 from '../assets/img/categories/home-5/16.jpg';
import productHome1 from '../assets/img/products/home/1.jpg';
import productHome2 from '../assets/img/products/home/2.jpg';
import productsClothing6 from '../assets/img/products/clothing/6.jpg';
import homeTechnology1 from '../assets/img/slider/home-3/technology-1.jpg';
import homeTechnology2 from '../assets/img/slider/home-3/technology-2.jpg';
import downloadsTechnology1 from '../assets/img/downloads/technology-1.jpg';
import productsHomeTechnology1 from '../assets/img/products/home-3/technology/1.jpg';
import productsHomeTechnology2 from '../assets/img/products/home-3/technology/2.jpg';
import productsHomeTechnology3 from '../assets/img/products/home-3/technology/3.jpg';
import productsHomeTechnology4 from '../assets/img/products/home-3/technology/4.jpg';
import productsHomeTechnology5 from '../assets/img/products/home-3/technology/5.jpg';
import productsHomeTechnology6 from '../assets/img/products/home-3/technology/6.jpg';
import downloadsElectronics1 from '../assets/img/downloads/electronics-1.jpg';
import sliderHomeElectronics2 from '../assets/img/slider/home-3/electronic-2.jpg';
import sliderHomeElectronics3 from '../assets/img/slider/home-3/electronic-3.jpg';
import productsElectronics1 from '../assets/img/products/electronic/1.jpg';
import productsElectronics2 from '../assets/img/products/electronic/2.jpg';
import productsElectronics3 from '../assets/img/products/electronic/3.jpg';
import productsElectronics4 from '../assets/img/products/electronic/4.jpg';
import productsElectronics5 from '../assets/img/products/electronic/5.jpg';
import productsElectronics6 from '../assets/img/products/electronic/6.jpg';
import sliderHomeKitchen1 from '../assets/img/slider/home-3/kitchen-1.jpg';
import sliderHomeKitchen2 from '../assets/img/slider/home-3/kitchen-2.jpg';
import downloadsKitchen1 from '../assets/img/downloads/kitchen-1.jpg';
import productsHome3 from '../assets/img/products/home/3.jpg';
import productsHome4 from '../assets/img/products/home/4.jpg';
import productsHome5 from '../assets/img/products/home/5.jpg';
import productsHome6 from '../assets/img/products/home/6.jpg';
import productsHome7 from '../assets/img/products/home/7.jpg';
import brand1 from '../assets/img/brand/1.jpg';
import brand2 from '../assets/img/brand/2.jpg';
import brand3 from '../assets/img/brand/3.jpg';
import brand4 from '../assets/img/brand/4.jpg';
import brand5 from '../assets/img/brand/5.jpg';
import brand6 from '../assets/img/brand/6.jpg';
import brand7 from '../assets/img/brand/7.jpg';
import brand8 from '../assets/img/brand/8.jpg';
import categoriesShop1 from '../assets/img/categories/shop/1.jpg';
import categoriesShop2 from '../assets/img/categories/shop/2.jpg';
import categoriesShop3 from '../assets/img/categories/shop/3.jpg';
import categoriesShop4 from '../assets/img/categories/shop/4.jpg';
import categoriesShop5 from '../assets/img/categories/shop/5.jpg';
import categoriesShop6 from '../assets/img/categories/shop/6.jpg';
import categoriesShop7 from '../assets/img/categories/shop/7.jpg';
import categoriesShop8 from '../assets/img/categories/shop/8.jpg';
import downloadsClothing1 from '../assets/img/downloads/clothing-1.jpg';
import sliderHomeClothing2 from '../assets/img/slider/home-3/clothing-2.jpg';
import sliderHomeClothing3 from '../assets/img/slider/home-3/clothing-3.jpg';
import productsClothing1 from '../assets/img/products/clothing/1.jpg';
import productsClothing2 from '../assets/img/products/clothing/2.jpg';
import productsClothing3 from '../assets/img/products/clothing/3.jpg';
import productsClothing4 from '../assets/img/products/clothing/4.jpg';
import sliderHomeHealthy1 from '../assets/img/slider/home-3/healthy-1.jpg';
import sliderHomeHealthy2 from '../assets/img/slider/home-3/healthy-2.jpg';
import sliderHomeHealthy3 from '../assets/img/slider/home-3/healthy-3.jpg';
import productsHomeHealthy1 from '../assets/img/products/home-3/healthy/1.jpg';
import productsHomeHealthy2 from '../assets/img/products/home-3/healthy/2.jpg';
import productsHomeHealthy3 from '../assets/img/products/home-3/healthy/3.jpg';
import productsHomeHealthy4 from '../assets/img/products/home-3/healthy/4.jpg';
import productsHomeHealthy5 from '../assets/img/products/home-3/healthy/5.jpg';
import productsHomeHealthy6 from '../assets/img/products/home-3/healthy/6.jpg';
import paymentMethod1 from '../assets/img/payment-method/1.jpg';
import paymentMethod2 from '../assets/img/payment-method/2.jpg';
import paymentMethod3 from '../assets/img/payment-method/3.jpg';
import paymentMethod4 from '../assets/img/payment-method/4.jpg';
import paymentMethod5 from '../assets/img/payment-method/5.jpg';
import detailFullWidth1 from '../assets/img/products/detail/fullwidth/1.jpg';
import detailFullWidth2 from '../assets/img/products/detail/fullwidth/2.jpg';
import detailFullWidth3 from '../assets/img/products/detail/fullwidth/3.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
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
                <label htmlFor="userID" className="sr-only">User ID</label>
                <div className="input-group">
                  <select
                    name="country_code"
                    className="form-control"
                    style={{flex: '0 0 80px', padding: '0px 10px 0px 5px'}}
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
                  <span className="icon"
                    ><svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 488 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path></svg></span
                  ><span className="text">Sign in with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="ps-block--promotion-header bg--cover"
      data-background="img/promotions/header-promotion.jpg"
    >
      <div className="container">
        <div className="ps-block__left">
          <h3>20%</h3>
          <figure>
            <p>Discount</p>
            <h4>For Books Of March</h4>
          </figure>
        </div>
        <a className="ps-btn ps-btn--sm mr-0" href="#">Shop now</a>
      </div>
    </div>

    <header
      className="header header--standard header--market-place-1"
      data-sticky="true"
    >
      <div className="header__content">
        <div className="container">
          <div className="header__content-left">
            <div className="menu--product-categories">
              <div className="menu__toggle">
                <i className="icon-menu"></i><span> Shop by Department</span>
              </div>
              <div className="menu__content">
                <ul className="menu--dropdown">
                  <li>
                    <a href="#"
                      ><i className="las la-laptop"></i> Computer and accessories</a
                    >
                  </li>
                  {/* <li className="menu-item-has-children has-mega-menu">
                    <a href="#"><i className="icon-laundry"></i> Consumer Electronic</a>
                    <div className="mega-menu">
                      <div className="mega-menu__column">
                        <h4>Electronic<span className="sub-toggle"></span></h4>
                        <ul className="mega-menu__list">
                          <li><a href="#">Home Audio &amp; Theathers</a></li>
                          <li><a href="#">TV &amp; Videos</a></li>
                          <li><a href="#">Camera, Photos &amp; Videos</a></li>
                          <li><a href="#">Cellphones &amp; Accessories</a></li>
                          <li><a href="#">Headphones</a></li>
                          <li><a href="#">Videosgames</a></li>
                          <li><a href="#">Wireless Speakers</a></li>
                          <li><a href="#">Office Electronic</a></li>
                        </ul>
                      </div>
                      <div className="mega-menu__column">
                        <h4>
                          Accessories &amp; Parts<span className="sub-toggle"></span>
                        </h4>
                        <ul className="mega-menu__list">
                          <li><a href="#">Digital Cables</a></li>
                          <li><a href="#">Audio &amp; Video Cables</a></li>
                          <li><a href="#">Batteries</a></li>
                        </ul>
                      </div>
                    </div>
                  </li> */}
                  <li>
                    <a href="#"><i className="las la-camera"></i> Cameras</a>
                  </li>
                  <li>
                    <a href="#"
                      ><i className="las la-medkit"></i> Health & Beauty</a
                    >
                  </li>
                  <li>
                    <a href="#"><i className="las la-baby"></i> Mother & Baby</a>
                  </li>
                  <li>
                    <a href="#"
                      ><i className="las la-mobile"></i> Mobile & Accessories</a
                    >
                  </li>

                  {/*  <li className="menu-item-has-children has-mega-menu">
                    <a href="#"
                      ><i className="icon-desktop"></i> Computer &amp; Technology</a
                    >
                    <div className="mega-menu">
                      <div className="mega-menu__column">
                        <h4>
                          Computer &amp; Technologies<span
                            className="sub-toggle"
                          ></span>
                        </h4>
                        <ul className="mega-menu__list">
                          <li><a href="#">Computer &amp; Tablets</a></li>
                          <li><a href="#">Laptop</a></li>
                          <li><a href="#">Monitors</a></li>
                          <li><a href="#">Networking</a></li>
                          <li><a href="#">Drive &amp; Storages</a></li>
                          <li><a href="#">Computer Components</a></li>
                          <li><a href="#">Security &amp; Protection</a></li>
                          <li><a href="#">Gaming Laptop</a></li>
                          <li><a href="#">Accessories</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>*/}
                  <li>
                    <a href="#"
                      ><i className="las la-universal-access"></i> Men’s Fashion</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i className="las la-female"></i> Women’s Fashion</a
                    >
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
            <a className="ps-logo" href="homepage-3.html"
              ><img src={shukranLogo} alt=""
            /></a>
          </div>

          <div className="header__content-center">
            <form
              className="ps-form--quick-search"
              action="index.html"
              method="get"
            >
              <div className="form-group--icon">
                <i className="icon-chevron-down"></i>
                <select className="form-control">
                  <option value="1">All</option>
                  <option value="1">Smartphone</option>
                  <option value="1">Sounds</option>
                  <option value="1">Technology</option>
                </select>
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="I'm shopping for..."
              />
              <button>Search</button>
            </form>
          </div>
          <div className="header__content-right">
            <div className="header__actions">
              <a className="header__extra" href="#"
                ><i className="icon-heart"></i><span><i>0</i></span></a
              >
              <div className="ps-cart--mini">
                <a className="header__extra" href="#"
                  ><i className="icon-bag2"></i><span><i>0</i></span></a
                >
                <div className="ps-cart__content">
                  <div className="ps-cart__items">
                    <div className="ps-product--cart-mobile">
                      <div className="ps-product__thumbnail">
                        <a href="#"
                          ><img src={clothing7} alt=""
                        /></a>
                      </div>
                      <div className="ps-product__content">
                        <a className="ps-product__remove" href="#"
                          ><i className="icon-cross"></i></a
                        ><a href="product-default.html"
                          >MVMTH classical Leather Watch In Black</a
                        >
                        <p><strong>Sold by:</strong> YOUNG SHOP</p>
                        <small>1 x ৳59.99</small>
                      </div>
                    </div>
                    <div className="ps-product--cart-mobile">
                      <div className="ps-product__thumbnail">
                        <a href="#"
                          ><img src={clothing5} alt=""
                        /></a>
                      </div>
                      <div className="ps-product__content">
                        <a className="ps-product__remove" href="#"
                          ><i className="icon-cross"></i></a
                        ><a href="product-default.html"
                          >Sleeve Linen Blend Caro Pane Shirt</a
                        >
                        <p><strong>Sold by:</strong> YOUNG SHOP</p>
                        <small>1 x ৳59.99</small>
                      </div>
                    </div>
                  </div>

                  <div className="ps-cart__footer">
                    <h3>Sub Total:<strong>৳59.99</strong></h3>
                    <figure>
                      <a className="ps-btn" href="shopping-cart.html">View Cart</a
                      ><a className="ps-btn" href="checkout.html">Checkout</a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="ps-block--user-header mr-0">
                <div className="ps-block__left"><i className="icon-user"></i></div>
                <div className="ps-block__right">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    >Login</a
                  >
                  <a href="my-account.html">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navigation">
        <div className="container">
          <div className="header-navigation">
            <div className="navigation__left">
              <div className="menu--product-categories">
                <div className="menu__toggle">
                  <i className="icon-menu"></i><span> Shop by Department</span>
                </div>
                <div className="menu__content">
                  <ul className="menu--dropdown">
                    <li>
                      <a href="#"
                        ><i className="las la-laptop"></i> Computer and
                        accessories</a
                      >
                    </li>
                    {/*  <li className="menu-item-has-children has-mega-menu">
                      <a href="#"><i className="icon-laundry"></i> Consumer Electronic</a>
                      <div className="mega-menu">
                        <div className="mega-menu__column">
                          <h4>Electronic<span className="sub-toggle"></span></h4>
                          <ul className="mega-menu__list">
                            <li><a href="#">Home Audio &amp; Theathers</a></li>
                            <li><a href="#">TV &amp; Videos</a></li>
                            <li><a href="#">Camera, Photos &amp; Videos</a></li>
                            <li><a href="#">Cellphones &amp; Accessories</a></li>
                            <li><a href="#">Headphones</a></li>
                            <li><a href="#">Videosgames</a></li>
                            <li><a href="#">Wireless Speakers</a></li>
                            <li><a href="#">Office Electronic</a></li>
                          </ul>
                        </div>
                        <div className="mega-menu__column">
                          <h4>
                            Accessories &amp; Parts<span className="sub-toggle"></span>
                          </h4>
                          <ul className="mega-menu__list">
                            <li><a href="#">Digital Cables</a></li>
                            <li><a href="#">Audio &amp; Video Cables</a></li>
                            <li><a href="#">Batteries</a></li>
                          </ul>
                        </div>
                      </div>
                    </li> */}
                    <li>
                      <a href="#"><i className="las la-camera"></i> Cameras</a>
                    </li>
                    <li>
                      <a href="#"
                        ><i className="las la-medkit"></i> Health & Beauty</a
                      >
                    </li>
                    <li>
                      <a href="#"><i className="las la-baby"></i> Mother & Baby</a>
                    </li>
                    <li>
                      <a href="#"
                        ><i className="las la-mobile"></i> Mobile & Accessories</a
                      >
                    </li>

                    {/*  <li className="menu-item-has-children has-mega-menu">
                      <a href="#"
                        ><i className="icon-desktop"></i> Computer &amp; Technology</a
                      >
                      <div className="mega-menu">
                        <div className="mega-menu__column">
                          <h4>
                            Computer &amp; Technologies<span
                              className="sub-toggle"
                            ></span>
                          </h4>
                          <ul className="mega-menu__list">
                            <li><a href="#">Computer &amp; Tablets</a></li>
                            <li><a href="#">Laptop</a></li>
                            <li><a href="#">Monitors</a></li>
                            <li><a href="#">Networking</a></li>
                            <li><a href="#">Drive &amp; Storages</a></li>
                            <li><a href="#">Computer Components</a></li>
                            <li><a href="#">Security &amp; Protection</a></li>
                            <li><a href="#">Gaming Laptop</a></li>
                            <li><a href="#">Accessories</a></li>
                          </ul>
                        </div>
                      </div>
                    </li> */}
                    <li>
                      <a href="#"
                        ><i className="las la-universal-access"></i> Men’s
                        Fashion</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i className="las la-female"></i> Women’s Fashion</a
                      >
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
            </div>
            <div className="navigation__center">
              <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Campaign</a></li>
                <li><a href="#">Vendor Stores</a></li>
                <li><a href="#">Become a Vendor</a></li>
                <li><a href="#">Order Tracking</a></li>
              </ul>
            </div>
            <div className="navigation__right">
              <div className="ps-block--header-hotline inline">
                <p>
                  <i className="icon-telephone"></i>Hotline:<strong>
                    +880-234-5678</strong
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <header className="header header--mobile" data-sticky="true">
      <div className="header__top">
        <div className="header__right">
          <ul className="navigation__extra">
            <li><a href="#">Sell on Martfury</a></li>
            <li><a href="#">Tract your order</a></li>
            <li>
              <div className="ps-dropdown">
                <a href="#">US Dollar</a>
                <ul className="ps-dropdown-menu">
                  <li><a href="#">Us Dollar</a></li>
                  <li><a href="#">Euro</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="ps-dropdown language">
                <a href="#"><img src={endFlag} alt="" />English</a>
                <ul className="ps-dropdown-menu">
                  <li>
                    <a href="#"
                      ><img src={germanyFlag} alt="" /> Germany</a
                    >
                  </li>
                  <li>
                    <a href="#"><img src={franceFlag} alt="" /> France</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigation--mobile">
        <div className="navigation__left">
          <a className="ps-logo" href="index.html"
            ><img src={shukranLogo} alt=""
          /></a>
        </div>
        <div className="navigation__right">
          <div className="header__actions">
            <div className="ps-cart--mini">
              <a className="header__extra" href="#"
                ><i className="icon-bag2"></i><span><i>0</i></span></a
              >
              <div className="ps-cart__content">
                <div className="ps-cart__items">
                  <div className="ps-product--cart-mobile">
                    <div className="ps-product__thumbnail">
                      <a href="#"
                        ><img src={clothing7} alt=""
                      /></a>
                    </div>
                    <div className="ps-product__content">
                      <a className="ps-product__remove" href="#"
                        ><i className="icon-cross"></i></a
                      ><a href="product-default.html"
                        >MVMTH Classical Leather Watch In Black</a
                      >
                      <p><strong>Sold by:</strong> YOUNG SHOP</p>
                      <small>1 x ৳59.99</small>
                    </div>
                  </div>
                  <div className="ps-product--cart-mobile">
                    <div className="ps-product__thumbnail">
                      <a href="#"
                        ><img src={clothing7} alt=""
                      /></a>
                    </div>
                    <div className="ps-product__content">
                      <a className="ps-product__remove" href="#"
                        ><i className="icon-cross"></i></a
                      ><a href="product-default.html"
                        >Sleeve Linen Blend Caro Pane Shirt</a
                      >
                      <p><strong>Sold by:</strong> YOUNG SHOP</p>
                      <small>1 x ৳59.99</small>
                    </div>
                  </div>
                </div>
                <div className="ps-cart__footer">
                  <h3>Sub Total:<strong>৳59.99</strong></h3>
                  <figure>
                    <a className="ps-btn" href="shopping-cart.html">View Cart</a
                    ><a className="ps-btn" href="checkout.html">Checkout</a>
                  </figure>
                </div>
              </div>
            </div>
            <div className="ps-block--user-header">
              <div className="ps-block__left"><i className="icon-user"></i></div>
              <div className="ps-block__right">
                <a href="my-account.html">Login</a
                ><a href="my-account.html">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-search--mobile">
        <form className="ps-form--search-mobile" action="index.html" method="get">
          <div className="form-group--nest">
            <input
              className="form-control"
              type="text"
              placeholder="Search something..."
            />
            <button><i className="icon-magnifier"></i></button>
          </div>
        </form>
      </div>
    </header>
    <div className="ps-panel--sidebar" id="cart-mobile">
      <div className="ps-panel__header">
        <h3>Shopping Cart</h3>
      </div>
      <div className="navigation__content">
        <div className="ps-cart--mobile">
          <div className="ps-cart__content">
            <div className="ps-product--cart-mobile">
              <div className="ps-product__thumbnail">
                <a href="#"><img src={clothing7} alt="" /></a>
              </div>
              <div className="ps-product__content">
                <a className="ps-product__remove" href="#"
                  ><i className="icon-cross"></i></a
                ><a href="product-default.html"
                  >MVMTH Classical Leather Watch In Black</a
                >
                <p><strong>Sold by:</strong> YOUNG SHOP</p>
                <small>1 x ৳59.99</small>
              </div>
            </div>
          </div>
          <div className="ps-cart__footer">
            <h3>Sub Total:<strong>৳59.99</strong></h3>
            <figure>
              <a className="ps-btn" href="shopping-cart.html">View Cart</a
              ><a className="ps-btn" href="checkout.html">Checkout</a>
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
          <li><a href="#">Hot Promotions</a></li>
          <li className="menu-item-has-children has-mega-menu">
            <a href="#">Consumer Electronic</a><span className="sub-toggle"></span>
            <div className="mega-menu">
              <div className="mega-menu__column">
                <h4>Electronic<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="#">Home Audio &amp; Theathers</a></li>
                  <li><a href="#">TV &amp; Videos</a></li>
                  <li><a href="#">Camera, Photos &amp; Videos</a></li>
                  <li><a href="#">Cellphones &amp; Accessories</a></li>
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Videosgames</a></li>
                  <li><a href="#">Wireless Speakers</a></li>
                  <li><a href="#">Office Electronic</a></li>
                </ul>
              </div>
              <div className="mega-menu__column">
                <h4>Accessories &amp; Parts<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="#">Digital Cables</a></li>
                  <li><a href="#">Audio &amp; Video Cables</a></li>
                  <li><a href="#">Batteries</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li><a href="#">Clothing &amp; Apparel</a></li>
          <li><a href="#">Home, Garden &amp; Kitchen</a></li>
          <li><a href="#">Health &amp; Beauty</a></li>
          <li><a href="#">Yewelry &amp; Watches</a></li>
          <li className="menu-item-has-children has-mega-menu">
            <a href="#">Computer &amp; Technology</a
            ><span className="sub-toggle"></span>
            <div className="mega-menu">
              <div className="mega-menu__column">
                <h4>
                  Computer &amp; Technologies<span className="sub-toggle"></span>
                </h4>
                <ul className="mega-menu__list">
                  <li><a href="#">Computer &amp; Tablets</a></li>
                  <li><a href="#">Laptop</a></li>
                  <li><a href="#">Monitors</a></li>
                  <li><a href="#">Networking</a></li>
                  <li><a href="#">Drive &amp; Storages</a></li>
                  <li><a href="#">Computer Components</a></li>
                  <li><a href="#">Security &amp; Protection</a></li>
                  <li><a href="#">Gaming Laptop</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li><a href="#">Babies &amp; Moms</a></li>
          <li><a href="#">Sport &amp; Outdoor</a></li>
          <li><a href="#">Phones &amp; Accessories</a></li>
          <li><a href="#">Books &amp; Office</a></li>
          <li><a href="#">Cars &amp; Motocycles</a></li>
          <li><a href="#">Home Improments</a></li>
          <li><a href="#">Vouchers &amp; Services</a></li>
        </ul>
      </div>
    </div>
    <div className="navigation--list">
      <div className="navigation__content">
        <a className="navigation__item ps-toggle--sidebar" href="#menu-mobile"
          ><i className="icon-menu"></i><span> Menu</span></a
        ><a
          className="navigation__item ps-toggle--sidebar"
          href="#navigation-mobile"
          ><i className="icon-list4"></i><span> Categories</span></a
        ><a className="navigation__item ps-toggle--sidebar" href="#search-sidebar"
          ><i className="icon-magnifier"></i><span> Search</span></a
        ><a className="navigation__item ps-toggle--sidebar" href="#cart-mobile"
          ><i className="icon-bag2"></i><span> Cart</span></a
        >
      </div>
    </div>
    <div className="ps-panel--sidebar" id="search-sidebar">
      <div className="ps-panel__header">
        <form className="ps-form--search-mobile" action="index.html" method="get">
          <div className="form-group--nest">
            <input
              className="form-control"
              type="text"
              placeholder="Search something..."
            />
            <button><i className="icon-magnifier"></i></button>
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
          <li className="menu-item-has-children">
            <a href="index.html">Home</a><span className="sub-toggle"></span>
            <ul className="sub-menu">
              <li><a href="index.html">Marketplace Full Width</a></li>
              <li><a href="homepage-2.html">Home Auto Parts</a></li>
              <li><a href="homepage-10.html">Home Technology</a></li>
              <li><a href="homepage-9.html">Home Organic</a></li>
              <li><a href="homepage-3.html">Home Marketplace V1</a></li>
              <li><a href="homepage-4.html">Home Marketplace V2</a></li>
              <li><a href="homepage-5.html">Home Marketplace V3</a></li>
              <li><a href="homepage-6.html">Home Marketplace V4</a></li>
              <li><a href="homepage-7.html">Home Electronic</a></li>
              <li><a href="homepage-8.html">Home Furniture</a></li>
              <li><a href="homepage-kids.html">Home Kids</a></li>
              <li>
                <a href="homepage-photo-and-video.html"
                  >Home photo and picture</a
                >
              </li>
              <li><a href="home-medical.html">Home Medical</a></li>
            </ul>
          </li>
          <li className="menu-item-has-children has-mega-menu">
            <a href="shop-default.html">Shop</a><span className="sub-toggle"></span>
            <div className="mega-menu">
              <div className="mega-menu__column">
                <h4>Catalog Pages<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="shop-default.html">Shop Default</a></li>
                  <li><a href="shop-default.html">Shop Fullwidth</a></li>
                  <li><a href="shop-categories.html">Shop Categories</a></li>
                  <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                  <li>
                    <a href="shop-sidebar-without-banner.html"
                      >Shop Without Banner</a
                    >
                  </li>
                  <li><a href="shop-carousel.html">Shop Carousel</a></li>
                </ul>
              </div>
              <div className="mega-menu__column">
                <h4>Product Layout<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="product-default.html">Default</a></li>
                  <li><a href="product-extend.html">Extended</a></li>
                  <li><a href="product-full-content.html">Full Content</a></li>
                  <li><a href="product-box.html">Boxed</a></li>
                  <li><a href="product-sidebar.html">Sidebar</a></li>
                  <li><a href="product-default.html">Fullwidth</a></li>
                </ul>
              </div>
              <div className="mega-menu__column">
                <h4>Product Types<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="product-default.html">Simple</a></li>
                  <li><a href="product-default.html">Color Swatches</a></li>
                  <li>
                    <a href="product-image-swatches.html">Images Swatches</a>
                  </li>
                  <li><a href="product-countdown.html">Countdown</a></li>
                  <li><a href="product-multi-vendor.html">Multi-Vendor</a></li>
                  <li><a href="product-instagram.html">Instagram</a></li>
                  <li><a href="product-affiliate.html">Affiliate</a></li>
                  <li><a href="product-on-sale.html">On sale</a></li>
                  <li><a href="product-video.html">Video Featured</a></li>
                  <li><a href="product-groupped.html">Grouped</a></li>
                  <li><a href="product-out-stock.html">Out Of Stock</a></li>
                </ul>
              </div>
              <div className="mega-menu__column">
                <h4>Woo Pages<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="shopping-cart.html">Shopping Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="whishlist.html">Whishlist</a></li>
                  <li><a href="compare.html">Compare</a></li>
                  <li><a href="order-tracking.html">Order Tracking</a></li>
                  <li><a href="my-account.html">My Account</a></li>
                  <li><a href="checkout-2.html">Checkout 2</a></li>
                  <li><a href="shipping.html">Shipping</a></li>
                  <li><a href="payment.html">Payment</a></li>
                  <li><a href="payment-success.html">Payment Success</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="menu-item-has-children has-mega-menu">
            <a href="#">Pages</a><span className="sub-toggle"></span>
            <div className="mega-menu">
              <div className="mega-menu__column">
                <h4>Basic Page<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="contact-us.html">Contact</a></li>
                  <li><a href="faqs.html">Faqs</a></li>
                  <li><a href="comming-soon.html">Comming Soon</a></li>
                  <li><a href="404-page.html">404 Page</a></li>
                </ul>
              </div>
              <div className="mega-menu__column">
                <h4>Vendor Pages<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="become-a-vendor.html">Become a Vendor</a></li>
                  <li><a href="vendor-store.html">Vendor Store</a></li>
                  <li>
                    <a href="vendor-dashboard-free.html"
                      >Vendor Dashboard Free</a
                    >
                  </li>
                  <li>
                    <a href="vendor-dashboard-pro.html">Vendor Dashboard Pro</a>
                  </li>
                  <li><a href="store-list.html">Store List</a></li>
                  <li><a href="store-list.html">Store List 2</a></li>
                  <li><a href="store-detail.html">Store Detail</a></li>
                </ul>
              </div>
              <div className="mega-menu__column">
                <h4>Account Pages<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="user-information.html">User Information</a></li>
                  <li><a href="addresses.html">Addresses</a></li>
                  <li><a href="invoices.html">Invoices</a></li>
                  <li><a href="invoice-detail.html">Invoice Detail</a></li>
                  <li><a href="notifications.html">Notifications</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="menu-item-has-children has-mega-menu">
            <a href="#">Blogs</a><span className="sub-toggle"></span>
            <div className="mega-menu">
              <div className="mega-menu__column">
                <h4>Blog Layout<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="blog-grid.html">Grid</a></li>
                  <li><a href="blog-list.html">Listing</a></li>
                  <li><a href="blog-small-thumb.html">Small Thumb</a></li>
                  <li><a href="blog-left-sidebar.html">Left Sidebar</a></li>
                  <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                </ul>
              </div>
              <div className="mega-menu__column">
                <h4>Single Blog<span className="sub-toggle"></span></h4>
                <ul className="mega-menu__list">
                  <li><a href="blog-detail.html">Single 1</a></li>
                  <li><a href="blog-detail-2.html">Single 2</a></li>
                  <li><a href="blog-detail-3.html">Single 3</a></li>
                  <li><a href="blog-detail-4.html">Single 4</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div id="homepage-5">
      <div className="ps-home-banner">
        <div className="container">
          <div className="ps-section__left">
            <ul className="menu--dropdown">
              <li>
                <a href="#"
                  ><i className="las la-laptop"></i> Computer and accessories</a
                >
              </li>
              {/* <li className="menu-item-has-children has-mega-menu">
                <a href="#"><i className="icon-laundry"></i> Consumer Electronic</a>
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>Electronic<span className="sub-toggle"></span></h4>
                    <ul className="mega-menu__list">
                      <li><a href="#">Home Audio &amp; Theathers</a></li>
                      <li><a href="#">TV &amp; Videos</a></li>
                      <li><a href="#">Camera, Photos &amp; Videos</a></li>
                      <li><a href="#">Cellphones &amp; Accessories</a></li>
                      <li><a href="#">Headphones</a></li>
                      <li><a href="#">Videosgames</a></li>
                      <li><a href="#">Wireless Speakers</a></li>
                      <li><a href="#">Office Electronic</a></li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>
                      Accessories &amp; Parts<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li><a href="#">Digital Cables</a></li>
                      <li><a href="#">Audio &amp; Video Cables</a></li>
                      <li><a href="#">Batteries</a></li>
                    </ul>
                  </div>
                </div>
              </li> */}
              <li>
                <a href="#"><i className="las la-camera"></i> Cameras</a>
              </li>
              <li>
                <a href="#"><i className="las la-medkit"></i> Health & Beauty</a>
              </li>
              <li>
                <a href="#"><i className="las la-baby"></i> Mother & Baby</a>
              </li>
              <li>
                <a href="#"
                  ><i className="las la-mobile"></i> Mobile & Accessories</a
                >
              </li>

              {/* <li className="menu-item-has-children has-mega-menu">
                <a href="#"
                  ><i className="icon-desktop"></i> Computer &amp; Technology</a
                >
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>
                      Computer &amp; Technologies<span
                        className="sub-toggle"
                      ></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li><a href="#">Computer &amp; Tablets</a></li>
                      <li><a href="#">Laptop</a></li>
                      <li><a href="#">Monitors</a></li>
                      <li><a href="#">Networking</a></li>
                      <li><a href="#">Drive &amp; Storages</a></li>
                      <li><a href="#">Computer Components</a></li>
                      <li><a href="#">Security &amp; Protection</a></li>
                      <li><a href="#">Gaming Laptop</a></li>
                      <li><a href="#">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </li>  */}
              <li>
                <a href="#"
                  ><i className="las la-universal-access"></i> Men’s Fashion</a
                >
              </li>
              <li>
                <a href="#"><i className="las la-female"></i> Women’s Fashion</a>
              </li>
              <li>
                <a href="#">
                  <i className="las la-motorcycle"></i>
                  Automotive and Motorbike
                </a>
              </li>
            </ul>
          </div>
          <div className="ps-section__center">
            <div
              className="ps-carousel--dots owl-slider"
              data-owl-auto="true"
              data-owl-loop="true"
              data-owl-speed="5000"
              data-owl-gap="0"
              data-owl-nav="false"
              data-owl-dots="true"
              data-owl-item="1"
              data-owl-item-xs="1"
              data-owl-item-sm="1"
              data-owl-item-md="1"
              data-owl-item-lg="1"
              data-owl-duration="1000"
              data-owl-mousedrag="on"
            >
              <a href="#"><img src={banner1} alt="" /></a
              ><a href="#"><img src={home52} alt="" /></a
              ><a href="#"><img src={home53} alt="" /></a>
            </div>
            <a href="#"><img src={promotion7} alt="" /></a>
          </div>
          <div className="ps-section__right">
            <a href="#"
              ><img src={promotion1} alt="" /></a
            ><a href="#"><img src={promotion2} alt="" /></a
            ><a className="wide" href="#"
              ><img src={promotion3} alt="" /></a
            ><a href="#"><img src={beauty1} alt="" /></a
            ><a href="#"><img src={technology2} alt="" /></a>
          </div>
        </div>
      </div>
      <div className="ps-search-trending">
        <div className="container">
          <div className="ps-section__header">
            <h3>Search Trending<span>Updated at 9:00AM</span></h3>
          </div>
          <div className="ps-section__content">
            <div className="ps-block--categories-tabs ps-tab-root">
              <div className="ps-block__header">
                <div
                  className="ps-carousel--nav ps-tab-list owl-slider"
                  data-owl-auto="false"
                  data-owl-speed="1000"
                  data-owl-gap="0"
                  data-owl-nav="true"
                  data-owl-dots="true"
                  data-owl-item="8"
                  data-owl-item-xs="3"
                  data-owl-item-sm="4"
                  data-owl-item-md="6"
                  data-owl-item-lg="6"
                  data-owl-duration="500"
                  data-owl-mousedrag="on"
                >
                  <a className="active" href="#tab-1"
                    ><i className="icon-star"></i><span>Hot Trending</span></a
                  ><a href="#tab-2"
                    ><i className="icon-smartphone"></i><span>Cell Phones</span></a
                  ><a href="#tab-3"
                    ><i className="icon-desktop"></i><span>Computers</span></a
                  ><a href="#tab-4"
                    ><i className="icon-lampshade"></i><span>Furnitures</span></a
                  ><a href="#tab-5"
                    ><i className="icon-shirt"></i><span>T-Shirts</span></a
                  ><a href="#tab-6"
                    ><i className="icon-baby-bottle"></i><span>Baby & Mom</span></a
                  ><a href="#tab-7"
                    ><i className="icon-baseball"></i><span>Sports</span></a
                  ><a href="#tab-8"
                    ><i className="icon-book2"></i><span>Book & Office</span></a
                  ><a href="#tab-9"
                    ><i className="icon-car-siren"></i><span>Cars</span></a
                  >
                </div>
              </div>
              <div className="ps-tabs">
                <div className="ps-tabs">
                  <div className="ps-tab active" id="tab-1">
                    <div className="ps-block__item">
                      <a href="shop-default.html"
                        ><img
                          src={categoriesHome51}
                          alt="#television"
                        /><span>#television</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome52}
                          alt="#camera"
                        /><span>#camera</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome53}
                          alt="#watch"
                        /><span>#watch</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome54}
                          alt="#chair"
                        /><span>#chair</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome55}
                          alt="#sneaker"
                        /><span>#sneaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome56}
                          alt="#xbox"
                        /><span>#xbox</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome57}
                          alt="#gopro"
                        /><span>#gopro</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome58}
                          alt="#lipstick"
                        /><span>#lipstick</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome59}
                          alt="#phone"
                        /><span>#phone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome510}
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome511}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome512}
                          alt="#book"
                        /><span>#book</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome514}
                          alt="#bag"
                        /><span>#bag</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome515}
                          alt="#smartphone"
                        /><span>#smartphone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome516}
                          alt="#camping"
                        /><span>#camping</span></a
                      >
                    </div>
                  </div>
                  <div className="ps-tab" id="tab-2">
                    <div className="ps-block__item">
                      <a href="shop-default.html"
                        ><img
                          src={categoriesHome53}
                          alt="#watch"
                        /><span>#watch</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome54}
                          alt="#chair"
                        /><span>#chair</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome55}
                          alt="#sneaker"
                        /><span>#sneaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome56}
                          alt="#xbox"
                        /><span>#xbox</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome57}
                          alt="#gopro"
                        /><span>#gopro</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome58}
                          alt="#lipstick"
                        /><span>#lipstick</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome59}
                          alt="#phone"
                        /><span>#phone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome510}
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome511}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome512}
                          alt="#book"
                        /><span>#book</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome514}
                          alt="#bag"
                        /><span>#bag</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome515}
                          alt="#smartphone"
                        /><span>#smartphone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome516}
                          alt="#camping"
                        /><span>#camping</span></a
                      >
                    </div>
                  </div>
                  <div className="ps-tab" id="tab-3">
                    <div className="ps-block__item">
                      <a href="shop-default.html"
                        ><img
                          src={categoriesHome54}
                          alt="#chair"
                        /><span>#chair</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome55}
                          alt="#sneaker"
                        /><span>#sneaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome56}
                          alt="#xbox"
                        /><span>#xbox</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome57}
                          alt="#gopro"
                        /><span>#gopro</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome58}
                          alt="#lipstick"
                        /><span>#lipstick</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome59}
                          alt="#phone"
                        /><span>#phone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome510}
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome511}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome512}
                          alt="#book"
                        /><span>#book</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome514}
                          alt="#bag"
                        /><span>#bag</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome515}
                          alt="#smartphone"
                        /><span>#smartphone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome516}
                          alt="#camping"
                        /><span>#camping</span></a
                      >
                    </div>
                  </div>
                  <div className="ps-tab" id="tab-4">
                    <div className="ps-block__item">
                      <a href="shop-default.html"
                        ><img
                          src={categoriesHome55}
                          alt="#sneaker"
                        /><span>#sneaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome56}
                          alt="#xbox"
                        /><span>#xbox</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome57}
                          alt="#gopro"
                        /><span>#gopro</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome58}
                          alt="#lipstick"
                        /><span>#lipstick</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome59}
                          alt="#phone"
                        /><span>#phone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome510}
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome511}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome512}
                          alt="#book"
                        /><span>#book</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome514}
                          alt="#bag"
                        /><span>#bag</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome515}
                          alt="#smartphone"
                        /><span>#smartphone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome516}
                          alt="#camping"
                        /><span>#camping</span></a
                      >
                    </div>
                  </div>
                  <div className="ps-tab" id="tab-5">
                    <div className="ps-block__item">
                      <a href="shop-default.html"
                        ><img
                          src={categoriesHome56}
                          alt="#xbox"
                        /><span>#xbox</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome57}
                          alt="#gopro"
                        /><span>#gopro</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome58}
                          alt="#lipstick"
                        /><span>#lipstick</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome59}
                          alt="#phone"
                        /><span>#phone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome510}
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome511}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome512}
                          alt="#book"
                        /><span>#book</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome514}
                          alt="#bag"
                        /><span>#bag</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome515}
                          alt="#smartphone"
                        /><span>#smartphone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome516}
                          alt="#camping"
                        /><span>#camping</span></a
                      >
                    </div>
                  </div>
                  <div className="ps-tab" id="tab-6">
                    <div className="ps-block__item">
                      <a href="shop-default.html"
                        ><img
                          src={categoriesHome57}
                          alt="#gopro"
                        /><span>#gopro</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome58}
                          alt="#lipstick"
                        /><span>#lipstick</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome59}
                          alt="#phone"
                        /><span>#phone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome510}
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome511}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome512}
                          alt="#book"
                        /><span>#book</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome514}
                          alt="#bag"
                        /><span>#bag</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome515}
                          alt="#smartphone"
                        /><span>#smartphone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome516}
                          alt="#camping"
                        /><span>#camping</span></a
                      >
                    </div>
                  </div>
                  <div className="ps-tab" id="tab-7">
                    <div className="ps-block__item">
                      <a href="shop-default.html"
                        ><img
                          src={categoriesHome58}
                          alt="#lipstick"
                        /><span>#lipstick</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome59}
                          alt="#phone"
                        /><span>#phone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome510}
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome511}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome512}
                          alt="#book"
                        /><span>#book</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome514}
                          alt="#bag"
                        /><span>#bag</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome515}
                          alt="#smartphone"
                        /><span>#smartphone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome516}
                          alt="#camping"
                        /><span>#camping</span></a
                      >
                    </div>
                  </div>
                  <div className="ps-tab" id="tab-7">
                    <div className="ps-block__item">
                      <a href="shop-default.html"
                        ><img
                          src={categoriesHome59}
                          alt="#phone"
                        /><span>#phone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome510}
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome511}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome512}
                          alt="#book"
                        /><span>#book</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome514}
                          alt="#bag"
                        /><span>#bag</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome515}
                          alt="#smartphone"
                        /><span>#smartphone</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome516}
                          alt="#camping"
                        /><span>#camping</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-deal-of-day">
        <div className="container">
          <div className="ps-section__header">
            <div className="ps-block--countdown-deal">
              <div className="ps-block__left">
                <h3>Deal of the day</h3>
              </div>
              <div className="ps-block__right">
                <figure>
                  <figcaption>End in:</figcaption>
                  <ul
                    className="ps-countdown"
                    data-time="December 30, 2021 15:37:25"
                  >
                    <li><span className="days"></span></li>
                    <li><span className="hours"></span></li>
                    <li><span className="minutes"></span></li>
                    <li><span className="seconds"></span></li>
                  </ul>
                </figure>
              </div>
            </div>
            <a href="shop-default.html">View all</a>
          </div>
          <div className="ps-section__content">
            <div
              className="ps-carousel--nav owl-slider"
              data-owl-auto="true"
              data-owl-loop="true"
              data-owl-speed="1000"
              data-owl-gap="30"
              data-owl-nav="false"
              data-owl-dots="true"
              data-owl-item="5"
              data-owl-item-xs="2"
              data-owl-item-sm="3"
              data-owl-item-md="4"
              data-owl-item-lg="4"
              data-owl-item-xl="5"
              data-owl-duration="1000"
              data-owl-mousedrag="on"
            >
              <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productHome1} alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <p className="ps-product__price sale">
                    ৳567.99 <del>৳670.00 </del><small>18% off</small>
                  </p>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html"
                      >Korea Long Sofa Fabric In Blue Navy Color</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <div
                      className="ps-product__progress-bar ps-progress"
                      data-value="72"
                    >
                      <div className="ps-progress__value"><span></span></div>
                      <p>Sold:80</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productHome2} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <p className="ps-product__price">৳101.99<small>18% off</small></p>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html"
                      >Aroma Rice Cooker</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <div
                      className="ps-product__progress-bar ps-progress"
                      data-value="96"
                    >
                      <div className="ps-progress__value"><span></span></div>
                      <p>Sold:19</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome3} alt=""
                  /></a>
                  <div className="ps-product__badge">-25%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <p className="ps-product__price sale">
                    ৳42.00 <del>৳60.00 </del><small>18% off</small>
                  </p>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html"
                      >Simple Plastice Chair In White Color</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>02</span>
                    </div>
                    <div
                      className="ps-product__progress-bar ps-progress"
                      data-value="77"
                    >
                      <div className="ps-progress__value"><span></span></div>
                      <p>Sold:73</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome4} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <p className="ps-product__price">৳320.00<small>18% off</small></p>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html"
                      >Korea Fabric Chair In Brown Colorr</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <div
                      className="ps-product__progress-bar ps-progress"
                      data-value="4"
                    >
                      <div className="ps-progress__value"><span></span></div>
                      <p>Sold:78</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome5} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <p className="ps-product__price">৳85.00<small>18% off</small></p>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html"
                      >Set 14-Piece Knife From KichiKit</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <div
                      className="ps-product__progress-bar ps-progress"
                      data-value="25"
                    >
                      <div className="ps-progress__value"><span></span></div>
                      <p>Sold:91</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome6} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <p className="ps-product__price">৳92.00<small>18% off</small></p>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html"
                      >Magic Bullet NutriBullet Pro 900 Series Blender</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <div
                      className="ps-product__progress-bar ps-progress"
                      data-value="69"
                    >
                      <div className="ps-progress__value"><span></span></div>
                      <p>Sold:48</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome7} alt=""
                  /></a>
                  <div className="ps-product__badge">-46%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <p className="ps-product__price sale">
                    ৳42.00 <del>৳60.00 </del><small>18% off</small>
                  </p>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html"
                      >Letter Printed Cushion Cover Cotton</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>02</span>
                    </div>
                    <div
                      className="ps-product__progress-bar ps-progress"
                      data-value="52"
                    >
                      <div className="ps-progress__value"><span></span></div>
                      <p>Sold:78</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome7} alt=""
                  /></a>
                  <div className="ps-product__badge">-46%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <p className="ps-product__price sale">
                    ৳42.00 <del>৳60.00 </del><small>18% off</small>
                  </p>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html"
                      >Letter Printed Cushion Cover Cotton</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>02</span>
                    </div>
                    <div
                      className="ps-product__progress-bar ps-progress"
                      data-value="78"
                    >
                      <div className="ps-progress__value"><span></span></div>
                      <p>Sold:20</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="shop-now-home3">
      <div className="container">
        <div className="ps-shop-brand">
          <a href="#"><img src={brand1} alt="" /></a>
          <a href="#"><img src={brand2} alt="" /></a>
          <a href="#"><img src={brand3} alt="" /></a>
          <a href="#"><img src={brand4} alt="" /></a>
          <a href="#"><img src={brand5} alt="" /></a>
          <a href="#"><img src={brand6} alt="" /></a>
          <a href="#"><img src={brand7} alt="" /></a>
          <a href="#"><img src={brand8} alt="" /></a>
        </div>
        <div className="ps-shop-categories">
          <div className="row align-content-lg-stretch">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="ps-block--category-2" data-mh="categories">
                <div className="ps-block__thumbnail">
                  <img src={categoriesShop1} alt="" />
                </div>
                <div className="ps-block__content">
                  <h4>Clothing &amp; Apparel</h4>
                  <ul>
                    <li><a href="shop-default.html">Accessories</a></li>
                    <li><a href="shop-default.html">Bags</a></li>
                    <li><a href="shop-default.html">Kid's Fashion</a></li>
                    <li><a href="shop-default.html">Mens</a></li>
                    <li><a href="shop-default.html">Shoes</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="ps-block--category-2" data-mh="categories">
                <div className="ps-block__thumbnail">
                  <img src={categoriesShop2} alt="" />
                </div>
                <div className="ps-block__content">
                  <h4>Garden &amp; Kitchen</h4>
                  <ul>
                    <li><a href="shop-default.html">Cookware</a></li>
                    <li><a href="shop-default.html">Decoration</a></li>
                    <li><a href="shop-default.html">Furniture</a></li>
                    <li><a href="shop-default.html">Garden Tools</a></li>
                    <li><a href="shop-default.html">Home Improvement</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="ps-block--category-2" data-mh="categories">
                <div className="ps-block__thumbnail">
                  <img src={categoriesShop3} alt="" />
                </div>
                <div className="ps-block__content">
                  <h4>Consumer Electrics</h4>
                  <ul>
                    <li><a href="shop-default.html">Air Conditioners</a></li>
                    <li>
                      <a href="shop-default.html">Audios &amp; Theaters</a>
                    </li>
                    <li><a href="shop-default.html">Car Electronics</a></li>
                    <li><a href="shop-default.html">Office Electronics</a></li>
                    <li><a href="shop-default.html">Refrigerations</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="ps-block--category-2" data-mh="categories">
                <div className="ps-block__thumbnail">
                  <img src={categoriesShop4} alt="" />
                </div>
                <div className="ps-block__content">
                  <h4>Health &amp; Beauty</h4>
                  <ul>
                    <li><a href="shop-default.html">Equipments</a></li>
                    <li><a href="shop-default.html">Hair Care</a></li>
                    <li><a href="shop-default.html">Perfumer</a></li>
                    <li><a href="shop-default.html">Skin Care</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="ps-block--category-2" data-mh="categories">
                <div className="ps-block__thumbnail">
                  <img src={categoriesShop5} alt="" />
                </div>
                <div className="ps-block__content">
                  <h4>Computers &amp; Technologies</h4>
                  <ul>
                    <li><a href="shop-default.html">Desktop PC</a></li>
                    <li><a href="shop-default.html">Laptop</a></li>
                    <li><a href="shop-default.html">Smartphones</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="ps-block--category-2" data-mh="categories">
                <div className="ps-block__thumbnail">
                  <img src={categoriesShop6} alt="" />
                </div>
                <div className="ps-block__content">
                  <h4>Jewelry &amp; Watches</h4>
                  <ul>
                    <li><a href="shop-default.html">Gemstones Jewelry</a></li>
                    <li><a href="shop-default.html">Men's Watches</a></li>
                    <li><a href="shop-default.html">Women's Watches</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="ps-block--category-2" data-mh="categories">
                <div className="ps-block__thumbnail">
                  <img src={categoriesShop7} alt="" />
                </div>
                <div className="ps-block__content">
                  <h4>Phone &amp; Accessories</h4>
                  <ul>
                    <li><a href="shop-default.html">Iphone 8</a></li>
                    <li><a href="shop-default.html">Iphone X</a></li>
                    <li><a href="shop-default.html">Samsung Note 8</a></li>
                    <li><a href="shop-default.html">Samsung S8</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="ps-block--category-2" data-mh="categories">
                <div className="ps-block__thumbnail">
                  <img src={categoriesShop8} alt="" />
                </div>
                <div className="ps-block__content">
                  <h4>Sport &amp; Outdoor</h4>
                  <ul>
                    <li><a href="shop-default.html">Freezer Burn</a></li>
                    <li><a href="shop-default.html">Frigde Cooler</a></li>
                    <li><a href="shop-default.html">Wine Cabinets</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="ps-block--category-2" data-mh="categories">
                <div className="ps-block__thumbnail">
                  <img src={categoriesShop3} alt="" />
                </div>
                <div className="ps-block__content">
                  <h4>Consumer Electrics</h4>
                  <ul>
                    <li><a href="shop-default.html">Air Conditioners</a></li>
                    <li>
                      <a href="shop-default.html">Audios &amp; Theaters</a>
                    </li>
                    <li><a href="shop-default.html">Car Electronics</a></li>
                    <li><a href="shop-default.html">Office Electronics</a></li>
                    <li><a href="shop-default.html">Refrigerations</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="homepage-3">
      <div className="ps-section--gray">
        <div className="container">
          <div className="ps-block--products-of-category">
            <div className="ps-block__categories">
              <h3>
                Clothing & <br />
                Apparel
              </h3>
              <ul>
                <li><a href="#">Best Seller</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Girls</a></li>
                <li><a href="#">Boys</a></li>
                <li><a href="#">Baby</a></li>
                <li><a href="#">Sales & Deals</a></li>
              </ul>
              <a className="ps-block__more-link" href="#">View All</a>
            </div>
            <div className="ps-block__slider">
              <div
                className="ps-carousel--product-box owl-slider"
                data-owl-auto="true"
                data-owl-loop="true"
                data-owl-speed="7000"
                data-owl-gap="0"
                data-owl-nav="true"
                data-owl-dots="true"
                data-owl-item="1"
                data-owl-item-xs="1"
                data-owl-item-sm="1"
                data-owl-item-md="1"
                data-owl-item-lg="1"
                data-owl-duration="500"
                data-owl-mousedrag="off"
              >
                <a href="#"><img src={downloadsClothing1} alt="" /></a>
                <a href="#"><img src={sliderHomeClothing2} alt="" /></a>
                <a href="#"><img src={sliderHomeClothing3} alt=""/></a>
              </div>
            </div>
            <div className="ps-block__product-box">
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsClothing1} alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="clothing">
                    <a className="ps-product__title" href="product-default.html"
                      >Herschel Leather Duffle Bag In Brown Color</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳567.99 <del>৳670.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsClothing2} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="clothing">
                    <a className="ps-product__title" href="product-default.html"
                      >Unero Military classNameical Backpack</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳101.99</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsClothing3} alt=""
                  /></a>
                  <div className="ps-product__badge">-25%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="clothing">
                    <a className="ps-product__title" href="product-default.html"
                      >Rayban Rounded Sunglass Brown Color</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>02</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳42.00 <del>৳60.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsClothing4} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="clothing">
                    <a className="ps-product__title" href="product-default.html"
                      >Sleeve Linen Blend Caro Pane Shirt</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳320.00</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={clothing7} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="clothing">
                    <a className="ps-product__title" href="product-default.html"
                      >Men’s Sports Runnning Swim Board Shorts</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳85.00</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsClothing6} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="clothing">
                    <a className="ps-product__title" href="product-default.html"
                      >Paul’s Smith Sneaker InWhite Color</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳92.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-block--products-of-category">
            <div className="ps-block__categories">
              <h3>Computer & Techologies</h3>
              <ul>
                <li><a href="#">Best Seller</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Desktop PC</a></li>
                <li><a href="#">Laptop</a></li>
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="#">Storage & Memory</a></li>
                <li><a href="#">PC Component</a></li>
                <li><a href="#">Computer Accessories</a></li>
                <li><a href="#">Game Accessories</a></li>
                <li><a href="#">Sales & Deals</a></li>
              </ul>
              <a className="ps-block__more-link" href="#">View All</a>
            </div>
            <div className="ps-block__slider">
              <div
                className="ps-carousel--product-box owl-slider"
                data-owl-auto="true"
                data-owl-loop="true"
                data-owl-speed="7000"
                data-owl-gap="0"
                data-owl-nav="true"
                data-owl-dots="true"
                data-owl-item="1"
                data-owl-item-xs="1"
                data-owl-item-sm="1"
                data-owl-item-md="1"
                data-owl-item-lg="1"
                data-owl-duration="500"
                data-owl-mousedrag="off"
              >
                <a href="#"
                  ><img src={homeTechnology1} alt="" /></a
                ><a href="#"
                  ><img src={homeTechnology2} alt="" /></a
                ><a href="#"
                  ><img src={downloadsTechnology1} alt=""
                /></a>
              </div>
            </div>
            <div className="ps-block__product-box">
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeTechnology1} alt=""
                  /></a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Sound Intone I65 Earphone White Version</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳105.30</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeTechnology2} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">7%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Beat Spill 2.0 Wireless Speaker – White</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳125.00 <del>৳135.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeTechnology3} alt=""
                  /></a>
                  <div className="ps-product__badge">-25%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >ASUS Chromebook Flip – 10.2 Inch</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>02</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳990.00 <del>৳1250.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeTechnology4} alt=""
                  /></a>
                  <div className="ps-product__badge">10%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Apple Macbook Retina Display 12”</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>04</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳1090.00 <del>৳1550.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeTechnology5} alt=""
                  /></a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Samsung Gear VR Virtual Reality Headset</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳85.00</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeTechnology6} alt=""
                  /></a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Apple iPhone Retina 6s Plus 64GB</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳950.60</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-block--products-of-category">
            <div className="ps-block__categories">
              <h3>Consumer Electronics</h3>
              <ul>
                <li><a href="shop-default.html">Best Seller</a></li>
                <li><a href="shop-default.html">New Arrivals</a></li>
                <li><a href="shop-default.html">TV Television</a></li>
                <li><a href="shop-default.html">Air Condition</a></li>
                <li><a href="shop-default.html">Washing Machine</a></li>
                <li><a href="shop-default.html">Microwave</a></li>
                <li><a href="shop-default.html">Refrigerator</a></li>
                <li><a href="shop-default.html">Office Electronic</a></li>
                <li><a href="shop-default.html">Car Electronic</a></li>
                <li><a href="shop-default.html">Sales & Deals</a></li>
              </ul>
              <a className="ps-block__more-link" href="#">View All</a>
            </div>
            <div className="ps-block__slider">
              <div
                className="ps-carousel--product-box owl-slider"
                data-owl-auto="true"
                data-owl-loop="true"
                data-owl-speed="7000"
                data-owl-gap="0"
                data-owl-nav="true"
                data-owl-dots="true"
                data-owl-item="1"
                data-owl-item-xs="1"
                data-owl-item-sm="1"
                data-owl-item-md="1"
                data-owl-item-lg="1"
                data-owl-duration="500"
                data-owl-mousedrag="off"
              >
                <a href="#"
                  ><img src={downloadsElectronics1} alt="" /></a
                ><a href="#"
                  ><img src={sliderHomeElectronics2} alt="" /></a
                ><a href="#"
                  ><img src={sliderHomeElectronics3} alt=""
                /></a>
              </div>
            </div>
            <div className="ps-block__product-box">
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsElectronics1} alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Marshall Kilburn Portable Wireless</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳567.99 <del>৳670.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsElectronics2} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Xbox One Wireless Controller Black Color</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳101.99</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsElectronics3} alt=""
                  /></a>
                  <div className="ps-product__badge">-25%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Sound Intone I65 Earphone White Version</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>02</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳42.00 <del>৳60.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsElectronics4} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Samsung Gear VR Virtual Reality Headset</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳320.00</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsElectronics5} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >Samsung UHD TV 24inch</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳85.00</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsElectronics6} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="technology">
                    <a className="ps-product__title" href="product-default.html"
                      >EPSION Plaster Printer</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳92.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-block--products-of-category">
            <div className="ps-block__categories">
              <h3>Home, Garden & Kitchen</h3>
              <ul>
                <li><a href="shop-default.html">Best Seller</a></li>
                <li><a href="shop-default.html">New Arrivals</a></li>
                <li><a href="shop-default.html">Furniture</a></li>
                <li><a href="shop-default.html">Home Decor</a></li>
                <li><a href="shop-default.html">Cookware</a></li>
                <li><a href="shop-default.html">Utensils & Gadget</a></li>
                <li><a href="shop-default.html">Garden Tools</a></li>
                <li><a href="shop-default.html">Acessesories</a></li>
                <li><a href="shop-default.html">Sales & Deals</a></li>
              </ul>
              <a className="ps-block__more-link" href="#">View All</a>
            </div>
            <div className="ps-block__slider">
              <div
                className="ps-carousel--product-box owl-slider"
                data-owl-auto="true"
                data-owl-loop="true"
                data-owl-speed="7000"
                data-owl-gap="0"
                data-owl-nav="true"
                data-owl-dots="true"
                data-owl-item="1"
                data-owl-item-xs="1"
                data-owl-item-sm="1"
                data-owl-item-md="1"
                data-owl-item-lg="1"
                data-owl-duration="500"
                data-owl-mousedrag="off"
              >
                <a href="#"
                  ><img src={sliderHomeKitchen1} alt="" /></a
                ><a href="#"
                  ><img src={sliderHomeKitchen2} alt="" /></a
                ><a href="#"
                  ><img src={downloadsKitchen1} alt=""
                /></a>
              </div>
            </div>
            <div className="ps-block__product-box">
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productHome1} alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Korea Long Sofa Fabric In Blue Navy Color</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳567.99 <del>৳670.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productHome2} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Aroma Rice Cooker</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳101.99</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome3} alt=""
                  /></a>
                  <div className="ps-product__badge">-25%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Simple Plastice Chair In White Color</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>02</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳42.00 <del>৳60.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome4} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Korea Fabric Chair In Brown Colorr</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳320.00</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome5} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Set 14-Piece Knife From KichiKit</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳85.00</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHome6} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Magic Bullet NutriBullet Pro 900 Series Blender</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳92.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-block--products-of-category">
            <div className="ps-block__categories">
              <h3>Healthy & Beauty</h3>
              <ul>
                <li><a href="shop-default.html">Best Seller</a></li>
                <li><a href="shop-default.html">New Arrivals</a></li>
                <li><a href="shop-default.html">Makeup</a></li>
                <li><a href="shop-default.html">Skin Care</a></li>
                <li><a href="shop-default.html">Hair Care</a></li>
                <li><a href="shop-default.html">Tools & Equipments</a></li>
                <li><a href="shop-default.html">Perfumer & Cologine</a></li>
                <li><a href="shop-default.html">Sales & Deals</a></li>
              </ul>
              <a className="ps-block__more-link" href="#">View All</a>
            </div>
            <div className="ps-block__slider">
              <div
                className="ps-carousel--product-box owl-slider"
                data-owl-auto="true"
                data-owl-loop="true"
                data-owl-speed="7000"
                data-owl-gap="0"
                data-owl-nav="true"
                data-owl-dots="true"
                data-owl-item="1"
                data-owl-item-xs="1"
                data-owl-item-sm="1"
                data-owl-item-md="1"
                data-owl-item-lg="1"
                data-owl-duration="500"
                data-owl-mousedrag="off"
              >
                <a href="#"><img src={sliderHomeHealthy1} alt="" /></a>
                <a href="#"><img src={sliderHomeHealthy2} alt="" /></a>
                <a href="#"><img src={sliderHomeHealthy3} alt=""/></a>
              </div>
            </div>
            <div className="ps-block__product-box">
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeHealthy1} alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"><i className="icon-bag2"></i>
                        </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"><i className="icon-eye"></i></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"><i className="icon-heart"></i></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"><i className="icon-chart-bars"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Aveeno Moisturizing Body Shower 450ml</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳47.99 <del>৳59.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeHealthy2} alt=""
                  /></a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >NYX Beauty Couton Pallete Makeup 12</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳101.99</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeHealthy3} alt=""
                  /></a>
                  <div className="ps-product__badge">-25%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Baxter Care Hair Kit For Bearded Mens</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>02</span>
                    </div>
                    <p className="ps-product__price sale">
                      ৳42.00 <del>৳60.00 </del>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeHealthy4} alt=""
                  /></a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Anna Sui Putty Mask Perfection</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳25.00</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeHealthy5} alt=""
                  /></a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Set 30 Piece Korea StartSkin Natural Mask</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳85.00</p>
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={productsHomeHealthy6} alt=""
                  /></a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Read More"
                        ><i className="icon-bag2"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-placement="top"
                        title="Quick View"
                        data-toggle="modal"
                        data-target="#product-quickview"
                        ><i className="icon-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Whishlist"
                        ><i className="icon-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                        ><i className="icon-chart-bars"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content" data-mh="garden">
                    <a className="ps-product__title" href="product-default.html"
                      >Ciate Palemore Lipstick Bold Red Color</a
                    >
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option></select
                      ><span>01</span>
                    </div>
                    <p className="ps-product__price">৳92.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-newsletter">
        <div className="container">
          <form className="ps-form--newsletter" action="do_action" method="post">
            <div className="row">
              <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ps-form__left">
                  <h3>Newsletter</h3>
                  <p>Subcribe to get information about products and coupons</p>
                </div>
              </div>
              <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ps-form__right">
                  <div className="form-group--nest">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email address"
                    />
                    <button className="ps-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
     {/* Start Aside Drower */}
    <button className="asside-card-drower">
      <div className="asside-top">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <p><span>0</span> Item</p>
      </div>
      <div className="asside-body">
        <span>৳0.00</span>
      </div>
    </button>

    <div className="asside-card-checkout">
      <div className="cart-header">
        <h4 className="cart-header-title">
          <span className="d-inline-block mr-3">Item</span>
        </h4>
        <button className="btn-cart-hide">Close</button>
      </div>
      <div className="cart-item-container"></div>
      <div className="cart-footer">
        <div className="btn-container">
          <button className="btn-checkout">
            <span className="btn-text">Checkout</span>
            <span className="cart-price">৳ 0.00</span>
          </button>
        </div>
      </div>
    </div>
     {/* End Aside Drower  */}
    <footer className="ps-footer">
      <div className="container">
        <div className="ps-footer__widgets">
          <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">
              <p>Call us 24/7</p>
              <h3>1800 97 97 69</h3>
              <p>
                502 New Design Str, Melbourne, Australia <br /><a
                  href="mailto:contact@martfury.co"
                  >contact@martfury.co</a
                >
              </p>
              <ul className="ps-list--social">
                <li>
                  <a className="facebook" href="#"
                    ><i className="fa fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a className="google-plus" href="#"
                    ><i className="fa fa-google-plus"></i
                  ></a>
                </li>
                <li>
                  <a className="instagram" href="#"
                    ><i className="fa fa-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Quick links</h4>
            <ul className="ps-list--link">
              <li><a href="#">Policy</a></li>
              <li><a href="#">Term & Condition</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Return</a></li>
              <li><a href="faqs.html">FAQs</a></li>
            </ul>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Company</h4>
            <ul className="ps-list--link">
              <li><a href="about-us.html">About Us</a></li>
              <li><a href="#">Affilate</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="contact-us.html">Contact</a></li>
            </ul>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
              <li><a href="#">Our Press</a></li>
              <li><a href="checkout.html">Checkout</a></li>
              <li><a href="my-account.html">My account</a></li>
              <li><a href="shop-default.html">Shop</a></li>
            </ul>
          </aside>
        </div>
        {/* <div className="ps-footer__links">
          <p>
            <strong>Consumer Electric:</strong><a href="#">Air Conditioners</a
            ><a href="#">Audios &amp; Theaters</a><a href="#">Car Electronics</a
            ><a href="#">Office Electronics</a><a href="#">TV Televisions</a
            ><a href="#">Washing Machines</a>
          </p>
          <p>
            <strong>Clothing &amp; Apparel:</strong><a href="#">Printers</a
            ><a href="#">Projectors</a><a href="#">Scanners</a
            ><a href="#">Store &amp; Business</a><a href="#">4K Ultra HD TVs</a
            ><a href="#">LED TVs</a><a href="#">OLED TVs</a>
          </p>
          <p>
            <strong>Home, Garden &amp; Kitchen:</strong><a href="#">Cookware</a
            ><a href="#">Decoration</a><a href="#">Furniture</a
            ><a href="#">Garden Tools</a><a href="#">Garden Equipments</a
            ><a href="#">Powers And Hand Tools</a
            ><a href="#">Utensil &amp; Gadget</a>
          </p>
          <p>
            <strong>Health &amp; Beauty:</strong><a href="#">Hair Care</a
            ><a href="#">Decoration</a><a href="#">Hair Care</a
            ><a href="#">Makeup</a><a href="#">Body Shower</a
            ><a href="#">Skin Care</a><a href="#">Cologine</a
            ><a href="#">Perfume</a>
          </p>
          <p>
            <strong>Jewelry &amp; Watches:</strong><a href="#">Necklace</a
            ><a href="#">Pendant</a><a href="#">Diamond Ring</a
            ><a href="#">Sliver Earing</a><a href="#">Leather Watcher</a
            ><a href="#">Gucci</a>
          </p>
          <p>
            <strong>Computer &amp; Technologies:</strong
            ><a href="#">Desktop PC</a><a href="#">Laptop</a
            ><a href="#">Smartphones</a><a href="#">Tablet</a
            ><a href="#">Game Controller</a><a href="#">Audio &amp; Video</a
            ><a href="#">Wireless Speaker</a><a href="#">Done</a>
          </p>
        </div>  */}
        <div className="ps-footer__copyright">
          <p>© 2018 Martfury. All Rights Reserved</p>
          <p>
            <span>We Using Safe Payment For:</span>
            <a href="#"><img src={paymentMethod1} alt="" /></a>
            <a href="#"><img src={paymentMethod2} alt="" /></a>
            <a href="#"><img src={paymentMethod3} alt="" /></a>
            <a href="#"><img src={paymentMethod4} alt="" /></a>
            <a href="#"><img src={paymentMethod5} alt="" /></a>
          </p>
        </div>
      </div>
    </footer>
    <div id="back2top"><i className="icon icon-arrow-up"></i></div>
    <div className="ps-site-overlay"></div>
    <div id="loader-wrapper">
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
    <div className="ps-search" id="site-search">
      <a className="ps-btn--close" href="#"></a>
      <div className="ps-search__content">
        <form className="ps-form--primary-search" action="do_action" method="post">
          <input className="form-control" type="text" placeholder="Search for..." />
          <button><i className="aroma-magnifying-glass"></i></button>
        </form>
      </div>
    </div>

    <div
      className="modal fade"
      id="product-quickview"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="product-quickview"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <span className="modal-close" data-dismiss="modal"
            ><i className="icon-cross2"></i
          ></span>
          <article
            className="ps-product--detail ps-product--fullwidth ps-product--quickview"
          >
            <div className="ps-product__header">
              <div className="ps-product__thumbnail" data-vertical="false">
                <div className="ps-product__images" data-arrow="true">
                  <div className="item">
                    <img src={detailFullWidth1} alt="" />
                  </div>
                  <div className="item">
                    <img src={detailFullWidth2} alt="" />
                  </div>
                  <div className="item">
                    <img src={detailFullWidth3} alt="" />
                  </div>
                </div>
              </div>
              <div className="ps-product__info">
                <h1>Marshall Kilburn Portable Wireless Speaker</h1>
                <div className="ps-product__meta">
                  <p>Brand:<a href="shop-default.html">Sony</a></p>
                  <div className="ps-product__rating">
                    <select className="ps-rating" data-read-only="true">
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option></select
                    ><span>(1 review)</span>
                  </div>
                </div>
                <h4 className="ps-product__price">৳36.78 – ৳56.99</h4>
                <div className="ps-product__desc">
                  <p>
                    Sold By:<a href="shop-default.html"
                      ><strong> Go Pro</strong></a
                    >
                  </p>
                  <ul className="ps-list--dot">
                    <li>Unrestrained and portable active stereo speaker</li>
                    <li>Free from the confines of wires and chords</li>
                    <li>20 hours of portable capabilities</li>
                    <li>
                      Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                    </li>
                    <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                  </ul>
                </div>
                <div className="ps-product__shopping">
                  <a className="ps-btn ps-btn--black" href="#">Add to cart</a
                  ><a className="ps-btn" href="#">Buy Now</a>
                  <div className="ps-product__actions">
                    <a href="#">
                      <i className="icon-heart"></i>
                    
                    </a>
                    <a href="#"><i className="icon-chart-bars"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>      
            </div>
        );
    }
}

export default Home;                