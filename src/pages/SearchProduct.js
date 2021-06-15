import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import BreadCrumb from "../components/elements/BreadCrumb";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3";
import SearchItems from "../components/search/SearchItems";
import WidgetOtherFilters from "../components/search/widgets/WidgetOtherFilters";
import WidgetSearchCategories from "../components/search/widgets/WidgetSearchCategories";
import { fetchSearchedProducts } from "../redux/product-search/productSearchActions";

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
  const [pagination, setPagination] = useState({});

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
      console.log("Testing data", data);
      const { current_page, total, per_page } = data.product;
      setTotal(data?.length);
      setQuery(queryString.parse(history.location.search));
      setPagination({ current_page, total, per_page });
    });
  };

  useEffect(() => {
    const params = queryString.parse(history.location.search);
    
    if(params.category_id && !Array.isArray(params.category_id)){
      params.category_id = [params.category_id]
    }else if(params.brand_id && !Array.isArray(params.brand_id)){
      params.brand_id = [params.brand_id]
    }else if(params.attribute_id && !Array.isArray(params.attribute_id)){
      params.attribute_id = [params.attribute_id]
    }

    getProducts(params);
    window.scrollTo({top: 0, behavior: 'auto'});
  }, []);

  return (
    <ContainerMarketPlace3>
      <div className="ps-page--shop">
        <BreadCrumb breacrumb={breadCrumb} layout="" />
        <div className="ps-container container">
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
                columns={4}
                productItems={productSearch?.products}
                loading={productSearch.isSearching}
                total={total}
                query={query}
                getProducts={getProducts}
                setQuery={setQuery}
                pagination={pagination}
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
