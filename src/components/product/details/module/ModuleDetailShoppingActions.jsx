import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FaBars, FaHeart, FaPlus, FaRegHeart } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { userData } from "../../../../helpers/authUtils";
import {
  getCartItems,
  handleAddToCart,
  handleHideShoppingCart,
  handleShowAuthModal,
  triggeredAddToCart,
} from "../../../../redux";
import { getWishlistItems } from "../../../../redux/wishlist/wishlistActions";
import { processDeleteRequest, processPostRequest } from "../../../../services/baseServices";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const ModuleDetailShoppingActions = ({
  product,
  selectedAttributeProduct,
  extended = false,
  handleAddToCart,
  shoppingCart,
  getCartItems,
  handleShowAuthModal,
  getWishlistItems,
  wishlist,
  handleHideShoppingCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const [isProcessing, setIsProcessing] = useState(false);
  const { id } = product;

  const handleSelectProduct = async (
    cart_id,
    product_id = null,
    attribute_id = null,
    isSelected
  ) => {
    const formData = new FormData();
    formData.append("cart_id", cart_id);
    if (product_id && attribute_id) {
      formData.append(
        `product_id[${product_id}][${attribute_id}]`,
        isSelected === 1 ? 2 : 1
      );
    } else {
      shoppingCart.cartProductlist.map((item) => {
        formData.append(
          `product_id[${item.product_id}][${item.item_id}]`,
          isSelected === 1 ? 2 : 1
        );
      });
    }

    processPostRequest("/cart-product-checker", formData, false)
      .then((res) => {
        if (res.status === 200) {
          getCartItems(() => {});
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleAddItemToCart = (e, callback = () => {}) => {
    e.preventDefault();
    if(product?.attributes_types?.length === 0 && product?.default_attribute === null){
      toast.error("You can't add this product to cart! Try another one", {position: "top-left"});
      return;
    }
    setIsProcessing(true);
    const newList = shoppingCart.cartProductlist;
    newList.push({
      product_id: id,
      item_id: selectedAttributeProduct?.id,
      quantity: quantity,
    });
    handleAddToCart(
      newList,
      userData()?.token || "",
      async (data, isSuccess) => {
        if (isSuccess) {
          callback(data);
          localStorage.setItem("cart_id", data.cart.id);
          await handleSelectProduct(
            data.cart.id,
            id,
            selectedAttributeProduct?.id,
            false
          );
          toast.success("Product added to cart", {
            position: "top-left",
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          await getCartItems(() => {
            setIsProcessing(false);
          });
          // this.props.handleShowShoppingCart();
        } else {
          toast.error("Something went wrong.");
          setIsProcessing(false);
        }
      },
      false
    );
  };

  const toggleWishlistItem = (type) => {
    if(type === "add"){
      processPostRequest(`/add-to-wishlist/${id}`, {}, true)
      .then((res) => {
        if (res.status === 200) {
          getWishlistItems(() => {
            toast.success(res.data.message);
          });
        } else if (res.status === 400) {
          console.log("response", res);
        }
      })
      .catch((err) => {
        console.log("error", err.message);
        toast.error(err.message);
      });
    }else if(type === "remove"){
      processDeleteRequest(`/remove-wishlist/${id}`, {}, true)
      .then((res) => {
          getWishlistItems(() => {
            toast.success(res.data.message);
          });
      })
      .catch((err) => {
        console.log("error", err.message);
        toast.error(err.message);
      });
    }
    
  };

  const handleToggleWishlist = (type) => {
    const user = userData();
    if (!user) {
      handleShowAuthModal(() => {
        toggleWishlistItem(type)
      });
    } else {
      toggleWishlistItem(type)
    }
  };


  const processBuyNowCheckout = (cart_id, store_product_id) => {
    let cart_store_product_ids = [store_product_id];

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
          handleHideShoppingCart();
          history.push("/checkout");
        } else {
          toast.error("Something went wrong", { position: "top-left" });
        }
      })
      .catch((err) => {
        toast.error(err.message, { position: "top-left" });
      });
  };

  const handleProceedCheckout = (cart_id, store_product_id) => {
    const user = userData();
    if (!user) {
      handleShowAuthModal(() => {
        processBuyNowCheckout(cart_id, store_product_id);
      });
    } else {
      processBuyNowCheckout(cart_id, store_product_id);
    }
  };

  const handleBuynow = (e) => {
    e.preventDefault();
    handleAddItemToCart(e, (data) => {
      let store_product_id;

      data.cart_items.map((item) => {
        item.store_product.map((prod) => {
          if (
            prod.product.id == id &&
            prod.product_attribute.id == selectedAttributeProduct.id
          ) {
            store_product_id = prod.id;
          }
        });
      });
      handleProceedCheckout(data.cart.id, store_product_id);
    });
  };

  const handleAddItemToCompare = (e) => {
    e.preventDefault();
    // dispatch(addItemToCompare(product));
  };

  const handleIncreaseItemQty = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleDecreaseItemQty = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!extended) {
    return (
      <div className="ps-product__shopping">
        <figure>
          <figcaption>Quantity</figcaption>
          <div className="form-group--number">
            <button className="up" onClick={(e) => handleIncreaseItemQty(e)}>
              <PlusOutlined />
            </button>
            <button className="down" onClick={(e) => handleDecreaseItemQty(e)}>
              <MinusOutlined />
            </button>
            <input
              className="form-control"
              type="text"
              placeholder={quantity}
              disabled
            />
          </div>
        </figure>
        <button
          className={`ps-btn ps-btn--black ${
            isProcessing && "btn-processing"
          } `}
          disabled={isProcessing}
          onClick={(e) => handleAddItemToCart(e)}
        >
          Add to cart
        </button>
        <button className="ps-btn" href="#" onClick={(e) => handleBuynow(e)}>
          Buy Now
        </button>
        <div className="ps-product__actions">
          {/* <a href="#" onClick={(e) => handleToggleWishlist(e)}> */}
          <Link onClick={(e) => e.preventDefault()}>
            <i>
            {wishlist?.find((item) => item?.product?.id === id) ? (
            <FaHeart className="text-danger" onClick={(e) => handleToggleWishlist("remove")}/>
          ) : (
            <FaRegHeart onClick={(e) => handleToggleWishlist("add")}/>
          )}
            </i>
          </Link>
          {/* <a href="#" onClick={(e) => handleAddItemToCompare(e)}> */}
          <a href="#">
            <i>
              <FaBars />
            </i>
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ps-product__shopping extend">
        <div className="ps-product__btn-group">
          <figure>
            <figcaption>Quantity</figcaption>
            <div className="form-group--number">
            <button className="up" onClick={(e) => handleIncreaseItemQty(e)}>
              <PlusOutlined />
            </button>
            <button className="down" onClick={(e) => handleDecreaseItemQty(e)}>
              <MinusOutlined />
            </button>
              <input
                className="form-control"
                type="text"
                placeholder={quantity}
                disabled
              />
            </div>
          </figure>
          <button
            className="ps-btn ps-btn--black"
            onClick={(e) => handleAddItemToCart(e)}
          >
            Add to cart
          </button>
          <div className="ps-product__actions">
          <Link onClick={(e) => e.preventDefault()}>
            <i>
            {wishlist?.find((item) => item?.product?.id === id) ? (
            <FaHeart className="text-danger" onClick={(e) => handleToggleWishlist("remove")}/>
          ) : (
            <FaRegHeart onClick={(e) => handleToggleWishlist("add")}/>
          )}
            </i>
          </Link>
          <a href="#">
            <i>
              <FaBars />
            </i>
          </a>
          </div>
        </div>
        <a className="ps-btn" href="#" onClick={(e) => handleBuynow(e)}>
          Buy Now
        </a>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    userIsLoggedIn: state.auth.userIsLoggedIn,
    userToken: state.auth.userData?.token,
    shoppingCart: state.shoppingCart,
    wishlist: state.wishlist.wishListItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleShowShoppingCart: () => dispatch(handleShowShoppingCart()),
    handleShowAuthModal: (cb) => dispatch(handleShowAuthModal(cb)),
    triggeredAddToCart: () => dispatch(triggeredAddToCart()),
    handleAddToCart: (productList, token, cb, isBuyNow) =>
      dispatch(handleAddToCart(productList, token, cb, isBuyNow)),
    getCartItems: (cb) => dispatch(getCartItems(cb)),
    getWishlistItems: (cb) => dispatch(getWishlistItems(cb)),
    handleHideShoppingCart: () => dispatch(handleHideShoppingCart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleDetailShoppingActions);
