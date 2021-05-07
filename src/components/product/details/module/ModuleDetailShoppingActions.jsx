import React, { useState } from "react";
import { FaBars, FaHeart } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { userData } from "../../../../helpers/authUtils";
import {
  getCartItems,
  handleAddToCart,
  handleShowAuthModal,
  triggeredAddToCart,
} from "../../../../redux";
import { getWishlistItems } from "../../../../redux/wishlist/wishlistActions";
import { processPostRequest } from "../../../../services/baseServices";

const ModuleDetailShoppingActions = ({
  product,
  selectedAttributeProduct,
  extended = false,
  handleAddToCart,
  shoppingCart,
  getCartItems,
  handleShowAuthModal,
  getWishlistItems,
  wishlist
}) => {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const { id } = product;

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    const newList = shoppingCart.cartProductlist;
    newList.push({
      product_id: id,
      item_id:
        selectedAttributeProduct?.id ||
        selectedAttributeProduct?.id,
      quantity: quantity,
    });
    handleAddToCart(
      newList,
      userData()?.token || "",
      async (data, isSuccess) => {
        if (isSuccess) {
          await getCartItems(() => {
            localStorage.setItem("cart_id", data.cart.id);
          });
          // this.props.handleShowShoppingCart();
        } else {
          toast.error("Something went wrong.");
        }
      },
      false
    );
  };

  const addItemToWishlist = (id) => {
    processPostRequest(`/add-to-wishlist/${id}`, {}, true)
      .then((res) => {
        if (res.status === 200) {
          getWishlistItems(()=>{
            toast.success(res.data.message)

          })
        } else if (res.status === 400) {
          console.log("response", res);
        }
      })
      .catch((err) => {
        console.log("error", err.message);
        toast.error(err.message);
      });
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
    const user = userData();
    if (!user) {
      handleShowAuthModal(() => {
        addItemToWishlist(product?.product_id || product?.id);
      });
    } else {
      addItemToWishlist(product?.product_id || product?.id);
    }
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
          onClick={(e) => handleAddItemToCart(e)}
        >
          Add to cart
        </button>
        <button className="ps-btn" href="#" onClick={(e) => handleBuynow(e)}>
          Buy Now
        </button>
        <div className="ps-product__actions">
          {/* <a href="#" onClick={(e) => handleAddItemToWishlist(e)}> */}
          <Link onClick={(e) => handleAddItemToWishlist(e)}>
            <i>
              <FaHeart className={wishlist.find(item=> item?.product?.id === id)? "filled": ""}/>
            </i>
          </Link>
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
          <button
            className="ps-btn ps-btn--black"
            onClick={(e) => handleAddItemToCart(e)}
          >
            Add to cart
          </button>
          <div className="ps-product__actions">
            <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
            <i>
              <FaHeart />
            </i>
            </a>
            <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
            <i>
              <FaBars />
            </i>
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
    shoppingCart: state.shoppingCart,
    wishlist: state.wishlist.wishListItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleShowShoppingCart: () => dispatch(handleShowShoppingCart()),
    handleShowAuthModal: (cb) => dispatch(handleShowAuthModal(cb)),
    triggeredAddToCart: () => dispatch(triggeredAddToCart()),
    handleAddToCart: (productList, token, cb, isBuyNow) =>
      dispatch(handleAddToCart(productList, token, cb, isBuyNow)),
    getCartItems: (cb) => dispatch(getCartItems(cb)),
    getWishlistItems: (cb) => dispatch(getWishlistItems(cb))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleDetailShoppingActions);
