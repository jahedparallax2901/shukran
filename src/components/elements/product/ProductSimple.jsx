import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiEye } from 'react-icons/fi';
import { Modal } from "antd";
import { GrClose } from "react-icons/gr";
import ProductDetailQuickView from "../../product/ProductDetailQuickView";
import {
  StrapiProductBadge,
  StrapiProductPrice,
  StrapiProductThumbnail,
} from "../../../utilities/product-helper";

import ModuleProductActions from "./ModuleProductActions";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { processDeleteRequest, processPostRequest } from "../../../services/baseServices";
import { getWishlistItems } from "../../../redux/wishlist/wishlistActions";
import { toast } from "react-toastify";
import { userData } from "../../../helpers/authUtils";
import { getCartItems, handleAddToCart, handleShowAuthModal } from "../../../redux";

const ProductSimple = ({ product, wishlist, getWishlistItems, handleShowAuthModal, shoppingCart, handleAddToCart, getCartItems }) => {
  const [isQuickView, setIsQuickView] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleShowQuickView = (e) => {
    setIsQuickView(true);
  };

  const handleHideQuickView = (e) => {
    e.preventDefault();
    setIsQuickView(false);
  };

  const toggleWishlistItem = (type, id) => {
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

  const handleToggleWishlist = (type, id) => {
    const user = userData();
    if (!user) {
      handleShowAuthModal(() => {
        toggleWishlistItem(type, id)
      });
    } else {
      toggleWishlistItem(type, id)
    }
  };

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
    if (
      product?.attributes_types?.length === 0 &&
      product?.default_attribute === null
    ) {
      toast.error("You can't add this product to cart! Try another one", {
        position: "top-left",
      });
      return;
    }
    setIsProcessing(true);
    const newList = shoppingCart.cartProductlist;
    newList.push({
      product_id: product?.id,
      item_id: product?.default_attribute?.id,
      quantity: 1,
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
            product?.id,
            product?.default_attribute?.id,
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

  const handleProductAddToCart = (e)=>{
    console.log("Clicking", product?.attributes_types?.length);
    if(product?.attributes_types?.length > 0){
      handleShowQuickView();
    }else{
      handleAddItemToCart(e);
    }
  }


  return (
    <div className="ps-product ps-product--simple">
      <a className="ps-product__wishlist" >
        <FiEye onClick={handleShowQuickView}/>
      </a>
      <div class="ps-product__badge">
        <i>
          {wishlist?.find((item) => (item?.product_id === product?.product_id) || (item?.product_id === product?.id)) ? (
            <FaHeart onClick={(e) => handleToggleWishlist("remove", product?.product_id || product?.id)}/>
          ) : (
            <FaRegHeart onClick={(e) => handleToggleWishlist("add", product?.product_id || product?.id)}/>
          )}
        </i>
      </div>
      <div className="ps-product__thumbnail">
        {StrapiProductThumbnail(product)}
        {StrapiProductBadge(product)}
        {/* <ModuleProductActions product={product} /> */}
      </div>
      <div className="ps-product__container">
        <div className="ps-product__content">
          <Link to={`/product/${product?.product_id || product?.id}`}>
            <a className="ps-product__title">
              {product?.product?.name || product.name}
            </a>
          </Link>
          <div className="ps-product__rating">
            {/* <Rating />
                        <span>{product.ratingCount}</span> */}
          </div>
          {StrapiProductPrice(product)}
        </div>
      </div>
      <div className="product-add-to-cart-hover" onClick={handleProductAddToCart}>
        Add to Cart
      </div>
      <Modal
        title="Quickview"
        centered
        footer={null}
        width={1024}
        onCancel={(e) => handleHideQuickView(e)}
        visible={isQuickView}
        bodyStyle={{ overflowY: "visible" }}
        closeIcon={
          <i>
            <GrClose />
          </i>
        }
      >
        <ProductDetailQuickView id={product?.product_id || product?.id} />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.wishListItems,
    shoppingCart: state.shoppingCart,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    getWishlistItems: (cb)=>dispatch(getWishlistItems(cb)),
    handleShowAuthModal: (cb) => dispatch(handleShowAuthModal(cb)),
    handleAddToCart: (productList, token, cb, isBuyNow) =>
      dispatch(handleAddToCart(productList, token, cb, isBuyNow)),
      getCartItems: (cb) => dispatch(getCartItems(cb)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductSimple);
