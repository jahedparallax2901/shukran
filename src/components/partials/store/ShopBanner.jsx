import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';
import sliderShop1 from '../../../assets/img/slider/shop-default/1.jpg'
import sliderShop2 from '../../../assets/img/slider/shop-default/2.jpg'


const ShopBanner = () => {
    const carouselSetting = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="container">
            <div className="ps-shop-banner">
                <Slider {...carouselSetting} fade={true} className="ps-carousel">
                    <img src={sliderShop1} alt="martfury" />
                    <img src={sliderShop2} alt="martfury" />
                </Slider>
            </div>
        </div>
    );
}

export default ShopBanner;
