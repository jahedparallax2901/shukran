import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductSimple from "../../elements/product/ProductSimple";
import { carouselSingle } from "../../../utilities/carousel-helpers";
import { Link } from "react-router-dom";
import { clothingAndApparelProducts } from "../../../temp-data/homeData";
import slider1 from "../../../assets/img/slider/home-3/technology-1.jpg";
import slider2 from "../../../assets/img/slider/home-3/technology-2.jpg";
import slider3 from "../../../assets/img/downloads/technology-1.jpg";

const MarketComputerAndTechnology = ({ collectionSlug }) => {
  const [productItems, setProductItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const computerAndTechnologySlideImages = [
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
        <h3>Computer & Techologies</h3>
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
            <Link to="/shop/women">
              <a>Desktop PC</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/men">
              <a>Laptop</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/smartphone">
              <a>Smartphones</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/tablets">
              <a>Tablets</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/storage-and-memory">
              <a>Storage & Memory</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/pc-component">
              <a>PC Component</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/game-accessories">
              <a>Game Accessories</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/sale-and-deal">
              <a>Sales & Deals</a>
            </Link>
          </li>
        </ul>
        <Link href="/shop">
          <a className="ps-block__more-link">View All</a>
        </Link>
      </div>
      <div className="ps-block__slider">
        <Slider {...carouselSingle} className="ps-carousel">
          {computerAndTechnologySlideImages.map((item) => (
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
export default MarketComputerAndTechnology;
