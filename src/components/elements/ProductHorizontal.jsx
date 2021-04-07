import React from 'react';
import {Link} from 'react-router-dom';
import {
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '../../utilities/product-helper';
import Rating from './Rating';

const ProductHorizontal = ({ product }) => {
    return (
        <div className="ps-product--horizontal">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            <div className="ps-product__content">
                <Link to={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.title}</a>
                </Link>
                <div className="ps-product__rating">
                    <Rating />
                </div>
                {StrapiProductPrice(product)}
            </div>
        </div>
    );
};

export default ProductHorizontal;
