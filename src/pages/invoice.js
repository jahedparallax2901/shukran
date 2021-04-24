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

import "../assets/css/checkout.css"
import "../assets/css/register.css"

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
import moment from "moment";
import { useLocation } from "react-router-dom";


const Invoice = () => {

    const location = useLocation()

    const [json ,setJson] = useState(location.state.json)

    useEffect( ()=>{

        console.log(json)

    },[])

    return (
        <ContainerMarketPlace3
            title="Checkout"
            isExpanded={true}>


            <div className="main-content invoice-main-content">
                <div className="container">
                    <div className="section-block invoice-section-block">
                        <div className="block-header"><h2 className="block-title" /></div>
                        <div className="invoice-outer">
                            <div className="invoice-table-container table-responsive">
                                <table className="invoice-table">
                                    <tbody>
                                    <tr className="v-top">
                                        <td><img src="https://parallaxlogic.dev/shukran-view/img/shukran.png" alt className="brand-logo" /></td>
                                        <td className="text-right"><span className="d-block">Support@shukran24seven.com</span><span className="d-block">info@shukran24seven.com</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><h3 className="invoice-title">order id : #{json.order.id}</h3></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td width="20%" style={{paddingBottom: 20, paddingLeft: 0}}>
                                                        <h4 className="invoice-title-alt">Bill To</h4>
                                                        <span className="d-block">{json.customer_address.name}</span>
                                                        <span className="d-block">{json.customer_address.phone}</span>
                                                        <span className="d-block">{json.customer_address.address}</span>
                                                        <span className="d-block">

                          </span>
                                                    </td>
                                                    <td width="20%" style={{paddingBottom: 20}}>
                                                        <h4 className="invoice-title-alt">Ship To</h4>
                                                        <span className="d-block">{json.customer_address.name}</span>
                                                        <span className="d-block">{json.customer_address.phone}</span>
                                                        <span className="d-block">{json.customer_address.address}</span>
                                                        <span className="d-block">

                          </span>
                                                    </td>
                                                    <td width="20%" style={{paddingBottom: 20}}>
                                                        <h4 className="invoice-title-alt">Payment Method</h4>
                                                        <span className="d-block" />
                                                        <span className="d-block">Unpaid</span>
                                                    </td>
                                                    <td width="20%" style={{paddingBottom: 20}}>
                                                        <h4 className="invoice-title-alt">Shipping Method</h4>
                                                        <span className="d-block">ekShop Fulfillment</span>
                                                        <span className="d-block">Fee: 0</span>
                                                        <span className="d-block" />
                                                    </td>
                                                    <td width="20%" style={{paddingBottom: 20}}>
                          <span className="d-block order-date-tag">
                            <strong>Order Date: </strong>{moment(json.order?.created_at).format('ll')}
                          </span>
                                                        <span className="d-block pr-0">
                            <svg width="310px" height="92px" x="0px" y="0px" viewBox="0 0 310 92" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{transform: 'translate(0,0)'}}>
                              <rect x={0} y={0} width={310} height={92} style={{fill: '#ffffff'}} /><g transform="translate(10, 10)" style={{fill: '#000000'}}><rect x={0} y={0} width={4} height={50} /><rect x={6} y={0} width={2} height={50} /><rect x={12} y={0} width={2} height={50} /><rect x={22} y={0} width={2} height={50} /><rect x={30} y={0} width={2} height={50} /><rect x={34} y={0} width={4} height={50} /><rect x={44} y={0} width={2} height={50} /><rect x={48} y={0} width={4} height={50} /><rect x={58} y={0} width={2} height={50} /><rect x={66} y={0} width={2} height={50} /><rect x={72} y={0} width={4} height={50} /><rect x={78} y={0} width={6} height={50} /><rect x={88} y={0} width={4} height={50} /><rect x={96} y={0} width={2} height={50} /><rect x={100} y={0} width={6} height={50} /><rect x={110} y={0} width={2} height={50} /><rect x={114} y={0} width={6} height={50} /><rect x={122} y={0} width={8} height={50} /><rect x={132} y={0} width={2} height={50} /><rect x={136} y={0} width={6} height={50} /><rect x={144} y={0} width={4} height={50} /><rect x={154} y={0} width={6} height={50} /><rect x={166} y={0} width={4} height={50} /><rect x={172} y={0} width={2} height={50} /><rect x={176} y={0} width={4} height={50} /><rect x={184} y={0} width={4} height={50} /><rect x={190} y={0} width={4} height={50} /><rect x={198} y={0} width={4} height={50} /><rect x={204} y={0} width={8} height={50} /><rect x={214} y={0} width={4} height={50} /><rect x={220} y={0} width={6} height={50} /><rect x={228} y={0} width={6} height={50} /><rect x={236} y={0} width={4} height={50} /><rect x={242} y={0} width={4} height={50} /><rect x={250} y={0} width={2} height={50} /><rect x={256} y={0} width={6} height={50} /><rect x={264} y={0} width={4} height={50} /><rect x={274} y={0} width={6} height={50} /><rect x={282} y={0} width={2} height={50} /><rect x={286} y={0} width={4} height={50} /><text style={{font: '20px monospace'}} textAnchor="middle" x={145} y={72}>
                                {json.order.id}
                              </text></g>
                            </svg>
                          </span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <table className="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>Item</th>
                                                    <th className="text-center">Quantity</th>
                                                    <th className="text-right">Amount (৳)</th>
                                                    <th style={{width: '1%'}} />
                                                </tr>
                                                </thead>
                                                <tbody>
                                            {/*    <tr>
                                                    <td colSpan={4}>
                                                        <span
                                                            className="store-name">
                                                            <span className="icon">
                                                                <svg stroke="currentColor"
                                                                     fill="currentColor"
                                                                     strokeWidth={0}
                                                                     viewBox="0 0 616 512"
                                                                     height="1em" width="1em"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z" /></svg>
                                                            </span>
                                                            <span
                                                                className="text">Jahanar import &amp; export
                                                            </span>
                                                        </span>
                                                        <span className="badge badge-info ml-4">Pending</span></td>
                                                </tr>*/}
                                                <tr>
                                                    {json.ordered_items && json.ordered_items.map( (data,index) => (

                                                        <>  {data.store_product.map((data1,index1) => (
                                                            <>
                                                                <td>
                                                        <span className="d-block">
                                                        <strong>
                                                        <a href="/products/details/604092662146a37c6fe03ba3" target="_blank">
                                                            {data1.product.name}
                                                        </a>
                                                    </strong></span><span className="d-block text-muted" /></td>
                                                                <td>{data1.quantity}</td>
                                                                <td className="text-right">{data1.total_amount}</td>
                                                                <td>
                                                                   {/* <button disabled type="button" className="btn btn-link text-muted btn-sm dispute-review">Dispute
                                                                    </button>
                                                                    <button disabled type="button" className="btn btn-link text-muted btn-sm dispute-review">Review
                                                                    </button>*/}
                                                                </td>
                                                            </>
                                                            ))}
                                                            </>
                                                    ) )}

                                                </tr>
                                                <tr>
                                                    <td colSpan={4} style={{padding: 0, backgroundColor: 'transparent'}}>
                                                        <div className="delivery-progress-timeline grid-6" style={{margin: 0}}>
                                                            <span className="progress-line" />
                                                            <div className="timeline-inner">
                                                                <div className="progress-block completed">
                                                                    <div className="date">{moment(json.order.created_at).format('ll')}</div>
                                                                    <div className="circle" />
                                                                    <div className="text"><h4>Pending</h4>
                                                                        <p /></div>
                                                                </div>
                                                                <div className="progress-block">
                                                                    <div className="date">-</div>
                                                                    <div className="circle" />
                                                                    <div className="text"><h4>Confirmed</h4>
                                                                        <p>The order will be confirmed very soon</p></div>
                                                                </div>
                                                                <div className="progress-block">
                                                                    <div className="date">-</div>
                                                                    <div className="circle" />
                                                                    <div className="text"><h4>Processing</h4>
                                                                        <p /></div>
                                                                </div>
                                                                <div className="progress-block">
                                                                    <div className="date">-</div>
                                                                    <div className="circle" />
                                                                    <div className="text"><h4>Picked</h4>
                                                                        <p /></div>
                                                                </div>
                                                                <div className="progress-block">
                                                                    <div className="date">-</div>
                                                                    <div className="circle" />
                                                                    <div className="text"><h4>Shipped</h4>
                                                                        <p /></div>
                                                                </div>
                                                                <div className="progress-block">
                                                                    <div className="date">-</div>
                                                                    <div className="circle" />
                                                                    <div className="text"><h4>Delivered</h4>
                                                                        <p /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="btn-toggle-collapse">Less
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.2 13.3l-6.2-6.3-6.2 6.3c-.2.2-.3.5-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7z" />
                            </svg>
                          </span>
                                                    </td>
                                                </tr>
                                                <tr className="text-bold">
                                                    <td colSpan={3} className="text-right">Subtotal</td>
                                                    <td className="text-right">{json.order?.sub_total_amount}</td>
                                                </tr>
                                                <tr className="text-bold">
                                                    <td colSpan={3} className="text-right">Discount</td>
                                                    <td className="text-right">{json.order?.discount_amount}</td>
                                                </tr>

                                                <tr className="text-bold">
                                                    <td colSpan={3} className="text-right">Grand Total</td>
                                                    <td className="text-right">{json.order?.total_amount}</td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </ContainerMarketPlace3>
    );
};

export default Invoice;
