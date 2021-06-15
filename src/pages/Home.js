import React, { Component } from "react";
import '../assets/scss/style.scss';
import '../assets/scss/market-place-3.scss';

import '../assets/scss/market-place-1.scss';
import "../assets/css/autopart.css";
import "../assets/css/change.css";
import "../assets/css/broken.css";


import Slider from "react-slick";
import { processGetRequest } from "../services/baseServices";
// import '../assets/css/select2.min.css';
import categoriesHome58 from "../assets/img/categories/home-5/8.jpg";
import categoriesHome515 from "../assets/img/categories/home-5/15.jpg";
import detailFullWidth1 from "../assets/img/products/detail/fullwidth/1.jpg";
import detailFullWidth2 from "../assets/img/products/detail/fullwidth/2.jpg";
import detailFullWidth3 from "../assets/img/products/detail/fullwidth/3.jpg";
import downloadsFridge1 from "../assets/img/downloads/fridge1.jpg";
import bike1 from "../assets/img/downloads/bike1.jpeg";
import camera from "../assets/img/downloads/camera.jpg";
import downloadsChair1 from "../assets/img/downloads/chair1.JPG";
// import categoriesHome55 from '../assets/img/categories/home-5/5.jpg';
import TopBanner from "../components/partials/homepage/TopBanner";
import SearchTrending from "../components/partials/homepage/SearchTrending";
import ProductGroupDealHot from "../components/product/ProductGroupDealHot";
import { carouselStandard } from "../utilities/carousel-helpers";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3";
import NextArrow from "../components/elements/carousel/NextArrow";
import PrevArrow from "../components/elements/carousel/PrevArrow";
import { FaBabyCarriage, FaChevronUp, FaShoppingBag } from "react-icons/fa";
import ModuleProductActions from "../components/elements/product/ModuleProductActions";
import Rating from "../components/elements/Rating";
import CategoryProducts from "../components/partials/homepage/CategoryProducts";
import AllCategories from "../components/partials/homepage/AllCategories";
import DealOfTheDay from "../components/partials/homepage/DealOfTheDay";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BackTop } from "antd";

class Home extends Component {
  state = {
    all_category: [],
    deal_of_day_products: [],
    category_products: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    processGetRequest("/homepage", { filter_type: 4 })
      .then((res) => {
        this.setState({
          deal_of_day_products: res.deal_of_day_products,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
    processGetRequest("/homepage", { filter_type: 6 })
      .then((res) => {
        this.setState({
          category_products: res.category_products,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <ContainerMarketPlace3
        title={"Shukran"}
        requiredTopPadding={true}
      >
        {/*============ Start Main Body Area =============*/}
          <TopBanner />
          <ProductGroupDealHot collectionSlug="Campaign" />
          {/* <SearchTrending /> */}
          <DealOfTheDay deal_of_day_products={this.state.deal_of_day_products}/>
          <AllCategories/>
          

        <div id="homepage-3">
          <div className="mt-5">
            <div className="container">
              {
                this.state.category_products ? this.state.category_products.map(cat=>(
                  <CategoryProducts cat={cat} key={cat?.id}/>
                )) : <p>No category exist</p>
              }
            </div>
          </div>
        </div>

        {/*============ End Main Body Area =============*/}

        {/*============ Start Footer Area =============*/}

        {/* <div id="back2top">
          <i>
            <FaChevronUp />
          </i>
        </div> */}
        <div className="ps-site-overlay"></div>
        <div id="loader-wrapper">
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
        {/* <div className="ps-search" id="site-search">
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
        </div> */}
       
      </ContainerMarketPlace3>
    );
  }
}

export default Home;
