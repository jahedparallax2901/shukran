import React, { Component } from "react";
import "../assets/css/style.css";
import "../assets/css/change.css";
import "../assets/css/market-place-3.css";
import "../assets/css/market-place-1.css";
import "../assets/css/market-place-4.css";
import "../assets/css/autopart.css";
import Slider from "react-slick";

// import '../assets/css/select2.min.css';
import shukranLogo from "../assets/img/shukran.png";
import clothing7 from "../assets/img/products/clothing/7.jpg";
import categoriesHome58 from "../assets/img/categories/home-5/8.jpg";
import categoriesHome515 from "../assets/img/categories/home-5/15.jpg";
import homeTechnology1 from "../assets/img/slider/home-3/technology-1.jpg";
import homeTechnology2 from "../assets/img/slider/home-3/technology-2.jpg";
import downloadsTechnology1 from "../assets/img/downloads/technology-1.jpg";
import downloadsElectronics1 from "../assets/img/downloads/electronics-1.jpg";
import sliderHomeKitchen1 from "../assets/img/slider/home-3/kitchen-1.jpg";
import sliderHomeKitchen2 from "../assets/img/slider/home-3/kitchen-2.jpg";
import downloadsKitchen1 from "../assets/img/downloads/kitchen-1.jpg";
import sliderHomeClothing2 from "../assets/img/slider/home-3/clothing-2.jpg";
import sliderHomeClothing3 from "../assets/img/slider/home-3/clothing-3.jpg";
import sliderHomeHealthy1 from "../assets/img/slider/home-3/healthy-1.jpg";
import sliderHomeHealthy2 from "../assets/img/slider/home-3/healthy-2.jpg";
import sliderHomeHealthy3 from "../assets/img/slider/home-3/healthy-3.jpg";
import paymentMethod3 from "../assets/img/payment-method/3.jpg";
import paymentMethod5 from "../assets/img/payment-method/5.jpg";
import detailFullWidth1 from "../assets/img/products/detail/fullwidth/1.jpg";
import detailFullWidth2 from "../assets/img/products/detail/fullwidth/2.jpg";
import detailFullWidth3 from "../assets/img/products/detail/fullwidth/3.jpg";
import downloadBodyspray from "../assets/img/downloads/bodyspray.JPG";
import downloadsFridge1 from "../assets/img/downloads/fridge1.jpg";
import downloadsFridge2 from "../assets/img/downloads/fridge2.jpg";
import bike1 from "../assets/img/downloads/bike1.jpeg";
import camera from "../assets/img/downloads/camera.jpg";
import downloadsChair1 from "../assets/img/downloads/chair1.JPG";
import shirtBanner from "../assets/img/downloads/shirt-banner.jpg";
// import categoriesHome55 from '../assets/img/categories/home-5/5.jpg';
import {
  faBaby,
  faBars,
  faCamera,
  faCartArrowDown,
  faEye,
  faFemale,
  faLanguage,
  faLaptop,
  faList,
  faMedkit,
  faMobile,
  faMotorcycle,
  faSearch,
  faShoppingBag,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import MarketPlace3Banner from "../components/MartketPlace3Banner";
import MarketPlace3SearchTrending from "../components/MarketPlace3SearchTrending";
import {
  menuContents,
  navigationList,
  centerBanners,
  clothingAndApparelProducts,
  sideCategories,
  horizontalSliderProducts,
} from "../temp-data/homeData";
import ProductGroupDealHot from "../components/product/ProductGroupDealHot";
import { carouselStandard } from "../utilities/carousel-helpers";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3";
import NextArrow from "../components/elements/carousel/NextArrow";
import PrevArrow from "../components/elements/carousel/PrevArrow";
import Rating from "../components/elements/Rating";
import FloatingCart from "../components/partials/shared/shopping-cart/FloatingCart";
import MiniShoppinCart from "../components/partials/shopping-cart/MiniShoppinCart";
import { BsChevronDoubleUp } from "react-icons/bs";
import { FaChevronUp } from "react-icons/fa";
import { processGetRequest } from "../services/baseServices";

class Home extends Component {
  state = {
    categories: [],
    campaign_products: [],
    all_category: [],
    category_products: [],
    deal_of_day_products: [],
    top_products: [],
    top_sliders: [],
    top_sliders_box: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    processGetRequest("/homepage")
      .then((res) => {
        this.setState({
          categories: res.category,
          campaign_products: res.campaign_products,
          all_category: res.all_category,
          category_products: res.category_products,
          deal_of_day_products: res.deal_of_day_products,
          top_products: res.top_products,
          top_sliders: res.top_sliders,
          top_sliders_box: res.top_sliders_box,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const carouselSettings = {
      dots: false,
      infinite: true,
      speed: 2000,
      arrow: true,
      autoplay: true,
      autoplaySpeed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    console.log("State",this.state);
    return (
      <ContainerMarketPlace3 title={"Shukran"} categories={this.state.categories} all_category={this.state.all_category}>
        {/*============ Start Main Body Area =============*/}
        <div id="homepage-5">
          <MarketPlace3Banner categories={this.state.categories} top_sliders={this.state.top_sliders} top_sliders_box={this.state.top_sliders_box}/>

          <ProductGroupDealHot collectionSlug="Campaign" campaign_products={this.state.campaign_products} top_products={this.state.top_products}/>

          <MarketPlace3SearchTrending />

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
                        <li>
                          <span className="days">05</span>
                        </li>
                        <li>
                          <span className="hours">07</span>
                        </li>
                        <li>
                          <span className="minutes">46</span>
                        </li>
                        <li>
                          <span className="seconds">37</span>
                        </li>
                      </ul>
                    </figure>
                  </div>
                </div>
                <a href="shop-default.html">View all</a>
              </div>
              <div className="ps-section__content">
                <Slider {...carouselStandard}>
                  {/* <div
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
            > */}
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail">
                      <a href="product-default.html">
                        <img src={bike1} alt="" />
                      </a>
                      <div className="ps-product__badge">-16%</div>
                      <ul className="ps-product__actions">
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                          >
                            <i className="icon-bag2"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                          >
                            <i className="icon-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Whishlist"
                          >
                            <i className="icon-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="icon-chart-bars"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price sale">
                        ৳567.99 <del>৳670.00 </del>
                        <small>18% off</small>
                      </p>
                      <div className="ps-product__content">
                        <a
                          className="ps-product__title"
                          href="product-default.html"
                        >
                          Honda CBR150R Motor Bike - 150 cc
                        </a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                          <span>01</span>
                        </div>
                        <div
                          className="ps-product__progress-bar ps-progress"
                          data-value="72"
                        >
                          <div className="ps-progress__value">
                            <span></span>
                          </div>
                          <p>Sold:80</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail">
                      <a href="product-default.html">
                        <img src="img/downloads/baby-toy.JPG" alt="" />
                      </a>
                      <div className="ps-product__badge out-stock">
                        Out Of Stock
                      </div>
                      <ul className="ps-product__actions">
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                            className="asside-card-drower-button"
                          >
                            <i className="icon-bag2"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                          >
                            <i className="icon-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Whishlist"
                          >
                            <i className="icon-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="icon-chart-bars"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price">
                        ৳101.99<small>18% off</small>
                      </p>
                      <div className="ps-product__content">
                        <a
                          className="ps-product__title"
                          href="product-default.html"
                        >
                          Deer Rider
                        </a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                          <span>01</span>
                        </div>
                        <div
                          className="ps-product__progress-bar ps-progress"
                          data-value="96"
                        >
                          <div className="ps-progress__value">
                            <span></span>
                          </div>
                          <p>Sold:19</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail">
                      <a href="product-default.html">
                        <img src={downloadsChair1} alt="" />
                      </a>
                      <div className="ps-product__badge">-25%</div>
                      <ul className="ps-product__actions">
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                            className="asside-card-drower-button"
                          >
                            <i className="icon-bag2"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                          >
                            <i className="icon-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Whishlist"
                          >
                            <i className="icon-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="icon-chart-bars"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price sale">
                        ৳42.00 <del>৳60.00 </del>
                        <small>18% off</small>
                      </p>
                      <div className="ps-product__content">
                        <a
                          className="ps-product__title"
                          href="product-default.html"
                        >
                          Simple Plastice Chair In White Color
                        </a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                          <span>02</span>
                        </div>
                        <div
                          className="ps-product__progress-bar ps-progress"
                          data-value="77"
                        >
                          <div className="ps-progress__value">
                            <span></span>
                          </div>
                          <p>Sold:73</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail">
                      <a href="product-default.html">
                        <img src={downloadsFridge1} alt="" />
                      </a>
                      <div className="ps-product__badge out-stock">
                        Out Of Stock
                      </div>
                      <ul className="ps-product__actions">
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                            className="asside-card-drower-button"
                          >
                            <i className="icon-bag2"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                          >
                            <i className="icon-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Whishlist"
                          >
                            <i className="icon-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="icon-chart-bars"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price">
                        ৳320.00<small>18% off</small>
                      </p>
                      <div className="ps-product__content">
                        <a
                          className="ps-product__title"
                          href="product-default.html"
                        >
                          Walton Fridge
                        </a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                          <span>01</span>
                        </div>
                        <div
                          className="ps-product__progress-bar ps-progress"
                          data-value="4"
                        >
                          <div className="ps-progress__value">
                            <span></span>
                          </div>
                          <p>Sold:78</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail">
                      <a href="product-default.html">
                        <img src="img/downloads/kids-food.JPG" alt="" />
                      </a>
                      <div className="ps-product__badge out-stock">
                        Out Of Stock
                      </div>
                      <ul className="ps-product__actions">
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                            className="asside-card-drower-button"
                          >
                            <i className="icon-bag2"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                          >
                            <i className="icon-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Whishlist"
                          >
                            <i className="icon-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="icon-chart-bars"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price">
                        ৳85.00<small>18% off</small>
                      </p>
                      <div className="ps-product__content">
                        <a
                          className="ps-product__title"
                          href="product-default.html"
                        >
                          Eldomilk 2+ Growing Up Milk Powder BIB After 2 Years
                          To 3 Years Old 350 Gm
                        </a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                          <span>01</span>
                        </div>
                        <div
                          className="ps-product__progress-bar ps-progress"
                          data-value="25"
                        >
                          <div className="ps-progress__value">
                            <span></span>
                          </div>
                          <p>Sold:91</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail">
                      <a href="product-default.html">
                        <img src="img/downloads/kids-care.JPG" alt="" />
                      </a>
                      <div className="ps-product__badge out-stock">
                        Out Of Stock
                      </div>
                      <ul className="ps-product__actions">
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                            className="asside-card-drower-button"
                          >
                            <i className="icon-bag2"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                          >
                            <i className="icon-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Whishlist"
                          >
                            <i className="icon-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="icon-chart-bars"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price">
                        ৳92.00<small>18% off</small>
                      </p>
                      <div className="ps-product__content">
                        <a
                          className="ps-product__title"
                          href="product-default.html"
                        >
                          Kidstar Baby Diaper Small 66pcs 3-8 Kg
                        </a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                          <span>01</span>
                        </div>
                        <div
                          className="ps-product__progress-bar ps-progress"
                          data-value="69"
                        >
                          <div className="ps-progress__value">
                            <span></span>
                          </div>
                          <p>Sold:48</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail">
                      <a href="product-default.html">
                        <img src="img/downloads/shirt1.jpeg" alt="" />
                      </a>
                      <div className="ps-product__badge">-46%</div>
                      <ul className="ps-product__actions">
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                            className="asside-card-drower-button"
                          >
                            <i className="icon-bag2"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                          >
                            <i className="icon-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Whishlist"
                          >
                            <i className="icon-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="icon-chart-bars"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price sale">
                        ৳42.00 <del>৳60.00 </del>
                        <small>18% off</small>
                      </p>
                      <div className="ps-product__content">
                        <a
                          className="ps-product__title"
                          href="product-default.html"
                        >
                          Men's Full Sleeve Shirt
                        </a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                          <span>02</span>
                        </div>
                        <div
                          className="ps-product__progress-bar ps-progress"
                          data-value="52"
                        >
                          <div className="ps-progress__value">
                            <span></span>
                          </div>
                          <p>Sold:78</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail">
                      <a href="product-default.html">
                        <img src="img/downloads/shirt2.JPG" alt="" />
                      </a>
                      <div className="ps-product__badge">-46%</div>
                      <ul className="ps-product__actions">
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                            className="asside-card-drower-button"
                          >
                            <i className="icon-bag2"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                          >
                            <i className="icon-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Whishlist"
                          >
                            <i className="icon-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="icon-chart-bars"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price sale">
                        ৳42.00 <del>৳60.00 </del>
                        <small>18% off</small>
                      </p>
                      <div className="ps-product__content">
                        <a
                          className="ps-product__title"
                          href="product-default.html"
                        >
                          Men's Full Sleeve Shirt
                        </a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                          <span>02</span>
                        </div>
                        <div
                          className="ps-product__progress-bar ps-progress"
                          data-value="78"
                        >
                          <div className="ps-progress__value">
                            <span></span>
                          </div>
                          <p>Sold:20</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </Slider>
              </div>
            </div>
          </div>

          <div id="shop-now-home3">
            <div className="container">
              <div className="ps-section__content">
                <div className="home-categories-top">
                  <h3>All Categories</h3>
                </div>
                <Slider {...carouselStandard}>
                  {/* <div
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
          > */}
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
                  {/* </div> */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div id="homepage-3">
          <div className="">
            <div className="container">
              <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                  <h3>Clothing & Apparel</h3>
                  <ul>
                    {sideCategories.map((cat) => (
                      <li>
                        <a href="#">{cat.title}</a>
                      </li>
                    ))}
                  </ul>
                  <a className="ps-block__more-link" href="#">
                    View All
                  </a>
                </div>

                {/* Now working */}

                <div className="ps-block__slider">
                  <Slider {...carouselSettings}>
                    <div className="item">
                      <a href="#">
                        <img src={shirtBanner} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={sliderHomeClothing2} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={sliderHomeClothing3} alt="" />
                      </a>
                    </div>
                  </Slider>
                </div>

                <div className="ps-block__product-box">
                  {clothingAndApparelProducts.map((item) => (
                    <div className="ps-product ps-product--simple">
                      <div className="ps-product__thumbnail">
                        <a href="product-default.html">
                          <img src={item.img} alt="" />
                        </a>
                        <div className="ps-product__badge">{item.discount}</div>
                        <ul className="ps-product__actions">
                          {item.icons.map((icon) => (
                            <li>
                              <a
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#product-quickview"
                              >
                                <i>{icon.icon}</i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ps-product__container">
                        <div className="ps-product__content" data-mh="clothing">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
                          >
                            {item.title}
                          </a>
                          <div className="ps-product__rating">
                            <Rating />
                            <span>01</span>
                          </div>
                          <p className="ps-product__price sale">
                            ৳{item.discountedPrice} <del>৳{item.price} </del>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                  <h3>Computer & Techologies</h3>
                  <ul>
                    {sideCategories.map((cat) => (
                      <li>
                        <a href="#">{cat.title}</a>
                      </li>
                    ))}
                  </ul>
                  <a className="ps-block__more-link" href="#">
                    View All
                  </a>
                </div>
                <div className="ps-block__slider">
                  <Slider {...carouselSettings}>
                    <div className="item">
                      <a href="#">
                        <img src={homeTechnology1} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={homeTechnology2} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={downloadsTechnology1} alt="" />
                      </a>
                    </div>
                  </Slider>
                </div>

                <div className="ps-block__product-box">
                  {clothingAndApparelProducts.map((item) => (
                    <div className="ps-product ps-product--simple">
                      <div className="ps-product__thumbnail">
                        <a href="product-default.html">
                          <img src={item.img} alt="" />
                        </a>
                        <div className="ps-product__badge">{item.discount}</div>
                        <ul className="ps-product__actions">
                          {item.icons.map((icon) => (
                            <li>
                              <a
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#product-quickview"
                              >
                                <i>{icon.icon}</i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ps-product__container">
                        <div className="ps-product__content" data-mh="clothing">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
                          >
                            {item.title}
                          </a>
                          <div className="ps-product__rating">
                            <Rating />
                            <span>01</span>
                          </div>
                          <p className="ps-product__price sale">
                            ৳{item.discountedPrice} <del>৳{item.price} </del>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                  <h3>Consumer Electronics</h3>
                  <ul>
                    {sideCategories.map((cat) => (
                      <li>
                        <a href="#">{cat.title}</a>
                      </li>
                    ))}
                  </ul>
                  <a className="ps-block__more-link" href="#">
                    View All
                  </a>
                </div>
                <div className="ps-block__slider">
                  <Slider {...carouselSettings}>
                    <div className="item">
                      <a href="#">
                        <img src={downloadsElectronics1} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={homeTechnology2} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={downloadsTechnology1} alt="" />
                      </a>
                    </div>
                  </Slider>
                </div>

                <div className="ps-block__product-box">
                  {clothingAndApparelProducts.map((item) => (
                    <div className="ps-product ps-product--simple">
                      <div className="ps-product__thumbnail">
                        <a href="product-default.html">
                          <img src={item.img} alt="" />
                        </a>
                        <div className="ps-product__badge">{item.discount}</div>
                        <ul className="ps-product__actions">
                          {item.icons.map((icon) => (
                            <li>
                              <a
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#product-quickview"
                              >
                                <i>{icon.icon}</i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ps-product__container">
                        <div className="ps-product__content" data-mh="clothing">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
                          >
                            {item.title}
                          </a>
                          <div className="ps-product__rating">
                            <Rating />
                            <span>01</span>
                          </div>
                          <p className="ps-product__price sale">
                            ৳{item.discountedPrice} <del>৳{item.price} </del>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                  <h3>Mother & Baby</h3>
                  <ul>
                    {sideCategories.map((cat) => (
                      <li>
                        <a href="#">{cat.title}</a>
                      </li>
                    ))}
                  </ul>
                  <a className="ps-block__more-link" href="#">
                    View All
                  </a>
                </div>
                <div className="ps-block__slider">
                  <Slider {...carouselSettings}>
                    <div className="item">
                      <a href="#">
                        <img src={sliderHomeKitchen1} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={sliderHomeKitchen2} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={downloadsKitchen1} alt="" />
                      </a>
                    </div>
                  </Slider>
                </div>

                <div className="ps-block__product-box">
                  {clothingAndApparelProducts.map((item) => (
                    <div className="ps-product ps-product--simple">
                      <div className="ps-product__thumbnail">
                        <a href="product-default.html">
                          <img src={item.img} alt="" />
                        </a>
                        <div className="ps-product__badge">{item.discount}</div>
                        <ul className="ps-product__actions">
                          {item.icons.map((icon) => (
                            <li>
                              <a
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#product-quickview"
                              >
                                <i>{icon.icon}</i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ps-product__container">
                        <div className="ps-product__content" data-mh="clothing">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
                          >
                            {item.title}
                          </a>
                          <div className="ps-product__rating">
                            <Rating />
                            <span>01</span>
                          </div>
                          <p className="ps-product__price sale">
                            ৳{item.discountedPrice} <del>৳{item.price} </del>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                  <h3>Women's Fashion</h3>
                  <ul>
                    {sideCategories.map((cat) => (
                      <li>
                        <a href="#">{cat.title}</a>
                      </li>
                    ))}
                  </ul>
                  <a className="ps-block__more-link" href="#">
                    View All
                  </a>
                </div>
                <div className="ps-block__slider">
                  <Slider {...carouselSettings}>
                    <div className="item">
                      <a href="#">
                        <img src={sliderHomeHealthy1} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={sliderHomeHealthy2} alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src={sliderHomeHealthy3} alt="" />
                      </a>
                    </div>
                  </Slider>
                </div>

                <div className="ps-block__product-box">
                  {clothingAndApparelProducts.map((item) => (
                    <div className="ps-product ps-product--simple">
                      <div className="ps-product__thumbnail">
                        <a href="product-default.html">
                          <img src={item.img} alt="" />
                        </a>
                        <div className="ps-product__badge">{item.discount}</div>
                        <ul className="ps-product__actions">
                          {item.icons.map((icon) => (
                            <li>
                              <a
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#product-quickview"
                              >
                                <i>{icon.icon}</i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ps-product__container">
                        <div className="ps-product__content" data-mh="clothing">
                          <a
                            className="ps-product__title"
                            href="product-default.html"
                          >
                            {item.title}
                          </a>
                          <div className="ps-product__rating">
                            <Rating />
                            <span>01</span>
                          </div>
                          <p className="ps-product__price sale">
                            ৳{item.discountedPrice} <del>৳{item.price} </del>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Aside Drower */}

        {/* End Aside Drower */}
        {/*============ End Main Body Area =============*/}

        {/*============ Start Footer Area =============*/}

        <div id="back2top">
          <i>
            <FaChevronUp />
          </i>
        </div>
        <div className="ps-site-overlay"></div>
        <div id="loader-wrapper">
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
        <div className="ps-search" id="site-search">
          <a className="ps-btn--close" href="#"></a>
          <div className="ps-search__content">
            <form
              className="ps-form--primary-search"
              action="do_action"
              method="post"
            >
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
              />
              <button>
                <i className="aroma-magnifying-glass"></i>
              </button>
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
              <span className="modal-close" data-dismiss="modal">
                <i className="icon-cross2"></i>
              </span>
              <article className="ps-product--detail ps-product--fullwidth ps-product--quickview">
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
                      <p>
                        Brand:<a href="shop-default.html">Sony</a>
                      </p>
                      <div className="ps-product__rating">
                        <select className="ps-rating" data-read-only="true">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="2">5</option>
                        </select>
                        <span>(1 review)</span>
                      </div>
                    </div>
                    <h4 className="ps-product__price">৳36.78 – ৳56.99</h4>
                    <div className="ps-product__desc">
                      <p>
                        Sold By:
                        <a href="shop-default.html">
                          <strong> Go Pro</strong>
                        </a>
                      </p>
                      <ul className="ps-list--dot">
                        <li>Unrestrained and portable active stereo speaker</li>
                        <li>Free from the confines of wires and chords</li>
                        <li>20 hours of portable capabilities</li>
                        <li>
                          Double-ended Coil Cord with 3.5mm Stereo Plugs
                          Included
                        </li>
                        <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                      </ul>
                    </div>
                    <div className="ps-product__shopping">
                      <a className="ps-btn ps-btn--black" href="#">
                        Add to cart
                      </a>
                      <a className="ps-btn" href="#">
                        Buy Now
                      </a>
                      <div className="ps-product__actions">
                        <a href="#">
                          <i className="icon-heart"></i>
                        </a>
                        <a href="#">
                          <i className="icon-chart-bars"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </ContainerMarketPlace3>
    );
  }
}

export default Home;
