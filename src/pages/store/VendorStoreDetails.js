import React from "react";
import { useParams } from "react-router";
import BreadCrumb from "../../components/elements/BreadCrumb";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import FooterMarketPlace2 from "../../components/partials/footer/FooterMarketPlace2";
import Header from "../../components/partials/Header/Header";
import FloatingCart from "../../components/partials/shared/shopping-cart/FloatingCart";
import MiniShoppinCart from "../../components/partials/shopping-cart/MiniShoppinCart";
import VendorStore from "../vendor/VendorStore";
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

  const {id} = useParams();

  return (
    <div className="site-content">
      <Header isProduct={false} />
      <FloatingCart />
      <MiniShoppinCart />
      <div className="ps-page--single ps-page--vendor">
        <BreadCrumb breacrumb={breadCrumb} />
        <Store store_id={id}/>
      </div>
      <FooterMarketPlace2 isExpanded={true} />
    </div>
  );
};

export default VendorStoreDetails;
