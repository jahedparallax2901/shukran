import React from "react";
import campaignBannerBorder from "../assets/img/downloads/campaign-banner-border.png";
import campaignBannerSpinner from "../assets/img/downloads/campaign-banner-spinner.png";
import campaignCard1 from "../assets/img/downloads/campaign-card1.jpg";
import cardBackground from "../assets/img/downloads/card-background.png";
import campaignCard4 from "../assets/img/downloads/campaign-card4.jpg";
import campaignCard3 from "../assets/img/downloads/campaign-card3.jpg";
import campaignCard2 from "../assets/img/downloads/campaign-card2.jpg";
import "../assets/css/campaign.css";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3";
import StatusBlock from "../components/common/StatusBlock";
import { SiGooglesearchconsole } from "react-icons/si";
// import StatusBlock from './StatusBlock'

const Campaign = () => {
  return (
    <ContainerMarketPlace3>
      <StatusBlock
        icon={<SiGooglesearchconsole />}
        title={"This feature comming soon!"}
        content={
          "This feature is under development. We will notifu you if it is done"
        }
        redirectUrl={"/"}
        urlText={"Go to home"}
      />
{/*       
      <div id="campaign">
        <div className="campaign-banner-area">
          <div className="banner-center">
            <img src={campaignBannerBorder} alt="" />
            <h1>
              dhamaka <br />
              campaign
            </h1>
          </div>

          <img className="spinner1" src={campaignBannerSpinner} alt="" />
          <img className="spinner2" src={campaignBannerSpinner} alt="" />
        </div>

        <div className="campaign-cards">
          <div className="container">
            <div className="campaign-card">
              <div className="card-image-container">
                <a href="#">
                  <img className="card-inside" src={campaignCard1} alt="" />
                </a>
              </div>
              <div className="card-name">
                <h6>dhakama signature card</h6>
              </div>
              <img class="card-background-img" src={cardBackground} alt="" />
              <ul class="ps-countdown-campaign" data-time="December 30, 2021 23:00:00">
                <li>
                  <p>Days</p>
                  <span className="days">279</span>
                </li>
                <li>
                  <p>Hours</p>
                  <span className="hours">23</span>
                </li>
                <li>
                  <p>Min</p>
                  <span className="minutes">37</span>
                </li>
                <li>
                  <p>Sec</p>
                  <span className="seconds">53</span>
                </li>
              </ul>
            </div>
            <div className="campaign-card">
              <div className="card-image-container">
                <a href="#">
                  <img className="card-inside" src={campaignCard4} alt="" />
                </a>
              </div>
              <div className="card-name">
                <h6>dhakama signature card</h6>
              </div>
              <img class="card-background-img" src={cardBackground} alt="" />
              <ul class="ps-countdown-campaign" data-time="December 30, 2021 23:00:00">
                <li>
                  <p>Days</p>
                  <span className="days">279</span>
                </li>
                <li>
                  <p>Hours</p>
                  <span className="hours">23</span>
                </li>
                <li>
                  <p>Min</p>
                  <span className="minutes">37</span>
                </li>
                <li>
                  <p>Sec</p>
                  <span className="seconds">53</span>
                </li>
              </ul>
            </div>
            <div className="campaign-card">
              <div className="card-image-container">
                <a href="#">
                  <img className="card-inside" src={campaignCard3} alt="" />
                </a>
              </div>
              <div className="card-name">
                <h6>dhakama signature card</h6>
              </div>
              <img class="card-background-img" src={cardBackground} alt="" />
              <ul class="ps-countdown-campaign" data-time="December 30, 2021 23:00:00">
                <li>
                  <p>Days</p>
                  <span className="days">279</span>
                </li>
                <li>
                  <p>Hours</p>
                  <span className="hours">23</span>
                </li>
                <li>
                  <p>Min</p>
                  <span className="minutes">37</span>
                </li>
                <li>
                  <p>Sec</p>
                  <span className="seconds">53</span>
                </li>
              </ul>
            </div>
            <div className="campaign-card">
              <div className="card-image-container">
                <a href="#">
                  <img className="card-inside" src={campaignCard2} alt="" />
                </a>
              </div>
              <div className="card-name">
                <h6>dhakama signature card</h6>
              </div>
              <img class="card-background-img" src={cardBackground} alt="" />
              <ul class="ps-countdown-campaign" data-time="December 30, 2021 23:00:00">
                <li>
                  <p>Days</p>
                  <span className="days">279</span>
                </li>
                <li>
                  <p>Hours</p>
                  <span className="hours">23</span>
                </li>
                <li>
                  <p>Min</p>
                  <span className="minutes">37</span>
                </li>
                <li>
                  <p>Sec</p>
                  <span className="seconds">53</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     */}
    </ContainerMarketPlace3>
  );
};

export default Campaign;
