import React, { Component } from 'react';
// import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import { formatCurrency } from '../../../utilities/product-helper';
import ProductDetailQuickView from '../../product/ProductDetailQuickView';
import noImage from '../../../assets/img/no_image.jpg';
import ModuleProductActions from './ModuleProductActions';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuickView: false,
        };
    }

    handleAddItemToCart = (e) => {
        e.preventDefault();
        const { product } = this.props;
        // this.props.dispatch(addItem(product));
    };

    handleAddItemToCompare = (e) => {
        e.preventDefault();
        const { product } = this.props;
        // this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = (e) => {
        e.preventDefault();
        const { product } = this.props;
        // this.props.dispatch(addItemToWishlist(product));
    };

    handleShowQuickView = (e) => {
        e.preventDefault();
        this.setState({ isQuickView: true });
    };

    handleHideQuickView = (e) => {
        e.preventDefault();
        this.setState({ isQuickView: false });
    };

    render() {
        const { product, currency } = this.props;
        let productBadge = null;
        // if (product.badge && product.badge !== null) {
        //     product.badge.map((badge) => {
        //         if (badge.type === 'sale') {
        //             return (productBadge = (
        //                 <div className="ps-product__badge">{badge.value}</div>
        //             ));
        //         } else if (badge.type === 'outStock') {
        //             return (productBadge = (
        //                 <div className="ps-product__badge out-stock">
        //                     {badge.value}
        //                 </div>
        //             ));
        //         } else {
        //             return (productBadge = (
        //                 <div className="ps-product__badge hot">
        //                     {badge.value}
        //                 </div>
        //             ));
        //         }
        //     });
        // }
        return (
            <div className="ps-product">
                <div className="ps-product__thumbnail">
                    <Link to={`/product/${product.id}`}>
                        <a>
                            <LazyLoad>
                                <img
                                    src={product?.single_image || noImage}
                                    alt="shukran"
                                />
                            </LazyLoad>
                        </a>
                    </Link>
                    {product.badge ? productBadge : ''}

                    <ModuleProductActions product={product}/>
                </div>
                
                <div className="ps-product__container">
                    {/* <Link to="/shop">
                        <a className="ps-product__vendor">Young Shop</a>
                    </Link> */}
                    <div className="ps-product__content">
                        <Link
                            to={`/product/${product.id}`}>
                            <a className="ps-product__title">{product?.name}</a>
                        </Link>
                        {/* <div className="ps-product__rating">
                            <Rating />
                            <span>{product.ratingCount}</span>
                        </div> */}
                        {product.sale_price < product.price ? (
                            <p className="ps-product__price sale">
                                {/* {currency ? currency.symbol : '$'} */}
                                ৳ {product.price}{' '}
                                <del className="ml-2">
                                    {/* {currency ? currency.symbol : '$'} */}
                                    ৳ {product.sale_price}
                                </del>
                            </p>
                        ) : (
                            <p className="ps-product__price">
                                {/* {currency ? currency.symbol : '$'} */}
                                ৳ {product.price}
                            </p>
                        )}
                    </div>
                </div>
                <Modal
                    title={product.title}
                    centered
                    footer={null}
                    width={1024}
                    onCancel={this.handleHideQuickView}
                    visible={this.state.isQuickView}>
                    <ProductDetailQuickView product={product} />
                </Modal>
            </div>
        );
    }
}
// const mapStateToProps = (state) => {
//     return state.setting;
// };
// export default connect(mapStateToProps)(Product);
export default Product;
