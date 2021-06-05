import React, { Component } from 'react';
import { dealOfTheDayProducts } from '../../../../temp-data/homeData';
import ProductOffline from '../../../elements/product/ProductOffline';
import ProductSimple from '../../../elements/product/ProductSimple';
import ProductWide from '../../../product/ProductWide';

// import ProductWide from '../../../elements/products/ProductWide';
// import Product from '../../../elements/products/Product';
// import { relatedProduct } from '../../../../public/static/data/product';
// import ProductOffline from '../../../elements/products/ProductOffline';

class VendorProducts extends Component {
    state = {
        listView: true,
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    render() {
        const viewMode = this.state.listView;
        const products = this.props?.products?.data;
        console.log("Products", products)

        return (
            <div className="ps-shopping vendor-shop vendor-shop-modify-right">
                <div className="ps-shopping__header ps-shopping__header-modify">
                    <p>
                        <strong>
                            {' '}
                            {products ? products.length : 0}
                        </strong>{' '}
                        Products found
                    </p>
                    {/* <div className="ps-shopping__actions ps-shopping__actions-shop">
                        <select
                            className="ps-select ps-select-modify"
                            data-placeholder="Sort Items">
                            <option>Sort by latest</option>
                            <option>Sort by popularity</option>
                            <option>Sort by average rating</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                        </select>
                        <div className="ps-shopping__view ps-shopping-view-modifiy">
                            <p>View</p>
                            <ul className="ps-tab-list">
                                <li
                                    className={
                                        viewMode === true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-grid"></i>
                                    </a>
                                </li>
                                <li
                                    className={
                                        viewMode !== true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-list4"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                <div className="ps-shopping__content">
                    {viewMode === true ? (
                        <div className="ps-shopping-product">
                            <div className="row">
                                {products && products.length > 0
                                    ? products.map((product) => (
                                        <div
                                            className="col-lg-3 col-md-4 col-sm-6 col-6 "
                                            key={product.id}>
                                            <ProductSimple product={product} key={product.id} />
                                            {console.log("store page", product)}
                                        </div>
                                    ))
                                    : ''}
                            </div>
                        </div>
                    ) : (
                        <div className="ps-shopping-product">
                            {products && products.length > 0
                                ? products.map((product) => (
                                    <ProductWide
                                        product={product}
                                        key={product.id}
                                    />
                                ))
                                : ''}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default VendorProducts;
