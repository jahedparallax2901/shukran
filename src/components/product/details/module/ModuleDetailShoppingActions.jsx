import React, { useState } from 'react';
import { FaBars, FaHeart } from 'react-icons/fa';
import { useHistory } from 'react-router';
// import { addItem } from '~/store/cart/action';
// import { addItemToCompare } from '~/store/compare/action';
// import { addItemToWishlist } from '~/store/wishlist/action';
// import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/router';

const ModuleDetailShoppingActions = ({ product, extended = false }) => {
    // const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const history = useHistory();
    // const Router = useRouter();

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        let tmp = product;
        tmp.quantity = quantity;
        // dispatch(addItem(tmp));
    };

    const handleBuynow = (e) => {
        e.preventDefault();
        let tmp = product;
        tmp.quantity = quantity;
        // dispatch(addItem(tmp));
        setTimeout(function () {
            history.push('/account/checkout');
        }, 1000);
    };

    const handleAddItemToCompare = (e) => {
        e.preventDefault();
        // dispatch(addItemToCompare(product));
    };

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        const { product } = this.props;
        // dispatch(addItemToWishlist(product));
    };

    const handleIncreaseItemQty = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };

    const handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    if (!extended) {
        return (
            <div className="ps-product__shopping">
                <figure>
                    <figcaption>Quantity</figcaption>
                    <div className="form-group--number">
                        <button
                            className="up"
                            onClick={(e) => handleIncreaseItemQty(e)}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button
                            className="down"
                            onClick={(e) => handleDecreaseItemQty(e)}>
                            <i className="fa fa-minus"></i>
                        </button>
                        <input
                            className="form-control"
                            type="text"
                            placeholder={quantity}
                            disabled
                        />
                    </div>
                </figure>
                <button
                    className="ps-btn ps-btn--black"
                    href="#"
                    onClick={(e) => handleAddItemToCart(e)}>
                    Add to cart
                </button>
                <button className="ps-btn" href="#" onClick={(e) => handleBuynow(e)}>
                    Buy Now
                </button>
                <div className="ps-product__actions">
                    {/* <a href="#" onClick={(e) => handleAddItemToWishlist(e)}> */}
                        <i>
                            <FaHeart/>
                        </i>
                    {/* </a> */}
                    {/* <a href="#" onClick={(e) => handleAddItemToCompare(e)}> */}
                        <i>
                            <FaBars/>
                        </i>
                    {/* </a> */}
                </div>
            </div>
        );
    } else {
        return (
            <div className="ps-product__shopping extend">
                <div className="ps-product__btn-group">
                    <figure>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                onClick={(e) => handleIncreaseItemQty(e)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={(e) => handleDecreaseItemQty(e)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e)}>
                        Add to cart
                    </a>
                    <div className="ps-product__actions">
                        <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                            <i className="icon-heart"></i>
                        </a>
                        <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
                            <i className="icon-chart-bars"></i>
                        </a>
                    </div>
                </div>
                <a className="ps-btn" href="#" onClick={(e) => handleBuynow(e)}>
                    Buy Now
                </a>
            </div>
        );
    }
};

export default ModuleDetailShoppingActions;
