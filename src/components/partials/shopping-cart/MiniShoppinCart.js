import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import watch from "../../../assets/img/downloads/watch.JPG";
import categoriesHome58 from "../../../assets/img/categories/home-5/8.jpg";
import bagPack from "../../../assets/img/downloads/bagpack.jpeg";
import shirt from "../../../assets/img/downloads/shirt1.jpeg";
import { handleHideShoppingCart } from "../../../redux";
import { connect } from "react-redux";
import { TiTimesOutline } from "react-icons/ti";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

class MiniShoppinCart extends Component {
  render() {
    const { isShowingShoppingCart, handleHideShoppingCart } = this.props;
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
        <div className="select-all-div">
          <div className="ps-checkbox">
            <input type="checkbox" id="select-all" />
            <label for="select-all">Select All</label>
          </div>
        </div>
        <div className="store-div-container">
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
                <label for="store-1">ecstasy</label>
              </div>
              {/* <h1>ecstasy</h1> */}
            </div>
            <div className="product">
              <div className="product-name">
                <div className="ps-checkbox">
                  <input
                    className="form-control"
                    type="checkbox"
                    id="brand-1"
                    name="brand"
                  />
                  <label for="brand-1">Bagpack</label>
                </div>
              </div>
              <div className="product-details">
                <div className="product-details-div-img product-details-div">
                  <img src={bagPack} alt="" />
                </div>
                <div className="quantity product-details-div">
                  <h6 className="quantity-title product-details-div-title">
                    quantity
                  </h6>
                  <div className="quantity-changer">
                    <i>
                      <AiOutlineMinus />
                    </i>
                    <p>2</p>
                    <i>
                      <AiOutlinePlus />
                    </i>
                  </div>
                </div>
                <div className="variant product-details-div">
                  <h6 className="variant-title product-details-div-title">
                    variant
                  </h6>
                  <div className="color-block"></div>
                </div>
                <div className="size product-details-div">
                  <h6 className="size-title product-details-div-title">size</h6>
                  <p>XL</p>
                </div>
              </div>
              <div className="product-price-div">
                <div className="product-price">
                  <div className="product-price-title">
                    <h6>price</h6>
                  </div>
                  <p>৳2000.00</p>
                </div>
                <div className="delivery-charge">
                  <div className="delivery-charge-title">
                    <h6>delivery charge</h6>
                  </div>
                  <p>৳60.00</p>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-name">
                <div className="ps-checkbox">
                  <input
                    className="form-control"
                    type="checkbox"
                    id="brand-2"
                    name="brand"
                  />
                  <label for="brand-2">shirt</label>
                </div>
              </div>
              <div className="product-details">
                <div className="product-details-div-img product-details-div">
                  <img src={shirt} alt="" />
                </div>
                <div className="quantity product-details-div">
                  <h6 className="quantity-title product-details-div-title">
                    quantity
                  </h6>
                  <div className="quantity-changer">
                    <i>
                      <AiOutlineMinus />
                    </i>
                    <p>2</p>
                    <i>
                      <AiOutlinePlus />
                    </i>
                  </div>
                </div>
                {/* <div className="variant product-details-div">
              <h6 className="variant-title product-details-div-title">variant</h6>
              <div className="color-block"></div>
            </div> */}
                <div className="size product-details-div">
                  <h6 className="size-title product-details-div-title">size</h6>
                  <p>L</p>
                </div>
              </div>
              <div className="product-price-div">
                <div className="product-price">
                  <div className="product-price-title">
                    <h6>price</h6>
                  </div>
                  <p>৳2000.00</p>
                </div>
                <div className="delivery-charge">
                  <div className="delivery-charge-title">
                    <h6>delivery charge</h6>
                  </div>
                  <p>৳60.00</p>
                </div>
              </div>
            </div>
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
                  <h6 className="delivery-charge-title">delivery-charge :</h6>
                  <p>৳2060.00</p>
                </div>
                <div className="subtotal">
                  <h6 className="subtotal-title">subtotal :</h6>
                  <p>৳2060.00</p>
                </div>
                <div className="total">
                  <h6 className="total-title">total :</h6>
                  <p>৳2060.00</p>
                </div>
                <a href="checkout.html" className="store-checkout">
                  checkout
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="store-div">
          <div className="store">
            <div className="store-name">
              <div className="ps-checkbox">
                <input
                  className="form-control"
                  type="checkbox"
                  id="store-2"
                  name="brand"
                />
                <label for="store-2">zara</label>
              </div>
              {/* <h1>ecstasy</h1> */}
            </div>
            <div className="product">
              <div className="product-name">
                <div className="ps-checkbox">
                  <input
                    className="form-control"
                    type="checkbox"
                    id="brand-3"
                    name="brand"
                  />
                  <label for="brand-3">watch</label>
                </div>
              </div>
              <div className="product-details">
                <div className="product-details-div-img product-details-div">
                  <img src={watch} alt="" />
                </div>
                <div className="quantity product-details-div">
                  <h6 className="quantity-title product-details-div-title">
                    quantity
                  </h6>
                  <div className="quantity-changer">
                    <i>
                      <AiOutlineMinus />
                    </i>
                    <p>2</p>
                    <i>
                      <AiOutlinePlus />
                    </i>
                  </div>
                </div>
                <div className="variant product-details-div">
                  <h6 className="variant-title product-details-div-title">
                    variant
                  </h6>
                  <div className="color-block"></div>
                </div>
                {/* <div className="size product-details-div">
              <h6 className="size-title product-details-div-title">size</h6>
              <p>XL</p>
            </div> */}
              </div>
              <div className="product-price-div">
                <div className="product-price">
                  <div className="product-price-title">
                    <h6>price</h6>
                  </div>
                  <p>৳2000.00</p>
                </div>
                <div className="delivery-charge">
                  <div className="delivery-charge-title">
                    <h6>delivery charge</h6>
                  </div>
                  <p>৳60.00</p>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-name">
                <div className="ps-checkbox">
                  <input
                    className="form-control"
                    type="checkbox"
                    id="brand-4"
                    name="brand"
                  />
                  <label for="brand-4">Lipstick</label>
                </div>
              </div>
              <div className="product-details">
                <div className="product-details-div-img product-details-div">
                  <img src={categoriesHome58} alt="" />
                </div>
                <div className="quantity product-details-div">
                  <h6 className="quantity-title product-details-div-title">
                    quantity
                  </h6>
                  <div className="quantity-changer">
                    <i>
                      <AiOutlineMinus />
                    </i>
                    <p>2</p>
                    <i>
                      <AiOutlinePlus />
                    </i>
                  </div>
                </div>
                {/* <div className="variant product-details-div">
              <h6 className="variant-title product-details-div-title">variant</h6>
              <div className="color-block"></div>
            </div> */}
                {/* <div className="size product-details-div">
              <h6 className="size-title product-details-div-title">size</h6>
              <p>L</p>
            </div> */}
              </div>
              <div className="product-price-div">
                <div className="product-price">
                  <div className="product-price-title">
                    <h6>price</h6>
                  </div>
                  <p>৳2000.00</p>
                </div>
                <div className="delivery-charge">
                  <div className="delivery-charge-title">
                    <h6>delivery charge</h6>
                  </div>
                  <p>৳60.00</p>
                </div>
              </div>
            </div>
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
                  <h6 className="delivery-charge-title">delivery-charge :</h6>
                  <p>৳2060.00</p>
                </div>
                <div className="subtotal">
                  <h6 className="subtotal-title">subtotal :</h6>
                  <p>৳2060.00</p>
                </div>
                <div className="total">
                  <h6 className="total-title">total :</h6>
                  <p>৳2060.00</p>
                </div>
                <a href="checkout.html" className="store-checkout">
                  checkout
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="all-checkout">
          <div class="store-coupon">
            <input type="text" placeholder="apply for coupon" name="search" />
            <button type="submit">✓</button>
          </div>
          <div className="delivery-charge">
            <h6 className="delivery-charge-title">delivery-charge:</h6>
            <p>৳200.00</p>
          </div>
          <div className="subtotal">
            <h6 className="subtotal-title">subtotal Amount:</h6>
            <p>৳2060.00</p>
          </div>
          <div className="total">
            <h6 className="total-title">total Amount:</h6>
            <p>৳2060.00</p>
          </div>
          <a href="checkout.html" className="store-checkout">
            checkout
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isShowingShoppingCart: state.shoppingCart.isShowingShoppingCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleHideShoppingCart: () => dispatch(handleHideShoppingCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniShoppinCart);
