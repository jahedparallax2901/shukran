import React from 'react';
import { Progress } from 'antd';
import { formatCurrency } from '../../utilities/product-helper';
import Rating from './Rating';
import CountDown from './CountDown';
import ThumbnailWithBadge from './ThumbnailWithBadge';
import { Link } from 'react-router-dom';

const ProductDealHot = ({ product }) => {
    return (
        <div className="ps-product--detail ps-product--hot-deal">
            <div className="ps-product__header">
                <ThumbnailWithBadge product={product} />
                <div className="ps-product__info">
                    <h5>Investor</h5>
                    <h3 className="ps-product__name">
                        <Link
                            to={`/product/${product.id}`}>
                            <a>{product.title}</a>
                        </Link>
                    </h3>

                    <div className="ps-product__meta">
                        {product.is_sale === true ? (
                            <h4 className="ps-product__price sale">
                                <del className="mr-2">
                                    ${formatCurrency(product.sale_price)}
                                </del>
                                ${formatCurrency(product.price)}
                            </h4>
                        ) : (
                            <h4 className="ps-product__price">
                                ${formatCurrency(product.price)}
                            </h4>
                        )}
                        <div className="ps-product__rating">
                            <Rating />
                            <span>(1 review)</span>
                        </div>
                        <div className="ps-product__specification">
                            <p>
                                Status:
                                <strong className="in-stock">In Stock</strong>
                            </p>
                        </div>
                    </div>
                    <div className="ps-product__expires">
                        <p>Expires In</p>
                        <CountDown
                            timeTillDate="12 31 2021, 6:00 am"
                            timeFormat="MM DD YYYY, h:mm a"
                        />
                    </div>
                    <div className="ps-product__processs-bar">
                        <Progress percent={60} showInfo={false} />
                        <p>
                            <strong>4/79</strong> Sold
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDealHot;
