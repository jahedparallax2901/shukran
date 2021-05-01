import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { carouselSingle } from "../../utilities/carousel-helpers";
import ProductDealHot from "../../components/elements/ProductDealHot";
import ProductHorizontal from "../../components/elements/ProductHorizontal";
import { dealOfTheDayProducts } from "../../temp-data/homeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { processGetRequest } from "../../services/baseServices";
const ProductGroupDealHot = ({ collectionSlug }) => {
  const sliderRef = useRef(null);
  const [productItems, setProductItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [top_products, setTop_products] = useState([]);
  const [campaign_products, setCampaign_products] = useState([]);

  async function getProducts() {
    // setProductItems(dealOfTheDayProducts)
    setLoading(true);
    processGetRequest("/homepage", { filter_type: 2 })
      .then((res) => {
        setTop_products(res.top_products);
        setCampaign_products(res.campaign_products);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  const handleCarouselPrev = (e) => {
    e.preventDefault();
    sliderRef.current.slickPrev();
  };

  const handleCarouselNext = (e) => {
    e.preventDefault();
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    getProducts();
  }, []);

  let productItemsView, relatedView;
  if (!loading) {
    if (campaign_products && campaign_products.length > 0) {
      const slideItems = campaign_products.map((item) => (
        <ProductDealHot product={item} key={item.id} />
      ));
      const relatedItems =
        top_products.length > 0 &&
        top_products.map((item, index) => {
          return <ProductHorizontal product={item} key={item.id} />;
        });
      productItemsView = (
        <Slider
          ref={(slider) => (sliderRef.current = slider)}
          {...carouselSingle}
          fade={false}
          className="ps-carousel"
        >
          {slideItems}
        </Slider>
      );
      relatedView = (
        <Slider {...carouselSingle}>
          {relatedItems.map((item, index) => {
            if (index % 4 === 0) {
              const newItem = relatedItems.slice(index, index + 5);
              return (
                <div className="ps-product-group" key="group-1">
                  {newItem}
                </div>
              );
            } 
            // else if (index === relatedItems.length - 1) {
            //   debugger;
            //   const newItem = relatedItems.slice(
            //     index,
            //     relatedItems.length - 1
            //   );
            //   return (
            //     <div className="ps-product-group" key="group-1">
            //       {newItem}
            //     </div>
            //   );
            // }
          })}
        </Slider>
      );
      console.log("relatedItems", relatedItems);
    } else {
      productItemsView = <p>No product found.</p>;
    }
  } else {
    productItemsView = <p>Loading...</p>;
  }

  return (
    <div className="ps-deal-hot">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="ps-block--deal-hot" data-mh="dealhot">
              <div className="ps-block__header">
                <h3>Campaign</h3>
                <div className="ps-block__navigation">
                  <a
                    className="ps-carousel__prev"
                    href="#"
                    onClick={(e) => handleCarouselPrev(e)}
                  >
                    <i>
                      <BsChevronLeft />
                    </i>
                  </a>
                  <a
                    className="ps-carousel__next"
                    href=".ps-carousel--deal-hot"
                    onClick={(e) => handleCarouselNext(e)}
                  >
                    <i>
                      <BsChevronRight />
                    </i>
                  </a>
                </div>
              </div>
              <div className="ps-product__content">{productItemsView}</div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <aside className="widget widget_best-sale" data-mh="dealhot">
              <h3 className="widget-title">Top 20 Best Seller</h3>
              <div className="widget__content">{relatedView}</div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGroupDealHot;
