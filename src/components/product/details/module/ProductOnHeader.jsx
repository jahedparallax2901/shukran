import React from 'react';

import {
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '../../../../utilities/product-helper';

// import { useDispatch } from 'react-redux';
// import { addItem } from '~/store/cart/action';
import { Link } from 'react-router-dom';

const ProductOnHeader = ({ product }) => {
    // Views
    const priceView = StrapiProductPrice(product);
    const thumbnailImage = StrapiProductThumbnail(product);
    // const dispatch = useDispatch();

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        // dispatch(addItem(product));
    };
    return (
        <div className="ps-product--header-sticky">
            <div className="ps-product__thumbnail">{thumbnailImage}</div>
            <div className="ps-product__wrapper">
                <div className="ps-product__content">
                    <Link to={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                </div>
                <div className="ps-product__shopping">
                    {priceView}
                    <a
                        className="ps-btn"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e)}>
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductOnHeader;
