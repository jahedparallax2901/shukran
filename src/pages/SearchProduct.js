import React, { Component, useEffect, useState } from "react";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3";
import BreadCrumb from "../components/elements/BreadCrumb";
import WidgetSearchCategories from "../components/search/widgets/WidgetSearchCategories";
import WidgetOtherFilters from "../components/search/widgets/WidgetOtherFilters";
import SearchItems from "../components/search/SearchItems";
import queryString from "query-string";
import { processGetRequest } from "../services/baseServices";
import { useHistory } from "react-router";

export default function SearchProduct() {
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

  async function getProducts(params) {
    setLoading(true);
    // setProductItems(dealOfTheDayProducts);
    processGetRequest("/search-engine", params)
      .then((res) => {
        const { current_page, total , per_page } = res.product;
        setProductItems(res.product.data);
        setTotal(res.product.total);
        setQuery(queryString.parse(history.location.search));
        setPagination({current_page, total, per_page})
        setTimeout(
          function () {
            setLoading(false);
          }.bind(this),
          250
        );
      })
      .then((err) => console.log(err));
  }

  useEffect(() => {
    const params = query;
    getProducts(params);
  }, []);

  return (
    <ContainerMarketPlace3>
      <div className="ps-page--shop">
        <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
        <div className="ps-container">
          <div className="ps-layout--shop">
            <div className="ps-layout__left">
              <WidgetSearchCategories setQuery={setQuery} query={query} getProducts={getProducts}/>
              <WidgetOtherFilters query={query} setQuery={setQuery} getProducts={getProducts}/>
            </div>
            <div className="ps-layout__right">
              <SearchItems
                columns={6}
                productItems={productItems}
                loading={loading}
                total={total}
                query={query}
                setQuery={setQuery}
                getProducts={getProducts}
                paginanation={paginanation}
              />
            </div>
          </div>
        </div>
      </div>
    </ContainerMarketPlace3>
  );
}
