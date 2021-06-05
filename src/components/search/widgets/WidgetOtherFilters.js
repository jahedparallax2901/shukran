import { Slider } from "antd";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { useHistory } from "react-router";
import { arrayToUrlParams, objToUrlPrams } from "../../../helpers/utils";
import { processGetRequest } from "../../../services/baseServices";
import { all_brand } from "../../../temp-data/brands";
import "../../../assets/scss/my-changes.scss";
import queryString from "query-string";

export default function WidgetOtherFilters({ query, setQuery, getProducts }) {
  const [range, setRange] = useState({ starting_price: "", ending_price: "" });
  const [starting_price, setStarting_price] = useState(0);
  const [ending_price, setEnding_price] = useState(0);
  const [brands, setBrands] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [selected_brands, setSelected_brands] = useState([]);
  const [selected_attributes, setSelected_attributes] = useState([]);
  const [isBrandFetching, setIsBrandFetching] = useState(true);
  const [isAttributesFetching, setIsAttributesFetching] = useState(true);
  const history = useHistory();

  const handlePriceFilter = async (e) => {
    e.preventDefault();
    const newQuery = { ...query };
    newQuery.starting_price = range.starting_price;
    newQuery.ending_price = range.ending_price;
    await setQuery(newQuery);
    const url =
      history.location.pathname + "?" + queryString.stringify(newQuery);
    history.push(url);
    getProducts(newQuery);
  };

  const handleOnBrandChange = (e, id) => {
    let newQuery = { ...query, brand_id: [] };
    console.log("newQuery", query);
    if (e.target.checked) {
      const brands = [...new Set([...selected_brands, id])];
      setSelected_brands(brands);
      newQuery.brand_id = brands;
      const url =
        history.location.pathname + "?" + queryString.stringify(newQuery);
      // +
      // arrayToUrlParams("brand_id", brands);
      history.push(url);
      getProducts(newQuery);
    } else {
      const brands = selected_brands?.filter((selected) => selected != id);
      setSelected_brands(brands);
      newQuery.brand_id = brands;
      const url =
        history.location.pathname + "?" + queryString.stringify(newQuery);
      // +
      // arrayToUrlParams("brand_id", brands);
      history.push(url);
      getProducts(newQuery);
    }
  };

  const handleAttributeOnChange = (e, id) => {
    let newQuery = { ...query, attribute_id: [] };
    if (e.target.checked) {
      const attributes = [...new Set([...selected_attributes, id])];
      setSelected_attributes(attributes);
      newQuery.attribute_id = attributes;
      const url =
        history.location.pathname +
        "?" +
        queryString.stringify(query) +
        arrayToUrlParams("attribute_id", attributes);
      history.push(url);
      getProducts(newQuery);
    } else {
      const attributes = selected_attributes?.filter(
        (selected) => selected != id
      );
      setSelected_attributes(attributes);
      newQuery.attribute_id = attributes;
      const url =
        history.location.pathname +
        "?" +
        queryString.stringify(query) +
        arrayToUrlParams("attribute_id", attributes);
      history.push(url);
      getProducts(newQuery);
    }
  };

  const rangerInputOnChange = (e) => {
    const newRange = { ...range };
    const value = e.target.value.replace(/\D/g, "");
    newRange[e.target.name] = value;
    setRange(newRange);
  };

  useEffect(() => {
    if (query?.brand_id) {
      setSelected_brands(
        Array.isArray(query?.brand_id)
          ? [...new Set(query?.brand_id)]
          : [query?.brand_id]
      );
    }
    if (query?.attribute_id) {
      setSelected_attributes(
        Array.isArray(query?.attribute_id)
          ? [...new Set(query?.attribute_id)]
          : [query?.attribute_id]
      );
    }

    processGetRequest("/generic-info", { info_type: 2 })
      .then((res) => {
        setBrands(res.brands);
        setIsBrandFetching(false);
      })
      .catch((err) => {
        setIsBrandFetching(false);
      });

    processGetRequest("/generic-info", { info_type: 5 })
      .then((res) => {
        setAttributes(res.attributes);
        setIsAttributesFetching(false);
      })
      .catch((err) => {
        setIsAttributesFetching(false);
      });
    const range = {
      starting_price: parseInt(query.starting_price) || "",
      ending_price: parseInt(query.ending_price) || "",
    };
    setRange(range);
    // setStarting_price(
    //   query.starting_price ? parseInt(query.starting_price) : 0
    // );
    // setEnding_price(query.ending_price ? parseInt(query.ending_price) : 0);
  }, []);

  console.log("testing", query);

  return (
    <aside class="widget widget_shop">
      <h4 class="widget-title">BY BRANDS</h4>
      <form class="ps-form--widget-search" action="do_action" method="get">
        <input class="form-control" type="text" placeholder="Search brand.." />
        <button>
          <FaSearch />
        </button>
      </form>
      <figure class="ps-custom-scrollbar" data-height="250">
        {isBrandFetching ? (
          <p>Fetching....</p>
        ) : (
          <form>
            {brands &&
              brands.map((brand) => (
                <div class="ps-checkbox">
                  <input
                    class="form-control"
                    type="checkbox"
                    id={`brand-${brand.id}`}
                    defaultChecked={selected_brands?.includes(
                      brand.id.toString()
                    )}
                    onChange={(e) => handleOnBrandChange(e, brand.id)}
                  />
                  <label for={`brand-${brand.id}`}>{brand.name}</label>
                </div>
              ))}
          </form>
        )}
      </figure>
      <figure>
        <h4 class="widget-title">By Price</h4>
        <div id="nonlinear"></div>
        <p class="ps-slider__meta">
          Price:
          <div className="price-rang">
            <input
              type="number"
              min="0"
              name={`starting_price`}
              onChange={rangerInputOnChange}
              placeholder="Min"
              value={range.starting_price}
            />
            <span>-</span>
            <input
              type="number"
              min={starting_price + 1}
              name={`ending_price`}
              onChange={rangerInputOnChange}
              placeholder="Max - test"
              value={range.ending_price}
            />
            <button
              // onChange={this.rangerInputOnChange}
              onClick={handlePriceFilter}
              type="button"
            >
              <FiChevronRight />
            </button>
          </div>
          {/* <Slider
            range={{ draggableTrack: true }}
            step={5}
            defaultValue={[starting_price / 100, ending_price / 100]}
            onAfterChange={onAfterChange}
          />
          <span class="ps-slider__value">
            &#2547;<span class="ps-slider__min">{starting_price}</span>
          </span>
          -
          <span class="ps-slider__value">
            &#2547;<span class="ps-slider__max">{ending_price}</span>
          </span> */}
        </p>
      </figure>
      {/* 
      <figure>
        <h4 class="widget-title">By Rating</h4>
        <div class="ps-checkbox">
          <input
            class="form-control"
            type="checkbox"
            id="review-1"
            name="review"
          />
          <label for="review-1">
            <span>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
            </span>
            <small>(13)</small>
          </label>
        </div>
        <div class="ps-checkbox">
          <input
            class="form-control"
            type="checkbox"
            id="review-2"
            name="review"
          />
          <label for="review-2">
            <span>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star"></i>
            </span>
            <small>(13)</small>
          </label>
        </div>
        <div class="ps-checkbox">
          <input
            class="form-control"
            type="checkbox"
            id="review-3"
            name="review"
          />
          <label for="review-3">
            <span>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
            <small>(5)</small>
          </label>
        </div>
        <div class="ps-checkbox">
          <input
            class="form-control"
            type="checkbox"
            id="review-4"
            name="review"
          />
          <label for="review-4">
            <span>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
            <small>(5)</small>
          </label>
        </div>
        <div class="ps-checkbox">
          <input
            class="form-control"
            type="checkbox"
            id="review-5"
            name="review"
          />
          <label for="review-5">
            <span>
              <i class="fa fa-star rate"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
            <small>(1)</small>
          </label>
        </div>
      </figure>
      */}
      {
        attributes &&
          attributes.map((attr) => (
            <figure>
              <h4 class="widget-title">By {attr.name}</h4>
              {attr?.items?.map((item) => (
                <div class="ps-checkbox">
                  <input
                    class="form-control"
                    type="checkbox"
                    name={attr.name}
                    id={`${attr.name}-${item.id}`}
                    defaultChecked={query?.attribute_id?.includes(
                      item.id.toString()
                    )}
                    onChange={(e) => handleAttributeOnChange(e, item.id)}
                  />
                  <label className="mr-2" for={`${attr.name}-${item.id}`}>
                    {item.value}
                  </label>
                </div>
              ))}
            </figure>
          ))

        //   <figure>
        //   <h4 class="widget-title">By Color</h4>

        //   <div class="ps-checkbox ps-checkbox--color color-1 ps-checkbox--inline">
        //     <input
        //       class="form-control"
        //       type="checkbox"
        //       id="color-1"
        //       name="size"
        //     />
        //     <label for="color-1"></label>
        //   </div>
        //   <div class="ps-checkbox ps-checkbox--color color-2 ps-checkbox--inline">
        //     <input
        //       class="form-control"
        //       type="checkbox"
        //       id="color-2"
        //       name="size"
        //     />
        //     <label for="color-2"></label>
        //   </div>
        //   <div class="ps-checkbox ps-checkbox--color color-3 ps-checkbox--inline">
        //     <input
        //       class="form-control"
        //       type="checkbox"
        //       id="color-3"
        //       name="size"
        //     />
        //     <label for="color-3"></label>
        //   </div>
        //   <div class="ps-checkbox ps-checkbox--color color-4 ps-checkbox--inline">
        //     <input
        //       class="form-control"
        //       type="checkbox"
        //       id="color-4"
        //       name="size"
        //     />
        //     <label for="color-4"></label>
        //   </div>
        //   <div class="ps-checkbox ps-checkbox--color color-5 ps-checkbox--inline">
        //     <input
        //       class="form-control"
        //       type="checkbox"
        //       id="color-5"
        //       name="size"
        //     />
        //     <label for="color-5"></label>
        //   </div>
        //   <div class="ps-checkbox ps-checkbox--color color-6 ps-checkbox--inline">
        //     <input
        //       class="form-control"
        //       type="checkbox"
        //       id="color-6"
        //       name="size"
        //     />
        //     <label for="color-6"></label>
        //   </div>
        //   <div class="ps-checkbox ps-checkbox--color color-7 ps-checkbox--inline">
        //     <input
        //       class="form-control"
        //       type="checkbox"
        //       id="color-7"
        //       name="size"
        //     />
        //     <label for="color-7"></label>
        //   </div>
        //   <div class="ps-checkbox ps-checkbox--color color-8 ps-checkbox--inline">
        //     <input
        //       class="form-control"
        //       type="checkbox"
        //       id="color-8"
        //       name="size"
        //     />
        //     <label for="color-8"></label>
        //   </div>
        // </figure>
      }

      {/* <figure class="sizes">
        <h4 class="widget-title">BY SIZE</h4>
        <a href="#">L</a>
        <a href="#">M</a>
        <a href="#">S</a>
        <a href="#">XL</a>
        <a href="#">XXL</a>
      </figure>
      <figure class="ps-custom-scrollbar" data-height="250">
        <h4 class="widget-title">BY RAM</h4>
        <form class="ps-form--widget-search" action="do_action" method="get">
          <input class="form-control" type="text" placeholder="" />
          <button>
            <i class="icon-magnifier"></i>
          </button>
        </form>
        <div class="ps-checkbox">
          <input class="form-control" type="checkbox" id="ram-1" name="brand" />
          <label for="ram-1"> 128M (1)</label>
        </div>
        <div class="ps-checkbox">
          <input class="form-control" type="checkbox" id="ram-2" name="brand" />
          <label for="ram-2">1.5G (1)</label>
        </div>
        <div class="ps-checkbox">
          <input class="form-control" type="checkbox" id="ram-3" name="brand" />
          <label for="ram-3">1G (1)</label>
        </div>
        <div class="ps-checkbox">
          <input class="form-control" type="checkbox" id="ram-4" name="brand" />
          <label for="ram-4">3G (1)</label>
        </div>
        <div class="ps-checkbox">
          <input class="form-control" type="checkbox" id="ram-5" name="brand" />
          <label for="ram-5">4G (2)</label>
        </div>
      </figure> */}
    </aside>
  );
}
