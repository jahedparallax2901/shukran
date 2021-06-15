import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { RiShoppingBagLine } from "react-icons/ri";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import shukranLogo from "../../../assets/img/shukran-old.png";
import "../../../assets/scss/my-changes.scss";
import { userData } from "../../../helpers/authUtils";
import {
  getCartItems,
  handleAddToCart,
  handleClearCart,
  handleShowAuthModal,
  handleShowShoppingCart,
  handleSignOut,
} from "../../../redux";
import { handleClearWishlist } from "../../../redux/wishlist/wishlistActions";
import { Menu, Dropdown } from "antd";
import { BsBag } from "react-icons/bs";

class HeaderMobile extends Component {
  state = {
    isCartProcessing: false,
  };

  componentDidMount() {
    if (process.browser) {
      window.addEventListener("scroll", this.stickyHeader);
    }
  }

  stickyHeader = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const header = document.getElementById("headerStickyMobile");
    if (header !== null) {
      if (number >= 300) {
        header.classList.add("header--sticky");
      } else {
        header.classList.remove("header--sticky");
      }
    }
  };

  handleSignOut = () => {
    localStorage.clear();
    this.props.handleClearWishlist();
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
          if (data.cart) {
            await this.props.getCartItems(data.cart.id);
            this.setState({ isCartProcessing: false });
          }
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

    const menu = (
      <Menu>
        <Menu.Item>
          <Link to={"/account/my-account"} className="font-weight-bold">
            {userData()?.name}
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/account/my-account"}>My Account</Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            onClick={(e) => {
              e.preventDefault();
              this.handleSignOut();
            }}
          >
            Logout
          </Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <header
        className="header header--mobile"
        data-sticky="true"
        id="headerStickyMobile"
      >
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
                  <BsBag />
                  <span>
                    <i>{shoppingCart?.cartSummery?.total_prdoucts || 0}</i>
                  </span>
                </a>

                <div className="ps-cart__content">
                  {this.state.isCartProcessing ? (
                    <div className="loading-wrapper">
                      <Spinner animation="grow" />
                    </div>
                  ) : (
                    <>
                      {shoppingCart?.cartSummery?.total_prdoucts > 0 ? (
                        <>
                          <div className="ps-cart__items">
                            {shoppingCart.cartItems.map((item) => (
                              <>
                                {item?.store_product?.length > 0 &&
                                  item.store_product.map((store_item) => (
                                    <div
                                      key={store_item?.id}
                                      className="ps-product--cart-mobile"
                                    >
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
                              <Link
                                className="ps-btn"
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.props.handleShowShoppingCart();
                                }}
                              >
                                View Cart
                              </Link>
                              {/* <Link to="/checkout" className="ps-btn">
                                Checkout
                              </Link> */}
                            </figure>
                          </div>
                        </>
                      ) : (
                        <div className="loading-wrapper">
                          <h3>Your shopping cart is empty.</h3>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="ps-block--user-header ml-0 mb-2">
                {user?.name || user?.phone ? (
                  <div className="ps-block--user-header mr-0">
                    <a className="ps-block__left mr-2 header__extra">
                      <Dropdown overlay={menu} placement="bottomRight">
                        <i>
                          <BiUser className="cursor-pointer" />
                        </i>
                      </Dropdown>
                    </a>
                    <a className="ps-block__right">
                      {/* <br/>
                      <a onClick={() => this.handleSignOut()}>Logout</a> */}
                    </a>
                  </div>
                ) : (
                  <div className="ps-block--user-header mr-0">
                    <div className="ps-block__left mr-2">
                      <i>
                        <AiOutlineUser />
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
    handleClearWishlist: () => dispatch(handleClearWishlist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile);
