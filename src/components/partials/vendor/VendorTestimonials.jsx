import React, { Component } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import Slider from "react-slick";
import user1 from "../../../assets/img/users/1.jpg";
import user2 from "../../../assets/img/users/2.png";
import user3 from "../../../assets/img/users/3.jpg";

class VendorTestimonials extends Component {
  constructor(props) {
    super(props);
  }

  handleCarouselPrev = (e) => {
    e.preventDefault();
    this.slider.slickPrev();
  };

  handleCarouselNext = (e) => {
    e.preventDefault();
    this.slider.slickNext();
  };

  render() {
    const carouselSetting = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
    };

    return (
      <div className="ps-client-say">
        <div className="container">
          <div className="ps-section__header">
            <h3>What client say</h3>
            <div className="ps-section__nav">
              <a
                className="ps-carousel__prev"
                href="#"
                onClick={this.handleCarouselPrev}
              >
                <i>
                  <BsChevronLeft />
                </i>
              </a>
              <a
                className="ps-carousel__next"
                href="#"
                onClick={this.handleCarouselNext}
              >
                <i>
                  <BsChevronRight />
                </i>
              </a>
            </div>
          </div>
          <div className="ps-section__content">
            <Slider
              ref={(slider) => (this.slider = slider)}
              {...carouselSetting}
              className="ps-carousel outside"
            >
              <div className="ps-block--testimonial">
                <div className="ps-block__header">
                  <img src={user1} alt="martfury" />
                </div>
                <div className="ps-block__content">
                  <i>
                    <ImQuotesRight />
                  </i>
                  <h4>
                    Kanye West<span>Head Chef at BBQ Restaurant</span>
                  </h4>
                  <p>
                    Sed elit quam, iaculis sed semper sit amet udin vitae nibh.
                    at magna akal semperFusce commodo molestie luctus.Lorem
                    ipsum Dolor tusima olatiup.
                  </p>
                </div>
              </div>
              <div className="ps-block--testimonial">
                <div className="ps-block__header">
                  <img src={user2} alt="martfury" />
                </div>
                <div className="ps-block__content">
                  <i>
                    <ImQuotesRight />
                  </i>
                  <h4>
                    Anabella Kleva<span>Boss at TocoToco</span>
                  </h4>
                  <p>
                    Sed elit quam, iaculis sed semper sit amet udin vitae nibh.
                    at magna akal semperFusce commodo molestie luctus.Lorem
                    ipsum Dolor tusima olatiup.
                  </p>
                </div>
              </div>
              <div className="ps-block--testimonial">
                <div className="ps-block__header">
                  <img src={user3} alt="martfury" />
                </div>
                <div className="ps-block__content">
                  <i>
                    <ImQuotesRight />
                  </i>
                  <h4>
                    William Roles<span>Head Chef at BBQ Restaurant</span>
                  </h4>
                  <p>
                    Sed elit quam, iaculis sed semper sit amet udin vitae nibh.
                    at magna akal semperFusce commodo molestie luctus.Lorem
                    ipsum Dolor tusima olatiup.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorTestimonials;
