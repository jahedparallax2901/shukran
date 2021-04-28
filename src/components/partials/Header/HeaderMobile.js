import {
  faSearch,
  faShoppingBag,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clothing7 from "../../../assets/img/products/clothing/7.jpg";
import downloadBodyspray from "../../../assets/img/downloads/bodyspray.JPG";
import shukranLogo from "../../../assets/img/shukran.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  getCartItems,
  handleAddToCart,
  handleClearCart,
  handleShowAuthModal,
  handleShowShoppingCart,
  handleSignOut,
} from "../../../redux";
import { connect } from "react-redux";
import { userData } from "../../../helpers/authUtils";
import { Spinner } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import '../../../assets/scss/my-changes.scss';
import SearchHeader from "../../header/SearchHeader";

class HeaderMobile extends Component {
  state = {
    isCartProcessing: false,
  }

  handleSignOut = () => {
    localStorage.clear();
    this.props.handleSignOut();
    this.props.handleClearCart();
  };

  handleItemDelete = (e, product_id, item_id) => {
    this.setState({ isCartProcessing: true });
    const newProductlist = this.props.shoppingCart.cartProductlist.filter(
      (item) => item.item_id !== item_id || item.product_id !== product_id
    );
    
    this.props.handleAddToCart(
      newProductlist,
      userData()?.token || "",
      async (data, isSuccess) => {
        if (isSuccess) {
          await this.props.getCartItems(data.cart.id);
          this.setState({ isCartProcessing: false });

          // this.props.handleShowShoppingCart();
        } else {
          localStorage.removeItem("cart_id");
          this.props.handleClearCart();
          this.setState({ isCartProcessing: false });
        }
      },
      false
    );
  };
  render() {
    const { user, handleShowAuthModal, shoppingCart } = this.props;
    return (
      <header className="header header--mobile" data-sticky="true">
        <div className="navigation--mobile">
          <div className="navigation__left">
            <Link to="/" className="ps-logo">
              <img src={shukranLogo} alt="" />
            </Link>
          </div>
          <div className="navigation__right">
            <div className="header__actions">
              <div className="ps-cart--mini">
                <a className="header__extra" href="#">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <span>
                    <i>5</i>
                  </span>
                </a>

                <div className="ps-cart__content">
                  {this.state.isCartProcessing ? (
                    <div className="loading-wrapper">
                      <Spinner animation="grow" />
                    </div>
                  ) : (
                    <>
                      {shoppingCart.cartItems?.length > 0 ? (
                        <>
                          <div className="ps-cart__items">
                            {shoppingCart.cartItems.map((item) => (
                              <>
                                {item?.store_product &&
                                  item.store_product.map((store_item) => (
                                    <div className="ps-product--cart-mobile">
                                      <div className="ps-product__thumbnail">
                                        <a href="#">
                                          <img
                                            src={
                                              store_item.product.single_image
                                            }
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div className="ps-product__content">
                                        <i className="ps-product__remove">
                                          <AiOutlineClose
                                            onClick={(e) =>
                                              this.handleItemDelete(
                                                e,
                                                store_item.product_attribute
                                                  .product_id,
                                                store_item.product_attribute.id
                                              )
                                            }
                                          />
                                        </i>
                                        <Link
                                          to={`/product/${store_item.product_id}`}
                                        >
                                          {store_item.product.name}
                                        </Link>
                                        <p>
                                          <strong>Sold by:</strong> {item.name}
                                        </p>
                                        <small>
                                          {store_item.quantity} x ৳
                                          {store_item.sub_total_amount}
                                        </small>
                                      </div>
                                    </div>
                                  ))}
                              </>
                            ))}
                          </div>

                          <div className="ps-cart__footer">
                            <h3>
                              Sub Total:
                              <strong>
                                ৳{shoppingCart?.cartSummery?.total_amount || 0}
                              </strong>
                            </h3>
                            <figure>
                              <a
                                className="ps-btn"
                                href="#"
                                onClick={handleShowShoppingCart}
                              >
                                View Cart
                              </a>
                              <Link to="/checkout" className="ps-btn">
                                Checkout
                              </Link>
                            </figure>
                          </div>
                        </>
                      ) : (
                        <div className="loading-wrapper">
                          <h3>No Items in cart</h3>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="ps-block--user-header">
                {user?.phone ? (
                  <div className="ps-block--user-header mr-0">
                    <div className="ps-block__left mr-2">
                      <i>
                        <FontAwesomeIcon icon={faUser} />
                      </i>
                    </div>
                    <div>
                      <Link to="/account/my-account">{user.phone}</Link>
                      <br/>
                      <a onClick={() => this.handleSignOut()}>Logout</a>
                    </div>
                  </div>
                ) : (
                  <div className="ps-block--user-header mr-0">
                    <div className="ps-block__left mr-2">
                      <i>
                        <FontAwesomeIcon icon={faUser} />
                      </i>
                    </div>
                    <div>
                      <a
                        onClick={handleShowAuthModal}
                        data-toggle="modal"
                        data-target="#login-modal-center"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="ps-search--mobile">
        {/* <SearchHeader /> */}
          <form
            className="ps-form--search-mobile"
            action="index.html"
            method="get"
          >
            <div className="form-group--nest">
              <input
                className="form-control"
                type="text"
                placeholder="Search something..."
              />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.userData,
    shoppingCart: state.shoppingCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowAuthModal: () => dispatch(handleShowAuthModal()),
    handleSignOut: () => dispatch(handleSignOut()),
    getCartItems: () => dispatch(getCartItems()),
    handleAddToCart: (productList, token, cb, isBuyNow) =>
      dispatch(handleAddToCart(productList, token, cb, isBuyNow)),
    handleShowShoppingCart: () => dispatch(handleShowShoppingCart()),
    handleClearCart: () => dispatch(handleClearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile);
