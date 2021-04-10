import React from 'react';
import {
    StrapiProductBadge,
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '../../../utilities/product-helper';

import ModuleProductActions from './ModuleProductActions';
import Rating from '../Rating';
import { Link } from 'react-router-dom';

const ProductSimple = ({ product }) => {
    console.log(product);
    return (
        <div className="ps-product ps-product--simple">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
                {StrapiProductBadge(product)}
                <ModuleProductActions />
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    <Link href="/product/[pid]">
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>{product.ratingCount}</span>
                    </div>
                    {StrapiProductPrice(product)}
                </div>
            </div>
        </div>
    );
};

export default ProductSimple;
