import React, { Component } from 'react';
import headerBg from "../../../assets/img/promotions/header-promotion.jpg";

class HeaderPromotion extends Component {
    render() {
        return (
            <div
          className="ps-block--promotion-header bg--cover"
          data-background={headerBg}
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          <div className="container">
            <div className="ps-block__left">
              <h3>20%</h3>
              <figure className="mb-0"> {/*=== Changed ===*/}
                <p>Discount</p>
                <h4>For Books Of March</h4>
              </figure>
            </div>
            <a className="ps-btn ps-btn--sm mr-0" href="#">
              Shop now
            </a>
          </div>
        </div>
        );
    }
}

export default HeaderPromotion;