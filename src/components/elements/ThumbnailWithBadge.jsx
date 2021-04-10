import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import NextArrow from './carousel/NextArrow';
import PrevArrow from './carousel/PrevArrow';
import downloadsFridge1 from '../../assets/img/downloads/fridge1.jpg';

const ThumbnailWithBadge = ({ product, vertical = true }) => {
    const galleryCarousel = useRef(null);
    const variantCarousel = useRef(null);
    const [gallery, setGallery] = useState(null);
    const [variant, setVariant] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [productImages, setProductImages] = useState([]);

    useEffect(() => {
        let images = [];
        if (product && product.p > 0) {
            product.images.map((item) => {
                images.push(item.url);
            });
            setProductImages(images);
        }
        setGallery(galleryCarousel.current);
        setVariant(variantCarousel.current);
    }, [product]);

    const gallerySetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const variantSetting = {
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
        ],
    };

    //Views
    let lightboxView, variantCarouselView, imagesView, galleryImagesView;
    if (productImages.length > 0) {
        imagesView = productImages.map((item) => (
            <div className="item" key={item}>
                <img src={item} alt={item} />
            </div>
        ));
        galleryImagesView = productImages.map((item, index) => (
            <div className="item" key={item}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src={item} alt={item} />
                </a>
            </div>
        ));
    }
    if (vertical) {
        variantCarouselView = (
            <Slider
                asNavFor={gallery}
                ref={(slider) => (variantCarousel.current = slider)}
                swipeToSlide={true}
                arrows={false}
                slidesToShow={3}
                vertical={true}
                infinite={true}
                focusOnSelect={true}
                {...variantSetting}
                className="ps-product__variants">
                {imagesView}
            </Slider>
        );
    } else {
        variantCarouselView = (
            <Slider
                asNavFor={gallery}
                ref={(slider) => (variantCarousel.current = slider)}
                swipeToSlide={true}
                arrows={false}
                slidesToShow={6}
                vertical={false}
                centered={true}
                infinite={false}
                focusOnSelect={true}
                className="ps-product__variants">
                {imagesView}
            </Slider>
        );
    }
    // if (isOpen) {
    //     lightboxView = (
    //         <Lightbox
    //             mainSrc={productImages[photoIndex]}
    //             nextSrc={productImages[(photoIndex + 1) % productImages.length]}
    //             prevSrc={
    //                 productImages[
    //                     (photoIndex + productImages.length - 1) %
    //                         productImages.length
    //                 ]
    //             }
    //             onCloseRequest={() => {
    //                 setIsOpen(false);
    //             }}
    //             onMovePrevRequest={() => {
    //                 setPhotoIndex(
    //                     (photoIndex + productImages.length - 1) %
    //                         productImages.length
    //                 );
    //             }}
    //             onMoveNextRequest={() => {
    //                 setPhotoIndex((photoIndex + 1) % productImages.length);
    //             }}
    //         />
    //     );
    // }

    return (
        <div
            className="ps-product__thumbnail"
            data-vertical={vertical ? 'true' : 'false'}>
            <figure>
                <div className="ps-wrapper">
                    <Slider
                        {...gallerySetting}
                        ref={(slider) => (galleryCarousel.current = slider)}
                        asNavFor={variant}
                        className="ps-product__gallery ps-carousel inside">
                        {galleryImagesView}
                    </Slider>
                    <div className="ps-product__badge">
                        <span>
                            Save <br /> $280.00
                        </span>
                    </div>
                </div>
            </figure>
            {variantCarouselView}
        </div>
    );
};

export default ThumbnailWithBadge;
