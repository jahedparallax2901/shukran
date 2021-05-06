import React, { Component, useEffect, useState } from "react";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3";
import BreadCrumb from "../components/elements/BreadCrumb";
import WidgetSearchCategories from "../components/search/widgets/WidgetSearchCategories";
import WidgetOtherFilters from "../components/search/widgets/WidgetOtherFilters";
import SearchItems from "../components/search/SearchItems";
import queryString from "query-string";
import { processGetRequest } from "../services/baseServices";
import { useHistory } from "react-router";
import { fetchSearchedProducts } from "../redux/product-search/productSearchActions";
import { connect } from "react-redux";

const SearchProduct = ({ fetchSearchedProducts, productSearch }) => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Search",
    },
  ];
  const history = useHistory();
  const [query, setQuery] = useState(
    queryString.parse(history.location.search)
  );
  const [productItems, setProductItems] = useState(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [paginanation, setPagination] = useState({});

  // async function getProducts(params) {
  //   setLoading(true);
  //   processGetRequest("/search-engine", params)
  //     .then((res) => {
  //       const { current_page, total , per_page } = res.product;
  //       setProductItems(res.product.data);
  //       setTotal(res.product.total);
  //       setQuery(queryString.parse(history.location.search));
  //       setPagination({current_page, total, per_page})
  //       setTimeout(
  //         function () {
  //           setLoading(false);
  //         }.bind(this),
  //         250
  //       );
  //     })
  //     .then((err) => console.log(err));
  // }

  const getProducts = (params) => {
    fetchSearchedProducts(params, (data) => {
      const { current_page, total, per_page } = data.product;
      setTotal(productSearch?.products?.length);
      setQuery(queryString.parse(history.location.search));
      setPagination({ current_page, total, per_page });
    });
  };

  useEffect(() => {
    const params = query;
    getProducts(params);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  return (
    <ContainerMarketPlace3>
      <div className="ps-page--shop">
        <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
        <div className="ps-container">
          <div className="ps-layout--shop">
            <div className="ps-layout__left">
              <WidgetSearchCategories
                setQuery={setQuery}
                query={query}
                getProducts={getProducts}
              />
              <WidgetOtherFilters
                query={query}
                setQuery={setQuery}
                getProducts={getProducts}
              />
            </div>
            <div className="ps-layout__right">
              <SearchItems
                columns={6}
                productItems={productSearch.products}
                loading={productSearch.isSearching}
                total={total}
                query={query}
                getProducts={getProducts}
                setQuery={setQuery}
                paginanation={paginanation}
              />
            </div>
          </div>
        </div>
      </div>
    </ContainerMarketPlace3>
  );
};

const mapStateToProps = (state) => {
  return {
    productSearch: state.productSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchedProducts: (params, callback) =>
      dispatch(fetchSearchedProducts(params, callback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
