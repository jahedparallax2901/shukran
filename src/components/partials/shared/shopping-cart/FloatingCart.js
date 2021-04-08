import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleShowShoppingCart } from '../../../../redux';

class FloatingCart extends Component {
    render() {
      const {isShowingShoppingCart, handleShowShoppingCart} = this.props;
        return (
          !isShowingShoppingCart ?
            <button onClick={handleShowShoppingCart} className="asside-card-drower asside-card-drower-button">
          <div className="asside-top">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <p>
              <span>2</span> Item
            </p>
          </div>
          <div className="asside-body">
            <span>৳৫৫০.০০</span>
          </div>
        </button> : <></>
        );
    }
}

const mapStateToProps = (state)=>{
  return{
    isShowingShoppingCart: state.shoppingCart.isShowingShoppingCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowShoppingCart: () => dispatch(handleShowShoppingCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FloatingCart);
