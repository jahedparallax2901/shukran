import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import banner1 from "../../../assets/img/downloads/banner-1.jpg";
import downloadsBanner5 from "../../../assets/img/downloads/banner5.png";
import downloadsBanner6 from "../../../assets/img/downloads/banner6.png";
import { processGetRequest } from "../../../services/baseServices";
import Menu from "../../elements/menu/Menu";

class TopBanner extends Component {
  state = {
    categories: [],
    top_sliders: [],
    top_sliders_box: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    processGetRequest("/homepage", { filter_type: 1 })
      .then((res) => {
        this.setState({
          categories: res.category,
          top_sliders_box: res.top_sliders_box,
          top_sliders: res.top_sliders,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const carouselSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const { categories, top_sliders, top_sliders_box } = this.state;

    return (
      <section className="ps-home-banner">
        <div className="container">
          <div className="ps-section__left">
            <div className="ps-section__left">
              <Menu source={categories} className="menu--dropdown" />
            </div>
          </div>
          <div className="ps-section__center">
            <Slider {...carouselSettings}>
              {top_sliders.map((banner) => (
                <div className="item">
                  <Link to={banner.deeplink}>
                    <img
                      src={banner?.image}
                      alt={banner?.file_attach?.file_name}
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          {/* <div className="ps-section__right">
            {top_sliders_box.map((item) => (
              <a key={item.id} href={item.deeplink}>
                <img src={item?.file_attach?.file_url} alt={item?.file_attach?.file_name} />
              </a>
            ))}
          </div> */}
        </div>
      </section>
    );
  }
}

export default TopBanner;
