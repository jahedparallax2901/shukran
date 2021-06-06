import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { arrayToUrlParams, objToUrlPrams } from "../../../helpers/utils";
import { processGetRequest } from "../../../services/baseServices";
import queryString from "query-string";

export default function WidgetSearchCategories({
  setQuery,
  query,
  getProducts,
}) {
  const [categories, setCategories] = useState([]);
  const [selected_categories, setSelected_categories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queryParams, setQueryParams] = useState()
  const history = useHistory();

  const handleCategoryClick = async (e, id) => {
    let newQuery = {...query, category_id: [] };
    if (!selected_categories.includes(id)) {
      e.target.classList.add("active");
      const categories = [...new Set([...selected_categories, id])];
      setSelected_categories(categories);
      newQuery.category_id = categories;
      const url =
        history.location.pathname +
        "?" +
        queryString.stringify(newQuery) 
        // +
        // arrayToUrlParams("category_id", categories);
      history.push(url);
      setQuery(newQuery);
      getProducts(newQuery);
    } else {
      e.target.classList.remove("active");
      const categories = selected_categories?.filter(
        (selected) => selected !== id
      );
      setSelected_categories(categories);
      newQuery.category_id = categories;
      const url =
        history.location.pathname +
        "?" +
        queryString.stringify(newQuery) 
        // +
        // arrayToUrlParams("category_id", categories);
      history.push(url);
      setQuery(newQuery);
      getProducts(newQuery);
    }
  };

  useEffect(() => {
    if(query?.category_id){
      setSelected_categories(Array.isArray(query?.category_id)? [...new Set(query.category_id)] : [query?.category_id]);
    }
    processGetRequest("/generic-info", { info_type: 1 })
      .then((res) => {
        setCategories(res.categories);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  console.log("query",selected_categories);

  return (
    <div>
      <aside className="widget widget_shop">
        <h4 className="widget-title">Categories</h4>
        <ul className="ps-list--categories">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {categories &&
                categories.map((cat) => (
                  <li key={cat?.id} className={`menu-item-has-children`} onClick={(e) => handleCategoryClick(e, cat.id.toString())}>
                    <a className={selected_categories.includes((cat.id).toString()) && "active"}>
                      {cat.name}
                      <span className="sub-toggle">
                      <FaChevronDown />
                    </span>
                    </a>
                  </li>
                ))}
            </>
          )}
          {/* <li className="menu-item-has-children">
            <a href="shop-default.html">Computer and accessories</a>
            <span className="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li className="menu-item-has-children">
            <a href="shop-default.html">Cameras</a>
            <span className="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li className="menu-item-has-children">
            <a href="shop-default.html">Health & Beauty</a>
            <span className="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li className="menu-item-has-children">
            <a href="shop-default.html">Mother & Baby</a>
            <span className="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li className="menu-item-has-children">
            <a href="shop-default.html">Mobile & Accessories</a>
            <span className="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li className="menu-item-has-children">
            <a href="shop-default.html">Men's Fashion</a>
            <span className="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li className="menu-item-has-children">
            <a href="shop-default.html">Women's Fashion</a>
            <span className="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li className="menu-item-has-children">
            <a href="shop-default.html">Automotive and Motorbike</a>
            <span className="sub-toggle">
              <FaChevronDown />
            </span>
          </li> */}
        </ul>
      </aside>
    </div>
  );
}
