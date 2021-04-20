import React from 'react';
import { Link } from 'react-router-dom';

const ModuleProductDetailSpecification = ({product, selectedAttributeProduct}) => (
    <div className="ps-product__specification">
        <Link to="/page/blank">
            <a className="report">Report Abuse</a>
        </Link>
        <p>
            <strong>SKU:</strong> {selectedAttributeProduct?.sku}
        </p>
        {/* <p className="categories">
            <strong> Categories:</strong>
            <Link to="/shop">
                <a>Consumer Electronics</a>
            </Link>
            <Link to="/shop">
                <a>Refrigerator</a>
            </Link>
            <Link to="/shop">
                <a>Babies & Moms</a>
            </Link>
        </p>
        <p className="tags">
            <strong> Tags</strong>
            <Link to="/shop">
                <a>sofa</a>
            </Link>
            <Link to="/shop">
                <a>technologies</a>
            </Link>
            <Link to="/shop">
                <a>wireless</a>
            </Link>
        </p> */}
    </div>
);

export default ModuleProductDetailSpecification;
