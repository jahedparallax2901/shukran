import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import Slider from "react-slick";
import ProductOffline from "../../components/elements/product/ProductOffline";
import Rating from "../../components/elements/Rating";
import VendorProducts from "../../components/partials/store/module/VendorProducts";
import {
  processGetRequest,
  processPostRequest,
} from "../../services/baseServices";
import { dealOfTheDayProducts } from "../../temp-data/homeData";
import { carouselStandard } from "../../utilities/carousel-helpers";
import noImage from "../../assets/img/no_image.jpg";
import { Pagination } from "antd";

class Store extends Component {
  state = {
    store_info: {},
    product: [],
    isLoading: false,
    query: {},
  };

  componentDidMount() {
    this.getProducts(this.props.store_id);
  }

  getProducts(id) {
    this.setState({ isLoading: true });
    processGetRequest(`/store/product-list/${id}`, this.state.query, false)
      .then((res) => {
        this.setState(
          { store_info: res.store_info, product: res.product },
          () => {
            this.setState({ isLoading: false });
          }
        );
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
  }

  handlePagination = (page, pageSize) => {
    this.setState(
      { query: { ...this.state.query, page: page, pageSize: pageSize } },
      () => {
        this.getProducts(this.props.store_id);
      }
    );
  };

  render() {
    const { store_info, product } = this.state;

    return (
      <>
        {this.state.isLoading ? (
          <div className="ps-vendor-store">
            <div className="container">
              <div className="ps-section__container">
                <div className="loading-wrapper" style={{ position: 'relative', height: '10vh' }}>
                  <Spinner animation="border" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="ps-vendor-store ps-shop-details-vendor">
            <div className="container">
              <div className="ps-section__container">
                <div className="ps-section__left ps-shop-details-left">
                  <div className="ps-block--vendor">
                    <div className="ps-block__thumbnail">
                      <img
                        src={
                          store_info?.store_detail?.file_attach_cover
                            ?.file_url || noImage
                        }
                        alt={store_info?.name || "Store Name"}
                      />
                    </div>
                    <div className="ps-block__container">
                      <div className="ps-block__header">
                        <h4>{store_info?.name || "Store"}</h4>
                        {/* <Rating count={3} /> */}
                        {/* <p>
                          <strong>85% Positive</strong> (562 rating)
                        </p> */}
                      </div>
                      <div className="ps-block__divider"></div>
                      <div className="ps-block__content">
                        <p>
                          <strong>{store_info?.name || "Store"}</strong>,
                          Bangladesh’s no.1 online retailer was established in
                          May 2012 with the aim and vision to become the
                          one-stop shop for retail in New York with
                          implementation of best practices both online
                        </p>
                        <span className="ps-block__divider"></span>
                        <p>
                          <strong>Address</strong>{" "}
                          {store_info?.store_address?.address ||
                            "Badda, Dhaka, 1212"}
                        </p>
                        <figure>
                          <figcaption>Foloow us on social</figcaption>
                          <ul className="ps-list--social-color">
                            <li>
                              <a className="facebook" href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a className="twitter" href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a className="linkedin" href="#">
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a className="feed" href="#">
                                <i className="fa fa-feed"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                      </div>
                      <div className="ps-block__footer">
                        <p>
                          Call us directly
                          <strong>
                            {store_info?.vendor?.phone || "(+880) 1836952369"}
                          </strong>
                        </p>
                        <p>or Or if you have any question</p>
                        <a className="ps-btn ps-btn--fullwidth" href="">
                          Contact Seller
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ps-section__right">
                  {/* <div className="ps-block--vendor-filter">
                    <div className="ps-block__left">
                      <ul>
                        <li className="active">
                          <a href="#">Products</a>
                        </li>
                        <li>
                          <a href="#">Reviews</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                      </ul>
                    </div>
                    <div className="ps-block__right">
                      <form className="ps-form--search" action="/" method="get">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search in this shop"
                        />
                        <button>
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div> */}
                  {/* 
                  <div className="ps-vendor-best-seller">
                    <div className="ps-section__header">
                      <h3>Best Seller items</h3>
                      <div className="ps-section__nav">
                        <a
                          className="ps-carousel__prev"
                          href="#vendor-bestseller"
                        >
                          <i className="icon-chevron-left"></i>
                        </a>
                        <a
                          className="ps-carousel__next"
                          href="#vendor-bestseller"
                        >
                          <i className="icon-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-section__content">
                      <Slider {...carouselStandard} className="ps-carousel">
                        {dealOfTheDayProducts &&
                          dealOfTheDayProducts.map((product) => (
                            <ProductOffline
                              product={product}
                              key={product.id}
                            />
                          ))}
                      </Slider>
                    </div>
                  </div>
                  */}
                  <VendorProducts products={product} />
                  <div className="ps-shopping__footer text-center">
                    <div className="ps-pagination">
                      <Pagination
                        total={product?.total}
                        pageSize={product?.per_page || 5}
                        responsive={true}
                        showSizeChanger={false}
                        current={product?.current_page}
                        onChange={(e) => this.handlePagination(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Store;
