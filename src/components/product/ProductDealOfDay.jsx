import React from "react";
// import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import {
  StrapiProductBadge,
  StrapiProductPriceExpanded,
  StrapiProductThumbnail,
} from "../../utilities/product-helper";
import ModuleProductActions from "../elements/product/ModuleProductActions";
import Rating from "../elements/Rating";
import ModuleProductProgressbar from "../partials/shared/ModuleProductProgressbar";

const ProductDealOfDay = ({ product }) => {
  console.log();
  return (
    <div className="ps-product ps-product--inner px-3">
      <div className="ps-product__thumbnail">
        {StrapiProductThumbnail(product, true)}
        {product.product.quantity <= 0 ? (
          <div className="ps-product__badge out-stock">Out Of Stock</div>
        ) : (
          <div className="ps-product__badge">
            -{(product.product.sale_price - product.product.price) * 100}%
          </div>
        )}
        {StrapiProductBadge(product)}
        <ModuleProductActions />
      </div>
      <div className="ps-product__container">
        <div className="ps-product__content">
          {StrapiProductPriceExpanded(product)}

          <Link to={`/product/${product.product_id}`}>
            <a className="ps-product__title">{product.product.name}</a>
          </Link>
          <div className="ps-product__rating">
            <Rating />
            <span>{product.ratingCount}</span>
          </div>
          <ModuleProductProgressbar product={product} />
        </div>
      </div>
    </div>
  );
};

// export default connect()(ProductDealOfDay);
export default ProductDealOfDay;
