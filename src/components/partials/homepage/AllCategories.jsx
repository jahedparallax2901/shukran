import React, { Component } from "react";
import Slider from "react-slick";
import { processGetRequest } from "../../../services/baseServices";
import { carouselStandard } from "../../../utilities/carousel-helpers";
import bike1 from "../../../assets/img/downloads/bike1.jpeg";
import { withRouter } from "react-router";

class AllCategories extends Component {
  state = {
    all_category: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    processGetRequest("/homepage", { filter_type: 5 })
      .then((res) => {
        this.setState({
          all_category: res.all_category,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <div id="shop-now-home3">
        <div className="container">
          <div className="ps-section__content">
            <div className="home-categories-top">
              <h3>All Categories</h3>
            </div>
            <div className="home-categories-body">
              <Slider {...carouselStandard}>
                {this.state.all_category?
                  this.state.all_category.map((item) => (
                    <div className="ps-product ps-product--inner px-3" onClick={()=>{
                      this.props.history.push(`/search?category_id=${item.id}`)
                    }}>
                      <div className="ps-block--category">
                        <a className="ps-block__overlay" href="#"></a>
                        <div className="all-category-single">
                          <img src={item?.image || bike1} alt={item?.name} />
                        </div>
                        <p>{item?.name || "None"}</p>
                      </div>
                    </div>
                  )) : <div className="ps-product ps-product--inner px-3">
                      No Category Exist
                  </div> }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllCategories);
