import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { userData } from "../../../../helpers/authUtils";
import {
  getCartItems,
  handleAddToCart,
  handleHideShoppingCart,
  handleShowAuthModal,
} from "../../../../redux";
import { processPostRequest } from "../../../../services/baseServices";
// import { addItem } from '~/store/cart/action';
// import { useDispatch } from 'react-redux';

const ModuleDetailActionsMobile = ({
  product,
  selectedAttributeProduct,
  shoppingCart,
  getCartItems,
  handleShowAuthModal,
  handleAddToCart,
  handleHideShoppingCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const [isProcessing, setIsProcessing] = useState(false);
  const { id } = product;

  const handleSelectProduct = async (
    cart_id,
    product_id = null,
    attribute_id = null,
    isSelected,
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
    console.log("Clicked");
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
            if (!localStorage.getItem("cart_id")) {
              localStorage.setItem("cart_id", data.cart.id);
            }
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

  return (
    <div className="ps-product__actions-mobile">
      <a
        className="ps-btn ps-btn--black"
        href="#"
        onClick={(e) => handleAddItemToCart(e)}
      >
        Add to cart
      </a>
      <a className="ps-btn" href="#" onClick={(e) => handleBuynow(e)}>
        Buy Now
      </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userIsLoggedIn: state.auth.userIsLoggedIn,
    userToken: state.auth.userData?.token,
    shoppingCart: state.shoppingCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleShowShoppingCart: () => dispatch(handleShowShoppingCart()),
    handleShowAuthModal: (cb) => dispatch(handleShowAuthModal(cb)),
    //   triggeredAddToCart: () => dispatch(triggeredAddToCart()),
    handleAddToCart: (productList, token, cb, isBuyNow) =>
      dispatch(handleAddToCart(productList, token, cb, isBuyNow)),
    getCartItems: (cb) => dispatch(getCartItems(cb)),
    //   getWishlistItems: (cb) => dispatch(getWishlistItems(cb)),
    handleHideShoppingCart: () => dispatch(handleHideShoppingCart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleDetailActionsMobile);
