import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import MenuCategories from '../../../shared/headers/modules/MenuCategories';
import banner1 from "../assets/img/downloads/banner-1.jpg";
import downloadsBanner5 from "../assets/img/downloads/banner5.png";
import downloadsBanner6 from "../assets/img/downloads/banner6.png";
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
import downloadsSmartwatch from '../assets/img/downloads/smartwatch.jpg';
import downloadsBangladesh from '../assets/img/downloads/bangladesh.png';
import downloadsBagpack from '../assets/img/downloads/bagpack.jpeg';
import promotion2 from '../assets/img/downloads/promotion-2.webp';
import promotion3 from '../assets/img/slider/home-5/promotion-3.jpg';
import { menuContents } from "../temp-data/homeData";

class MartketPlace3Banner extends Component {
  constructor(props) {
    super(props);
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



    const centerBanners = [
      { id: 1, src: banner1, link: "#" },
      { id: 2, src: downloadsBanner5, link: "#" },
      { id: 3, src: downloadsBanner6, link: "#" },
    ];

    return (
      <section className="ps-home-banner">
        <div className="container">
          <div className="ps-section__left">
            <div className="ps-section__left">
              <ul className="menu--dropdown">
                {menuContents.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>
                      <i>
                        {item.icon}
                      </i>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <MenuCategories /> */}
          </div>
          <div className="ps-section__center">
            <Slider {...carouselSettings}>
              {centerBanners.map((banner) => (
                <div className="item">
                  <Link to="#">
                    <a key={banner.id} href="">
                      <img src={banner.src} alt="" />
                    </a>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <div className="ps-section__right">
            {/* <Link href="/shop">
              <a>
                <img src={downloadsBanner5} alt="martfury" />
              </a>
            </Link> */}
            <a href="#"><img src={downloadsSmartwatch} alt="" /></a>
            <a href="#"><img src={downloadsBangladesh} alt="" /></a>
            <a href="#"><img src={downloadsBagpack} alt="" /></a>
            <a href="#"><img src={promotion2} alt="" /></a>
          </div>
        </div>
      </section>
    );
  }
}

export default MartketPlace3Banner;
