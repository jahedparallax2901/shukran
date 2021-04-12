import React, { useEffect } from "react";
// import HeaderMobile from '../partials/HeaderMobile';
// import NavigationList from '../partials/NavigationList';
import FooterMarketPlace2 from "../partials/footer/FooterMarketPlace2";
import Header from "../partials/Header/Header";
import FloatingCart from "../partials/shared/shopping-cart/FloatingCart";
import MiniShoppinCart from "../partials/shopping-cart/MiniShoppinCart";
// import MarketPlacePromotionHeader from '../partials/MarketPlacePromotionHeader';
// import HeaderMarketPlace from '../partials/HeaderMarketPlace';

const ContainerMarketPlace3 = ({ children, title, categories, all_category }) => {
  let titleView;
  if (title !== null) {
    titleView = process.env.title + " | " + title;
  } else {
    titleView = process.env.title + " | " + process.env.titleDescription;
  }

  useEffect(() => {
    document.title = "Shukran";
  }, []);

  return (
    <div className="shukran-layout">
      {/* <MarketPlacePromotionHeader />
            <HeaderMarketPlace /> */}
      {/* <HeaderMobile />
            <NavigationList /> */}
      <Header/>
      <FloatingCart />
      <MiniShoppinCart />
      <main id="homepage-5">
        <div className="">{children}</div>
      </main>
      <FooterMarketPlace2 />
    </div>
  );
};

export default ContainerMarketPlace3;
