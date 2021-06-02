import React from "react";
import { Progress } from "antd";
import { formatCurrency } from "../../utilities/product-helper";
import Rating from "./Rating";
import CountDown from "./CountDown";
import ThumbnailWithBadge from "./ThumbnailWithBadge";
import { Link } from "react-router-dom";
import downloadsFridge1 from "../../assets/img/downloads/fridge1.jpg";
import moment from "moment";

const ProductDealHot = ({ product }) => {
  return (
    <div className="ps-product--detail ps-product--hot-deal">
      <div className="ps-product__header">
        <ThumbnailWithBadge product={product} />
        <div className="ps-product__info">
          {/* <h5>Investor</h5> */}
          <h3 className="ps-product__name">
            <Link to={`/product/${product.product_id}`}>
              <a>{product?.product?.name}</a>
            </Link>
          </h3>

          <div className="ps-product__meta">
            {product?.product?.price - product?.product?.sale_price > 0 ? (
              <h4 className="ps-product__price sale">
                &#2547;{product?.product?.sale_price}
                <del className="mr-2 ml-2">
                  &#2547;{product?.product?.price}
                </del>
              </h4>
            ) : (
              <h4 className="ps-product__price">
                ৳ {product?.product?.price}
              </h4>
            )}
            <div className="ps-product__rating">
              {/* <Rating count={2}/>
                            <span>(1 review)</span> */}
            </div>
            <div className="ps-product__specification">
              <p>
                Status:&nbsp;
                {product?.product?.quantity > 0 ? (
                  <strong className="in-stock">In Stock</strong>
                ) : (
                  <strong className="in-stock">Out of Stock</strong>
                )}
              </p>
            </div>
          </div>
          <div className="ps-product__expires">
            {moment(product?.end_date) > moment() ? (
              <>
                <p>Expires In</p>
                <CountDown
                  timeTillDate={product?.end_date}
                  timeFormat="MM DD YYYY, h:mm a"
                />
              </>
            ) : (
              <h2>Expired</h2>
            )}
          </div>
          <div className="ps-product__processs-bar">
            <Progress percent={60} showInfo={false} />
            <p>
              <strong>4/79</strong> Sold
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDealHot;
