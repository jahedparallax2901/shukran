import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { menuContents } from "../../../temp-data/homeData";

function WidgetShopCategories() {
  return (
    <aside class="widget widget_shop">
      <h4 class="widget-title">Categories</h4>
      <ul class="ps-list--categories">
        {menuContents.map((item) => (
          <li className={"menu-item-has-children"}>
            <Link to={"#"}>
              <i>{item.icon}</i> {item.title}
              <span class="sub-toggle">
                  <BsChevronDown/>
            </span>
            </Link>
            
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default WidgetShopCategories;
