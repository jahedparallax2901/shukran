import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../../elements/Rating";

const ModuleDetailTopInformation = ({ product }) => {
  // Views
  let priceView;

  if (
    product?.product?.sale_price < product?.product?.price ||
    product?.sale_price < product?.price
  ) {
    priceView = (
      <h4 className="ps-product__price sale">
        <del className="mr-2">
          &#2547;{product?.product?.sale_price || product.sale_price}
        </del>
        &#2547;{product?.product?.price || product.price}
      </h4>
    );
  } else {
    priceView = (
      <h4 className="ps-product__price">
        &#2547;
        {product?.product?.price > -1 ? product?.product?.price : product.price}
      </h4>
    );
  }
  return (
    <header>
      <h1>{product?.product?.name || product?.name}</h1>
      <div className="ps-product__meta">
        <p>
          Brand:
          <Link
            to={`/vendor/${product?.product?.vendor_id || product?.vendor_id}`}
          >
            <a className="ml-2 text-capitalize">
              {product?.vendor_name || product?.vendor_name}
            </a>
          </Link>
        </p>
        <div className="ps-product__rating">
          <Rating count={product?.product?.rating || 3} />
          <span>({product?.product?.total_review || 1} review)</span>
        </div>
      </div>
      {priceView}
    </header>
  );
};

export default ModuleDetailTopInformation;
