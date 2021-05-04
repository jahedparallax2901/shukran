import React, { Component } from "react";
import { withRouter } from "react-router";
// import { getProductsByKeyword } from '../../../store/product/action';
// import ProductResult from '../../elements/products/ProductSearchResult';
import { connect } from "react-redux";
import ProductSearchResult from "../../product/search/ProductSearchResult";
import { processGetRequest } from "../../../services/baseServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Spin } from "antd";

class PanelSearch extends Component {
  state = {
    searchPanel: false,
    searchProducts: [],
    keyword: "",
    loading: false,
  };

  // searchByProductName = (keyword, object) => {
  //     let matches = [];
  //     let regexp = new RegExp(keyword.toLowerCase(), 'g');

  //     object.forEach((product) => {
  //         if (product.title.toLowerCase().match(regexp))
  //             matches.push(product);
  //     });

  //     return matches;
  // };

  handleSubmit(e) {
    e.preventDefault();
    console.log("Button clicked");
    const keyword = this.state.keyword;
    this.props.history.push(`/search?q=${keyword}`);
  }

  handleSearch(e) {
    if (e.target.value !== "") {
      const keyword = e.target.value;
      this.setState({ keyword: e.target.value, loading: true });
      processGetRequest("/search-bar", { q: keyword })
        .then((res) => {
          this.setState({ searchProducts: res.product }, () => {
            this.setState({
              searchPanel: true,
              loading: false,
            });
          });
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ loading: false });
        });
    } else {
      this.setState({ searchPanel: false, searchProducts: [] });
    }
  }

  render() {
    const { searchProducts } = this.state;
    return (
      <div className="ps-panel__search-results">
        <form className="ps-form--search-mobile">
          <div className="form-group--nest">
            <input
              className="form-control"
              type="text"
              placeholder="Search something..."
              onChange={this.handleSearch.bind(this)}
            />
            <button onClick={(e) => this.handleSubmit(e)}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>

        {this.state.loading ? (
          <div className="h-100 w-100 d-flex justify-content-center align-items-center">
              <Spin size="large" />
          </div>
        ) : (
          <div className="search_scrollable_div">
            {searchProducts &&
              searchProducts.map((product) => (
                <ProductSearchResult product={product} key={product.id} />
              ))}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(PanelSearch);
