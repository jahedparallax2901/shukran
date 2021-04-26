import React from 'react';
import { Link } from 'react-router-dom';
import { StrapiProductThumbnail } from '../../../utilities/product-helper';
// import { StrapiProductThumbnail } from '~/utilities/product-helper';
const ProductCart = ({ product }) => {
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            <div className="ps-product__content">
                <Link to={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.name}</a>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;
