import React from "react";
import { Link } from "react-router-dom";
import {
  StrapiProductBadge,
  StrapiProductPrice,
  StrapiProductThumbnail,
} from "../../../utilities/product-helper";
import ModuleProductActions from "../../elements/product/ModuleProductActions";
import Rating from "../../elements/Rating";

// import {
//     StrapiProductBadge,
//     StrapiProductPrice,
//     StrapiProductThumbnail,
// } from '~/utilities/product-helper';
// import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';

const Product = ({ product }) => {
  // Views
  const priceView = StrapiProductPrice(product);
  const thumbnailImage = StrapiProductThumbnail(product);
  const badgeView = StrapiProductBadge(product);

  return (
    <div className="ps-product">
      <div className="ps-product__thumbnail">
        {thumbnailImage}
        {badgeView}
        <ModuleProductActions product={product} />
      </div>
      <div className="ps-product__container">
        <Link to="/shop">
          <a className="ps-product__vendor">{product?.store_name}</a>
        </Link>
        <Link to={`/product/${product.id}`}>
          <a className="ps-product__title">{product?.name || product.title}</a>
        </Link>
        <div className="ps-product__content">
          {/* <div className="ps-product__rating">
            <Rating />
            <span>02</span>
          </div> */}
          {priceView}
        </div>
        <div className="ps-product__content hover">
          <Link to={`/product/${product.id}`}>
            <a className="ps-product__title">{product.title}</a>
          </Link>
          {priceView}
        </div>
      </div>
    </div>
  );
};

export default Product;
