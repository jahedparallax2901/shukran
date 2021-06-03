import React, { useEffect, useRef, useState } from "react";
import { Spin } from "antd";
import ProductSearchResult from "../product/search/ProductSearchResult";
import { Link, useHistory } from "react-router-dom";
import { doubleProduct } from "../../temp-data/product";
import { dealOfTheDayProducts } from "../../temp-data/homeData";
import { processGetRequest } from "../../services/baseServices";
import queryString from "query-string";
import { connect } from "react-redux";
import { fetchSearchedProducts } from "../../redux/product-search/productSearchActions";
import { IoIosCloseCircleOutline } from "react-icons/io";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SearchHeader = ({ fetchSearchedProducts }) => {
  const inputEl = useRef(null);
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [resultItems, setResultItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(keyword, 300);
  const [query, setQuery] = useState();
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [categories, setCategories] = useState();
  const [isShowingSugestedProducts, setIsShowingSugestedProducts] = useState(false);
  const history = useHistory();

  function handleClearKeyword() {
    console.log("This is something inside", keyword);
    setKeyword("");
    setIsSearch(false);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search?q=${keyword}`);
    setIsShowingSugestedProducts(false);
    fetchSearchedProducts({
      ...query,
      q: keyword,
      category_id: selectedCategoryId,
    });
  }

  useEffect(() => {
    setQuery(queryString.parse(history.location.search));
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      if (keyword) {
        const params = {
          limit: 5,
          title_contains: keyword,
          q: keyword,
        };
        processGetRequest("/search-bar", params)
          .then((res) => {
            setResultItems(res.product);
            setLoading(false);
            setIsSearch(true);
          })
          .catch((err) => {
            setLoading(false);
          });
      } else {
        setIsSearch(false);
        setKeyword("");
      }
      if (loading) {
        setIsSearch(false);
      }
    } else {
      setLoading(false);
      setIsSearch(false);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    processGetRequest("/generic-info", { info_type: 1 })
      .then((res) => {
        setCategories(res.categories);
      })
      .catch((err) => {});
  }, []);

  // Views
  let productItemsView,
    clearTextView,
    selectOptionView,
    loadingView,
    loadMoreView;
  if (!loading) {
    if (resultItems && resultItems.length > 0) {

      if (resultItems.length > 5) {
        loadMoreView = (
          <div className="ps-panel__footer text-center">
            <Link to={`/search/q=${keyword}`}>
              <a>See all results</a>
            </Link>
          </div>
        );
      }
      
      productItemsView = resultItems.map((product) => (
        <ProductSearchResult product={product} key={product.id} />
      ));
    } else {
      productItemsView = <p>No product found.</p>;
    }
    if (keyword !== "") {
      clearTextView = (
        <span className="ps-form__action" onClick={handleClearKeyword}>
          <i>
            <IoIosCloseCircleOutline className="pointer-cursor" />
          </i>
        </span>
      );
    }
  } else {
    loadingView = (
      <span className="ps-form__action">
        <Spin size="small" />
      </span>
    );
  }

  selectOptionView = categories?.map((option) => (
    <option value={option.id} key={option.id}>
      {option.name}
    </option>
  ));

  console.log("This is something", keyword);

  return (
    <form className="ps-form--quick-search" onSubmit={handleSubmit}>
      {/* <div className="ps-form__categories">
        <select
          defaultValue={selectedCategoryId}
          className="form-control"
          onChange={(e) => {
            setSelectedCategoryId(e.target.value);
          }}
        >
          <option value={""} key={""}>
            All
          </option>
          {selectOptionView}
        </select>
      </div> */}
      <div className="ps-form__input">
        <input
          ref={inputEl}
          className="form-control"
          type="text"
          value={keyword}
          placeholder="I'm shopping for..."
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={()=>setIsShowingSugestedProducts(true)}
        />
        {clearTextView}
        {loadingView}
      </div>
      <button onClick={handleSubmit}>Search</button>
      {
          isShowingSugestedProducts &&  <div className={`ps-panel--search-result${isSearch ? " active " : ""}`}>
          <div className="ps-panel__content">{productItemsView}</div>
          {loadMoreView}
        </div>
      }
     
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchedProducts: (params) => dispatch(fetchSearchedProducts(params)),
  };
};

export default connect(null, mapDispatchToProps)(SearchHeader);
