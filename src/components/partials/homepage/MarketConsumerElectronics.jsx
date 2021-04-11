import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductSimple from "../../elements/product/ProductSimple";
import { carouselSingle } from "../../../utilities/carousel-helpers";
import { Link } from "react-router-dom";
import { clothingAndApparelProducts } from "../../../temp-data/homeData";
import slider1 from "../../../assets/img/slider/home-3/technology-1.jpg";
import slider2 from "../../../assets/img/slider/home-3/technology-2.jpg";
import slider3 from "../../../assets/img/downloads/technology-1.jpg";
// import { connect } from 'react-redux';

const MarketConsumerElectronics = ({ collectionSlug }) => {
  const [productItems, setProductItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const electronicsSlideImages = [
    { id: 1, src: slider1, link: "/shop" },
    { id: 2, src: slider2, link: "/shop" },
    { id: 3, src: slider3, link: "/shop" },
  ];

  async function getProducts() {
    setLoading(true);
    // const responseData = await getProductsByCollectionHelper(
    //     collectionSlug
    // );
    if (clothingAndApparelProducts.length > 0) {
      setProductItems(clothingAndApparelProducts);
      setTimeout(
        function () {
          setLoading(false);
        }.bind(this),
        250
      );
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  // Views
  let productItemsView;
  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return <ProductSimple product={item} key={item.id} />;
        }
      });
    } else {
      productItemsView = <p>No product found.</p>;
    }
  } else {
    productItemsView = <p>Loading...</p>;
  }
  return (
    <div className="ps-block--products-of-category">
      <div className="ps-block__categories">
        <h3>Consumer Electronics</h3>
        <ul>
          <li>
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
            <Link to="/shop/tv-television">
              <a>TV Television</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/air-conditions">
              <a>Air Condition</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/washing-machine">
              <a>Washing Machine</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/microware">
              <a>Microwave</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/refrigerator">
              <a>Refrigerator</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/office-electronic">
              <a>Office Electronic</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/car-electronic">
              <a>Car Electronic</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/sale-and-deal">
              <a>Sales & Deals</a>
            </Link>
          </li>
        </ul>
        <Link to="/shop" className="ps-block__more-link">
          View All
        </Link>
      </div>
      <div className="ps-block__slider">
        <Slider {...carouselSingle} className="ps-carousel">
          {electronicsSlideImages.map((item) => (
            <a>
              <img src={item.src} alt="martfury" />
            </a>
          ))}
        </Slider>
      </div>
      <div className="ps-block__product-box">{productItemsView}</div>
    </div>
  );
};
// export default connect((state) => state.collection)(MarketConsumerElectronics);
export default MarketConsumerElectronics;
