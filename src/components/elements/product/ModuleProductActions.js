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

const ModuleProductActions = ({ product }) => {
  // const dispatch = useDispatch();
  const [isQuickView, setIsQuickView] = useState(false);

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    // dispatch(addItem(product));
  };

  const handleAddItemToCompare = (e) => {
    e.preventDefault();
    // dispatch(addItemToCompare(product));
  };

  const handleAddItemToWishlist = (e) => {
    // dispatch(addItemToWishlist(product));
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
        <a
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="Add To Cart"
          // onClick={handleAddItemToCart}
        >
          <i>
            <FiShoppingBag />
          </i>
        </a>
      </li>
      <li>
        <a
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="Quick View"
          onClick={handleShowQuickView}
        >
          <i>
            <FiEye />
          </i>
        </a>
      </li>
      <li>
        <a
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="Add to wishlist"
          // onClick={handleAddItemToWishlist}
        >
          <i>
            <FaRegHeart />
          </i>
        </a>
      </li>
      <li>
        <a
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="Compare"
          // onClick={handleAddItemToCompare}
        >
          <i>
            <FaChartBar />
          </i>
        </a>
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
        <ProductDetailQuickView id={product?.id} />
      </Modal>
    </ul>
  );
};

export default ModuleProductActions;
