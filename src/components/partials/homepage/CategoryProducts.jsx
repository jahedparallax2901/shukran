import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductSimple from "../../elements/product/ProductSimple";
import { carouselSingle } from "../../../utilities/carousel-helpers";
import { Link } from "react-router-dom";
// import { clothingAndApparelProducts } from "../../../temp-data/homeData";
import slider1 from "../../../assets/img/downloads/shirt-banner.jpg";
import slider2 from "../../../assets/img/slider/home-3/clothing-2.jpg";
import slider3 from "../../../assets/img/slider/home-3/clothing-3.jpg";

const CategoryProducts = ({ cat }) => {
  const [productItems, setProductItems] = useState(null);
  const {items, category_id, category, sliders} = cat;

  // Views
  let productItemsView;
    if (items && items.length > 0) {
      productItemsView = items.map((item, index) => {
        if (index < 6) {
          return <ProductSimple product={item} key={item.id} />;
        }
      });
    } else {
      productItemsView = <p>No product found.</p>;
    }
  

  return (
    <div className="ps-block--products-of-category">
      <div className="ps-block__categories">
        <h3>
          {category?.name || "Not exist"}
        </h3>
        <ul>
          {/* <li>
            <Link to="/shop/best-seller">
              <a>Best Seller</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/new-arrivals">
              <a>New Arrivals</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/women">
              <a>Women</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/men">
              <a>Men</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/girls">
              <a>Girls</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/boys">
              <a>Boys</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/baby">
              <a>Baby</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/sale-and-deal">
              <a>Sales & Deals</a>
            </Link>
          </li> */}
        </ul>
        <Link to="/shop" className="ps-block__more-link">
          View All
        </Link>
      </div>
      <div className="ps-block__slider">
        <Slider {...carouselSingle} className="ps-carousel">
          {sliders.map((item) => (
            <a>
              <img src={item.image} alt="martfury" />
            </a>
          ))}
        </Slider>
      </div>
      <div className="ps-block__product-box">{productItemsView}</div>
    </div>
  );
};

export default CategoryProducts;
