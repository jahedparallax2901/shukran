import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Dropdown } from 'antd';
import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { AiOutlineClose, BiUser, BsBag, BsHeart, BsList, FiPhone } from "react-icons/all";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import shukranLogo from "../../../assets/img/shukran-old.png";
import { userData } from "../../../helpers/authUtils";
import {
  getCartItems,
  handleAddToCart,
  handleClearCart,
  handleShowAuthModal,
  handleShowShoppingCart,
  handleSignOut
} from "../../../redux";
import { getWishlistItems, handleClearWishlist } from "../../../redux/wishlist/wishlistActions";
import { processGetRequest } from "../../../services/baseServices";
import { menuItems } from "../../../temp-data/homeData";
// import Menu from "../../elements/menu/Menu";
import SearchHeader from "../../header/SearchHeader.jsx";

class HeaderStandard extends Component {
  state = {
    categories: [],
    isCartProcessing: false,
  };

  componentDidMount() {
    if (process.browser) {
      window.addEventListener("scroll", this.stickyHeader);
    }

    this.setState({ isLoading: true });
    const cart_id = localStorage.getItem("cart_id");
    const authData = userData();

    processGetRequest("/generic-info", { info_type: 1 })
      .then((res) => {
        this.setState({
          categories: res.categories,
        });
      })
      .catch((err) => console.log(err));

    cart_id && this.props.getCartItems(cart_id);

    authData?.token && this.props.getWishlistItems();
  }

  stickyHeader = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const header = document.getElementById("headerSticky");
    if (header !== null) {
      if (number >= 300) {
        header.classList.add("header--sticky");
      } else {
        header.classList.remove("header--sticky");
      }
    }
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
        if (data.cart) {
          if(data.cart){
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

  handleSignOut = () => {
    localStorage.clear();
    this.props.handleClearWishlist();
    this.props.handleSignOut();
    this.props.handleClearCart();
  };

  countTotalItems = () => {
    let count = 0;
    this.props?.shoppingCart?.cartItems?.map((cart_item) => {
      cart_item.store_product.map((store_item) => {
        count += 1;
      });
    });

    return count;
  };

  render() {
    const { categories } = this.state;
    const {
      handleShowAuthModal,
      user,
      shoppingCart,
      handleShowShoppingCart,
      handleAddToCart,
      wishlist,
    } = this.props;

    const menu = (
      <Menu>
        <Menu.Item>
          <Link to={"/account/my-account"} className="font-weight-bold">
            {userData()?.name}
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/account/my-account"}>
            My Account
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link onClick={(e) => {e.preventDefault();this.handleSignOut()}}>
            Logout
          </Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <header
        className="header header--standard header--market-place-1"
        id="headerSticky"
      >
        <div className="header__content">
          <div className="container">
            <div className="header__content-left">
              <div className="menu--product-categories">
                <div className="menu__toggle">
                  <i>
                    <BsList />
                  </i>
                  <span> Shop by Department</span>
                </div>

                {/* changed */}
                {/* <div className="menu__content">
                  <div className="menu__content">
                    <Menu source={categories} className="menu menu--dropdown" />
                  </div>
                </div> */}
              </div>
              <Link className="ps-logo" to="/">
                <img src={shukranLogo} alt="" />
              </Link>
            </div>
            <div className="header__content-center">
              <SearchHeader />
            </div>
            <div className="header__content-right">
              <div className="header__actions">
                {
                  userData()?.token && <Link className="header__extra" onClick={(e) =>{
                    e.preventDefault();
                    if(userData()?.token){
                      this.props.history.push('/account/wishlist')
                    }
                  }}>
                    <i>
                      <BsHeart />
                    </i>
                    <span>
                      <i>{wishlist?.length || 0}</i>
                    </span>
                  </Link>
                }
                
                <div className="ps-cart--mini">
                  <a className="header__extra" href="#">
                    <i>
                      <BsBag />
                    </i>
                    <span>
                      <i>
                        {shoppingCart?.cartSummery?.total_prdoucts ||
                          this.countTotalItems() ||
                          0}
                      </i>
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
                                      <div key={store_item?.id} className="ps-product--cart-mobile">
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
                                                  store_item.product_attribute
                                                    .id
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
                                            <strong>Sold by:</strong>{" "}
                                            {item.name}
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
                                  ৳
                                  {shoppingCart?.cartSummery?.total_amount || 0}
                                </strong>
                              </h3>
                              <figure>
                                <Link
                                  className="ps-btn btn-block"
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleShowShoppingCart();
                                  }}
                                >
                                  View Cart
                                </Link>
                                {/* <a className="ps-btn" href="checkout.html">
                                  Checkout
                                </a> */}
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
                {user?.name || user?.phone ? (
                  <div className="ps-block--user-header mr-0">
                    <div className="ps-block__left">
                    <Dropdown overlay={menu} placement="bottomRight">
                    <i>
                        <BiUser className="cursor-pointer"/>
                      </i>
      </Dropdown>
                      
                    </div>
                    
                  </div>
                ) : (
                  <div className="ps-block--user-header mr-0">
                    <div className="ps-block__left">
                      <i>
                      <BiUser />
                      </i>
                    </div>
                    <div className="ps-block__right">
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

        <nav className="navigation">
          <div className="container">
            <div className="header-navigation">
              <div className="navigation__left">
                <div className="menu--product-categories">
                  <div className="menu__toggle">
                    <i>
                      <BsList />
                    </i>
                    <span> Shop by Department</span>
                  </div>
                  {/* <div className="menu__content">
                    <Menu source={categories} className="menu menu--dropdown" />
                  </div> */}
                </div>
              </div>
              <div className="navigation__center">
                <ul className="menu">
                  {menuItems.map((cat) => (
                    <li key={cat.id}>
                      <Link to={cat.url || "#"}>{cat.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="navigation__right">
                <div className="ps-block--header-hotline inline">
                  <p>
                    <i>
                    <FiPhone/>
                    </i>
                    Hotline:
                    <strong>+880-234-5678</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.userData,
    shoppingCart: state.shoppingCart,
    wishlist: state.wishlist.wishListItems,
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
    getWishlistItems: (cb) => dispatch(getWishlistItems(cb)),
    handleClearWishlist: ()=> dispatch(handleClearWishlist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderStandard));
