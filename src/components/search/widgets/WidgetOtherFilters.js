import { Slider } from "antd";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { objToUrlPrams } from "../../../helpers/utils";
import { all_brand } from "../../../temp-data/brands";

export default function WidgetOtherFilters({ query, setQuery, getProducts }) {
  const [starting_price, setStarting_price] = useState(0);
  const [ending_price, setEnding_price] = useState(0);
  const [brands, setBrands] = useState([]);
  const [selected_brands, setSelected_brands] = useState([]);
  const history = useHistory();

  const onAfterChange = async (value) => {
    setStarting_price(value[0] * 100);
    setEnding_price(value[1] * 100);
    const newQuery = { ...query };
    newQuery.starting_price = value[0] * 100;
    newQuery.ending_price = value[1] * 100;
    await setQuery(newQuery);
    const url = history.location.pathname + "?" + objToUrlPrams(newQuery);
    history.push(url);
    getProducts(newQuery);
  };

  const handleOnBrandChange = (e, id) => {
    if (e.target.checked) {
      setSelected_brands([...new Set([...selected_brands, id])]);
    } else {
      setSelected_brands(selected_brands.filter((selected) => selected !== id));
    }
  };

  useEffect(() => {
    setBrands(all_brand);
  }, []);

  console.log("selected_brands", selected_brands);
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
        <form>
          {brands &&
            brands.map((brand) => (
              <div class="ps-checkbox">
                <input
                  class="form-control"
                  type="checkbox"
                  id={`brand-${brand.id}`}
                  onChange={(e) => handleOnBrandChange(e, brand.id)}
                />
                <label for={`brand-${brand.id}`}>
                  {brand.name} ({brand.count})
                </label>
              </div>
            ))}
        </form>
      </figure>
      <figure>
        <h4 class="widget-title">By Price</h4>
        <div id="nonlinear"></div>
        <p class="ps-slider__meta">
          Price:
          <Slider
            range={{ draggableTrack: true }}
            step={5}
            onAfterChange={onAfterChange}
          />
          <span class="ps-slider__value">
            &#2547;<span class="ps-slider__min">{starting_price}</span>
          </span>
          -
          <span class="ps-slider__value">
            &#2547;<span class="ps-slider__max">{ending_price}</span>
          </span>
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
      <figure>
        <h4 class="widget-title">By Color</h4>
        <div class="ps-checkbox ps-checkbox--color color-1 ps-checkbox--inline">
          <input
            class="form-control"
            type="checkbox"
            id="color-1"
            name="size"
          />
          <label for="color-1"></label>
        </div>
        <div class="ps-checkbox ps-checkbox--color color-2 ps-checkbox--inline">
          <input
            class="form-control"
            type="checkbox"
            id="color-2"
            name="size"
          />
          <label for="color-2"></label>
        </div>
        <div class="ps-checkbox ps-checkbox--color color-3 ps-checkbox--inline">
          <input
            class="form-control"
            type="checkbox"
            id="color-3"
            name="size"
          />
          <label for="color-3"></label>
        </div>
        <div class="ps-checkbox ps-checkbox--color color-4 ps-checkbox--inline">
          <input
            class="form-control"
            type="checkbox"
            id="color-4"
            name="size"
          />
          <label for="color-4"></label>
        </div>
        <div class="ps-checkbox ps-checkbox--color color-5 ps-checkbox--inline">
          <input
            class="form-control"
            type="checkbox"
            id="color-5"
            name="size"
          />
          <label for="color-5"></label>
        </div>
        <div class="ps-checkbox ps-checkbox--color color-6 ps-checkbox--inline">
          <input
            class="form-control"
            type="checkbox"
            id="color-6"
            name="size"
          />
          <label for="color-6"></label>
        </div>
        <div class="ps-checkbox ps-checkbox--color color-7 ps-checkbox--inline">
          <input
            class="form-control"
            type="checkbox"
            id="color-7"
            name="size"
          />
          <label for="color-7"></label>
        </div>
        <div class="ps-checkbox ps-checkbox--color color-8 ps-checkbox--inline">
          <input
            class="form-control"
            type="checkbox"
            id="color-8"
            name="size"
          />
          <label for="color-8"></label>
        </div>
      </figure>
      <figure class="sizes">
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
      </figure>
    </aside>
  );
}
