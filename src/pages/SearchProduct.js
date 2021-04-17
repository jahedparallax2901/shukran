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
  async function getProducts() {
    setLoading(true);
    // setProductItems(dealOfTheDayProducts);

    processGetRequest("/search-engine", query)
      .then((res) => {
        const { current_page, last_page, per_page } = res.product;
        setProductItems(res.product.data);
        setTotal(res.product.total);
        setQuery({ ...query, current_page, last_page, per_page });
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
    getProducts();
  }, []);

  return (
    <ContainerMarketPlace3>
      <div className="ps-page--shop">
        <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
        <div className="ps-container">
          <div className="ps-layout--shop">
            <div className="ps-layout__left">
              <WidgetSearchCategories />
              <WidgetOtherFilters />
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
              />
            </div>
          </div>
        </div>
      </div>
    </ContainerMarketPlace3>
  );
}
