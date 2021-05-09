import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { doubleProduct } from "../../temp-data/product";
import { carouselStandard } from "../../utilities/carousel-helpers";
import NextArrow from "../elements/carousel/NextArrow";
import PrevArrow from "../elements/carousel/PrevArrow";
import Product from "./module/Product";

const RelatedProduct = ({ product, boxed, layout }) => {
  // const [productItems, setProductItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // async function getProducts() {
    
  //   setTimeout(
  //     function () {
  //       setLoading(false);
  //     }.bind(this),
  //     250
  //   );
  // }

  useEffect(() => {
    // setProductItems(
    //   product?.relateds
    // );
    // getProducts();
  }, [product]);

  // console.log("productItems", productItems)

  const carouselFullwidth = {
    dots: false,
    infinite: product?.relateds && product?.relateds.length >= 7 ? true : false,
    speed: 750,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    lazyload: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          infinite: product?.relateds && product?.relateds.length >= 6 ? true : false,
          slidesToShow: 6,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
        },
      },

      {
        breakpoint: 1366,
        settings: {
          infinite: product?.relateds && product?.relateds.length >= 5 ? true : false,
          slidesToShow: 5,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          infinite: product?.relateds && product?.relateds.length >= 4 ? true : false,
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: product?.relateds && product?.relateds.length >= 4 ? true : false,
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: product?.relateds && product?.relateds.length >= 3 ? true : false,
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: product?.relateds && product?.relateds.length >= 2 ? true : false,
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  console.log("product", product);

  // Views
  let carouselView;
  if (!loading) {
    if (product?.relateds?.length>0) {
      if ((layout = "fullwidth")) {
        carouselView = (
          <Slider {...carouselFullwidth} className="ps-carousel outside">
            {product?.relateds?.map((item, index) => {
              if (index < 8) {
                return <Product product={item?.related_product} key={item?.id || index} />;
              }
            })}
          </Slider>
        );
      } else {
        carouselView = (
          <Slider {...carouselStandard} className="ps-carousel outside">
            {product?.relateds?.map((item, index) => {
              if (index < 8) {
                return <Product product={item} key={item.id} />;
              }
            })}
          </Slider>
        );
      }
    } else {
      carouselView = <p>No product found.</p>;
    }
  } else {
    carouselView = <p>Loading...</p>;
  }

  return (
    <div
      className={`ps-section--default ps-related-products ${boxed === true ? "boxed" : ""
        }`}
    >
      <div className="ps-section__header">
        <h3>Related products</h3>
      </div>
      <div className="ps-section__content">{carouselView}</div>
    </div>
  );
};

// export default connect((state) => state.collection)(RelatedProduct);
export default RelatedProduct;
