import React, { Component } from "react";
import shukranLogo from "../../../assets/img/shukran.png";
import clothing7 from "../../../assets/img/products/clothing/7.jpg";
import downloadBodyspray from "../../../assets/img/downloads/bodyspray.JPG";
import { menuContents } from "../../../temp-data/homeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faList,
  faListAlt,
  faShoppingBag,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { BsList, BsChevronDown, BsHeart, BsBag } from "react-icons/all";
import { handleShowAuthModal } from "../../../redux";
import { connect } from "react-redux";
import Menu from "../../elements/menu/Menu";

class HeaderStandard extends Component {
  render() {
    const { handleShowAuthModal, categories, all_category } = this.props;
    console.log("all_category", all_category);
    return (
      <header
        className="header header--standard header--market-place-1"
        dataSticky="true"
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
                <div className="menu__content">
                  <ul className="menu--dropdown">
                    {categories.map((item) => (
                      <li key={item.id}>
                        <a href={item.link}>
                          <i>{item.icon}</i>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {/* changed - end */}
                </div>
              </div>
              <a className="ps-logo" href="index.html">
                <img src={shukranLogo} alt="" />
              </a>
            </div>

            <div className="header__content-center">
              <form
                className="ps-form--quick-search"
                action="index.html"
                method="get"
              >
                <div className="form-group--icon">
                  <i>
                    <BsChevronDown />
                  </i>
                  <select className="form-control">
                    <option value="1">All</option>
                    <option value="1">Smartphone</option>
                    <option value="1">Sounds</option>
                    <option value="1">Technology</option>
                  </select>
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="I'm shopping for..."
                />
                <button>Search</button>
              </form>
            </div>
            <div className="header__content-right">
              <div className="header__actions">
                <a className="header__extra" href="#">
                  <i>
                    <BsHeart />
                  </i>
                  <span>
                    <i>0</i>
                  </span>
                </a>
                <div className="ps-cart--mini">
                  <a className="header__extra" href="#">
                    <i>
                      <BsBag />
                    </i>
                    <span>
                      <i>0</i>
                    </span>
                  </a>
                  <div className="ps-cart__content">
                    <div className="ps-cart__items">
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail">
                          <a href="#">
                            <img src={clothing7} alt="" />
                          </a>
                        </div>
                        <div className="ps-product__content">
                          <i className="ps-product__remove" href="#">
                            <FontAwesomeIcon icon={faTimes} />
                          </i>
                          <a href="product-default.html">
                            MVMTH classNameical Leather Watch In Black
                          </a>
                          <p>
                            <strong>Sold by:</strong> YOUNG SHOP
                          </p>
                          <small>1 x ৳59.99</small>
                        </div>
                      </div>
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail">
                          <a href="#">
                            <img src={downloadBodyspray} alt="" />
                          </a>
                        </div>
                        <div className="ps-product__content">
                          <i className="ps-product__remove" href="#">
                            <FontAwesomeIcon icon={faTimes} />
                          </i>
                          <a href="product-default.html">
                            Sleeve Linen Blend Caro Pane Shirt
                          </a>
                          <p>
                            <strong>Sold by:</strong> YOUNG SHOP
                          </p>
                          <small>1 x ৳59.99</small>
                        </div>
                      </div>
                    </div>

                    <div className="ps-cart__footer">
                      <h3>
                        Sub Total:<strong>৳59.99</strong>
                      </h3>
                      <figure>
                        <a className="ps-btn" href="#">
                          View Cart
                        </a>
                        <a className="ps-btn" href="checkout.html">
                          Checkout
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="ps-block--user-header mr-0">
                  <div className="ps-block__left">
                    <i>
                      <FontAwesomeIcon icon={faUser} />
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
                    <a href="my-account.html">Register</a>
                  </div>
                </div>
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
                  <div className="menu__content">
                    <Menu source={categories} className="menu menu--dropdown"/>
                  </div>
                </div>
              </div>
              <div className="navigation__center">
                <ul className="menu">
                  {all_category.slice(2, -1)?.map((cat) => (
                    <li>
                      <a href={cat.link || "#"}>{cat.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="navigation__right">
                <div className="ps-block--header-hotline inline">
                  <p>
                    <i className="icon-telephone"></i>Hotline:
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowAuthModal: () => dispatch(handleShowAuthModal()),
  };
};

export default connect(null, mapDispatchToProps)(HeaderStandard);
