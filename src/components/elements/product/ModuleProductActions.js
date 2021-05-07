import React, { useState } from "react";
import { Modal } from "antd";
// import { addItem } from '~/store/cart/action';
// import { addItemToCompare } from '~/store/compare/action';
// import { addItemToWishlist } from '~/store/wishlist/action';
// import { useDispatch } from 'react-redux';
// import ProductDetailQuickView from '~/components/elements/detail/ProductDetailQuickView';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiEye, FiShoppingBag } from "react-icons/fi";
import { FaChartBar, FaRegHeart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import ProductDetailQuickView from "../../product/ProductDetailQuickView";
import { Link } from "react-router-dom";
import { userData } from "../../../helpers/authUtils";
import { processPostRequest } from "../../../services/baseServices";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { handleShowAuthModal } from "../../../redux";
import { getWishlistItems } from "../../../redux/wishlist/wishlistActions";

const ModuleProductActions = ({
  product,
  handleShowAuthModal,
  getWishlistItems,
}) => {
  // const dispatch = useDispatch();
  const [isQuickView, setIsQuickView] = useState(false);

  const addItemToWishlist = (id) => {
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
  };

  const handleAddItemToCart = (e) => {
    e.preventDefault();
  };

  const handleAddItemToCompare = (e) => {
    e.preventDefault();
    // dispatch(addItemToCompare(product));
  };

  const handleAddItemToWishlist = (e) => {
    e.preventDefault();
    const user = userData();
    if (!user) {
      handleShowAuthModal(() => {
        addItemToWishlist(product?.product_id || product?.id);
      });
    } else {
      addItemToWishlist(product?.product_id || product?.id);
    }
  };

  const handleShowQuickView = (e) => {
    e.preventDefault();
    setIsQuickView(true);
  };

  const handleHideQuickView = (e) => {
    e.preventDefault();
    setIsQuickView(false);
  };
  return (
    <ul className="ps-product__actions">
      <li>
        <Link
          to={`/product/detail/${product?.product_id || product?.id}`}
          data-toggle="tooltip"
          data-placement="top"
          title="Add To Cart"
          onClick={handleAddItemToCart}
        >
          <i>
            <FiShoppingBag />
          </i>
        </Link>
      </li>
      <li>
        <Link
          data-toggle="tooltip"
          data-placement="top"
          title="Quick View"
          onClick={handleShowQuickView}
        >
          <i>
            <FiEye />
          </i>
        </Link>
      </li>
      <li>
        <Link
          to={`/product/detail/${product?.product_id || product?.id}`}
          data-toggle="tooltip"
          data-placement="top"
          title="Add to wishlist"
          onClick={handleAddItemToWishlist}
        >
          <i>
            <FaRegHeart className="filled"/>
          </i>
        </Link>
      </li>
      <li>
        <Link
          to={`/product/detail/${product?.product_id || product?.id}`}
          data-toggle="tooltip"
          data-placement="top"
          title="Compare"
          // onClick={handleAddItemToCompare}
        >
          <i>
            <FaChartBar />
          </i>
        </Link>
      </li>
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
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleShowShoppingCart: () => dispatch(handleShowShoppingCart()),
    handleShowAuthModal: (cb) => dispatch(handleShowAuthModal(cb)),
    getWishlistItems: (cb) => dispatch(getWishlistItems(cb)),
  };
};

export default connect(null, mapDispatchToProps)(ModuleProductActions);
