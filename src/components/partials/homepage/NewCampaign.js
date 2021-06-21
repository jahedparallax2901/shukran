import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import Slider from "react-slick";
import "../../../assets/scss/new-campaign.scss";
import { processGetRequest } from "../../../services/baseServices";
import NextArrow from "../../elements/carousel/NextArrow";
import PrevArrow from "../../elements/carousel/PrevArrow";
import CountDownSimple from "../../elements/CountDownSimple";
import Rating from "../../elements/Rating";
import CampaignProductActions from "../../product/module/CampaignProductActions";
import ProductCampaign from "../../product/ProductCampaign";
import parse from 'html-react-parser'
import { GrClose } from "react-icons/gr";
import ProductDetailQuickView from "../../product/ProductDetailQuickView";
import NewCampaignProduct from "../../product/NewCampaignProduct";

const NewCampaign = () => {
  const carouselStandard = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1501,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1081,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        },
      },
    ],
  };

  const carouselCampaign = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [loading, setLoading] = useState(false);
  const [top_products, setTop_products] = useState([]);
  const [campaign_products, setCampaign_products] = useState([]);
  const history = useHistory();

  async function getProducts() {
    // setProductItems(dealOfTheDayProducts)
    setLoading(true);
    processGetRequest("/homepage", { filter_type: 2 })
      .then((res) => {
        setTop_products(res.top_products);
        setCampaign_products(res.campaign_products);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  let productItemsView, relatedView;

  if (!loading) {
    if (campaign_products && campaign_products.length > 0) {
      const slideItems = campaign_products.map((item) => (
        <NewCampaignProduct product={item}/>
      ));
      const relatedItems =
        top_products?.length > 0 &&
        top_products?.map((item, index) => {
          return <ProductCampaign product={item} />;
        });
      productItemsView = (
        <Slider
          //   ref={(slider) => (sliderRef.current = slider)}
          {...carouselCampaign}
          fade={false}
          //   className="ps-carousel"
        >
          {slideItems}
        </Slider>
      );
      relatedView = <Slider {...carouselStandard}>{relatedItems}</Slider>;
      console.log("relatedItems", relatedItems);
    } else {
      productItemsView = <p>No product found.</p>;
    }
  } else {
    productItemsView = <p>Loading...</p>;
  }

  return (
    <div className="container campaign-section-container">
      <div className="campaign-container">
        <h1 className="block-title">Campaign</h1>
        {productItemsView}
      </div>

      <div className="top-products">
        <h1 className="block-title">Top 20 Products</h1>
        <div className="product-container">{relatedView}</div>
      </div>

      
    </div>
  );
};

export default NewCampaign;
