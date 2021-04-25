import React, { Component } from "react";
import { connect } from "react-redux";
import { handleShowShoppingCart } from "../../../../redux";

class FloatingCart extends Component {
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
                {shoppingCart?.cartSummery?.total_prdoucts ||
                  this.countTotalItems() ||
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
