import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Drawer } from "antd";
import PanelMenu from "../panel/PanelMenu";
import { navigationList } from "../../../temp-data/homeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
  faList,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { GrClose } from "react-icons/gr";
import PanelCategories from "../panel/PanelCategories";
import { connect } from "react-redux";
import {
  handleHideShoppingCart,
  handleShowShoppingCart,
} from "../../../redux/shopping-cart/shoppingCartActions";
import PanelSearch from "../panel/PanelSearch";

class NavigationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false,
    };
  }

  handleDrawerClose = () => {
    this.setState({
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false,
    });
  };

  handleShowMenuDrawer = () => {
    this.setState({
      menuDrawer: !this.state.menuDrawer,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false,
    });
  };

  handleShowCartDrawer = () => {
    this.props.handleShowShoppingCart();
    this.setState({
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false,
    });
  };

  handleShowSearchDrawer = () => {
    this.setState({
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: !this.state.searchDrawer,
      categoriesDrawer: false,
    });
  };

  handleShowCategoriesDrawer = () => {
    this.setState({
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: !this.state.categoriesDrawer,
    });
  };

  render() {
    const {
      menuDrawer,
      searchDrawer,
      cartDrawer,
      categoriesDrawer,
    } = this.state;

    return (
      <div className="navigation--list">
        <Drawer
          className="ps-panel--mobile"
          placement="right"
          closable={false}
          onClose={this.handleDrawerClose}
          visible={this.state.menuDrawer}
        >
          <div className="ps-panel--wrapper">
            <div className="ps-panel__header">
              <h3>Menu</h3>
              <span
                className="ps-panel__close"
                onClick={this.handleDrawerClose}
              >
                <GrClose />
              </span>
            </div>
            <div className="ps-panel__content">
              <PanelMenu />
            </div>
          </div>
        </Drawer>
        {/* <Drawer
          className="ps-panel--mobile"
          placement="right"
          closable={false}
          onClose={this.handleDrawerClose}
          visible={false}
        >
          <div className="ps-panel--wrapper">
            <div className="ps-panel__header">
              <h3>Shopping Cart</h3>
              <span
                className="ps-panel__close"
                onClick={this.handleDrawerClose}
              >
                <GrClose />
              </span>
            </div>
            <div className="ps-panel__content"> <PanelCartMobile /> </div>
          </div>
        </Drawer> */}
        <Drawer
          className="ps-panel--mobile"
          placement="right"
          closable={false}
          onClose={this.handleDrawerClose}
          visible={this.state.searchDrawer}
        >
          <div className="ps-panel--wrapper">
            <div className="ps-panel__header">
              <h3>Search</h3>
              <span
                className="ps-panel__close"
                onClick={this.handleDrawerClose}
              >
                <GrClose />
              </span>
            </div>
            <div className="ps-panel__content">
              <PanelSearch />
            </div>
          </div>
        </Drawer>
        <Drawer
          className="ps-panel--mobile"
          placement="right"
          closable={false}
          onClose={this.handleDrawerClose}
          visible={this.state.categoriesDrawer}
        >
          <div className="ps-panel--wrapper">
            <div className="ps-panel__header">
              <h3>Categories</h3>
              <span
                className="ps-panel__close"
                onClick={this.handleDrawerClose}
              >
                <GrClose />
              </span>
            </div>
            <div className="ps-panel__content">
              <PanelCategories />
            </div>
          </div>
        </Drawer>
        <div className="navigation__content">
          {/* {navigationList.map((item) => (
              <a
                key={item.id}
                className="navigation__item ps-toggle--sidebar"
                href={item.link}
              >
                {item.icon}
                <span> {item.title}</span>
              </a>
            ))} */}
          <a
            className={`navigation__item ${
              menuDrawer === true ? "active" : ""
            }`}
            onClick={this.handleShowMenuDrawer}
          >
            <FontAwesomeIcon icon={faBars} />
            <span> Menu</span>
          </a>
          <a
            className={`navigation__item ${
              categoriesDrawer === true ? "active" : ""
            }`}
            onClick={this.handleShowCategoriesDrawer}
          >
            <FontAwesomeIcon icon={faList} />
            <span> Categories</span>
          </a>
          <a
            className={`navigation__item ${
              searchDrawer === true ? "active" : ""
            }`}
            onClick={this.handleShowSearchDrawer}
          >
            <FontAwesomeIcon icon={faSearch} />
            <span> Search</span>
          </a>
          <a
            className={`navigation__item ${
              cartDrawer === true ? "active" : ""
            }`}
            onClick={this.handleShowCartDrawer}
          >
            <FontAwesomeIcon icon={faCartArrowDown} />
            <span> Cart</span>
          </a>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return state.setting;
// };

const mapDispatchToProps = (dispatch) => {
  return {
    handleHideShoppingCart: () => dispatch(handleHideShoppingCart()),
    handleShowShoppingCart: () => dispatch(handleShowShoppingCart()),
  };
};
export default connect(null, mapDispatchToProps)(NavigationList);
