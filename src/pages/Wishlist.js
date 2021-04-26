import React from "react";
import { IoMdClose } from "react-icons/io";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/elements/BreadCrumb";
import WishlistItems from "../components/partials/account/WishlistItems";

const Wishlist = () => {
  
  const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Wishlist',
    },
];
return (
    <ContainerMarketPlace3 title="wishlist" boxed={true}>
        <div className="ps-page--simple">
            <BreadCrumb breacrumb={breadCrumb} />
            <WishlistItems />
        </div>
    </ContainerMarketPlace3>
);
};

export default Wishlist;
