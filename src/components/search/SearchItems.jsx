import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useHistory } from "react-router";
import { dealOfTheDayProducts } from "../../temp-data/homeData";
import Product from "../product/module/Product";
import ProductWide from "../product/ProductWide";
import { generateTempArray } from "../../utilities/common-helpers";
import SkeletonProduct from "../partials/shared/SkeletonProduct";
import ModuleSearcjProductSortBy from "../product/ModuleSearcjProductSortBy";
import { BsGrid3X3Gap } from "react-icons/bs";
import { processGetRequest } from "../../services/baseServices";
import {objToUrlPrams} from '../../helpers/utils';

const SearchItems = ({ columns = 4, productItems, total , loading, query, setQuery, getProducts, paginanation}) => {
  const history = useHistory();
  const [listView, setListView] = useState(true);
  const [classes, setClasses] = useState(
    "col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6"
  );

  function handleChangeViewMode(e) {
    e.preventDefault();
    setListView(!listView);
  }

  

  function handlePagination(page, pageSize) {
    setQuery({...query, page}, ()=>{
        history.push(objToUrlPrams(query));
        getProducts()
    })
  }

  function handleSetColumns() {
    switch (columns) {
      case 2:
        setClasses("col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6");
        return 3;
        break;
      case 4:
        setClasses("col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6");
        return 4;
        break;
      case 6:
        setClasses("col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6");
        return 6;
        break;

      default:
        setClasses("col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6");
    }
  }

  useEffect(() => {
    handleSetColumns();
  }, []);

  // Views
  let productItemsView;
  if (!loading) {
    if (productItems && productItems.length > 0) {
      if (listView) {
        const items = productItems.map((item) => (
          <div className={classes} key={item.id}>
            <Product product={item} />
          </div>
        ));
        productItemsView = (
          <div className="ps-shop-items">
            <div className="row">{items}</div>
          </div>
        );
      } else {
        productItemsView = productItems.map((item) => (
          <ProductWide product={item} />
        ));
      }
    } else {
      productItemsView = <p>No product found.</p>;
    }
  } else {
    const skeletonItems = generateTempArray(12).map((item) => (
      <div className={classes} key={item}>
        <SkeletonProduct />
      </div>
    ));
    productItemsView = <div className="row">{skeletonItems}</div>;
  }

  return (
    <div className="ps-shopping">
      <div className="ps-shopping__header">
        <p>
          <strong className="mr-2">{total}</strong>
          Products found
        </p>
        <div className="ps-shopping__actions">
          <ModuleSearcjProductSortBy />
          <div className="ps-shopping__view">
            <p>View</p>
            <ul className="ps-tab-list">
              <li className={listView === true ? "active" : ""}>
                <a href="#" onClick={(e) => handleChangeViewMode(e)}>
                  <i>
                    <BsGrid3X3Gap />
                  </i>
                </a>
              </li>
              <li className={listView !== true ? "active" : ""}>
                <a href="#" onClick={(e) => handleChangeViewMode(e)}>
                  <i className="icon-list4"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ps-shopping__content">{productItemsView}</div>
      <div className="ps-shopping__footer text-center">
        <div className="ps-pagination">
          <Pagination
            total={total - 1}
            pageSize={paginanation?.per_page || 10}
            responsive={true}
            showSizeChanger={false}
            current={paginanation?.current_page !== undefined ? parseInt(paginanation?.current_page) : 1}
            onChange={(e) => handlePagination(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
