import React, { useState } from "react";
import { useParams } from "react-router";
import BreadCrumb from "../../components/elements/BreadCrumb";
import FooterMarketPlace2 from "../../components/partials/footer/FooterMarketPlace2";
import Header from "../../components/partials/Header/Header";
import FloatingCart from "../../components/partials/shared/shopping-cart/FloatingCart";
import MiniShoppinCart from "../../components/partials/shopping-cart/MiniShoppinCart";
import Store from "./Store";

const VendorStoreDetails = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Store",
    },
  ];

  const { id } = useParams();

  useState(() => {
    window.scrollTo({ top: 0, behavior: "auton" });
  }, []);

  return (
    <div className="site-content">
      <Header isProduct={false} />
      <FloatingCart />
      <MiniShoppinCart />
      <div className="ps-page--single ps-page--vendor">
        <BreadCrumb breacrumb={breadCrumb} />
        <Store store_id={id} />
      </div>
      <FooterMarketPlace2 isExpanded={true} />
    </div>
  );
};

export default VendorStoreDetails;
