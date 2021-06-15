import { BackTop } from "antd";
import React, { useEffect } from "react";
// import HeaderMobile from '../partials/HeaderMobile';
// import NavigationList from '../partials/NavigationList';
import FooterMarketPlace2 from "../partials/footer/FooterMarketPlace2";
import Header from "../partials/Header/Header";
import NavigationList from "../partials/navigation/NavigationList";
import FloatingCart from "../partials/shared/shopping-cart/FloatingCart";
import MiniShoppinCart from "../partials/shopping-cart/MiniShoppinCart";
// import MarketPlacePromotionHeader from '../partials/MarketPlacePromotionHeader';
// import HeaderMarketPlace from '../partials/HeaderMarketPlace';

const ContainerMarketPlace3 = ({
  children,
  title,
  categories,
  all_category,
  isExpanded = false,
  requiredTopPadding = false,
  isCartAvailable = true,
}) => {
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
      <Header isProduct={false} />
      <NavigationList/>
      {isCartAvailable && <FloatingCart />}
      {isCartAvailable && <MiniShoppinCart />}
      
      <main id="homepage-5" className={`${requiredTopPadding && "pt-4"}`}>
        <div className="">{children}</div>
        <BackTop />
      </main>
      <FooterMarketPlace2 isExpanded={isExpanded} />
    </div>
  );
};

export default ContainerMarketPlace3;
