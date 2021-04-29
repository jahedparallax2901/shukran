import React from 'react';

import {
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '../../../utilities/product-helper';
import Rating from '../../elements/Rating';
import { Link } from 'react-router-dom';

const ProductSearchResult = ({ product }) => {
    return (
        <div className="ps-product ps-product--wide ps-product--search-result">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            <div className="ps-product__content">
                <Link to={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.name}</a>
                </Link>
                <div className="ps-product__rating">
                    {/* <Rating count={product.rating || 3}/> */}
                    {/* <span>{product?.total_review || 5}</span> */}
                </div>
                {StrapiProductPrice(product)}
            </div>
        </div>
    );
};
export default ProductSearchResult;
