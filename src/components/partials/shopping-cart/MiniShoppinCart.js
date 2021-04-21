import React, { Component } from "react";
import bagPack from "../../../assets/img/downloads/bagpack.jpeg";
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
import { toast, ToastContainer } from "react-toastify";
import { processPostRequest } from "../../../services/baseServices";
import { CgTrash } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";
import { Spinner } from "react-bootstrap";

class MiniShoppinCart extends Component {
  state = {
    globalCoupon: "",
    isGlobalCouponApplied: false,
    storesWithCoupon: [],
    isCartProcessing: false,
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
          await this.props.getCartItems();
          this.setState({ isCartProcessing: false });

          // this.props.handleShowShoppingCart();
        } else {
          toast.error("Something went wrong.");
          localStorage.removeItem("cart_id");
          this.setState({ isCartProcessing: false });
        }
      },
      false
    );
  };

  handleGlobalCouponChange = (e) => {
    this.setState({ globalCoupon: e.target.value });
  };

  /**
   * Apply the gobal coupon
   * @param {event} e
   * @param {int} cart_id
   */
  handleGlobalCouponApply = (e, cart_id) => {
    this.setState({ isCartProcessing: true });
    processPostRequest(
      "/add-cart-coupon",
      { cart_id, coupon_code: this.state.globalCoupon },
      false
    )
      .then((res) => {
        this.setState({ isCartProcessing: false });

        if (res.status === 200) {
          this.setState(
            { globalCoupon: "", isGlobalCouponApplied: true },
            () => {
              toast.success("Coupon successfully applied", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            }
          );
          this.props.getCartItems();
        } else {
          this.setState({ isCartProcessing: false });

          toast.warn("Something went wrong.");
        }
      })
      .catch((err) => {
        this.setState({ isCartProcessing: false });

        toast.error(err.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  handleStoreCouponOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log("state", this.state);
    });
  };

  handleApplyStoreCoupon = (e, cart_id, store_id) => {
    e.preventDefault();
    this.setState({ isCartProcessing: true });

    processPostRequest(
      "/add-cart-coupon",
      {
        cart_id,
        coupon_code: this.state[`couponOfStore-${store_id}`],
        store_id,
      },
      false
    )
      .then((res) => {
        this.setState({ isCartProcessing: false });

        if (res.status === 200) {
          let obj = this.state;
          obj[`couponOfStore-${store_id}`] = "";
          obj["storesWithCoupon"] = [...this.state.storesWithCoupon, store_id];
          this.setState(obj, () => {
            toast.success("Coupon successfully applied", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          });
          this.props.getCartItems();
        } else {
          toast.warn("Something went wrong.");
        }
      })
      .catch((err) => {
        this.setState({ isCartProcessing: false });

        toast.error(err.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  handleRemoveGlobalCoupon = (e, cart_id) => {
    this.setState({ isCartProcessing: true });

    processPostRequest("/remove-cart-coupon", { cart_id }, false)
      .then((res) => {
        this.setState({ isCartProcessing: false });

        if (res.status === 200) {
          this.props.getCartItems();
          toast.success("Coupon removed successfully");
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        this.setState({ isCartProcessing: false });
        toast.error(err.message);
      });
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
        {this.state.isCartProcessing ? (
          <div className="loading-wrapper border">
            <Spinner animation="grow" />
          </div>
        ) : (
          <>
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
                                    src={
                                      store_item?.product?.single_image ||
                                      bagPack
                                    }
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
                                      {
                                        store_item?.attribute_item?.attribute
                                          .name
                                      }
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
                            {shoppingCart.cartSummery.coupon ? (
                              <div className="coupon-status-not-applicable">
                                <span className="mr-4">Not Applicable</span>
                              </div>
                            ) : (
                              <>
                                {cart_items.coupon ? (
                                  <div className="d-flex justify-content-between align-items-center coupon-status-success">
                                    <span className="mr-4">
                                      {
                                        shoppingCart?.cartSummery?.coupon
                                          ?.coupon_code?.code
                                      }{" "}
                                      Coupon Applied
                                    </span>
                                    <BsTrash
                                      title="Remove"
                                      onClick={(e) =>
                                        this.handleRemoveGlobalCoupon(
                                          e,
                                          shoppingCart.cartSummery.id
                                        )
                                      }
                                    />
                                  </div>
                                ) : (
                                  <>
                                    <input
                                      type="text"
                                      placeholder="apply for coupon"
                                      name={`couponOfStore-${cart_items.store.id}`}
                                      defaultValue={
                                        this.state[
                                          `couponOfStore-${cart_items.store.id}`
                                        ]
                                      }
                                      onChange={(e) =>
                                        this.handleStoreCouponOnChange(e)
                                      }
                                    />
                                    <button
                                      onClick={(e) =>
                                        this.handleApplyStoreCoupon(
                                          e,
                                          shoppingCart.cartSummery.id,
                                          cart_items.store.id
                                        )
                                      }
                                    >
                                      ✓
                                    </button>
                                  </>
                                )}
                              </>
                            )}
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
                    {!shoppingCart.cartSummery.coupon ? (
                      <>
                        <input
                          type="text"
                          placeholder="apply for coupon global"
                          name="global_coupon"
                          defaultValue={this.state.globalCoupon}
                          onChange={this.handleGlobalCouponChange}
                        />
                        <button
                          onClick={(e) =>
                            this.handleGlobalCouponApply(
                              e,
                              shoppingCart.cartSummery.id
                            )
                          }
                        >
                          ✓
                        </button>
                      </>
                    ) : (
                      <div className="d-flex justify-content-between align-items-center coupon-status-success">
                        <span className="mr-4">
                          {shoppingCart?.cartSummery?.coupon?.coupon_code?.code}{" "}
                          Coupon Applied
                        </span>
                        <BsTrash
                          title="Remove"
                          onClick={(e) =>
                            this.handleRemoveGlobalCoupon(
                              e,
                              shoppingCart.cartSummery.id
                            )
                          }
                        />
                      </div>
                    )}
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
          </>
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
    getCartItems: () => dispatch(getCartItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniShoppinCart);
