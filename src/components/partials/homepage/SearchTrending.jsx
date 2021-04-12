import React from "react";
import { Tabs } from "antd";
import categoriesHome51 from "../../../assets/img/categories/home-5/1.jpg";
import categoriesHome55 from "../../../assets/img/categories/home-5/5.jpg";
import categoriesHome57 from "../../../assets/img/categories/home-5/7.jpg";
import categoriesHome58 from "../../../assets/img/categories/home-5/8.jpg";
import categoriesHome59 from "../../../assets/img/categories/home-5/9.jpg";
import categoriesHome513 from "../../../assets/img/categories/home-5/13.jpg";
import categoriesHome514 from "../../../assets/img/categories/home-5/14.jpg";
import { Link } from "react-router-dom";


import Slider from "react-slick";
import { BsPhone, BsStar } from "react-icons/bs";
import { AiOutlineCar, AiOutlineDesktop } from "react-icons/ai";
import { BiBaseball, BiBed } from "react-icons/bi";
import { RiTShirtLine } from "react-icons/ri";
import { FaBaby } from "react-icons/fa";
import { GiEvilBook } from "react-icons/gi";

const { TabPane } = Tabs;
const SearchTrending = () => {
  const trendingCategories = [
    {
      imagePath: categoriesHome51,
      text: "Television",
    },
    { imagePath: categoriesHome55, text: "Camera" },
    { imagePath: categoriesHome57, text: "Watch" },
    { imagePath: categoriesHome57, text: "Chair" },
    { imagePath: categoriesHome58, text: "Sneaker" },
    { imagePath: categoriesHome59, text: "Xbox" },
    { imagePath: categoriesHome55, text: "Gopro" },
    { imagePath: categoriesHome59, text: "Lipstick" },
    { imagePath: categoriesHome57, text: "Phone" },
    { imagePath: categoriesHome58, text: "Laptop" },
    { imagePath: categoriesHome58, text: "Speaker" },
    { imagePath: categoriesHome55, text: "Book" },
    { imagePath: categoriesHome59, text: "Blender" },
    { imagePath: categoriesHome514, text: "Bag" },
    {
      imagePath: categoriesHome513,
      text: "Smartphone",
    },
    { imagePath: categoriesHome514, text: "Camping" },
  ];

  return (
    <div className="ps-search-trending">
      <div className="container">
        <div className="ps-section__header">
          <h3>
            Search Trending<span>Updated at 9:00AM</span>
          </h3>
        </div>
        <div className="ps-section__content">
          <div className="ps-block--categories-tabs ps-tab-root">
            <div className="ps-block__header">
              <Tabs defaultActiveKey="2">
                <TabPane
                  tab={
                    <div className="ps-block__tab-list">
                      <a>
                        <i>
                          <BsStar />
                        </i>
                        <span>Hot Trending</span>
                      </a>
                    </div>
                  }
                  key="hottrending"
                >
                  <div className="ps-block__item">
                    {trendingCategories.map((category) => (
                      <Link to="/shop" key={category.text}>
                        <>
                          <img src={category.imagePath} alt={category.text} />
                          <span>{category.text}</span>
                        </>
                      </Link>
                    ))}
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <div className="ps-block__tab-list">
                      <a>
                        <i>
                          <BsPhone />
                        </i>
                        {/* <i className="icon-smartphone"></i> */}
                        <span>Cell Phones</span>
                      </a>
                    </div>
                  }
                  key="cellphone"
                >
                  <span>Cell Phones</span>
                </TabPane>
                <TabPane
                  tab={
                    <div className="ps-block__tab-list">
                      <a>
                        <i>
                          <AiOutlineDesktop />
                        </i>
                        {/* <i className="icon-desktop"></i> */}
                        <span>Computers</span>
                      </a>
                    </div>
                  }
                  key="computer"
                >
                  <span>Computers</span>
                </TabPane>
                <TabPane
                  tab={
                    <div className="ps-block__tab-list">
                      <a>
                        <i>
                          <BiBed />
                        </i>
                        {/* <i className="icon-lampshade"></i> */}
                        <span>Furnitures</span>
                      </a>
                    </div>
                  }
                  key="furnitures"
                >
                  <span>furnitures</span>
                </TabPane>
                <TabPane
                  tab={
                    <div className="ps-block__tab-list">
                      <a>
                        <i>
                          <RiTShirtLine />
                        </i>
                        <i className="icon-shirt"></i>
                        <span>T-Shirts</span>
                      </a>
                    </div>
                  }
                  key="tshirts"
                >
                  <span>T-Shirts</span>
                </TabPane>
                <TabPane
                  tab={
                    <div className="ps-block__tab-list">
                      <a>
                        <i>
                        <FaBaby/>

                        </i>
                        <span>Baby & Mom</span>
                      </a>
                    </div>
                  }
                  key="babyandmom"
                >
                  <span>Baby & Mom</span>
                </TabPane>

                <TabPane
                  tab={
                    <div className="ps-block__tab-list">
                      <a>
                        <i>
                          <BiBaseball />
                        </i>
                        {/* <i className="icon-baseball"></i> */}
                        <span>Sports</span>
                      </a>
                    </div>
                  }
                  key="sports"
                >
                  <span>Sports</span>
                </TabPane>

                <TabPane
                  tab={
                    <div className="ps-block__tab-list">
                      <a>
                        <i>
                          <GiEvilBook />
                        </i>
                        {/* <i className="icon-book2"></i> */}
                        <span>Book & Office</span>
                      </a>
                    </div>
                  }
                  key="bookandoffice"
                >
                  <span>Book & Office</span>
                </TabPane>
                <TabPane
                  tab={
                    <div className="ps-block__tab-list">
                      <a>
                        <i>
                          <AiOutlineCar />
                        </i>
                        {/* <i className="icon-car-siren"></i> */}
                        <span>Cars</span>
                      </a>
                    </div>
                  }
                  key="cars"
                >
                  <span>Cars</span>
                </TabPane>
              </Tabs>

            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTrending;
