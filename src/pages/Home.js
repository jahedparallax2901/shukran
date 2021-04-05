import React, { Component } from 'react';
import OwlCarousel from "react-owl-carousel";
import '../assets/css/style.css';
import '../assets/css/change.css';
import '../assets/css/market-place-1.css';
import '../assets/css/market-place-3.css';
// import '../assets/css/select2.min.css';
import shukranLogo from '../assets/img/shukran.png';
import clothing7 from '../assets/img/products/clothing/7.jpg';
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
import paymentMethod3 from '../assets/img/payment-method/3.jpg';
import paymentMethod5 from '../assets/img/payment-method/5.jpg';
import detailFullWidth1 from '../assets/img/products/detail/fullwidth/1.jpg';
import detailFullWidth2 from '../assets/img/products/detail/fullwidth/2.jpg';
import detailFullWidth3 from '../assets/img/products/detail/fullwidth/3.jpg';
import downloadBodyspray from '../assets/img/downloads/bodyspray.JPG';
import downloadsBanner5 from '../assets/img/downloads/banner5.png';
import downloadsBanner6 from '../assets/img/downloads/banner6.png';
import downloadsSmartwatch from '../assets/img/downloads/smartwatch.jpg';
import downloadsBangladesh from '../assets/img/downloads/bangladesh.png';
import downloadsBagpack from '../assets/img/downloads/bagpack.jpeg';
import downloadsFridge1 from '../assets/img/downloads/fridge1.jpg';
import downloadsFridge2 from '../assets/img/downloads/fridge2.jpg';
import bike1 from '../assets/img/downloads/bike1.jpeg';
import bike2 from '../assets/img/downloads/bike2.jpeg';
import camera from '../assets/img/downloads/camera.jpg';
import watch from '../assets/img/downloads/watch.JPG';
import downloadsChair1 from '../assets/img/downloads/chair1.JPG';
// import categoriesHome55 from '../assets/img/categories/home-5/5.jpg';
import { faBaby, faBars, faCamera, faCartArrowDown, faFemale, faLanguage, faLaptop, faList, faMedkit, faMobile, faMotorcycle, faSearch, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const menuContents = [
  {id: 1, link: "#", icon: <FontAwesomeIcon icon={faLaptop} />, title: "Computer and accessories"},
  {id: 2, link: "#", icon: <FontAwesomeIcon icon={faCamera} />, title: "Cameras"},
  {id: 3, link: "#", icon: <FontAwesomeIcon icon={faMedkit} />, title: "Health & Beauty"},
  {id: 4, link: "#", icon: <FontAwesomeIcon icon={faBaby} />, title: "Mother & Baby"},
  {id: 5, link: "#", icon: <FontAwesomeIcon icon={faMobile} />, title: "Mobile & Accessories"},
  {id: 6, link: "#", icon: <FontAwesomeIcon icon={faUniversalAccess} />, title: "Men's Fashion"},
  {id: 7, link: "#", icon: <FontAwesomeIcon icon={faFemale} />, title: "Women's Fashion"},
  {id: 8, link: "#", icon: <FontAwesomeIcon icon={faMotorcycle} />, title: "Automotive and Motorbike"},
]

const navigationList = [
  {id: 1, link: "#", icon: <FontAwesomeIcon icon={faBars} />, title: "Menu"},
  {id: 1, link: "#", icon: <FontAwesomeIcon icon={faList} />, title: "Categories"},
  {id: 1, link: "#", icon: <FontAwesomeIcon icon={faSearch} />, title: "Search"},
  {id: 1, link: "#", icon: <FontAwesomeIcon icon={faCartArrowDown} />, title: "Cart"},
]

const centerBanners = [
  {id: 1, src: '../assets/img/downloads/banner-1.jpg', link: "#"},
  {id: 2, src: '../assets/img/downloads/banner5.png', link: "#"},
  {id: 3, src: '../assets/img/downloads/banner6.png', link: "#"},
]

class Home extends Component {
    render() {
        return (

            <>
            {/* ================ Start Header Area ================= */}
    {/* Modal */}
    <div
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
                <label for="userID" className="sr-only">User ID</label>
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
                      stroke-width="0"
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

              

              {/* changed */}
              <div className="menu__content">
                <ul className="menu--dropdown">
                  {
                    menuContents.map(item=>(
                      <li key={item.id}>
                        <a href={item.link}>{item.icon} {item.title}</a>
                      </li>
                    ))
                  }
                </ul>
              {/* changed - end */}
              </div>
            </div>
            <a className="ps-logo" href="index.html"
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
                          >MVMTH classNameical Leather Watch In Black</a
                        >
                        <p><strong>Sold by:</strong> YOUNG SHOP</p>
                        <small>1 x ৳59.99</small>
                      </div>
                    </div>
                    <div className="ps-product--cart-mobile">
                      <div className="ps-product__thumbnail">
                        <a href="#"
                          ><img src={downloadBodyspray} alt=""
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
                      <a className="ps-btn" href="#">View Cart</a
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
                    data-target="#login-modal-center"
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
                    {/* changed */}
                  {
                    menuContents.map(item=>(
                      <li key={item.id}>
                        <a href={item.link}>{item.icon} {item.title}</a>
                      </li>
                    ))
                  }
                  {/* changed - end */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="navigation__center">
              <ul className="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="campaign.html">Campaign</a></li>
                <li><a href="vendor-store.html">Vendor Stores</a></li>
                <li><a href="become-a-vendor.html">Become a Vendor</a></li>
                <li><a href="invoices.html">Order Tracking</a></li>
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
                        >MVMTH classNameical Leather Watch In Black</a
                      >
                      <p><strong>Sold by:</strong> YOUNG SHOP</p>
                      <small>1 x ৳59.99</small>
                    </div>
                  </div>
                  <div className="ps-product--cart-mobile">
                    <div className="ps-product__thumbnail">
                      <a href="#"
                        ><img src={downloadBodyspray} alt=""
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
                    <a className="ps-btn" href="#">View Cart</a
                    ><a className="ps-btn" href="checkout.html">Checkout</a>
                  </figure>
                </div>
              </div>
            </div>
            <div className="ps-block--user-header">
              <div className="ps-block__left"><i className="icon-user"></i></div>
              <div className="ps-block__right">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#login-modal-center"
                  >Login</a
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
                  >MVMTH classNameical Leather Watch In Black</a
                >
                <p><strong>Sold by:</strong> YOUNG SHOP</p>
                <small>1 x ৳59.99</small>
              </div>
            </div>
          </div>
          <div className="ps-cart__footer">
            <h3>Sub Total:<strong>৳59.99</strong></h3>
            <figure>
              <a className="ps-btn" href="#">View Cart</a
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
          <li>
            <a href="#"
              ><i className="las la-laptop"></i> Computer and accessories</a
            >
          </li>
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
            <a href="#"><i className="las la-mobile"></i> Mobile & Accessories</a>
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
          </li> */}
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
    </div>
    
    {/* changed */}
    <div className="navigation--list">
      <div className="navigation__content">
        {
          navigationList.map(item=>(
            <a key={item.id} className="navigation__item ps-toggle--sidebar" href={item.link}>
              {item.icon}<span> {item.title}</span>
            </a>
          ))
        }
      </div>
    </div>
    {/* changed-end */}


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
          <li><a href="index.html">Home</a></li>
          <li><a href="campaign.html">Campaign</a></li>
          <li><a href="vendor-store.html">Vendor Stores</a></li>
          <li><a href="become-a-vendor.html">Become a Vendor</a></li>
          <li><a href="invoices.html">Order Tracking</a></li>
        </ul>
      </div>
    </div>
    {/*================ End Header Area =================*/}

    {/*============ Start Main Body Area =============*/}
    <div id="homepage-5">
      <div className="ps-home-banner">
        <div className="container">
          <div className="ps-section__left">
            {/* changed */}
            <ul className="menu--dropdown">
            {
              menuContents.map(item=>(
                <li key={item.id}>
                  <a href={item.link}>{item.icon} {item.title}</a>
                </li>
              ))
            }
            </ul>
            {/* changed-end */}
          </div>

          {/* Now Working */}
          
          <div className="ps-section__center">
          <OwlCarousel
          className="ps-carousel--dots owl-slider"
          loop={false}
          nav={true}
          // responsive={
          //   {
          //     0: {
          //       items: 1,
          //       margin: 10
          //     },
          //     768: {
          //       items: 1,
          //       margin: 20
          //     },
          //     991: {
          //       items: 3,
          //       margin: 25
          //     },
          //     1200: {
          //       items: 4,
          //       margin: 30
          //     }
          //   }
          // }
          navText={[
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>`
          ]}
          dots={false}
          items={1}>
          {centerBanners.map((product, index) => (
            <a href="#"><img src={centerBanners.src} alt="" /></a>
          ))}
        </OwlCarousel>
            {/* <div
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
              <a href="#"><img src={banner1} alt="" /></a>
              <a href="#"><img src={downloadsBanner5} alt="" /></a>
              <a href="#"><img src={downloadsBanner6} alt="" /></a>
            </div> */}
            {/* <a href="#"><img src={promotion7} alt="" /></a> */}
          </div>
          
          
          <div className="ps-section__right">
            <a href="#"><img src={downloadsSmartwatch} alt="" /></a
            ><a href="#"><img src={downloadsBangladesh} alt="" /></a>
            {/* <a className="wide" href="#"><img src={promotion3} alt=""/></a> */}
            <a href="#"><img src={downloadsBagpack} alt="" /></a>
            <a href="#"><img src={promotion2} alt="" /></a>
          </div>
        </div>
      </div>

      <div className="ps-deal-hot">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ps-block--deal-hot" data-mh="dealhot">
                <div className="ps-block__header">
                  <h3>Campaign</h3>
                  <div className="ps-block__navigation">
                    <a className="ps-carousel__prev" href=".ps-carousel--deal-hot"
                      ><i className="icon-chevron-left"></i></a
                    ><a className="ps-carousel__next" href=".ps-carousel--deal-hot"
                      ><i className="icon-chevron-right"></i
                    ></a>
                  </div>
                </div>
                <div className="ps-product__content">
                  <div
                    className="ps-carousel--deal-hot ps-carousel--deal-hot owl-slider"
                    data-owl-auto="true"
                    data-owl-loop="true"
                    data-owl-speed="5000"
                    data-owl-gap="0"
                    data-owl-nav="false"
                    data-owl-dots="false"
                    data-owl-item="1"
                    data-owl-item-xs="1"
                    data-owl-item-sm="1"
                    data-owl-item-md="1"
                    data-owl-item-lg="1"
                    data-owl-duration="1000"
                    data-owl-mousedrag="on"
                  >
                    <div className="ps-product--detail ps-product--hot-deal">
                      <div className="ps-product__header">
                        <div className="ps-product__thumbnail" data-vertical="true">
                          <figure>
                            <div className="ps-wrapper">
                              <div
                                className="ps-product__gallery"
                                data-arrow="true"
                              >
                                <div className="item">
                                  <a href="#"
                                    ><img
                                      src={downloadsFridge1}
                                      alt=""
                                  /></a>
                                </div>
                                <div className="item">
                                  <a href="#"
                                    ><img
                                      src={downloadsFridge2}
                                      alt=""
                                  /></a>
                                </div>
                              </div>
                              <div className="ps-product__badge">
                                <span
                                  >Save <br />
                                  ৳280.000</span
                                >
                              </div>
                            </div>
                          </figure>
                          <div
                            className="ps-product__variants"
                            data-item="4"
                            data-md="3"
                            data-sm="3"
                            data-arrow="false"
                          >
                            <div className="item">
                              <img src={downloadsFridge1} alt="" />
                            </div>
                            <div className="item">
                              <img src={downloadsFridge2} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="ps-product__info">
                          <h5>Clothing & Apparel</h5>
                          <h3 className="ps-product__name">
                            Walton WFD-1F3-GDEL-XX Direct Cool Refrigerator -
                            176 Ltr
                          </h3>
                          <div className="ps-product__meta">
                            <h4 className="ps-product__price sale">
                              ৳20,500.00 <del> ৳25000.00</del>
                            </h4>
                            <div className="ps-product__rating">
                              <select className="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option></select
                              ><span>(1 review)</span>
                            </div>
                            <div className="ps-product__specification">
                              <p>
                                Status:<strong className="in-stock">
                                  In Stock</strong
                                >
                              </p>
                            </div>
                          </div>
                          <div className="ps-product__expires">
                            <p>Expires In</p>
                            <ul
                              className="ps-countdown"
                              data-time="December 30, 2021 23:00:00"
                            >
                              <li>
                                <span className="days"></span>
                                <p>Days</p>
                              </li>
                              <li>
                                <span className="hours"></span>
                                <p>Hours</p>
                              </li>
                              <li>
                                <span className="minutes"></span>
                                <p>Minutes</p>
                              </li>
                              <li>
                                <span className="seconds"></span>
                                <p>Seconds</p>
                              </li>
                            </ul>
                          </div>
                          <div className="ps-product__processs-bar">
                            <div className="ps-progress" data-value="10">
                              <span className="ps-progress__value"></span>
                            </div>
                            <p><strong>4/79</strong> Sold</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product--detail ps-product--hot-deal">
                      <div className="ps-product__header">
                        <div className="ps-product__thumbnail" data-vertical="true">
                          <figure>
                            <div className="ps-wrapper">
                              <div
                                className="ps-product__gallery"
                                data-arrow="true"
                              >
                                <div className="item">
                                  <a href="#"
                                    ><img src={bike1} alt=""
                                  /></a>
                                </div>
                                <div className="item">
                                  <a href="#"
                                    ><img src={bike2} alt=""
                                  /></a>
                                </div>
                              </div>
                              <div className="ps-product__badge">
                                <span
                                  >Save <br />
                                  ৳9.000</span
                                >
                              </div>
                            </div>
                          </figure>
                          <div
                            className="ps-product__variants"
                            data-item="4"
                            data-md="3"
                            data-sm="3"
                            data-arrow="false"
                          >
                            <div className="item">
                              <img src={bike1} alt="" />
                            </div>
                            <div className="item">
                              <img src={bike2} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="ps-product__info">
                          <h5>Consumer Electrics</h5>
                          <h3 className="ps-product__name">
                            Honda CBR150R Motor Bike - 150 cc
                          </h3>
                          <div className="ps-product__meta">
                            <h4 className="ps-product__price sale">
                              ৳2,91000.00 <del> ৳3,00000.00</del>
                            </h4>
                            <div className="ps-product__rating">
                              <select className="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option></select
                              ><span>(1 review)</span>
                            </div>
                            <div className="ps-product__specification">
                              <p>
                                Status:<strong className="in-stock">
                                  In Stock</strong
                                >
                              </p>
                            </div>
                          </div>
                          <div className="ps-product__expires">
                            <p>Expires In</p>
                            <ul
                              className="ps-countdown"
                              data-time="December 30, 2021 23:00:00"
                            >
                              <li>
                                <span className="days"></span>
                                <p>Days</p>
                              </li>
                              <li>
                                <span className="hours"></span>
                                <p>Hours</p>
                              </li>
                              <li>
                                <span className="minutes"></span>
                                <p>Minutes</p>
                              </li>
                              <li>
                                <span className="seconds"></span>
                                <p>Seconds</p>
                              </li>
                            </ul>
                          </div>
                          <div className="ps-product__processs-bar">
                            <div className="ps-progress" data-value="60">
                              <span className="ps-progress__value"></span>
                            </div>
                            <p><strong>30/50</strong> Sold</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
              <aside className="widget widget_best-sale mb-0" data-mh="dealhot">
                <h3 className="widget-title">Top 20 Best Products</h3>
                <div className="widget__content">
                  <div
                    className="owl-slider"
                    data-owl-auto="true"
                    data-owl-loop="true"
                    data-owl-speed="5000"
                    data-owl-gap="0"
                    data-owl-nav="false"
                    data-owl-dots="false"
                    data-owl-item="1"
                    data-owl-item-xs="1"
                    data-owl-item-sm="1"
                    data-owl-item-md="1"
                    data-owl-item-lg="1"
                    data-owl-duration="1000"
                    data-owl-mousedrag="on"
                  >


                    <div className="ps-product-group">
                      <div className="ps-product--horizontal">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html"
                            ><img
                              src={productsHomeTechnology1}
                              alt=""
                          /></a>
                        </div>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
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
                          <p className="ps-product__price">105.30</p>
                        </div>
                      </div>
                      <div className="ps-product--horizontal">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html"
                            ><img
                              src={productsHomeTechnology2}
                              alt=""
                          /></a>
                        </div>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
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
                          <p className="ps-product__price">
                            ৳125.00 <del>৳135.00 </del>
                          </p>
                        </div>
                      </div>
                      <div className="ps-product--horizontal">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html"
                            ><img
                              src={productsHomeTechnology3}
                              alt=""
                          /></a>
                        </div>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
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
                      <div className="ps-product--horizontal">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html"
                            ><img
                              src={productsHomeTechnology4}
                              alt=""
                          /></a>
                        </div>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
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
                          <p className="ps-product__price">
                            ৳1090.00 <del>৳1550.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    
                    
                    
                    <div className="ps-product-group">
                      <div className="ps-product--horizontal">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html"
                            ><img
                              src={productsHomeTechnology3}
                              alt=""
                          /></a>
                        </div>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
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
                      <div className="ps-product--horizontal">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html"
                            ><img
                              src={productsHomeTechnology4}
                              alt=""
                          /></a>
                        </div>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
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
                          <p className="ps-product__price">
                            ৳1090.00 <del>৳1550.00 </del>
                          </p>
                        </div>
                      </div>
                      <div className="ps-product--horizontal">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html"
                            ><img
                              src={productsHomeTechnology5}
                              alt=""
                          /></a>
                        </div>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
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
                      <div className="ps-product--horizontal">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html"
                            ><img
                              src={productsHomeTechnology6}
                              alt=""
                          /></a>
                        </div>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
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
              </aside>
            </div>
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
                  data-owl-dots="false"
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
                          src={camera}
                          alt="#camera"
                        /><span>#camera</span></a
                      ><a href="shop-default.html"
                        ><img src={watch} alt="#watch" /><span
                          >#watch</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={downloadsChair1}
                          alt="#chair"
                        /><span>#chair</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome55}
                          alt="#sneaker"
                        /><span>#sneaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/downloads/controller1.JPG"
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
                          src="img/downloads/laptop1.jpeg"
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome51}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img src="img/downloads/book1.jpeg" alt="#book" /><span
                          >#book</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/categories/home-5/14.jpg"
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
                        ><img src={watch} alt="#watch" /><span
                          >#watch</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={downloadsChair1}
                          alt="#chair"
                        /><span>#chair</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome55}
                          alt="#sneaker"
                        /><span>#sneaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/downloads/controller1.JPG"
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
                          src="img/downloads/laptop1.jpeg"
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome51}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img src="img/downloads/book1.jpeg" alt="#book" /><span
                          >#book</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/categories/home-5/14.jpg"
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
                          src={downloadsChair1}
                          alt="#chair"
                        /><span>#chair</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome55}
                          alt="#sneaker"
                        /><span>#sneaker</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/downloads/controller1.JPG"
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
                          src="img/downloads/laptop1.jpeg"
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome51}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img src="img/downloads/book1.jpeg" alt="#book" /><span
                          >#book</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/categories/home-5/14.jpg"
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
                          src="img/downloads/controller1.JPG"
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
                          src="img/downloads/laptop1.jpeg"
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome51}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img src="img/downloads/book1.jpeg" alt="#book" /><span
                          >#book</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/categories/home-5/14.jpg"
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
                          src="img/downloads/controller1.JPG"
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
                          src="img/downloads/laptop1.jpeg"
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome51}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img src="img/downloads/book1.jpeg" alt="#book" /><span
                          >#book</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/categories/home-5/14.jpg"
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
                          src="img/downloads/laptop1.jpeg"
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome51}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img src="img/downloads/book1.jpeg" alt="#book" /><span
                          >#book</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/categories/home-5/14.jpg"
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
                          src="img/downloads/laptop1.jpeg"
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome51}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img src="img/downloads/book1.jpeg" alt="#book" /><span
                          >#book</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/categories/home-5/14.jpg"
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
                          src="img/downloads/laptop1.jpeg"
                          alt="#laptop"
                        /><span>#laptop</span></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome51}
                          alt="#speaker"
                        /><span>#speaker</span></a
                      ><a href="shop-default.html"
                        ><img src="img/downloads/book1.jpeg" alt="#book" /><span
                          >#book</span
                        ></a
                      ><a href="shop-default.html"
                        ><img
                          src={categoriesHome513}
                          alt="#blender"
                        /><span>#blender</span></a
                      ><a href="shop-default.html"
                        ><img
                          src="img/categories/home-5/14.jpg"
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
              data-owl-gap="20"
              data-owl-nav="false"
              data-owl-dots="false"
              data-owl-item="5"
              data-owl-item-xs="2"
              data-owl-item-sm="3"
              data-owl-item-md="4"
              data-owl-item-lg="4"
              data-owl-item-xl="4"
              data-owl-duration="1000"
              data-owl-mousedrag="on"
            >
              <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src={bike1} alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Cart"
                        ><i className="icon-bag2"></i></a>
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
                      >Honda CBR150R Motor Bike - 150 cc</a
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
                    ><img src="img/downloads/baby-toy.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Deer Rider</a
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
                    ><img src={downloadsChair1} alt=""
                  /></a>
                  <div className="ps-product__badge">-25%</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                    ><img src={downloadsFridge1} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Walton Fridge</a
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
                    ><img src="img/downloads/kids-food.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Eldomilk 2+ Growing Up Milk Powder BIB After 2 Years To 3
                      Years Old 350 Gm</a
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
                    ><img src="img/downloads/kids-care.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Kidstar Baby Diaper Small 66pcs 3-8 Kg
                    </a>
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
                    ><img src="img/downloads/shirt1.jpeg" alt=""
                  /></a>
                  <div className="ps-product__badge">-46%</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Men's Full Sleeve Shirt</a
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
                    ><img src="img/downloads/shirt2.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge">-46%</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Men's Full Sleeve Shirt</a
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
        <div className="ps-section__content">
          <div className="home-categories-top">
            <h3>All Categories</h3>
          </div>
          <div
            className="ps-carousel--nav owl-slider bg-white home-categories-body"
            data-owl-auto="false"
            data-owl-loop="false"
            data-owl-speed="1000"
            data-owl-gap="30"
            data-owl-nav="true"
            data-owl-dots="false"
            data-owl-item="5"
            data-owl-item-xs="1"
            data-owl-item-sm="2"
            data-owl-item-md="3"
            data-owl-item-lg="3"
            data-owl-item-xl="4"
            data-owl-duration="1000"
            data-owl-mousedrag="on"
          >
            <div className="ps-product ps-product--inner">
              <div className="ps-block--category">
                <a className="ps-block__overlay" href="#"></a>
                <div className="all-category-single">
                  <img src="img/downloads/laptop1.jpeg" alt="" />
                </div>

                <p>Computer and accessories</p>
              </div>
            </div>
            <div className="ps-product ps-product--inner">
              <div className="ps-block--category">
                <a className="ps-block__overlay" href="#"></a>
                <div className="all-category-single">
                  <img src={camera} alt="" />
                </div>
                <p>Cameras</p>
              </div>
            </div>
            <div className="ps-product ps-product--inner">
              <div className="ps-block--category">
                <a className="ps-block__overlay" href="#"></a>
                <div className="all-category-single">
                  <img src="img/categories/1.jpg" alt="" />
                </div>
                <p>Health & Beauty</p>
              </div>
            </div>
            <div className="ps-product ps-product--inner">
              <div className="ps-block--category">
                <a className="ps-block__overlay" href="#"></a>
                <div className="all-category-single">
                  <img src="img/downloads/kids-care.JPG" alt="" />
                </div>
                <p>Mother & Baby</p>
              </div>
            </div>
            <div className="ps-product ps-product--inner">
              <div className="ps-block--category">
                <a className="ps-block__overlay" href="#"></a>
                <div className="all-category-single">
                  <img src={categoriesHome515} alt="" />
                </div>
                <p>Mobile & Accessories</p>
              </div>
            </div>
            <div className="ps-product ps-product--inner">
              <div className="ps-block--category">
                <a className="ps-block__overlay" href="#"></a>
                <div className="all-category-single">
                  <img src="img/downloads/shirt1.jpeg" alt="" />
                </div>
                <p>Men’s Fashion</p>
              </div>
            </div>
            <div className="ps-product ps-product--inner">
              <div className="ps-block--category">
                <a className="ps-block__overlay" href="#"></a>
                <div className="all-category-single">
                  <img src={categoriesHome58} alt="" />
                </div>
                <p>Women’s Fashion</p>
              </div>
            </div>
            <div className="ps-product ps-product--inner">
              <div className="ps-block--category">
                <a className="ps-block__overlay" href="#"></a>
                <div className="all-category-single">
                  <img src={bike1} alt="" />
                </div>
                <p>Automotive and Motorbike</p>
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
                Clothing &
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
                <a href="#"
                  ><img src="img/downloads/shirt-banner.JPG" alt="" /></a
                ><a href="#"
                  ><img src={sliderHomeClothing2} alt="" /></a
                ><a href="#"
                  ><img src={sliderHomeClothing3} alt=""
                /></a>
              </div>
            </div>
            <div className="ps-block__product-box">
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src="./img/downloads/bagpack.jpeg" alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                    ><img src="img/downloads/shirt1.jpeg" alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                    ><img src={downloadBodyspray} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Fogg Fresh Spicy 120ml Fragrance BS</a
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
                    ><img src="img/downloads/sandal1.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Walkar Mens Sandal Black
                    </a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                    ><img src="img/downloads/speaker.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >VISION 2:1 Multimedia Speaker LOUD-808</a
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
              <h3>Mother & Baby</h3>
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
                    ><img src="img/downloads/kids-bag1.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Soft Plush Cute Hello Kitty Toddler Backpack/ School Bag
                      For Kid Adorable, Huggable Toys And Gifts
                    </a>
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
                    ><img src="img/downloads/baby-toy.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Deer Rider</a
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
                    ><img src="img/downloads/pampers1.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge">-25%</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Pampers Pant Style Diapers Large 9-14Kg 24pcs
                    </a>
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
                    ><img src={downloadsFridge1} alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Korea Fabric Chair In Brown Color</a
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
                    ><img src="img/downloads/kids-food.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Eldomilk 2+ Growing Up Milk Powder BIB After 2 Years To 3
                      Years Old 350 Gm</a
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
                    ><img src="img/downloads/kids-care.JPG" alt=""
                  /></a>
                  <div className="ps-product__badge out-stock">Out Of Stock</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Kidstar Baby Diaper Small 66pcs 3-8 Kg
                    </a>
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
              <h3>Women's Fashion</h3>
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
                <a href="#"
                  ><img src={sliderHomeHealthy1} alt="" /></a
                ><a href="#"
                  ><img src={sliderHomeHealthy2} alt="" /></a
                ><a href="#"
                  ><img src={sliderHomeHealthy3} alt=""
                /></a>
              </div>
            </div>
            <div className="ps-block__product-box">
              <div className="ps-product ps-product--simple">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"
                    ><img src="img/downloads/lotion1.jpg" alt=""
                  /></a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                    ><img src="img/downloads/dress1.webp" alt=""
                  /></a>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >Women's Ethnic 3 Pcs
                    </a>
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
                    ><img src="img/downloads/shampoo1.jpeg" alt=""
                  /></a>
                  <ul className="ps-product__actions">
                    <li>
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
                      >TRESemme Shampoo Keratin Smooth 580ml</a
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
                       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Cart" className="asside-card-drower-button"><i className="icon-bag2"></i></a>
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
    </div>

    {/* Start Aside Drower */}
    <button className="asside-card-drower asside-card-drower-button">
      <div className="asside-top">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <p><span>2</span> Item</p>
      </div>
      <div className="asside-body">
        <span>৳৫৫০.০০</span>
      </div>
    </button>
    <div className="asside-card-checkout">
      <div className="aside-cart-header">
        {/* <div className="ps-checkbox">
          <input type="checkbox" id="select-all" />
          <label for="select-all">Select All</label>
        </div> */}
        <h1>Your Cart</h1>
        <div className="close-btn">
          <i className="las la-times"></i>
        </div>
      </div>
      <div className="select-all-div">
        <div className="ps-checkbox">
          <input type="checkbox" id="select-all" />
          <label for="select-all">Select All</label>
        </div>
      </div>
      <div className="store-div">
        <div className="store">
          <div className="store-name">
            <div className="ps-checkbox">
              <input
                className="form-control"
                type="checkbox"
                id="store-1"
                name="brand"
              />
              <label for="store-1">ecstasy</label>
            </div>
            {/* <h1>ecstasy</h1> */}
          </div>
          <div className="product">
            <div className="product-name">
              <div className="ps-checkbox">
                <input
                  className="form-control"
                  type="checkbox"
                  id="brand-1"
                  name="brand"
                />
                <label for="brand-1">Bagpack</label>
              </div>
            </div>
            <div className="product-details">
              <div className="product-details-div-img product-details-div">
                <img src="./img/downloads/bagpack.jpeg" alt="" />
              </div>
              <div className="quantity product-details-div">
                <h6 className="quantity-title product-details-div-title">
                  quantity
                </h6>
                <div className="quantity-changer">
                  <i className="fas fa-minus"></i>
                  <p>2</p>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="variant product-details-div">
                <h6 className="variant-title product-details-div-title">variant</h6>
                <div className="color-block"></div>
              </div>
              <div className="size product-details-div">
                <h6 className="size-title product-details-div-title">size</h6>
                <p>XL</p>
              </div>
            </div>
            <div className="product-price-div">
              <div className="product-price">
                <div className="product-price-title">
                  <h6>price</h6>
                </div>
                <p>৳2000.00</p>
              </div>
              <div className="delivery-charge">
                <div className="delivery-charge-title">
                  <h6>delivery charge</h6>
                </div>
                <p>৳60.00</p>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-name">
              <div className="ps-checkbox">
                <input
                  className="form-control"
                  type="checkbox"
                  id="brand-2"
                  name="brand"
                />
                <label for="brand-2">shirt</label>
              </div>
            </div>
            <div className="product-details">
              <div className="product-details-div-img product-details-div">
                <img src="./img/downloads/shirt1.jpeg" alt="" />
              </div>
              <div className="quantity product-details-div">
                <h6 className="quantity-title product-details-div-title">
                  quantity
                </h6>
                <div className="quantity-changer">
                  <i className="fas fa-minus"></i>
                  <p>2</p>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              {/* <div className="variant product-details-div">
                <h6 className="variant-title product-details-div-title">variant</h6>
                <div className="color-block"></div>
              </div> */}
              <div className="size product-details-div">
                <h6 className="size-title product-details-div-title">size</h6>
                <p>L</p>
              </div>
            </div>
            <div className="product-price-div">
              <div className="product-price">
                <div className="product-price-title">
                  <h6>price</h6>
                </div>
                <p>৳2000.00</p>
              </div>
              <div className="delivery-charge">
                <div className="delivery-charge-title">
                  <h6>delivery charge</h6>
                </div>
                <p>৳60.00</p>
              </div>
            </div>
          </div>
          <div className="store-checkout-div">
            <div className="store-coupon">
              {/* <a href="#">apply for coupon</a> */}
              <input type="text" placeholder="apply for coupon" name="search" />
              <button type="submit">✓</button>
            </div>
            <div className="store-checkout-div-right">
              <div className="delivery-charge">
                <h6 className="delivery-charge-title">delivery-charge :</h6>
                <p>৳2060.00</p>
              </div>
              <div className="subtotal">
                <h6 className="subtotal-title">subtotal :</h6>
                <p>৳2060.00</p>
              </div>
              <div className="total">
                <h6 className="total-title">total :</h6>
                <p>৳2060.00</p>
              </div>
              <a href="checkout.html" className="store-checkout">checkout</a>
            </div>
          </div>
        </div>
      </div>
      <div className="store-div">
        <div className="store">
          <div className="store-name">
            <div className="ps-checkbox">
              <input
                className="form-control"
                type="checkbox"
                id="store-2"
                name="brand"
              />
              <label for="store-2">zara</label>
            </div>
            {/* <h1>ecstasy</h1> */}
          </div>
          <div className="product">
            <div className="product-name">
              <div className="ps-checkbox">
                <input
                  className="form-control"
                  type="checkbox"
                  id="brand-3"
                  name="brand"
                />
                <label for="brand-3">watch</label>
              </div>
            </div>
            <div className="product-details">
              <div className="product-details-div-img product-details-div">
                <img src={watch} alt="" />
              </div>
              <div className="quantity product-details-div">
                <h6 className="quantity-title product-details-div-title">
                  quantity
                </h6>
                <div className="quantity-changer">
                  <i className="fas fa-minus"></i>
                  <p>2</p>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="variant product-details-div">
                <h6 className="variant-title product-details-div-title">variant</h6>
                <div className="color-block"></div>
              </div>
              {/* <div className="size product-details-div">
                <h6 className="size-title product-details-div-title">size</h6>
                <p>XL</p>
              </div> */}
            </div>
            <div className="product-price-div">
              <div className="product-price">
                <div className="product-price-title">
                  <h6>price</h6>
                </div>
                <p>৳2000.00</p>
              </div>
              <div className="delivery-charge">
                <div className="delivery-charge-title">
                  <h6>delivery charge</h6>
                </div>
                <p>৳60.00</p>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-name">
              <div className="ps-checkbox">
                <input
                  className="form-control"
                  type="checkbox"
                  id="brand-4"
                  name="brand"
                />
                <label for="brand-4">Lipstick</label>
              </div>
            </div>
            <div className="product-details">
              <div className="product-details-div-img product-details-div">
                <img src={categoriesHome58} alt="" />
              </div>
              <div className="quantity product-details-div">
                <h6 className="quantity-title product-details-div-title">
                  quantity
                </h6>
                <div className="quantity-changer">
                  <i className="fas fa-minus"></i>
                  <p>2</p>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              {/* <div className="variant product-details-div">
                <h6 className="variant-title product-details-div-title">variant</h6>
                <div className="color-block"></div>
              </div> */}
              {/* <div className="size product-details-div">
                <h6 className="size-title product-details-div-title">size</h6>
                <p>L</p>
              </div> */}
            </div>
            <div className="product-price-div">
              <div className="product-price">
                <div className="product-price-title">
                  <h6>price</h6>
                </div>
                <p>৳2000.00</p>
              </div>
              <div className="delivery-charge">
                <div className="delivery-charge-title">
                  <h6>delivery charge</h6>
                </div>
                <p>৳60.00</p>
              </div>
            </div>
          </div>
          <div className="store-checkout-div">
            <div className="store-coupon">
              {/* <a href="#">apply for coupon</a> */}
              <input type="text" placeholder="apply for coupon" name="search" />
              <button type="submit">✓</button>
            </div>
            <div className="store-checkout-div-right">
              <div className="delivery-charge">
                <h6 className="delivery-charge-title">delivery-charge :</h6>
                <p>৳2060.00</p>
              </div>
              <div className="subtotal">
                <h6 className="subtotal-title">subtotal :</h6>
                <p>৳2060.00</p>
              </div>
              <div className="total">
                <h6 className="total-title">total :</h6>
                <p>৳2060.00</p>
              </div>
              <a href="checkout.html" className="store-checkout">checkout</a>
            </div>
          </div>
        </div>
      </div>
      <div className="all-ckeckout">
        <div className="delivery-charge">
          <h6 className="delivery-charge-title">delivery-charge:</h6>
          <p>৳200.00</p>
        </div>
        <div className="subtotal">
          <h6 className="subtotal-title">subtotal Amount:</h6>
          <p>৳2060.00</p>
        </div>
        <div className="total">
          <h6 className="total-title">total Amount:</h6>
          <p>৳2060.00</p>
        </div>
        <a href="checkout.html" className="store-checkout">checkout</a>
      </div>
    </div>
    {/* End Aside Drower */}
    {/*============ End Main Body Area =============*/}


    {/*============ Start Footer Area =============*/}
    <footer className="ps-footer">
      <div className="container">
        <div className="ps-footer__widgets">
          <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">
              <p>Call us 24/7</p>
              <h3>+88-02-8431092-3</h3>
              <p>
                Plot-314/A, Road-18, Block-E, Bashundhara Residential Area,<br />
                Dhaka-1229, Bangladesh
                <a href="info@shukran24seven.com">info@shukran24seven.com</a>
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
              <li><a href="#">FAQs</a></li>
            </ul>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Company</h4>
            <ul className="ps-list--link">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Affilate</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
              <li><a href="#">Our Press</a></li>
              <li><a href="checkout.html">Checkout</a></li>
              <li><a href="user-information.html">My account</a></li>
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
        </div> */}
        <div className="ps-footer__copyright">
          <p>© 2021 Shukran. All Rights Reserved</p>
          <p>
            <span>We Using Safe Payment For:</span
            ><a href="#"><img src="img/payment-method/01.jpg" alt="" /></a
            ><a href="#"><img src="img/payment-method/02.png" alt="" /></a
            ><a href="#"><img src={paymentMethod3} alt="" /></a
            ><a href="#"><img src="img/payment-method/03.jpg" alt="" /></a
            ><a href="#"><img src={paymentMethod5} alt="" /></a>
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
      tabindex="-1"
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
                <h1>VISION 2:1 Multimedia Speaker LOUD-808 Speaker</h1>
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
                    <a href="#"><i className="icon-heart"></i></a
                    ><a href="#"><i className="icon-chart-bars"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
            </>
        );
    }
}

export default Home;                