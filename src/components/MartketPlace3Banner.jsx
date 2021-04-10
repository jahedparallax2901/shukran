import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import MenuCategories from '../../../shared/headers/modules/MenuCategories';
import promotion7 from "../assets/img/downloads/promotion7.jpg";
import {
  faBaby,
  faBars,
  faCamera,
  faCartArrowDown,
  faEye,
  faFemale,
  faLanguage,
  faLaptop,
  faList,
  faMedkit,
  faMobile,
  faMotorcycle,
  faSearch,
  faShoppingBag,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import downloadsSmartwatch from "../assets/img/downloads/smartwatch.jpg";
import downloadsBangladesh from "../assets/img/downloads/bangladesh.png";
import downloadsBagpack from "../assets/img/downloads/bagpack.jpeg";
import promotion2 from "../assets/img/downloads/promotion-2.webp";
import promotion3 from "../assets/img/slider/home-5/promotion-3.jpg";
import { menuContents } from "../temp-data/homeData";
import Menu from "./elements/menu/Menu";

class MartketPlace3Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const carouselSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const { categories, top_sliders, top_sliders_box } = this.props;
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
                    <a key={banner.id} href={banner.deeplink}>
                      <img
                        src={banner.image}
                        alt={banner.file_attach.file_name}
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <div className="ps-section__right">
            {top_sliders_box.map((item) => (
              <a key={item.id} href={item.deeplink}>
                <img src={item.image} alt={item.file_attach.file_name} />
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default MartketPlace3Banner;
