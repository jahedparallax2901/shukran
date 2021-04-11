import React from 'react';
import {Link} from 'react-router-dom';
import {
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '../../utilities/product-helper';
import Rating from './Rating';

const ProductHorizontal = ({ product }) => {
    console.log("ProductHorizontal",product);
    return (
        <div className="ps-product--horizontal">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            <div className="ps-product__content">
                <Link to={`/product/${product?.product_id}`}>
                    <a className="ps-product__title">{product?.product?.name}</a>
                </Link>
                <div className="ps-product__rating">
                    <Rating count={2}/>
                </div>
                {StrapiProductPrice(product)}
            </div>
        </div>
    );
};

export default ProductHorizontal;
