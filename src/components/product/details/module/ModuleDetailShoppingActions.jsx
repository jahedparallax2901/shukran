import React, { useState } from "react";
import { FaBars, FaHeart } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  handleAddToCart,
  handleShowAuthModal,
  triggeredAddToCart,
} from "../../../../redux";

const ModuleDetailShoppingActions = ({
  product,
  extended = false,
  handleAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const { id, attributes } = product;

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    handleAddToCart(id, attributes.l);
  };

  const handleBuynow = (e) => {
    e.preventDefault();
    let tmp = product;
    tmp.quantity = quantity;
    // dispatch(addItem(tmp));
    setTimeout(function () {
      history.push("/account/checkout");
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
  console.log("product", product);
  if (!extended) {
    return (
      <div className="ps-product__shopping">
        <figure>
          <figcaption>Quantity</figcaption>
          <div className="form-group--number">
            <button className="up" onClick={(e) => handleIncreaseItemQty(e)}>
              <i className="fa fa-plus"></i>
            </button>
            <button className="down" onClick={(e) => handleDecreaseItemQty(e)}>
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
          onClick={(e) => handleAddItemToCart(e)}
        >
          Add to cart
        </button>
        <button className="ps-btn" href="#" onClick={(e) => handleBuynow(e)}>
          Buy Now
        </button>
        <div className="ps-product__actions">
          {/* <a href="#" onClick={(e) => handleAddItemToWishlist(e)}> */}
          <a href="#">
            <i>
              <FaHeart />
            </i>
          </a>
          {/* <a href="#" onClick={(e) => handleAddItemToCompare(e)}> */}
          <a href="#">
            <i>
              <FaBars />
            </i>
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ps-product__shopping extend">
        <div class="ps-product__variations">
          <figure>
            <figcaption>Color</figcaption>
            <div class="ps-variant ps-variant--color color--1">
              <span class="ps-variant__tooltip">Black</span>
            </div>
            <div class="ps-variant ps-variant--color color--2">
              <span class="ps-variant__tooltip"> Gray</span>
            </div>
          </figure>
          <figure>
            <figcaption>Size</figcaption>
            <div class="ps-variant ps-variant--color color--1">
              <span class="ps-variant__tooltip">Black</span>
            </div>
            <div class="ps-variant ps-variant--color color--2">
              <span class="ps-variant__tooltip"> Gray</span>
            </div>
            <div class="ps-variant ps-variant--color color--2">
              <span class="ps-variant__tooltip"> Gray</span>
            </div>
          </figure>
        </div>
        <div className="ps-product__btn-group">
          <figure>
            <figcaption>Quantity</figcaption>
            <div className="form-group--number">
              <button className="up" onClick={(e) => handleIncreaseItemQty(e)}>
                <i className="fa fa-plus"></i>
              </button>
              <button
                className="down"
                onClick={(e) => handleDecreaseItemQty(e)}
              >
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
            onClick={(e) => handleAddItemToCart(e)}
          >
            Add to cart
          </a>
          <div className="ps-product__actions">
            <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
              <i></i>
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

const mapStateToProps = (state) => {
  return {
    userIsLoggedIn: state.auth.userIsLoggedIn,
    userToken: state.auth.userData?.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleShowShoppingCart: () => dispatch(handleShowShoppingCart()),
    handleShowAuthModal: (cb) => dispatch(handleShowAuthModal(cb)),
    triggeredAddToCart: () => dispatch(triggeredAddToCart()),
    handleAddToCart: (product_id, item_id, quantity, token, cb, isBuyNow) =>
      dispatch(
        handleAddToCart(product_id, item_id, quantity, token, cb, isBuyNow)
      ),
    // getCartItems: (token) => dispatch(getCartItems(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleDetailShoppingActions);
