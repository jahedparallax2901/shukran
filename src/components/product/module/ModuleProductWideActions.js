import React from "react";
import { FaChartBar, FaHeart } from "react-icons/fa";
import { StrapiProductPrice } from "../../../utilities/product-helper";

const ModuleProductWideActions = ({ product }) => {
  // const dispatch = useDispatch();

  const handleAddItemToCompare = (e) => {
    e.preventDefault();
    // dispatch(addItemToCompare(product));
  };

  const handleAddItemToWishlist = (e) => {
    e.preventDefault();
    // dispatch(addItemToWishlist(product));
  };

  return (
    <div className="ps-product__shopping">
      {StrapiProductPrice(product)}
      <a className="ps-btn" href="#">
        Add to cart
      </a>
      <ul className="ps-product__actions">
        <li>
          <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
            <i>
              <FaHeart />
            </i>
            Wishlist
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
            <i>
              <FaChartBar />
            </i>
            Compare
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ModuleProductWideActions;
