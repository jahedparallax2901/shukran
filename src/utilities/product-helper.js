/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */

import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import noImage from "../assets/img/no_image.jpg";

export function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "৳1,");
  } else {
  }
}

export function getColletionBySlug(collections, slug) {
  if (collections.length > 0) {
    const result = collections.find((item) => item.slug === slug.toString());
    if (result !== undefined) {
      return result.products;
    } else {
      return [];
    }
  } else {
    return [];
  }
}

export function getItemBySlug(banners, slug) {
  if (banners.length > 0) {
    const banner = banners.find((item) => item.slug === slug.toString());
    if (banner !== undefined) {
      return banner;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function convertSlugsQueryString(payload) {
  let query = "";
  if (payload.length > 0) {
    payload.forEach((item) => {
      if (query === "") {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
  }
  return query;
}

export function StrapiProductBadge(product) {
  let view;
  if (product.badge && product.badge !== null) {
    view = product.badge.map((badge) => {
      if (badge.type === "sale") {
        return <div className="ps-product__badge">{badge.value}</div>;
      } else if (badge.type === "outStock") {
        return <div className="ps-product__badge out-stock">{badge.value}</div>;
      } else {
        return <div className="ps-product__badge hot">{badge.value}</div>;
      }
    });
  }
  return view;
}

export function StrapiProductPrice(product) {
  let view;
  if (product?.product?.sale_price > 0 || product?.sale_price > 0) {
    view = (
      <p className="ps-product__price sale">
        ৳{formatCurrency(product?.product?.sale_price || product?.sale_price)}
        <del className="ml-2">
          ৳{formatCurrency(product?.product?.price || product?.price)}
        </del>
      </p>
    );
  } else {
    console.log("price", product?.product?.price);
    view = (
      <p className="ps-product__price">
        {product?.product?.price ? (
          <>৳{formatCurrency(product.product.price)}</>
        ) : (
          <>৳{formatCurrency(0)}</>
        )}
      </p>
    );
  }
  return view;
}

export function StrapiProductPriceExpanded(product) {
  let view;
  if (product?.product?.sale_price > 0 || product?.sale_price > 0) {
    view = (
      <p className="ps-product__price sale">
        <del className="ml-2">
          ৳{formatCurrency(product?.product?.price || product?.price)}
        </del>
        ৳{formatCurrency(product?.product?.sale_price || product?.sale_price)}
        <small>
          {(product?.product?.price
            ? product.product.sale_price - product.product.price
            : product.sale_price - product.price) * 100}
          % off
        </small>
      </p>
    );
  } else {
    view = (
      <p className="ps-product__price">
        {product?.product?.price ? (
          <>৳{formatCurrency(product.product.price)}</>
        ) : (
          <>৳{formatCurrency(0)}</>
        )}
      </p>
    );
  }
  return view;
}

export function StrapiProductThumbnail(product, isDealProduct = false) {
  let view;
  let url;
  if (product?.product?.single_image) {
    url = product.product.single_image;
  } else if (product?.single_image) {
    url = product.single_image;
  } else {
    url = product?.thumbnail?.url;
  }
  if (
    product?.product?.single_image ||
    product?.single_image ||
    product.thumbnail
  ) {
    view = (
      <Link to={`/product/${product.product_id || product.id}`}>
        <a>
          <LazyLoad>
            <img src={url} alt={product?.product?.name || product.name} />
          </LazyLoad>
        </a>
      </Link>
    );
  } else {
    view = (
      <Link to={`/product/${product.product_id || product.id}`}>
        <a>
          <LazyLoad>
            <img src={noImage} alt="martfury" />
          </LazyLoad>
        </a>
      </Link>
    );
  }

  return view;
}
