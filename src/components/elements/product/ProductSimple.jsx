import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
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
import { handleShowAuthModal } from "../../../redux";

const ProductSimple = ({ product, wishlist, getWishlistItems, handleShowAuthModal }) => {
  const [isQuickView, setIsQuickView] = useState(false);

  const handleShowQuickView = (e) => {
    e.preventDefault();
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


  return (
    <div className="ps-product ps-product--simple">
      <div class="ps-product__badge">
        <i>
          {wishlist?.find((item) => item?.product_id === product?.product_id) ? (
            <FaHeart onClick={(e) => handleToggleWishlist("remove", product?.product_id)}/>
          ) : (
            <FaRegHeart onClick={(e) => handleToggleWishlist("add", product?.product_id)}/>
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
              {product?.product?.name || product.title}
            </a>
          </Link>
          <div className="ps-product__rating">
            {/* <Rating />
                        <span>{product.ratingCount}</span> */}
          </div>
          {StrapiProductPrice(product)}
        </div>
      </div>
      <div className="product-add-to-cart-hover" onClick={handleShowQuickView}>
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
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    getWishlistItems: (cb)=>dispatch(getWishlistItems(cb)),
    handleShowAuthModal: (cb) => dispatch(handleShowAuthModal(cb))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductSimple);
