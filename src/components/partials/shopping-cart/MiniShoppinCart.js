import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import watch from "../../../assets/img/downloads/watch.JPG";
import categoriesHome58 from "../../../assets/img/categories/home-5/8.jpg";
import bagPack from "../../../assets/img/downloads/bagpack.jpeg";
import shirt from "../../../assets/img/downloads/shirt1.jpeg";
import {
  getCartItems,
  handleAddToCart,
  handleHideShoppingCart,
} from "../../../redux";
import { connect } from "react-redux";
import { TiTimesOutline } from "react-icons/ti";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { userData } from "../../../helpers/authUtils";
import { toast } from "react-toastify";

class MiniShoppinCart extends Component {
  handleItemDelete = (e, product_id, item_id) => {
    const newProductlist = this.props.shoppingCart.cartProductlist.filter(
      (item) => item.item_id !== item_id || item.product_id !== product_id
    );
    console.log(
      "newProductlist",
      this.props.shoppingCart.cartProductlist,
      newProductlist,
      product_id,
      item_id
    );
    this.props.handleAddToCart(
      newProductlist,
      userData()?.token || "",
      async (data, isSuccess) => {
        if (isSuccess) {
          await this.props.getCartItems(data.cart.id);
          // this.props.handleShowShoppingCart();
        } else {
          toast.error("Something went wrong.");
        }
      },
      false
    );
  };

  render() {
    const {
      isShowingShoppingCart,
      handleHideShoppingCart,
      shoppingCart,
    } = this.props;
    return (
      <div
        className={`asside-card-checkout ${isShowingShoppingCart && "active"}`}
      >
        <div className="aside-cart-header">
          {/* <div className="ps-checkbox">
        <input type="checkbox" id="select-all" />
        <label for="select-all">Select All</label>
      </div> */}
          <h1>Your Cart</h1>
          <div className="close-btn" onClick={handleHideShoppingCart}>
            <i>
              <AiOutlineClose />
            </i>
          </div>
        </div>
        {shoppingCart?.cartItems?.length > 0 ? (
          <>
            <div className="select-all-div">
              <div className="ps-checkbox">
                <input type="checkbox" id="select-all" />
                <label for="select-all">Select All</label>
              </div>
            </div>

            <div className="store-div-container">
              {shoppingCart.cartItems.map((cart_items) => (
                <div className="store-div">
                  <div className="store">
                    <div className="store-name">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="store-1"
                          name="brand"
                        />
                        <label for="store-1">
                          {cart_items?.store?.name || ""}
                        </label>
                      </div>
                      {/* <h1>ecstasy</h1> */}
                    </div>
                    {cart_items?.store_product &&
                      cart_items.store_product.map((store_item) => (
                        <div className="product">
                          <div className="product-name d-flex justify-content-between">
                            <div className="ps-checkbox">
                              <input
                                className="form-control"
                                type="checkbox"
                                id="brand-1"
                                name="brand"
                              />
                              <label for="brand-1">
                                {store_item.product.name}
                              </label>
                            </div>
                            <AiOutlineClose
                              onClick={(e) =>
                                this.handleItemDelete(
                                  e,
                                  store_item.product_attribute.product_id,
                                  store_item.product_attribute
                                    .attribute_type === 2
                                    ? 0
                                    : store_item.product_attribute.id
                                )
                              }
                            />
                          </div>
                          <div className="product-details">
                            <div className="product-details-div-img product-details-div">
                              <img
                                src={store_item.product.single_image}
                                alt=""
                              />
                            </div>
                            <div className="quantity product-details-div">
                              <h6 className="quantity-title product-details-div-title">
                                quantity
                              </h6>
                              <div className="quantity-changer">
                                <i>
                                  <AiOutlineMinus />
                                </i>
                                <p>{store_item.quantity}</p>
                                <i>
                                  <AiOutlinePlus />
                                </i>
                              </div>
                            </div>

                            {store_item.attribute_item && (
                              <div className="size product-details-div">
                                <h6 className="size-title product-details-div-title">
                                  {store_item?.attribute_item?.attribute.name}
                                </h6>
                                <p>{store_item?.attribute_item?.value}</p>
                              </div>
                            )}
                          </div>
                          <div className="product-price-div">
                            <div className="product-price">
                              <div className="product-price-title">
                                <h6>price</h6>
                              </div>
                              <p>৳{store_item?.total_amount}</p>
                            </div>
                            <div className="delivery-charge">
                              <div className="delivery-charge-title">
                                <h6>delivery charge</h6>
                              </div>
                              <p>৳{store_item?.delivery_charge || 0}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                    <div className="store-checkout-div">
                      <div className="store-coupon">
                        {/* <a href="#">apply for coupon</a> */}
                        <input
                          type="text"
                          placeholder="apply for coupon"
                          name="search"
                        />
                        <button type="submit">✓</button>
                      </div>
                      <div className="store-checkout-div-right">
                        <div className="delivery-charge">
                          <h6 className="delivery-charge-title">
                            delivery-charge :
                          </h6>
                          <p>৳{cart_items?.delivery_charge || 0}</p>
                        </div>
                        <div className="subtotal">
                          <h6 className="subtotal-title">subtotal :</h6>
                          <p>৳{cart_items?.sub_total_amount || 0}</p>
                        </div>
                        <div className="total">
                          <h6 className="total-title">total :</h6>
                          <p>৳{cart_items.total_amount || 0}</p>
                        </div>
                        <a href="checkout.html" className="store-checkout">
                          checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="all-checkout">
              <div class="store-coupon">
                <input
                  type="text"
                  placeholder="apply for coupon"
                  name="search"
                />
                <button type="submit">✓</button>
              </div>
              <div className="delivery-charge">
                <h6 className="delivery-charge-title">delivery-charge:</h6>
                <p>৳{shoppingCart?.cartSummery?.delivery_charge || 0}</p>
              </div>
              <div className="subtotal">
                <h6 className="subtotal-title">subtotal Amount:</h6>
                <p>৳{shoppingCart?.cartSummery?.sub_total_amount || 0}</p>
              </div>
              <div className="total">
                <h6 className="total-title">total Amount:</h6>
                <p>৳{shoppingCart?.cartSummery?.total_amount || 0}</p>
              </div>
              <a href="checkout.html" className="store-checkout">
                checkout
              </a>
            </div>
          </>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
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
    handleHideShoppingCart: () => dispatch(handleHideShoppingCart()),
    handleAddToCart: (productList, token, cb, isBuyNow) =>
      dispatch(handleAddToCart(productList, token, cb, isBuyNow)),
    getCartItems: (cart_id) => dispatch(getCartItems(cart_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniShoppinCart);
