import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { FcShipped, FcShop, FcDam } from "react-icons/fc";
import { BsChevronRight } from "react-icons/bs";
import { GiShurikenAperture } from "react-icons/gi";
import { GoDeviceMobile } from "react-icons/go";
import banner1 from "../../../assets/img/downloads/banner-1.jpg";
import addBanner1 from "../../../assets/img/home-banner1.png";
import addBanner2 from "../../../assets/img/home-banner2.jpeg";
import { processGetRequest } from "../../../services/baseServices";
import Menu from "../../elements/menu/Menu";
import '../../../assets/scss/custom-slick.scss'

class TopBanner extends Component {
  state = {
    categories: [],
    top_sliders: [],
    top_sliders_box: [],
    top_image_long_images: [],
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
          top_image_long_images: res.top_image_long_images,
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
      autoplay: true,
      appendDots: dots => <ul>{dots}</ul>,
      customPaging: i => (
        <div className="ft-slick__dots--custom">
          <div className="active-slide" />
        </div>
      )
    };
    const sliderBoxCarouselSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true
    };

    const { categories, top_sliders, top_sliders_box, top_image_long_images } =
      this.state;

    let topLeftSliders = [];

    for (let i = 0; i < top_sliders_box.length; i += 2) {
      topLeftSliders.push(
        <>
          <a key={top_sliders_box[i].id} href={top_sliders_box[i].deeplink}>
            <img
              src={top_sliders_box[i]?.file_attach?.file_url}
              alt={top_sliders_box[i]?.file_attach?.file_name}
            />
          </a>
          <a
            key={top_sliders_box[i + 1].id}
            href={top_sliders_box[i + 1].deeplink}
          >
            <img
              src={top_sliders_box[i + 1]?.file_attach?.file_url}
              alt={top_sliders_box[i + 1]?.file_attach?.file_name}
            />
          </a>
        </>
      );
    }

    return (
      <>
        <section className="ps-home-banner">
          <div className="container">
            <div className="ps-section__left">
              <Menu source={categories} className="menu--dropdown" />
            </div>
            <div className="banner-slider-top">
              <div className="banner-slider-top-inner">
                {/* <div className="ps-section__right">
                <Slider {...sliderBoxCarouselSettings}>
                  {
                    topLeftSliders.map((item, index) => <div key={index} className="item">
                        {item}
                    </div>)
                  }
                </Slider>
                </div> */}
                <div className="ps-section__center">
                  <Slider {...carouselSettings}>
                    {top_sliders.map((banner) => (
                      <div key={banner?.id} className="item">
                        <Link
                          to={banner.deeplink}
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            src={banner?.image}
                            alt={banner?.file_attach?.file_name}
                          />
                        </Link>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="banner-slider-bottom-inner">
                <div className="d-block">
                  <div className="ps-section__banner-box">
                    <div className="banner-add">
                      {top_image_long_images?.map((item) => (
                        <div key={item?.id} className="banner-add-item">
                          <img src={item.image} alt="bottom_slider" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="d-block">
              <div className="ps-section__banner-box">
                {top_sliders_box.map((item) => (
                  <a key={item.id} href={item.deeplink}>
                    <img src={item?.file_attach?.file_url} alt={item?.file_attach?.file_name} />
                  </a>
                ))}
              </div>
            </div> */}
          </div>
          <div className="container"></div>
        </section>

        <section className="ps-home-channel-area">
          <Container>
            <div className="ps-home-channer-innner">
              <div className="single-channer-item">
                <a href="#" className="single-channer-item-link">
                  <div className="card-channels-icon align-left">
                    <div className="card-channels-img-wrap">
                      <FcShipped />
                    </div>
                  </div>
                  <div className="card-channels-name inline align-left  break-line ">
                    <div className="text-wrap text-top">ফ্রি শিপিং</div>
                  </div>
                  <div className="card-channels-symbol inline align-right">
                    <BsChevronRight />
                  </div>
                </a>
              </div>
              <div className="single-channer-item">
                <a href="#" className="single-channer-item-link">
                  <div className="card-channels-icon align-left">
                    <div className="card-channels-img-wrap">
                      <FcShop />
                    </div>
                  </div>
                  <div className="card-channels-name inline align-left">
                    <div className="text-wrap text-top">বাজার সদাই</div>
                  </div>
                  <div className="card-channels-symbol inline align-right">
                    <BsChevronRight />
                  </div>
                </a>
              </div>
              <div className="single-channer-item">
                <a href="#" className="single-channer-item-link">
                  <div className="card-channels-icon align-left">
                    <div className="card-channels-img-wrap">
                      <FcDam />
                    </div>
                  </div>
                  <div className="card-channels-name inline align-left">
                    <div className="text-wrap text-top">শুকরান মল</div>
                  </div>
                  <div className="card-channels-symbol inline align-right">
                    <BsChevronRight />
                  </div>
                </a>
              </div>
              <div className="single-channer-item">
                <a href="#" className="single-channer-item-link">
                  <div className="card-channels-icon align-left">
                    <div className="card-channels-img-wrap">
                      <GoDeviceMobile />
                    </div>
                  </div>
                  <div className="card-channels-name inline align-left">
                    <div className="text-wrap text-top">ডিজিটাল সেবা</div>
                  </div>
                  <div className="card-channels-symbol inline align-right">
                    <BsChevronRight />
                  </div>
                </a>
              </div>
              <div className="single-channer-item">
                <a href="#" className="single-channer-item-link">
                  <div className="card-channels-icon align-left">
                    <div className="card-channels-img-wrap">
                      <GiShurikenAperture />
                    </div>
                  </div>
                  <div className="card-channels-name inline align-left">
                    <div className="text-wrap text-top">বিদেশী পণ্য</div>
                  </div>
                  <div className="card-channels-symbol inline align-right">
                    <BsChevronRight />
                  </div>
                </a>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default TopBanner;
