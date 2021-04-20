import React, { Component } from "react";
import { connect } from "react-redux";
import { handleShowShoppingCart } from "../../../../redux";

class FloatingCart extends Component {
  render() {
    const {
      isShowingShoppingCart,
      handleShowShoppingCart,
      shoppingCart,
    } = this.props;
    return (
      !isShowingShoppingCart && (
        <button
          onClick={handleShowShoppingCart}
          className="asside-card-drower asside-card-drower-button"
        >
          <div className="asside-top">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <p>
              <span>
                {shoppingCart?.cartSummery?.total_items ||
                  shoppingCart?.cartItems?.length ||
                  0}
              </span>{" "}
              Item
            </p>
          </div>
          <div className="asside-body">
            <span>৳{shoppingCart.total_amount || 0}</span>
          </div>
        </button>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isShowingShoppingCart: state.shoppingCart.isShowingShoppingCart,
    shoppingCart: state.shoppingCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowShoppingCart: () => dispatch(handleShowShoppingCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FloatingCart);
