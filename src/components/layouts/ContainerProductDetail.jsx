import React from "react";
// import Newletters from '~/components/partials/commons/Newletters';
// import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
// import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';
import FooterMarketPlace2 from "../partials/footer/FooterMarketPlace2";
import FloatingCart from "../partials/shared/shopping-cart/FloatingCart";
import MiniShoppinCart from "../partials/shopping-cart/MiniShoppinCart";

const ContainerProductDetail = ({ children, title, isExpanded = false }) => {
  let titleView;
  if (title !== null) {
    titleView = process.env.title + " | " + title;
  } else {
    titleView = process.env.title + " | " + process.env.titleDescription;
  }

  return (
    <div className="martfury">
      <FloatingCart />
      <MiniShoppinCart />
      {/* <HeaderMobileProduct /> */}
      <main>{children}</main>
      {/* <Newletters /> */}
      <FooterMarketPlace2 isExpanded={isExpanded} />
    </div>
  );
};

export default ContainerProductDetail;
