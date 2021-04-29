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
