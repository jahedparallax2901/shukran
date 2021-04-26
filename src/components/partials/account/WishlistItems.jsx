import React, { Component } from "react";
// import { connect } from 'react-redux';
// import { addItem } from '../../../store/cart/action';
// import { removeWishlistItem } from '../../../store/wishlist/action';
import { Rate } from "antd";
import shopProduct1 from "../../../assets/img/products/shop/1.jpg";
import { IoMdClose } from "react-icons/io";
import ProductCart from "../../elements/product/ProductCart";

class WishlistItems extends Component {
  constructor(props) {
    super(props);
  }

  handleAddItemToCart = (e, product) => {
    // this.props.dispatch(addItem(product));
  };

  handleRemoveWishListItem = (e, product) => {
    e.preventDefault();
    // this.props.dispatch(removeWishlistItem(product));
  };

  render() {
    // const { wishlistItems } = this.props;
    const wishlistItems = [
      {
        id: 1,
        name: "Apple iPhone Retina 6s Plus 64GB",
        shop_name: "YOUNG SHOP",
        price: 205.0,
        status: "In-stock",
        thumbnail: { url: shopProduct1 },
      },
      {
        id: 1,
        name: "Apple iPhone Retina 6s Plus 64GB",
        shop_name: "YOUNG SHOP",
        price: 205.0,
        status: "In-stock",
        thumbnail: { url: shopProduct1 },
      },
      {
        id: 1,
        name: "Apple iPhone Retina 6s Plus 64GB",
        shop_name: "YOUNG SHOP",
        price: 205.0,
        status: "In-stock",
        thumbnail: { url: shopProduct1 },
      },
    ];

    return (
      <div className="ps-section--shopping ps-whishlist">
        <div className="container">
          <div className="ps-section__header">
            <h1>Wishlist</h1>
          </div>
          <div className="ps-section__content">
            {wishlistItems && wishlistItems.length === 0 ? (
              <div className="alert alert-danger" role="alert">
                Wishlist is empty!
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table ps-table--whishlist">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product name</th>
                      <th>Unit Price</th>
                      <th>Vendor</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistItems.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <a
                            href="#"
                            onClick={(e) =>
                              this.handleRemoveWishListItem(e, product)
                            }
                          >
                            <i>
                              <IoMdClose />
                            </i>
                          </a>
                        </td>
                        <td>
                          <ProductCart product={product} />
                        </td>
                        <td className="price">${product.price}</td>
                        <td>{product.shop_name}</td>
                        <td>
                          <a
                            className="ps-btn"
                            href=""
                            onClick={(e) =>
                              this.handleAddItemToCart(e, product)
                            }
                          >
                            Add to cart
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//     return state.wishlist;
// };
// export default connect(mapStateToProps)(Wishlist);
export default WishlistItems;
