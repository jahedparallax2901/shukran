import React from 'react';
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Modal } from "antd";
import { GrClose } from "react-icons/gr";
import ProductDetailQuickView from "../../product/ProductDetailQuickView";
import {
    StrapiProductBadge,
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '../../../utilities/product-helper';

import ModuleProductActions from './ModuleProductActions';
import Rating from '../Rating';
import { Link } from 'react-router-dom';

const ProductSimple = ({ product }) => {
    const [isQuickView, setIsQuickView] = useState(false);

    const handleShowQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(true);
    };

    const handleHideQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(false);
    };
    return (
        <div className="ps-product ps-product--simple">
            <div class="ps-product__badge">
                <i>
                    <FaRegHeart />
                </i>
            </div>
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
                {StrapiProductBadge(product)}
                {/* <ModuleProductActions product={product} /> */}
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    <Link to={`/product/${product?.product_id || product?.id}`}>
                        <a className="ps-product__title">{product?.product?.name || product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        {/* <Rating />
                        <span>{product.ratingCount}</span> */}
                    </div>
                    {StrapiProductPrice(product)}
                </div>
            </div>
            <div className="product-add-to-cart-hover" onClick={handleShowQuickView}>Add to Cart</div>
            <Modal
                title="Quickview"
                centered
                footer={null}
                width={1024}
                onCancel={(e) => handleHideQuickView(e)}
                visible={isQuickView}
                bodyStyle={{ overflowY: "visible" }}
                closeIcon={
                    <i>
                        <GrClose />
                    </i>
                }
            >
                <ProductDetailQuickView id={product?.product_id || product?.id} />
            </Modal>
        </div>
    );
};

export default ProductSimple;
