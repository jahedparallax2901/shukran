import React, { useEffect, useState } from "react";
// import { connect } from 'react-redux';
// import { useRouter } from 'next/router';

// import ContainerProductDetail from '~/components/layouts/ContainerProductDetail';
// import ProductRepository from '~/repositories/ProductRepository';
// import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
// import BreadCrumb from '~/components/elements/BreadCrumb';
// import ProductWidgets from '~/components/partials/product/ProductWidgets';
// import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
// import CustomerBought from '~/components/partials/product/CustomerBought';
// import RelatedProduct from '~/components/partials/product/RelatedProduct';
// import ContainerPage from '~/components/layouts/ContainerPage';
// import HeaderProduct from '~/components/shared/headers/HeaderProduct';
// import HeaderDefault from '~/components/shared/headers/HeaderDefault';

import { useParams } from "react-router";
import BreadCrumb from "../components/elements/BreadCrumb";
import SkeletonProductDetail from "../components/elements/skeletons/SkeletonProductDetail";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3.jsx";
import CustomerBought from "../components/product/CustomerBought";
// import HeaderDefault from '../components/product/details/header/HeaderDefault';
// import HeaderProduct from '../components/product/details/header/HeaderProduct';
import ProductDetailFullwidth from "../components/product/ProductDetailFullwidth";
import ProductWidgets from "../components/product/ProductWidgets";
import RelatedProduct from "../components/product/RelatedProduct";
import {
    processDeleteRequest,
    processGetRequest,
    processPostRequest,
} from "../services/baseServices";
import { singleProduct } from "../temp-data/product";

/*
import "../assets/css/style.css";
import "../assets/css/change.css";
import "../assets/css/market-place-1.css";
import "../assets/css/market-place-3.css";
import "../assets/css/autopart.css";
import "../assets/css/broken.css";
import "../assets/css/bootstrap.css"
*/
import "../assets/css/checkout.css"
import {FiX, MdEdit , HiPlus ,BiLeftArrowCircle ,BiRightArrowCircle} from "react-icons/all";
import {
    Modal
    , ModalBody
    , ModalTitle
    , ModalDialog
    , ModalFooter
    , ModalDialogProps
    , ModalProps
    , Button, Form,FormGroup ,FormLabel ,FormText
} from "react-bootstrap";

import ScrollMenu from "react-horizontal-scrolling-menu";
import ReactDOM from "react-dom";
import {toast} from "react-toastify";
import ModalHeader from "react-bootstrap/ModalHeader";


const Invoice = () => {


    useEffect(  async ()=>{


    },[])



    const DeliveryCharge = () =>{
        return(
            <>
                <div className="block-card-body">
                    <p className="d-flex mb-3">
                        <span className="mr-2">Subtotal</span>
                        <span className="ml-auto">৳ {checkoutData.checkout?.sub_total_amount}</span>
                    </p>
                    <p className="d-flex mb-3">
                        <span className="mr-2">Discount amount</span>
                        <span className="ml-auto">৳ {checkoutData.checkout?.discount_amount}</span>
                    </p>
                    <p className="d-flex">
                        <span className="mr-2 font-weight-bold">Total</span>
                        <span className="ml-auto text-secondary font-weight-bold">৳ {checkoutData.checkout?.total_amount}</span>
                    </p>
                </div>
            </>
        )
    }


    return (
        <ContainerMarketPlace3
            title="Checkout"
            isExpanded={true}>



        </ContainerMarketPlace3>
    );
};

export default Invoice;
