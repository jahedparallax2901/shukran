import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { generateTempArray } from "../../../utilities/common-helpers";
import { Link } from "react-router-dom";
import ProductDealOfDay from "../../product/ProductDealOfDay";
import { carouselStandard } from "../../../utilities/carousel-helpers";
import SkeletonProduct from "../shared/SkeletonProduct";
import CountDownSimple from "../../elements/CountDownSimple";
import bike1 from "../../../assets/img/downloads/bike1.jpeg";
import { processGetRequest } from "../../../services/baseServices";
import ModuleProductActions from "../../elements/product/ModuleProductActions";

const DealOfTheDay = ({ deal_of_day_products }) => {
  const [productItems, setProductItems] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    processGetRequest("/homepage", { filter_type: 4 })
      .then((res) => {
        setProductItems(res.deal_of_day_products);
        setTimeout(
          function () {
            setLoading(false);
          }.bind(this),
          250
        );
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  // Views
  let productItemsView;
  if (!loading) {
    if (productItems && productItems.length > 0) {
      const slideItems = productItems.map((item) => (
        <ProductDealOfDay product={item} key={item.id} />
      ));
      productItemsView = (
        <Slider {...carouselStandard} className="ps-carousel outside">
          {slideItems}
          <div className="ps-product ps-product--inner px-3">
            <div className="ps-product__thumbnail">
              <Link to={"/product/1"}>
                <img src={bike1} alt="" />
              </Link>
              <div className="ps-product__badge out-stock">Out Of Stock</div>

              <ModuleProductActions />
            </div>
            <div className="ps-product__container">
              <p className="ps-product__price">
                ৳320.00<small>18% off</small>
              </p>
              <div className="ps-product__content">
                <Link className="ps-product__title" to={"/product/1"}>
                  Walton Fridge
                </Link>
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

          <div className="ps-product ps-product--inner px-3">
            <div className="ps-product__thumbnail">
              <Link to={"/product/1"}>
                <img src={bike1} alt="" />
              </Link>
              <div className="ps-product__badge out-stock">Out Of Stock</div>
              <ModuleProductActions />
            </div>
            <div className="ps-product__container">
              <p className="ps-product__price">
                ৳85.00<small>18% off</small>
              </p>
              <div className="ps-product__content">
                <Link className="ps-product__title" to={"/product/1"}>
                  Eldomilk 2+ Growing Up Milk Powder BIB After 2 Years To 3
                  Years Old 350 Gm
                </Link>
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
          <div className="ps-product ps-product--inner px-3">
            <div className="ps-product__thumbnail">
              <Link to={"/product/1"}>
                <img src="img/downloads/kids-care.JPG" alt="" />
              </Link>
              <div className="ps-product__badge out-stock">Out Of Stock</div>
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
                <Link className="ps-product__title" to={"/product/1"}>
                  Kidstar Baby Diaper Small 66pcs 3-8 Kg
                </Link>
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
        </Slider>
      );
    } else {
      productItemsView = <p>No product(s) found.</p>;
    }
  } else {
    const skeletons = generateTempArray(6).map((item) => (
      <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
        <SkeletonProduct />
      </div>
    ));
    productItemsView = <div className="row">{skeletons}</div>;
  }

  return (
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
                <CountDownSimple
                  timeTillDate="12 31 2021, 6:00 am"
                  timeFormat="MM DD YYYY, h:mm a"
                />
              </figure>
            </div>
          </div>
          <Link to="/shop">
            <a>View all</a>
          </Link>
        </div>
        <div className="ps-section__content">
          {productItemsView}
          {/*  <Slider
                        {...carouselStandard}
                        className="ps-carousel outside">
                        {products.map((product) => (
                            <Product product={product} key={product.id} />
                        ))}
                    </Slider>*/}
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
