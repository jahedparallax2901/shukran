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

const Campaign = () => {
  return (
    <ContainerMarketPlace3>
      <div id="campaign">
        <div class="campaign-banner-area">
          <div class="banner-center">
            <img src={campaignBannerBorder} alt="" />
            <h1>
              dhamaka <br />
              campaign
            </h1>
          </div>

          <img class="spinner1" src={campaignBannerSpinner} alt="" />
          <img class="spinner2" src={campaignBannerSpinner} alt="" />
        </div>

        <div class="campaign-cards">
          <div class="container">
            <div class="campaign-card">
              <div class="card-image-container">
                <a href="#">
                  <img class="card-inside" src={campaignCard1} alt="" />
                </a>
              </div>
              <div class="card-name">
                <h6>dhakama signature card</h6>
              </div>
              <img class="card-background-img" src={cardBackground} alt="" />
              <ul class="ps-countdown" data-time="December 30, 2021 23:00:00">
                <li>
                  <p>Days</p>
                  <span class="days">279</span>
                </li>
                <li>
                  <p>Hours</p>
                  <span class="hours">23</span>
                </li>
                <li>
                  <p>Min</p>
                  <span class="minutes">37</span>
                </li>
                <li>
                  <p>Sec</p>
                  <span class="seconds">53</span>
                </li>
              </ul>
            </div>
            <div class="campaign-card">
              <div class="card-image-container">
                <a href="#">
                  <img class="card-inside" src={campaignCard4} alt="" />
                </a>
              </div>
              <div class="card-name">
                <h6>dhakama signature card</h6>
              </div>
              <img class="card-background-img" src={cardBackground} alt="" />
              <ul class="ps-countdown" data-time="December 30, 2021 23:00:00">
                <li>
                  <p>Days</p>
                  <span class="days">279</span>
                </li>
                <li>
                  <p>Hours</p>
                  <span class="hours">23</span>
                </li>
                <li>
                  <p>Min</p>
                  <span class="minutes">37</span>
                </li>
                <li>
                  <p>Sec</p>
                  <span class="seconds">53</span>
                </li>
              </ul>
            </div>
            <div class="campaign-card">
              <div class="card-image-container">
                <a href="#">
                  <img class="card-inside" src={campaignCard3} alt="" />
                </a>
              </div>
              <div class="card-name">
                <h6>dhakama signature card</h6>
              </div>
              <img class="card-background-img" src={cardBackground} alt="" />
              <ul class="ps-countdown" data-time="December 30, 2021 23:00:00">
                <li>
                  <p>Days</p>
                  <span class="days">279</span>
                </li>
                <li>
                  <p>Hours</p>
                  <span class="hours">23</span>
                </li>
                <li>
                  <p>Min</p>
                  <span class="minutes">37</span>
                </li>
                <li>
                  <p>Sec</p>
                  <span class="seconds">53</span>
                </li>
              </ul>
            </div>
            <div class="campaign-card">
              <div class="card-image-container">
                <a href="#">
                  <img class="card-inside" src={campaignCard2} alt="" />
                </a>
              </div>
              <div class="card-name">
                <h6>dhakama signature card</h6>
              </div>
              <img class="card-background-img" src={cardBackground} alt="" />
              <ul class="ps-countdown" data-time="December 30, 2021 23:00:00">
                <li>
                  <p>Days</p>
                  <span class="days">279</span>
                </li>
                <li>
                  <p>Hours</p>
                  <span class="hours">23</span>
                </li>
                <li>
                  <p>Min</p>
                  <span class="minutes">37</span>
                </li>
                <li>
                  <p>Sec</p>
                  <span class="seconds">53</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ContainerMarketPlace3>
  );
};

export default Campaign;
