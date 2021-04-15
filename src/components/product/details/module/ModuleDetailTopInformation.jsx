import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../../elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;

    if (product.sale_price < product.price) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">&{product.sale_price}</del>$
                {product.price}
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">${product.price}</h4>;
    }
    return (
        <header>
            <h1>{product.name}</h1>
            <div className="ps-product__meta">
                <p>
                    Brand:
                    <Link to={`/vendor/${product?.vendor_id}`}>
                        <a className="ml-2 text-capitalize">{product?.vendor_name}</a>
                    </Link>
                </p>
                <div className="ps-product__rating">
                    <Rating count={product?.rating || 3}/>
                    <span>({product?.total_review || 1} review)</span>
                </div>
            </div>
            {priceView}
        </header>
    );
};

export default ModuleDetailTopInformation;
