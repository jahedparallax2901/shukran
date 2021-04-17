import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { objToUrlPrams } from "../../../helpers/utils";
import { processGetRequest } from "../../../services/baseServices";

export default function WidgetSearchCategories({
  setQuery,
  query,
  getProducts,
}) {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handleCategoryClick = async (e, id) => {
    const newQuery = {...query};
    newQuery.category_id = id;
    await setQuery(newQuery);
    const url = history.location.pathname + "?" + objToUrlPrams(newQuery);
    history.push(url);
    getProducts(newQuery);
  };

  useEffect(() => {
    processGetRequest("/homepage", { filter_type: 5 })
      .then((res) => {
        setCategories(res.all_category);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <aside class="widget widget_shop">
        <h4 class="widget-title">Categories</h4>
        <ul class="ps-list--categories">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {categories &&
                categories.map((cat) => (
                  <li class="menu-item-has-children">
                    <a onClick={(e) => handleCategoryClick(e, cat.id)}>
                      {cat.name}
                    </a>
                    <span class="sub-toggle">
                      <FaChevronDown />
                    </span>
                  </li>
                ))}
            </>
          )}
          {/* <li class="menu-item-has-children">
            <a href="shop-default.html">Computer and accessories</a>
            <span class="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li class="menu-item-has-children">
            <a href="shop-default.html">Cameras</a>
            <span class="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li class="menu-item-has-children">
            <a href="shop-default.html">Health & Beauty</a>
            <span class="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li class="menu-item-has-children">
            <a href="shop-default.html">Mother & Baby</a>
            <span class="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li class="menu-item-has-children">
            <a href="shop-default.html">Mobile & Accessories</a>
            <span class="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li class="menu-item-has-children">
            <a href="shop-default.html">Men's Fashion</a>
            <span class="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li class="menu-item-has-children">
            <a href="shop-default.html">Women's Fashion</a>
            <span class="sub-toggle">
              <FaChevronDown />
            </span>
          </li>
          <li class="menu-item-has-children">
            <a href="shop-default.html">Automotive and Motorbike</a>
            <span class="sub-toggle">
              <FaChevronDown />
            </span>
          </li> */}
        </ul>
      </aside>
    </div>
  );
}
