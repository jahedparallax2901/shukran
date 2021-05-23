import React, { Component } from "react";
import bagPack from "../../../assets/img/downloads/bagpack.jpeg";
import shoppingCartAside from "../../../assets/img/emptyShoppingcart.svg";
import downloadsFridge1 from "../../../assets/img/downloads/fridge1.jpg";
import {
  getCartItems,
  handleAddToCart,
  handleHideShoppingCart,
  handleClearCart,
  handleShowAuthModal,
} from "../../../redux";
import {Form} from 'react-bootstrap';
import { connect } from "react-redux";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping} from "react-icons/ai";
import { BsTrash} from "react-icons/bs";
import { FiArrowDownCircle} from "react-icons/fi";
import { GoRocket} from "react-icons/go";
import { userData } from "../../../helpers/authUtils";  
import { toast } from "react-toastify";
import { processPostRequest } from "../../../services/baseServices";
import { VscChevronUp, VscChevronDown} from "react-icons/vsc";
import { Spinner } from "react-bootstrap";
import { withRouter } from "react-router";
import { Tooltip } from "antd";

class MiniShoppinCart extends Component {
  state = {
    globalCoupon: "",
    isGlobalCouponApplied: false,
    storesWithCoupon: [],
    isCartProcessing: false,
  };

  componentDidMount() {
    const scrollbody = document.querySelector(".asside-card-checkout");
    scrollbody.onscroll = function () {
      let cartFooter = document.getElementById("all-checkout");
      console.log(cartFooter);
      let sticky = cartFooter?.offsetTop || 0;
      if (sticky > 0 && scrollbody.scrollTop * 4 > sticky) {
        cartFooter.classList.add("custom-sticky");
        let lastStore = document.querySelectorAll(".store-div");
        lastStore = lastStore[lastStore.length - 1];
        lastStore.style.marginBottom = "165px";
      } else if (sticky > 0) {
        cartFooter.classList.remove("custom-sticky");
        let lastStore = document.querySelectorAll(".store-div");
        lastStore = lastStore[lastStore.length - 1];
        lastStore.style.marginBottom = "0px";
      }
    };
  }

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
          await this.props.getCartItems(() => {
            this.setState({ isCartProcessing: false });
          });

          // this.props.handleShowShoppingCart();
        } else {
          this.props.handleClearCart();
          localStorage.removeItem("cart_id");
          this.setState({ isCartProcessing: false });
        }
      },
      false
    );
  };

  handleCouponChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log("state", this.state);
    });
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
        if (res.status === 200) {
          this.props.getCartItems(() => {
            this.setState(
              {
                globalCoupon: "",
                isGlobalCouponApplied: true,
                isCartProcessing: false,
              },
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
          });
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
        if (res.status === 200) {
          this.props.getCartItems(() => {
            let obj = this.state;
            obj[`couponOfStore-${store_id}`] = "";
            obj["storesWithCoupon"] = [
              ...this.state.storesWithCoupon,
              store_id,
            ];
            obj.isCartProcessing = false;
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
          });
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

  handleRemoveCoupon = (e, cart_id, store_id = null) => {
    this.setState({ isCartProcessing: true });
    let data;
    store_id ? (data = { cart_id, store_id }) : (data = { cart_id });

    processPostRequest("/remove-cart-coupon", data, false)
      .then((res) => {
        if (res.status === 200) {
          this.props.getCartItems(() => {
            toast.success("Coupon removed successfully");
            this.setState({ isCartProcessing: false });
          });
        } else {
          toast.error("Something went wrong");
          this.setState({ isCartProcessing: false });
        }
      })
      .catch((err) => {
        this.setState({ isCartProcessing: false });
        toast.error(err.message);
      });
  };

  handleSelectProduct = (
    e,
    cart_id,
    product_id = null,
    attribute_id = null,
    isSelected
  ) => {
    console.log("checking_field", attribute_id, isSelected);
    this.setState({ isCartProcessing: true });
    const formData = new FormData();
    formData.append("cart_id", cart_id);
    if (product_id && attribute_id) {
      formData.append(
        `product_id[${product_id}][${attribute_id}]`,
        isSelected == 1 ? 2 : 1
      );
    } else {
      this.props.shoppingCart.cartProductlist.map((item) => {
        formData.append(
          `product_id[${item.product_id}][${item.item_id}]`,
          isSelected == 1 ? 2 : 1
        );
      });
    }

    processPostRequest("/cart-product-checker", formData, false)
      .then((res) => {
        if (res.status === 200) {
          this.props.getCartItems(() => {
            this.setState({ isCartProcessing: false });
          });
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        toast.error(err.message);
        this.setState({ isCartProcessing: false });
      });
  };

  processCheckout = (e, cart_id, store_id = null) => {
    this.setState({ isCartProcessing: true });
    let cart_store_product_ids = [];
    if (store_id) {
      const store = this.props.shoppingCart.cartItems.find(
        (item) => item.store_id === store_id
      );
      store.store_product.map((item) => {
        if (item?.cart_check == 1) {
          cart_store_product_ids.push(item.id);
        }
      });
    } else {
      this.props.shoppingCart.cartItems.map((cart_item) => {
        cart_item.store_product.map((store_item) => {
          if (store_item?.cart_check == 1) {
            cart_store_product_ids.push(store_item.id);
          }
        });
      });
    }

    processPostRequest(
      "/proceed-checkout",
      {
        cart_id,
        cart_store_product_ids,
      },
      true
    )
      .then((res) => {
        if (res.status === 200) {
          this.props.handleHideShoppingCart();
          this.props.history.push("/checkout");
          this.setState({ isCartProcessing: false });
        } else {
          toast.error("Something went wrong");
          this.setState({ isCartProcessing: false });
        }
      })
      .catch((err) => {
        toast.error(err.message, { position: "top-left" });
        this.setState({ isCartProcessing: false });
      });
  };

  handleProceedCheckout = (e, cart_id, store_id = null) => {
    e.preventDefault();
    const user = userData();
    if (!user) {
      this.props.handleShowAuthModal(() => {
        this.processCheckout(e, cart_id, store_id);
      });
    } else {
      this.processCheckout(e, cart_id, store_id);
    }
  };

  isAllSelected() {
    let selected = true;

    if (this.props.shoppingCart?.cartSummery?.total_prdoucts > 0) {
      this.props.shoppingCart?.cartItems.map((item) => {
        item.store_product.map((prod) => {
          if (prod.cart_check == 2) {
            selected = false;
          }
        });
      });
    } else {
      selected = false;
    }

    return selected;
  }
  // constructor(props){
  //   super(props);
  //   this.state={
  //     count: 0
  //   }
  // }
  // increment = () => {
  //   this.setState({count: this.state.count + 1})
  // }
  // decrement = () => {
  //   this.setState({count: this.state.count - 1})
  // }
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
          <h1><AiOutlineShopping/> <span>2</span> ITEMS</h1>
          <div className="close-btn" onClick={handleHideShoppingCart}>
            <span>Close</span>
          </div>
        </div>
        {/* <div className="aside-cart-discount">
          <p className="left progress-bg">Shop ৳137 more and save ৳100 fee</p>
          <p className="right">৳37</p>
        </div>
        <div className="aside-cart-express">
          <p><GoRocket/> Express Delivery</p>
        </div> */}
        {/* {this.state.isCartProcessing ? (
          <div className="loading-wrapper">
            <Spinner animation="grow" />
          </div>
        ) : ( */}
          <>
            {/* <div className="card-item-area">
              <div className="single-cart">
                <div className="item-quantity">
                <span><VscChevronUp/></span>
                  <span> 0 </span>
                <span><VscChevronDown/></span>
                </div>
                <div className="item-img">
                  <img src={downloadsFridge1} alt="fail" />
                </div>
                <div className="item-name">
                  <p>Rok Dishwashing Mega Steel Scourer (Buy 2 Get 1 Free) </p>
                  <div className="price-by-quantity">
                    <span>৳ 70</span>
                    <span>/</span>
                    <span>1 Kg</span>
                  </div>
                </div> 
                <div className="item-total-price">
                  <span>৳ 70</span>
                </div>
                <div className="item-delete">
                  <span>X</span>
                </div>
              </div>

              <div className="single-cart">
                <div className="item-quantity">
                <span><VscChevronUp/></span>
                  <span> 0 </span>
                <span><VscChevronDown/></span>
                </div>
                <div className="item-img">
                  <img src={downloadsFridge1} alt="fail" />
                </div>
                <div className="item-name">
                  <p>Rok Dishwashing Mega Steel Scourer (Buy 2 Get 1 Free) </p>
                  <div className="price-by-quantity">
                    <span>৳ 70</span>
                    <span>/</span>
                    <span>1 Kg</span>
                  </div>
                </div> 
                <div className="item-total-price">
                  <span>৳ 70</span>
                </div>
                <div className="item-delete">
                  <span>X</span>
                </div>
              </div>
            </div> */}
          
            {shoppingCart?.cartSummery?.total_prdoucts > 0 ? (
              <>
                <div className="select-all-div">
                  <div className="ps-checkbox">
                    <input
                      type="checkbox"
                      id="select-all"
                      defaultChecked={this.isAllSelected()}
                      onChange={(e) =>
                        this.handleSelectProduct(e, shoppingCart.cartSummery.id)
                      }
                    />
                    <label for="select-all">Select All</label>
                  </div>
                </div>

                <div className="store-div-container">
                  {shoppingCart.cartItems.map((cart_items) => (
                    <>
                      {cart_items.store_product.length > 0 && (
                        <div className="store-div">
                          <div className="store">
                            <div className="store-name d-flex justify-content-between">
                              <div className="ps-checkbox">
                              {/* ===== comment mark ===== */}
                                {/* <input
                              className="form-control"
                              type="checkbox"
                              id="store-1"
                              name="brand"
                            /> */}
                                {/* <label for="store-1">
                              {cart_items?.store?.name || ""}
                            </label> */}
                            {/* ===== comment mark ===== */}

                                <h3 className="mt-2">
                                  {cart_items?.store?.name || ""}
                                </h3>
                              </div>
                              <div className="select-all-div pr-0">
                                <div className="ps-checkbox">
                                  <input
                                    type="checkbox"
                                    id="select-allInner"
                                    defaultChecked={this.isAllSelected()}
                                    onChange={(e) =>
                                      this.handleSelectProduct(e, shoppingCart.cartSummery.id)
                                    }
                                  />
                                  <label for="select-allInner">Select All</label>
                                </div>
                              </div>
                            </div>

                            {/* Product portion */}

                            {cart_items?.store_product &&
                              cart_items.store_product.map((store_item) => (
                                <div className="product">
                                  <div className="product-name">
                                    <div className="ps-checkbox">
                                      {console.log(
                                        "Checking",
                                        store_item.cart_check === 1
                                      )}
                                      <input
                                        className="form-control"
                                        type="checkbox"
                                        id={`brand-${store_item?.product_attribute?.id}`}
                                        name={`brand-${store_item?.product_attribute?.id}`}
                                        checked={store_item.cart_check === 1}
                                        onChange={(e) =>
                                          this.handleSelectProduct(
                                            e,
                                            store_item?.cart_id,
                                            store_item?.product_attribute
                                              ?.product_id,
                                            store_item?.product_attribute?.id,
                                            store_item.cart_check
                                          )
                                        }
                                      />
                                      <label for={`brand-${store_item?.product_attribute?.id}`}>
                                        
                                        <div className="card-item-area">
                                          <div className="single-cart">
                                            <div className="item-quantity">
                                            <span><VscChevronUp/></span>
                                              <span>{store_item.quantity}</span>
                                            <span><VscChevronDown/></span>
                                            </div>
                                            <div className="item-img">
                                              <img src={
                                                store_item?.product?.single_image ||
                                                bagPack
                                              } alt="fail" 
                                              />
                                            </div>
                                            <div className="item-name">
                                              <p>
                                              <Tooltip
                                                placement="topLeft"
                                                title={store_item.product.name}
                                              >
                                                {store_item.product.name}
                                              </Tooltip>
                                              </p>
                                              <div className="price-by-quantity">
                                                <span>৳{store_item?.total_amount}</span>
                                                {/* <span>/</span>
                                                <span>1 pc</span> */}
                                              </div>
                                            </div> 
                                            <div className="item-total-price">
                                              <span>৳{store_item?.total_amount}</span>
                                            </div>
                                            <div className="item-delete">
                                              <span onClick={(e) =>
                                                  this.handleItemDelete(
                                                    e,
                                                    store_item.product.id,
                                                    store_item.product_attribute.id
                                                    )
                                                  }>
                                                  X
                                                </span>
                                            </div>
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                    
                                    {/* <i>
                                    <AiOutlineClose
                                      onClick={(e) =>
                                        this.handleItemDelete(
                                          e,
                                          store_item.product.id,
                                          store_item.product_attribute.id
                                        )
                                      }
                                    />
                                    </i> */}
                                    
                                  </div>
                                  {/* <div className="product-details">
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
                                            store_item?.attribute_item
                                              ?.attribute.name
                                          }
                                        </h6>
                                        <p>
                                          {store_item?.attribute_item?.value}
                                        </p>
                                      </div>
                                    )}
                                  </div> */}

                                  {/* Product calculation portion */}

                                  {/* <div className="product-price-div">
                                    <div className="product-price">
                                      <div className="product-price-title">
                                        <h6>price</h6>
                                      </div>
                                      <p>৳{store_item?.total_amount}</p>
                                    </div>
                                    <div className="delivery-charge"> */}

                              {/* ===== comment mark ===== */}
                                      {/* <div className="delivery-charge-title">
                                    <h6>delivery charge</h6>
                                  </div>
                                  <p>৳{store_item?.delivery_charge || 0}</p> */}
                              {/* ===== comment mark ===== */}
                                    {/* </div>
                                  </div> */}
                                </div>
                              ))}

                            {/* Store coupon portion */}

                            <div className="store-checkout-div">
                              <div className="store-coupon">
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
                                            cart_items?.coupon?.coupon_code
                                              ?.code
                                          }{" "}
                                          Coupon Applied
                                        </span>
                                        <BsTrash
                                          title="Remove"
                                          onClick={(e) =>
                                            this.handleRemoveCoupon(
                                              e,
                                              shoppingCart.cartSummery.id,
                                              cart_items.store.id
                                            )
                                          }
                                        />
                                      </div>
                                    ) : (
                                      <>
                                        <input
                                          type="text"
                                          placeholder="apply coupon"
                                          name={`couponOfStore-${cart_items.store.id}`}
                                          defaultValue={
                                            this.state[
                                              `couponOfStore-${cart_items.store.id}`
                                            ]
                                          }
                                          onChange={(e) =>
                                            this.handleCouponChange(e)
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
                                          Apply
                                        </button>
                                      </>
                                    )}
                                  </>
                                )}
                              </div>

                              {/* Store checkout calculation */}

                              <div className="store-checkout-div-right">
                                {/* <div className="delivery-charge">
                                  <h6 className="delivery-charge-title">
                                    delivery-charge :
                                  </h6>
                                  <p>৳{cart_items?.delivery_charge || 0}</p>
                                </div>
                                <div className="subtotal">
                                  <h6 className="subtotal-title">subtotal :</h6>
                                  <p>৳{cart_items?.sub_total_amount || 0}</p>
                                </div>
                                <div className="subtotal">
                                  <h6 className="subtotal-title">discount :</h6>
                                  <p>৳{cart_items?.discount_amount || 0}</p>
                                </div>
                                <div className="total">
                                  <h6 className="total-title">total :</h6>
                                  <p>৳{cart_items.total_amount || 0}</p>
                                </div> */}
                               
                                <a
                                  className="store-checkout"
                                  onClick={(e) =>
                                    this.handleProceedCheckout(
                                      e,
                                      cart_items.cart_id,
                                      cart_items.store_id
                                    )
                                  }
                                >
                                  Store Checkout
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                 
                </div>
                
                {/* Global coupon portion */}

                {/* <div className="all-checkout" id="all-checkout">
                  <div class="store-coupon">
                    {shoppingCart.cartItems.find(
                      (item) => item.coupon !== null
                    ) ? (
                      <div className="coupon-status-not-applicable">
                        <span className="mr-4">Not Applicable</span>
                      </div>
                    ) : (
                      <>
                        {!shoppingCart?.cartSummery?.coupon ? (
                          <>
                            <input
                              type="text"
                              placeholder="Apply Coupon"
                              name="globalCoupon"
                              defaultValue={this.state.globalCoupon}
                              onChange={this.handleCouponChange}
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
                              {
                                shoppingCart?.cartSummery?.coupon?.coupon_code
                                  ?.code
                              }{" "}
                              Coupon Applied
                            </span>
                            <BsTrash
                              title="Remove"
                              onClick={(e) =>
                                this.handleRemoveCoupon(
                                  e,
                                  shoppingCart.cartSummery.id
                                )
                              }
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div> */}

                  {/* Global chekout portion */}

                  {/* <div className="subtotal">
                    <h6 className="subtotal-title">delivery-charge:</h6>
                    <p>৳{shoppingCart?.cartSummery?.delivery_charge || 0}</p>
                  </div>
                  <div className="subtotal">
                    <h6 className="subtotal-title">subtotal Amount:</h6>
                    <p>৳{shoppingCart?.cartSummery?.sub_total_amount || 0}</p>
                  </div>
                  <div className="subtotal">
                    <h6 className="subtotal-title">Discount Amount:</h6>
                    <p>৳{shoppingCart?.cartSummery?.discount_amount || 0}</p>
                  </div>
                  <div className="total">
                    <h6 className="total-title">total Amount:</h6>
                    <p>৳{shoppingCart?.cartSummery?.total_amount || 0}</p>
                  </div>
                  <a
                    className="store-checkout"
                    onClick={(e) =>
                      this.handleProceedCheckout(e, shoppingCart.cartSummery.id)
                    }
                  >
                    checkout
                  </a> */}
                {/* </div> */}
                <div className="place-order-area">
                  <div className="place-order-area-top">
                    <div className="spacial-code">
                      <p><FiArrowDownCircle /> Have a special coupon</p>
                    </div>
                    <div className="special-code-search">
                    {shoppingCart.cartItems.find(
                      (item) => item.coupon !== null
                    ) ? (
                      <div className="coupon-status-not-applicable">
                        <span className="mr-4">Not Applicable</span>
                      </div>
                    ) : (
                      <>
                        {!shoppingCart?.cartSummery?.coupon ? (
                          <>
                            <Form className="mr-3 w-100">
                              <Form.Group className="special-form-group" controlId="formBasicSearch">
                                <Form.Control type="search" placeholder="Special coupon" 
                                  name="globalCoupon"
                                  defaultValue={this.state.globalCoupon}
                                  onChange={this.handleCouponChange}/>
                              </Form.Group>
                            </Form>
                            <button className="coupon-code-go" onClick={(e) =>
                              this.handleGlobalCouponApply(
                                e,
                                  shoppingCart.cartSummery.id
                                )
                              }>Apply</button>
                          </>
                        ) : (
                          <div className="d-flex justify-content-between align-items-center coupon-status-success">
                            <span className="mr-4">
                              {
                                shoppingCart?.cartSummery?.coupon?.coupon_code
                                  ?.code
                              }{" "}
                              Coupon Applied
                            </span>
                            <BsTrash
                              title="Remove"
                              onClick={(e) =>
                                this.handleRemoveCoupon(
                                  e,
                                  shoppingCart.cartSummery.id
                                )
                              }
                            />
                          </div>
                        )}
                      </>
                    )}
            
                    </div>
                  </div> 
                  <div className="place-order-area-bottom">
                    <button className="place-order-button">
                      <span className="place-order-button-inner" onClick={(e) =>
                      this.handleProceedCheckout(e, shoppingCart.cartSummery.id)
                    }>Place Order</span>
                      <span className="place-order-amount">৳{shoppingCart?.cartSummery?.total_amount || 0}</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="loading-wrapper">
                <img src={shoppingCartAside} alt="Shopping Cart" />
                <h3>Your shopping bag is empty. Start shopping</h3>
              </div>
            )}
          </>
        {/* )} */}
        
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
    handleShowAuthModal: (cb) => dispatch(handleShowAuthModal(cb)),
    handleHideShoppingCart: () => dispatch(handleHideShoppingCart()),
    handleAddToCart: (productList, token, cb, isBuyNow) =>
      dispatch(handleAddToCart(productList, token, cb, isBuyNow)),
    getCartItems: (cb) => dispatch(getCartItems(cb)),
    handleClearCart: () => dispatch(handleClearCart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MiniShoppinCart));
