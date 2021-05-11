import { Tooltip } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { userData } from "../../../helpers/authUtils";
import {
  getCartItems,
  handleAddToCart,
  handleHideShoppingCart,
} from "../../../redux";
import { processPostRequest } from "../../../services/baseServices";
import {
  StrapiProductPrice,
  StrapiProductThumbnail,
} from "../../../utilities/product-helper";

// import { useDispatch } from 'react-redux';
// import { addItem } from '~/store/cart/action';

const ProductOnHeader = ({
  product,
  selectedAttributeProduct,
  shoppingCart,
  getCartItems,
  handleAddToCart,
}) => {
  // Views
  const thumbnailImage = StrapiProductThumbnail(product);
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const [isProcessing, setIsProcessing] = useState(false);
  const { id } = product;

  const renderProductPrice = (product) => {
    let view;
    if (product?.sale_price < product.price) {
      view = (
        <p className="ps-product__price sale">
          ৳{product?.sale_price}
          <del className="ml-2">৳{product?.price}</del>
        </p>
      );
    } else {
      view = (
        <p className="ps-product__price">
          {product?.price > 0 ? <>৳{product?.price}</> : <>৳{0}</>}
        </p>
      );
    }
    return view;
  };

  const priceView = renderProductPrice(selectedAttributeProduct);

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

  
  return (
    <div className="ps-product--header-sticky">
      <div className="ps-product__thumbnail">{thumbnailImage}</div>
      <div className="ps-product__wrapper">
        <div className="ps-product__content">
          <Link to={`/product/${product.id}`} className="ps-product__title">
            <Tooltip placement="bottom" title={product.name}>
              {product.name}
            </Tooltip>
            {product.name}
          </Link>
        </div>
        <div className="ps-product__shopping">
          {priceView}
          <a
            className="ps-btn"
            href="#"
            onClick={(e) => handleAddItemToCart(e)}
          >
            Add to Cart
          </a>
        </div>
      </div>
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
    // handleShowAuthModal: (cb) => dispatch(handleShowAuthModal(cb)),
    //   triggeredAddToCart: () => dispatch(triggeredAddToCart()),
    handleAddToCart: (productList, token, cb, isBuyNow) =>
      dispatch(handleAddToCart(productList, token, cb, isBuyNow)),
    getCartItems: (cb) => dispatch(getCartItems(cb)),
    //   getWishlistItems: (cb) => dispatch(getWishlistItems(cb)),
    handleHideShoppingCart: () => dispatch(handleHideShoppingCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOnHeader);
