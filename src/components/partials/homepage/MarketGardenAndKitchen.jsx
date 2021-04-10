import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductSimple from "../../elements/product/ProductSimple";
import { carouselSingle } from "../../../utilities/carousel-helpers";
import { Link } from "react-router-dom";
import { clothingAndApparelProducts } from "../../../temp-data/homeData";
import slider1 from "../../../assets/img/slider/home-3/technology-1.jpg";
import slider2 from "../../../assets/img/slider/home-3/technology-2.jpg";
import slider3 from "../../../assets/img/downloads/technology-1.jpg";

const MarketGardenAndKitchen = ({ collectionSlug }) => {
  const [productItems, setProductItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const gardenAndKitchenSlideImages = [
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
        <h3>
          Home <br /> Garden & Kitchen
        </h3>
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
            <Link to="/shop/furniture">
              <a>Furniture</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/home-decor">
              <a>Home Decor</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/cookware">
              <a>Cookware</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/utensils-and-gadget">
              <a>Utensils & Gadget</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/garden-tools">
              <a>Garden Tools</a>
            </Link>
          </li>
          <li>
            <Link to="/shop/acessesories">
              <a>Acessesories</a>
            </Link>
          </li>
        </ul>
        <Link to="/shop">
          <a className="ps-block__more-link">View All</a>
        </Link>
      </div>
      <div className="ps-block__slider">
        <Slider {...carouselSingle} className="ps-carousel">
          {gardenAndKitchenSlideImages.map((item) => (
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
export default MarketGardenAndKitchen;
