import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function WidgetSearchCategories() {
  return (
    <div>
      <aside class="widget widget_shop">
        <h4 class="widget-title">Categories</h4>
        <ul class="ps-list--categories">
          <li class="menu-item-has-children">
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
          </li>
        </ul>
      </aside>
    </div>
  );
}
